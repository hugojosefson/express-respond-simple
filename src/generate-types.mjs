import camel from 'camelcase'
import status from 'statuses'
import { emptyEquivalent } from './template.mjs'

const EXCLUDED_CHARS = /[^a-zA-Z0-9_]/g

const typeFor = code => `(${status.empty[code] ? '' : 'body?: (string|object)'}${emptyEquivalent[code] ? ', forceCodeEvenIfEmptyBody?: boolean' : ''}): Handler`
const nameFor = code => camel(status(code))
  .replace(EXCLUDED_CHARS, '')
  .replace('continue', 'continue_')

const lines = [
  ...status.codes.map(code => `export function respond${code}${typeFor(code)}`),
  '',
  ...status.codes.map(code => `export function ${nameFor(code)}${typeFor(code)}`)
]

console.log(lines.join('\n'))
