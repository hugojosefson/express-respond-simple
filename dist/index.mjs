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

const respond = (code, body, forceCodeEvenIfEmptyBody) =>
  responderWithCode(code)(body, forceCodeEvenIfEmptyBody)

export default respond

export const respond100 = responderWithCode(100)
export const respond101 = responderWithCode(101)
export const respond102 = responderWithCode(102)
export const respond103 = responderWithCode(103)
export const respond200 = responderWithCode(200)
export const respond201 = responderWithCode(201)
export const respond202 = responderWithCode(202)
export const respond203 = responderWithCode(203)
export const respond204 = responderWithCode(204)
export const respond205 = responderWithCode(205)
export const respond206 = responderWithCode(206)
export const respond207 = responderWithCode(207)
export const respond208 = responderWithCode(208)
export const respond226 = responderWithCode(226)
export const respond300 = responderWithCode(300)
export const respond301 = responderWithCode(301)
export const respond302 = responderWithCode(302)
export const respond303 = responderWithCode(303)
export const respond304 = responderWithCode(304)
export const respond305 = responderWithCode(305)
export const respond307 = responderWithCode(307)
export const respond308 = responderWithCode(308)
export const respond400 = responderWithCode(400)
export const respond401 = responderWithCode(401)
export const respond402 = responderWithCode(402)
export const respond403 = responderWithCode(403)
export const respond404 = responderWithCode(404)
export const respond405 = responderWithCode(405)
export const respond406 = responderWithCode(406)
export const respond407 = responderWithCode(407)
export const respond408 = responderWithCode(408)
export const respond409 = responderWithCode(409)
export const respond410 = responderWithCode(410)
export const respond411 = responderWithCode(411)
export const respond412 = responderWithCode(412)
export const respond413 = responderWithCode(413)
export const respond414 = responderWithCode(414)
export const respond415 = responderWithCode(415)
export const respond416 = responderWithCode(416)
export const respond417 = responderWithCode(417)
export const respond418 = responderWithCode(418)
export const respond421 = responderWithCode(421)
export const respond422 = responderWithCode(422)
export const respond423 = responderWithCode(423)
export const respond424 = responderWithCode(424)
export const respond425 = responderWithCode(425)
export const respond426 = responderWithCode(426)
export const respond428 = responderWithCode(428)
export const respond429 = responderWithCode(429)
export const respond431 = responderWithCode(431)
export const respond451 = responderWithCode(451)
export const respond500 = responderWithCode(500)
export const respond501 = responderWithCode(501)
export const respond502 = responderWithCode(502)
export const respond503 = responderWithCode(503)
export const respond504 = responderWithCode(504)
export const respond505 = responderWithCode(505)
export const respond506 = responderWithCode(506)
export const respond507 = responderWithCode(507)
export const respond508 = responderWithCode(508)
export const respond509 = responderWithCode(509)
export const respond510 = responderWithCode(510)
export const respond511 = responderWithCode(511)

export const continue_ = respond100
export const switchingProtocols = respond101
export const processing = respond102
export const earlyHints = respond103
export const ok = respond200
export const created = respond201
export const accepted = respond202
export const nonAuthoritativeInformation = respond203
export const noContent = respond204
export const resetContent = respond205
export const partialContent = respond206
export const multiStatus = respond207
export const alreadyReported = respond208
export const imUsed = respond226
export const multipleChoices = respond300
export const movedPermanently = respond301
export const found = respond302
export const seeOther = respond303
export const notModified = respond304
export const useProxy = respond305
export const temporaryRedirect = respond307
export const permanentRedirect = respond308
export const badRequest = respond400
export const unauthorized = respond401
export const paymentRequired = respond402
export const forbidden = respond403
export const notFound = respond404
export const methodNotAllowed = respond405
export const notAcceptable = respond406
export const proxyAuthenticationRequired = respond407
export const requestTimeout = respond408
export const conflict = respond409
export const gone = respond410
export const lengthRequired = respond411
export const preconditionFailed = respond412
export const payloadTooLarge = respond413
export const uriTooLong = respond414
export const unsupportedMediaType = respond415
export const rangeNotSatisfiable = respond416
export const expectationFailed = respond417
export const imATeapot = respond418
export const misdirectedRequest = respond421
export const unprocessableEntity = respond422
export const locked = respond423
export const failedDependency = respond424
export const tooEarly = respond425
export const upgradeRequired = respond426
export const preconditionRequired = respond428
export const tooManyRequests = respond429
export const requestHeaderFieldsTooLarge = respond431
export const unavailableForLegalReasons = respond451
export const internalServerError = respond500
export const notImplemented = respond501
export const badGateway = respond502
export const serviceUnavailable = respond503
export const gatewayTimeout = respond504
export const httpVersionNotSupported = respond505
export const variantAlsoNegotiates = respond506
export const insufficientStorage = respond507
export const loopDetected = respond508
export const bandwidthLimitExceeded = respond509
export const notExtended = respond510
export const networkAuthenticationRequired = respond511

Object.assign(respond, { respond100, respond101, respond102, respond103, respond200, respond201, respond202, respond203, respond204, respond205, respond206, respond207, respond208, respond226, respond300, respond301, respond302, respond303, respond304, respond305, respond307, respond308, respond400, respond401, respond402, respond403, respond404, respond405, respond406, respond407, respond408, respond409, respond410, respond411, respond412, respond413, respond414, respond415, respond416, respond417, respond418, respond421, respond422, respond423, respond424, respond425, respond426, respond428, respond429, respond431, respond451, respond500, respond501, respond502, respond503, respond504, respond505, respond506, respond507, respond508, respond509, respond510, respond511 })
Object.assign(respond, { continue_, switchingProtocols, processing, earlyHints, ok, created, accepted, nonAuthoritativeInformation, noContent, resetContent, partialContent, multiStatus, alreadyReported, imUsed, multipleChoices, movedPermanently, found, seeOther, notModified, useProxy, temporaryRedirect, permanentRedirect, badRequest, unauthorized, paymentRequired, forbidden, notFound, methodNotAllowed, notAcceptable, proxyAuthenticationRequired, requestTimeout, conflict, gone, lengthRequired, preconditionFailed, payloadTooLarge, uriTooLong, unsupportedMediaType, rangeNotSatisfiable, expectationFailed, imATeapot, misdirectedRequest, unprocessableEntity, locked, failedDependency, tooEarly, upgradeRequired, preconditionRequired, tooManyRequests, requestHeaderFieldsTooLarge, unavailableForLegalReasons, internalServerError, notImplemented, badGateway, serviceUnavailable, gatewayTimeout, httpVersionNotSupported, variantAlsoNegotiates, insufficientStorage, loopDetected, bandwidthLimitExceeded, notExtended, networkAuthenticationRequired })
