/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
var expect = require('chai').expect
var respond = require('..')

describe('respond', function () {
  it('is a function', function () {
    expect(respond).to.be.a('function')
  })

  it('does not accept empty input', function () {
    expect(respond).to.throw('code must')
  })

  it('does not accept invalid code', function () {
    expect(respond.bind({}, 1)).to.throw('invalid status code')
  })

  describe('has property', function () {
    [
      'respond200',
      'respond204',
      'respond500',
      'ok',
      'noContent',
      'internalServerError'
    ].forEach(function (prop) {
      it(prop, function () {
        expect(respond).has.a.property(prop)
      })
    })
  })

  describe('is a function', function () {
    [
      'respond200',
      'respond204',
      'respond500',
      'ok',
      'noContent',
      'internalServerError'
    ].forEach(function (prop) {
      it(prop, function () {
        expect(respond[prop]).is.a('function')
      })
    })
  })

  describe('properties are the same', function () {
    [
      ['respond200', 'ok'],
      ['respond204', 'noContent'],
      ['respond500', 'internalServerError']
    ].forEach(function (pair) {
      it(pair[0] + ' === ' + pair[1], function () {
        expect(respond[pair[0]]).equal(respond[pair[1]])
      })
    })
  })

  describe('has NOT property', function () {
    [
      '0',
      '1',
      '200',
      '299',
      'respond600',
      'OK',
      'Ok'
    ].forEach(function (prop) {
      it(prop, function () {
        expect(respond).has.not.a.property(prop)
      })
    })
  })
})
