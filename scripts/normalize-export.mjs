import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

// Next's Windows export leaves segment payloads nested instead of dot-separated.
// https://github.com/vercel/next.js/issues/92339
// Add the requested flat aliases; leave correctly generated exports unchanged.
export async function normalizeExport(directory) {
  let copied = 0

  async function copySegments(source, destination, parts) {
    for (const entry of await readdir(source, { withFileTypes: true })) {
      const nextParts = [...parts, entry.name]
      const sourcePath = join(source, entry.name)
      if (entry.isDirectory()) {
        await copySegments(sourcePath, destination, nextParts)
      } else if (entry.isFile() && entry.name.endsWith('.txt')) {
        const target = join(destination, nextParts.join('.'))
        const contents = await readFile(sourcePath)
        try {
          await writeFile(target, contents, { flag: 'wx' })
          copied++
        } catch (error) {
          if (error.code !== 'EEXIST') throw error
          if (!(await readFile(target)).equals(contents)) {
            throw new Error(`Conflicting static export payload: ${target}`)
          }
        }
      }
    }
  }

  async function visit(route) {
    for (const entry of await readdir(route, { withFileTypes: true })) {
      if (!entry.isDirectory() || entry.name === '_next') continue
      const child = join(route, entry.name)
      if (entry.name.startsWith('__next.')) {
        await copySegments(child, route, [entry.name])
      } else {
        await visit(child)
      }
    }
  }

  await visit(resolve(directory))
  return copied
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const output = fileURLToPath(new URL('../out/', import.meta.url))
  const copied = await normalizeExport(output)
  console.log(`Static export ready (${copied} Windows segment aliases added).`)
}
