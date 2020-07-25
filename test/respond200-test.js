/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
import chai from 'chai'
import spies from 'chai-spies'
import { respond200, respond204 } from '../dist/index.mjs'

const { expect } = chai
chai.use(spies)

const res = {
  sendStatus: () => res,
  status: () => res,
  type: () => res,
  send: () => res
}

const restoreSpies = () => {
  chai.spy.restore()
  Object.keys(res).forEach(key => chai.spy.on(res, key))
}

beforeEach(restoreSpies)
afterEach(restoreSpies)

describe('respond200', () => {
  it('is a function', () => {
    expect(respond200).to.be.a('function')
  })
  it('returns a function', () => {
    expect(respond200()).to.be.a('function')
  })
})

describe('respond204()(req, res)', () => {
  it('calls res.sendStatus(204)', () => {
    respond204()(null, res)
    expect(res.sendStatus).to.have.been.called.once.with(204)
    expect(res.send).to.not.have.been.called
    expect(res.status).to.not.have.been.called
  })
})

describe('respond200()(req, res)', () => {
  it('calls res.sendStatus(204)', () => {
    respond200()(null, res)
    expect(res.sendStatus).to.have.been.called.once.with(204)
    expect(res.send).to.not.have.been.called
    expect(res.status).to.not.have.been.called
  })
})

describe('respond200("All is good.")(req, res)', () => {
  it('calls res.status(200).send("All is good.")', () => {
    respond200('All is good.')(null, res)
    expect(res.status).to.have.been.called.once.with(200)
    expect(res.send).to.have.been.called.once.with('All is good.')
    expect(res.sendStatus).to.not.have.been.called
  })
})

describe('respond204("some message")', () => {
  it('to throw "must be empty"', () => {
    expect(respond204.bind({}, 'some message')).to.throw('must be empty')
  })
})

describe('respond200("")(req, res)', () => {
  it('calls res.sendStatus(204)', () => {
    respond200('')(null, res)
    expect(res.sendStatus).to.have.been.called.once.with(204)
    expect(res.send).to.not.have.been.called
    expect(res.status).to.not.have.been.called
  })
})

describe('respond200("", true)(req, res)', () => {
  it('calls res.status(200).send("")', () => {
    respond200('', true)(null, res)
    expect(res.sendStatus).to.not.have.been.called
    expect(res.send).to.have.been.called.once.with('')
    expect(res.status).to.have.been.called.once.with(200)
  })
})

describe('respond204("", true)(req, res)', () => {
  it('calls res.status(204).send("")', () => {
    respond204('', true)(null, res)
    expect(res.sendStatus).to.not.have.been.called
    expect(res.send).to.have.been.called.once.with('')
    expect(res.status).to.have.been.called.once.with(204)
  })
})

describe('respond200(null)(req, res)', () => {
  it('calls res.sendStatus(204)', () => {
    respond200(null)(null, res)
    expect(res.sendStatus).to.have.been.called.once.with(204)
    expect(res.send).to.not.have.been.called
    expect(res.status).to.not.have.been.called
  })
})

describe('respond200(null, true)(req, res)', () => {
  it('calls res.sendStatus(200)', () => {
    respond200(null, true)(null, res)
    expect(res.sendStatus).to.have.been.called.once.with(200)
    expect(res.send).to.not.have.been.called
    expect(res.status).to.not.have.been.called
  })
})

describe('respond200(undefined)(req, res)', () => {
  it('calls res.sendStatus(204)', () => {
    respond200(undefined)(undefined, res)
    expect(res.sendStatus).to.have.been.called.once.with(204)
    expect(res.send).to.not.have.been.called
    expect(res.status).to.not.have.been.called
  })
})

describe('respond200(undefined, true)(req, res)', () => {
  it('calls res.sendStatus(200)', () => {
    respond200(undefined, true)(undefined, res)
    expect(res.sendStatus).to.have.been.called.once.with(200)
    expect(res.send).to.not.have.been.called
    expect(res.status).to.not.have.been.called
  })
})
