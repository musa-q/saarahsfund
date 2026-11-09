"""Verify the website root and encrypt a complete backup before deployment."""

import ftplib
import hashlib
import io
import os
from pathlib import Path
import subprocess
import tarfile
import urllib.request


def add_directory(ftp, archive, directory="/"):
    count = 0
    for name, facts in list(ftp.mlsd(directory)):
        if name in {".", ".."}:
            continue
        if "/" in name or "\\" in name:
            raise ValueError("Unexpected FTP directory entry")
        remote = directory.rstrip("/") + "/" + name
        if facts["type"] == "dir":
            count += add_directory(ftp, archive, remote)
        elif facts["type"] == "file":
            contents = io.BytesIO()
            ftp.retrbinary("RETR " + remote, contents.write)
            info = tarfile.TarInfo(remote.lstrip("/"))
            info.size = contents.tell()
            info.mode = 0o600
            contents.seek(0)
            archive.addfile(info, contents)
            count += 1
    return count


def main():
    destination = Path(os.environ["RUNNER_TEMP"]) / "saarahs-before-deploy.tar.gz.enc"
    # Match the FTP protocol used by the existing Kualo upload action.
    with ftplib.FTP(timeout=60) as ftp:
        ftp.connect(os.environ["FTP_SERVER"])
        ftp.login(os.environ["FTP_USERNAME"], os.environ["FTP_PASSWORD"])
        homepage = io.BytesIO()
        ftp.retrbinary("RETR /index.html", homepage.write)
        request = urllib.request.Request(
            "https://www.saarahsfund.com/", headers={"Cache-Control": "no-cache"}
        )
        with urllib.request.urlopen(request, timeout=30) as response:
            live_homepage = response.read()
        if hashlib.sha256(homepage.getvalue()).digest() != hashlib.sha256(live_homepage).digest():
            raise RuntimeError("FTP root index.html does not match the live charity homepage")
        print("FTP root verified against the live charity homepage.", flush=True)
        with destination.open("wb") as output:
            encrypt = subprocess.Popen(
                ["openssl", "enc", "-aes-256-cbc", "-salt", "-pbkdf2",
                 "-pass", "env:BACKUP_PASSPHRASE"],
                stdin=subprocess.PIPE, stdout=output,
            )
            try:
                with tarfile.open(fileobj=encrypt.stdin, mode="w|gz") as archive:
                    count = add_directory(ftp, archive)
            finally:
                encrypt.stdin.close()
                status = encrypt.wait()
            if status != 0:
                raise RuntimeError("Backup encryption failed")
        print(f"Encrypted pre-deployment backup complete with {count} files.")


if __name__ == "__main__":
    main()
