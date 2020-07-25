import { Handler } from 'express'

export default function respond(code: number, body?: (string | object), forceCodeEvenIfEmptyBody?: boolean): Handler

export function respond100(body?: (string|object)): Handler
export function respond101(body?: (string|object)): Handler
export function respond102(body?: (string|object)): Handler
export function respond103(body?: (string|object)): Handler
export function respond200(body?: (string|object), forceCodeEvenIfEmptyBody?: boolean): Handler
export function respond201(body?: (string|object)): Handler
export function respond202(body?: (string|object)): Handler
export function respond203(body?: (string|object)): Handler
export function respond204(): Handler
export function respond205(): Handler
export function respond206(body?: (string|object)): Handler
export function respond207(body?: (string|object)): Handler
export function respond208(body?: (string|object)): Handler
export function respond226(body?: (string|object)): Handler
export function respond300(body?: (string|object)): Handler
export function respond301(body?: (string|object)): Handler
export function respond302(body?: (string|object)): Handler
export function respond303(body?: (string|object)): Handler
export function respond304(): Handler
export function respond305(body?: (string|object)): Handler
export function respond307(body?: (string|object)): Handler
export function respond308(body?: (string|object)): Handler
export function respond400(body?: (string|object)): Handler
export function respond401(body?: (string|object)): Handler
export function respond402(body?: (string|object)): Handler
export function respond403(body?: (string|object)): Handler
export function respond404(body?: (string|object)): Handler
export function respond405(body?: (string|object)): Handler
export function respond406(body?: (string|object)): Handler
export function respond407(body?: (string|object)): Handler
export function respond408(body?: (string|object)): Handler
export function respond409(body?: (string|object)): Handler
export function respond410(body?: (string|object)): Handler
export function respond411(body?: (string|object)): Handler
export function respond412(body?: (string|object)): Handler
export function respond413(body?: (string|object)): Handler
export function respond414(body?: (string|object)): Handler
export function respond415(body?: (string|object)): Handler
export function respond416(body?: (string|object)): Handler
export function respond417(body?: (string|object)): Handler
export function respond418(body?: (string|object)): Handler
export function respond421(body?: (string|object)): Handler
export function respond422(body?: (string|object)): Handler
export function respond423(body?: (string|object)): Handler
export function respond424(body?: (string|object)): Handler
export function respond425(body?: (string|object)): Handler
export function respond426(body?: (string|object)): Handler
export function respond428(body?: (string|object)): Handler
export function respond429(body?: (string|object)): Handler
export function respond431(body?: (string|object)): Handler
export function respond451(body?: (string|object)): Handler
export function respond500(body?: (string|object)): Handler
export function respond501(body?: (string|object)): Handler
export function respond502(body?: (string|object)): Handler
export function respond503(body?: (string|object)): Handler
export function respond504(body?: (string|object)): Handler
export function respond505(body?: (string|object)): Handler
export function respond506(body?: (string|object)): Handler
export function respond507(body?: (string|object)): Handler
export function respond508(body?: (string|object)): Handler
export function respond509(body?: (string|object)): Handler
export function respond510(body?: (string|object)): Handler
export function respond511(body?: (string|object)): Handler

export function continue_(body?: (string|object)): Handler
export function switchingProtocols(body?: (string|object)): Handler
export function processing(body?: (string|object)): Handler
export function earlyHints(body?: (string|object)): Handler
export function ok(body?: (string|object), forceCodeEvenIfEmptyBody?: boolean): Handler
export function created(body?: (string|object)): Handler
export function accepted(body?: (string|object)): Handler
export function nonAuthoritativeInformation(body?: (string|object)): Handler
export function noContent(): Handler
export function resetContent(): Handler
export function partialContent(body?: (string|object)): Handler
export function multiStatus(body?: (string|object)): Handler
export function alreadyReported(body?: (string|object)): Handler
export function imUsed(body?: (string|object)): Handler
export function multipleChoices(body?: (string|object)): Handler
export function movedPermanently(body?: (string|object)): Handler
export function found(body?: (string|object)): Handler
export function seeOther(body?: (string|object)): Handler
export function notModified(): Handler
export function useProxy(body?: (string|object)): Handler
export function temporaryRedirect(body?: (string|object)): Handler
export function permanentRedirect(body?: (string|object)): Handler
export function badRequest(body?: (string|object)): Handler
export function unauthorized(body?: (string|object)): Handler
export function paymentRequired(body?: (string|object)): Handler
export function forbidden(body?: (string|object)): Handler
export function notFound(body?: (string|object)): Handler
export function methodNotAllowed(body?: (string|object)): Handler
export function notAcceptable(body?: (string|object)): Handler
export function proxyAuthenticationRequired(body?: (string|object)): Handler
export function requestTimeout(body?: (string|object)): Handler
export function conflict(body?: (string|object)): Handler
export function gone(body?: (string|object)): Handler
export function lengthRequired(body?: (string|object)): Handler
export function preconditionFailed(body?: (string|object)): Handler
export function payloadTooLarge(body?: (string|object)): Handler
export function uriTooLong(body?: (string|object)): Handler
export function unsupportedMediaType(body?: (string|object)): Handler
export function rangeNotSatisfiable(body?: (string|object)): Handler
export function expectationFailed(body?: (string|object)): Handler
export function imATeapot(body?: (string|object)): Handler
export function misdirectedRequest(body?: (string|object)): Handler
export function unprocessableEntity(body?: (string|object)): Handler
export function locked(body?: (string|object)): Handler
export function failedDependency(body?: (string|object)): Handler
export function tooEarly(body?: (string|object)): Handler
export function upgradeRequired(body?: (string|object)): Handler
export function preconditionRequired(body?: (string|object)): Handler
export function tooManyRequests(body?: (string|object)): Handler
export function requestHeaderFieldsTooLarge(body?: (string|object)): Handler
export function unavailableForLegalReasons(body?: (string|object)): Handler
export function internalServerError(body?: (string|object)): Handler
export function notImplemented(body?: (string|object)): Handler
export function badGateway(body?: (string|object)): Handler
export function serviceUnavailable(body?: (string|object)): Handler
export function gatewayTimeout(body?: (string|object)): Handler
export function httpVersionNotSupported(body?: (string|object)): Handler
export function variantAlsoNegotiates(body?: (string|object)): Handler
export function insufficientStorage(body?: (string|object)): Handler
export function loopDetected(body?: (string|object)): Handler
export function bandwidthLimitExceeded(body?: (string|object)): Handler
export function notExtended(body?: (string|object)): Handler
export function networkAuthenticationRequired(body?: (string|object)): Handler
