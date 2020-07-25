/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
import chai from 'chai'
import respond from '../dist/index.mjs'

const { expect } = chai
describe('respond', () => {
  it('is a function', () => {
    expect(respond).to.be.a('function')
  })

  it('does not accept empty input', () => {
    expect(respond).to.throw('code must')
  })

  it('does not accept invalid code', () => {
    expect(respond.bind({}, 1)).to.throw('invalid status code')
  })

  describe('has property', () => {
    [
      'respond200',
      'respond204',
      'respond500',
      'ok',
      'noContent',
      'internalServerError'
    ].forEach(prop => it(prop, () => expect(respond).has.a.property(prop)))
  })

  describe('is a function', () => {
    [
      'respond200',
      'respond204',
      'respond500',
      'ok',
      'noContent',
      'internalServerError'
    ].forEach(prop => it(prop, () => expect(respond[prop]).is.a('function')))
  })

  describe('properties are the same', () => {
    [
      ['respond200', 'ok'],
      ['respond204', 'noContent'],
      ['respond500', 'internalServerError']
    ].forEach(([numbered, named]) => {
      it(`${numbered} === ${named}`, () => {
        expect(respond[numbered]).equal(respond[named])
      })
    })
  })

  describe('has NOT property', () => {
    [
      '0',
      '1',
      '200',
      '299',
      'respond600',
      'OK',
      'Ok'
    ].forEach(prop => it(prop, () => expect(respond).has.not.a.property(prop)))
  })
})
