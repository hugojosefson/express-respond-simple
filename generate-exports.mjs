import camel from 'camelcase'
import status from 'statuses'

const EXCLUDED_CHARS = /[^a-zA-Z0-9_]/g

console.log(status.codes.map(code => `export const respond${code} = responderWithCode(${code})`).join('\n'))
console.log()
console.log(status.codes.map(code => `export const ${camel(status(code)).replace(EXCLUDED_CHARS, '').replace('continue', 'continue_')} = respond${code}`).join('\n'))
