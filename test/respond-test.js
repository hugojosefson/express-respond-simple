var expect = require('chai').expect;
var respond = require('..');

describe('respond', function () {
    it('is a function', function () {
        expect(respond).to.be.a.function;
    });
    it('has property respond200', function () {
        expect(respond).has.a.property('respond200');
    });
    it('has property respond204', function () {
        expect(respond).has.a.property('respond204');
    });
    it('has property respond500', function () {
        expect(respond).has.a.property('respond500');
    });
    it('has NOT a property respond600', function () {
        expect(respond).has.not.a.property('respond600');
    });
    it('does not accept empty input', function () {
        expect(respond).to.throw('code must');
    });
    it('does not accept invalid code', function () {
        expect(respond.bind({}, 1)).to.throw('invalid status code');
    });
});
