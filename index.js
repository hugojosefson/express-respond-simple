var status = require('statuses')
var camel = require('camelcase')

var emptyEquivalent = {
  200: 204
}

function responderWithCode (code) {
  status(code) // check it, and throw if not valid
  return function (body, forceCodeEvenIfEmptyBody) {
    if (status.empty[code] && body) {
      throw new Error('HTTP Status code ' + code + ' must be empty, and have no body.')
    }
    if (!body && emptyEquivalent[code] && !forceCodeEvenIfEmptyBody) {
      return responderWithCode(emptyEquivalent[code])()
    }
    return function (req, res) {
      if (body === undefined || body === null) {
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

module.exports = function respond (code, body, forceCodeEvenIfEmptyBody) {
  return responderWithCode(code)(body, forceCodeEvenIfEmptyBody)
}

status.codes.forEach(function (code) {
  var responder = responderWithCode(code)
  module.exports['respond' + code] = responder
  module.exports[camel(status(code))] = responder
})
