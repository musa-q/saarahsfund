import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile, access, readdir } from 'node:fs/promises'
import { resolve, join } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const output = join(root, 'out')
const baseline = JSON.parse(await readFile(join(import.meta.dirname, 'fixtures/content-baseline.json'), 'utf8'))
const decode = value => value.replace(/&#x([\da-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16))).replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))).replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
const text = html => decode(html.replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]*>/g, ' ')).replace(/\s+([,:;.])/g, '$1').replace(/\s+/g, ' ').trim()
const attrs = (html, name) => [...html.matchAll(new RegExp(`\\b${name}="([^"]*)"`, 'g'))].map(m => decode(m[1]))

for (const [route, source] of Object.entries(baseline)) {
  test(`${route} preserves content, destinations, metadata and local media`, async () => {
    const html = await readFile(join(output, route, 'index.html'), 'utf8')
    const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1]
    assert.ok(main, 'Rendered main content')
    assert.equal((main.match(/<h1\b/g) || []).length, 1)
    for (const paragraph of source.paragraphs) assert.ok(text(main).includes(text(paragraph)), `Missing source paragraph: ${paragraph}`)
    const hrefs = attrs(html, 'href')
    for (const href of source.links) assert.ok(hrefs.includes(href), `Missing destination: ${href}`)
    assert.ok(html.includes(`rel="canonical" href="https://www.saarahsfund.com${route}"`), 'Canonical URL')
    assert.ok(!html.includes('noindex'), 'Production must be indexable')
    assert.ok(!html.includes('chatgpt.site') && !hrefs.includes('/concepts/'), 'No preview-only destinations')
    assert.ok(!/style="[^"]*opacity:0/.test(main), 'Initial page content must not wait for JavaScript to become visible')
    for (const src of attrs(html, 'src').concat(attrs(html, 'poster'))) {
      if (!src.startsWith('/')) continue
      await access(join(output, decodeURIComponent(src.split('?')[0])))
    }
    for (const href of hrefs.filter(h => h.startsWith('/'))) {
      const destination = decodeURIComponent(href.split(/[?#]/)[0])
      await access(join(output, destination))
    }
  })
}

test('approved palette is included in production CSS', async () => {
  const files = await readdir(join(output, '_next/static/css'))
  const css = (await Promise.all(files.filter(f=>f.endsWith('.css')).map(f=>readFile(join(output, '_next/static/css', f),'utf8')))).join('')
  assert.ok(/#fbeef1/i.test(css), "Blush token")
  assert.ok(/#52283e/i.test(css), "Plum token")
  assert.ok(/#9b3658/i.test(css), "Raspberry token")
})
