import { cp, mkdir, rm } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const docsRoot = resolve(__dirname, '..')
const demoDist = resolve(docsRoot, '../react/dist')
const demosOutput = resolve(docsRoot, 'build/demos')
const demoAssetsOutput = resolve(docsRoot, 'build/demo-assets')

await rm(demosOutput, { recursive: true, force: true })
await rm(demoAssetsOutput, { recursive: true, force: true })

await mkdir(demosOutput, { recursive: true })
await cp(resolve(demoDist, 'index.html'), resolve(demosOutput, 'index.html'))
await cp(demoDist, demoAssetsOutput, { recursive: true })
