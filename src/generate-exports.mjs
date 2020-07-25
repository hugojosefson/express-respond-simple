import camel from 'camelcase'
import status from 'statuses'

const EXCLUDED_CHARS = /[^a-zA-Z0-9_]/g

export const nameFor = code => camel(status(code))
  .replace(EXCLUDED_CHARS, '')
  .replace('continue', 'continue_')

const lines = [
  ...status.codes.map(code => `export const respond${code} = responderWithCode(${code})`),
  '',
  ...status.codes.map(code => `export const ${nameFor(code)} = respond${code}`),
  '',
  `Object.assign(respond, { ${status.codes.map(code => `respond${code}`).join(', ')} })`,
  `Object.assign(respond, { ${status.codes.map(nameFor).join(', ')} })`
]

console.log(lines.join('\n'))
