import { cp, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const docsRoot = resolve(__dirname, '..')
const demoDist = resolve(docsRoot, '../react/dist')
const demosOutput = resolve(docsRoot, 'build/demos')
const demoIndex = resolve(demosOutput, 'index.html')

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

await mkdir(demosOutput, { recursive: true })
await cp(demoDist, demosOutput, { recursive: true })

await Promise.all(
  demoRoutes.map(async route => {
    const routeDir = resolve(demosOutput, route)

    await mkdir(routeDir, { recursive: true })
    await cp(demoIndex, resolve(routeDir, 'index.html'))
  })
)
