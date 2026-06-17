import { cp, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const docsRoot = resolve(__dirname, '..')
const demoDist = resolve(docsRoot, '../react/dist')
const demosOutput = resolve(docsRoot, 'build/demos')
const demoRoutes = [
  'basic-grid',
  'theming',
  'global-filtering',
  'async-data',
  'finite-pagination',
  'infinite-pagination',
  'virtualization',
  'scroll-to-cell',
  'column-grouping',
  'column-filtering',
  'column-pinning',
  'column-resizing',
  'column-reordering',
  'column-spanning',
  'row-sorting',
  'multi-row-sorting',
  'row-grouping',
  'row-pinning',
  'row-spanning',
  'detail-rows',
  'cell-editing',
  'cell-selection',
]

await cp(demoDist, demosOutput, { recursive: true })

for (const route of demoRoutes) {
  const routeOutput = resolve(demosOutput, route)
  await mkdir(routeOutput, { recursive: true })
  await cp(resolve(demoDist, 'index.html'), resolve(routeOutput, 'index.html'))
}
