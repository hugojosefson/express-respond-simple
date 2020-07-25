import status from 'statuses'

export const emptyEquivalent = {
  200: 204
}

const responderWithCode = code => {
  status(code) // check it, and throw if not valid
  return (body, forceCodeEvenIfEmptyBody = false) => {
    if (status.empty[code] && body) {
      throw new Error(`HTTP Status code ${code} must be empty, and have no body.`)
    }
    if (!body && emptyEquivalent[code] && !forceCodeEvenIfEmptyBody) {
      return responderWithCode(emptyEquivalent[code])()
    }
    return (req, res) => {
      if (body == null) {
        res.sendStatus(code)
      } else {
        if (typeof body === 'object') {
          res.status(code).type('json').send(body)
        } else {
          res.status(code).type('text').send(body)
        }
      }
    }
  }
}

export default (code, body, forceCodeEvenIfEmptyBody) =>
  responderWithCode(code)(body, forceCodeEvenIfEmptyBody)
