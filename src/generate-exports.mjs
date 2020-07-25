import camel from 'camelcase'
import status from 'statuses'

const EXCLUDED_CHARS = /[^a-zA-Z0-9_]/g

export const nameFor = code => camel(status(code))
  .replace(EXCLUDED_CHARS, '')
  .replace('continue', 'continue_')

const lines = [
  ...status.codes.map(code => `export const respond${code} = responderWithCode(${code})`),
  '',
  ...status.codes.map(code => `export const ${nameFor(code)} = respond${code}`)
]

console.log(lines.join('\n'))
