import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, mkdir, writeFile, readFile, readdir, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join, dirname, resolve } from 'node:path'
import { normalizeExport } from './normalize-export.mjs'

async function fixture(t) {
  const base = resolve(tmpdir())
  const directory = await mkdtemp(join(base, 'saarahs-export-test-'))
  t.after(async () => {
    assert.equal(dirname(directory), base)
    await rm(directory, { recursive: true, force: true })
  })
  return directory
}

test('Windows nested routes produce the exact browser-requested payload without losing originals', async t => {
  const root = await fixture(t)
  const folder = join(root, 'foo', 'bar', '__next.foo', 'bar')
  await mkdir(folder, { recursive: true })
  await writeFile(join(folder, '__PAGE__.txt'), 'route payload')
  assert.equal(await normalizeExport(root), 1)
  assert.equal(await readFile(join(root, 'foo', 'bar', '__next.foo.bar.__PAGE__.txt'), 'utf8'), 'route payload')
  assert.equal(await readFile(join(folder, '__PAGE__.txt'), 'utf8'), 'route payload')
  assert.equal(await normalizeExport(root), 0)
})

test('Linux flat payloads and framework assets are unchanged', async t => {
  const root = await fixture(t)
  await writeFile(join(root, '__next.__PAGE__.txt'), 'flat')
  await mkdir(join(root, '_next', '__next.internal'), { recursive: true })
  await writeFile(join(root, '_next', '__next.internal', 'asset.txt'), 'asset')
  assert.equal(await normalizeExport(root), 0)
  assert.deepEqual((await readdir(root)).sort(), ['__next.__PAGE__.txt', '_next'].sort())
})

test('Conflicting aliases fail rather than overwriting another payload', async t => {
  const root = await fixture(t)
  await mkdir(join(root, '__next.foo'))
  await writeFile(join(root, '__next.foo', '__PAGE__.txt'), 'new')
  await writeFile(join(root, '__next.foo.__PAGE__.txt'), 'existing')
  await assert.rejects(normalizeExport(root), /Conflicting static export payload/)
  assert.equal(await readFile(join(root, '__next.foo.__PAGE__.txt'), 'utf8'), 'existing')
})
