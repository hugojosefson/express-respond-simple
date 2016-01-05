var status = require('statuses');
var camel = require('camel-case');

var emptyEquivalent = {
    200: 204
};

function responderWithCode(code) {
    status(code); // check it, and throw if not valid
    return function (body) {
        if (status.empty[code] && body) {
            throw new Error('HTTP Status code ' + code + ' must be empty, and have no body.');
        }
        if (!body && emptyEquivalent[code]) {
            return responderWithCode(emptyEquivalent[code])();
        }
        return function (req, res) {
            if (body) {
                if (typeof body === 'object') {
                    res.status(code).type('json').send(body);
                } else {
                    res.status(code).type('text').send(body);
                }
            } else {
                res.sendStatus(code);
            }
        };
    };
}

module.exports = function respond(code, body) {
    return responderWithCode(code)(body);
};

status.codes.forEach(function (code) {
    var responder = responderWithCode(code);
    module.exports['respond' + code] = responder;
    module.exports[camel(status(code))] = responder;
});
