var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
var respond200 = require('..').respond200;
var respond204 = require('..').respond204;

chai.use(spies);

var res = {
    sendStatus: function sendStatus() {
        //console.log('sendStatus', arguments);
        return this;
    },
    status: function status() {
        //console.log('status', arguments);
        return this;
    },
    type: function type() {
        //console.log('type', arguments);
        return this;
    },
    send: function send() {
        //console.log('send', arguments);
        return this;
    }
};
Object.keys(res).forEach(function (key) {
    chai.spy.on(res, key);
});

function resetRes() {
    Object.keys(res).forEach(function (key) {
        res[key].reset();
    });
}

beforeEach(resetRes);
afterEach(resetRes);

describe('respond200', function () {
    it('is a function', function () {
        expect(respond200).to.be.a.function;
    });
    it('returns a function', function () {
        expect(respond200()).to.be.a.function;
    });
});

describe('respond204()(req, res)', function () {
    it('calls res.sendStatus(204)', function () {
        respond204()(null, res);
        expect(res.sendStatus).to.have.been.called.once.with(204);
        expect(res.send).to.not.have.been.called;
        expect(res.status).to.not.have.been.called;
    });
});

describe('respond200()(req, res)', function () {
    it('calls res.sendStatus(204)', function () {
        respond200()(null, res);
        expect(res.sendStatus).to.have.been.called.once.with(204);
        expect(res.send).to.not.have.been.called;
        expect(res.status).to.not.have.been.called;
    });
});

describe('respond200("All is good.")(req, res)', function () {
    it('calls res.status(200).send("All is good.")', function () {
        respond200('All is good.')(null, res);
        expect(res.status).to.have.been.called.once.with(200);
        expect(res.send).to.have.been.called.once.with('All is good.');
        expect(res.sendStatus).to.not.have.been.called;
    });
});
