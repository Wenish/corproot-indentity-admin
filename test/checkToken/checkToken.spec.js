const expect = require('chai').expect
const corprootIdentityAdmin = require('../../src')

describe('checkToken', () => {
  it('should be a function', () => {
    // 1. Arrange
    var type = 'function'

    // 2. Act
    const checkToken = corprootIdentityAdmin.checkToken

    // 3. Assert
    expect(checkToken).to.be.a(type)
  })
})
