if (typeof window === 'undefined') {
    global.chai = require('chai')
    global.sinon = require('sinon')
    global.expect = global.chai.expect
}
