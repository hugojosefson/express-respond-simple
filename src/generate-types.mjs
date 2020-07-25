import status from 'statuses'
import { emptyEquivalent } from './template.mjs'
import { nameFor } from './generate-exports.mjs'

const typeFor = code => `(${status.empty[code] ? '' : 'body?: (string|object)'}${emptyEquivalent[code] ? ', forceCodeEvenIfEmptyBody?: boolean' : ''}): Handler`

const lines = [
  ...status.codes.map(code => `export function respond${code}${typeFor(code)}`),
  '',
  ...status.codes.map(code => `export function ${nameFor(code)}${typeFor(code)}`)
]

console.log(lines.join('\n'))
