import { cp } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const docsRoot = resolve(__dirname, '..')
const demoDist = resolve(docsRoot, '../react/dist')
const demosOutput = resolve(docsRoot, 'build/demos')

await cp(demoDist, demosOutput, { recursive: true })
