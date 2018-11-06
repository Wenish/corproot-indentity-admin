const expect = require('chai').expect
const corprootIdentityAdmin = require('../src')

describe('corprootIndentityAdmin', () => {
  it('should be an object', () => {
    // 1. Arrange
    var type = 'object'

    // 2. Act
    // Nothing to do

    // 3. Assert
    expect(corprootIdentityAdmin).to.be.a(type)
  })
})
