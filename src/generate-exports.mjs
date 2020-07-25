import status from 'statuses'
import nameFor from './name-for.mjs'

const lines = [
  ...status.codes.map(code => `export const respond${code} = responderWithCode(${code})`),
  '',
  ...status.codes.map(code => `export const ${nameFor(code)} = respond${code}`),
  '',
  `Object.assign(respond, { ${status.codes.map(code => `respond${code}`).join(', ')} })`,
  `Object.assign(respond, { ${status.codes.map(nameFor).join(', ')} })`
]

console.log(lines.join('\n'))
