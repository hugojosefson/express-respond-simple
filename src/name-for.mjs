import camel from 'camelcase'
import status from 'statuses'

const EXCLUDED_CHARS = /[^a-zA-Z0-9_]/g

export default code => camel(status(code))
  .replace(EXCLUDED_CHARS, '')
  .replace('continue', 'continue_')
