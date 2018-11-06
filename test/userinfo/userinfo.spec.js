const expect = require('chai').expect
const corprootIdentityAdmin = require('../../src')

describe('userinfo', () => {
  it('should be a function', () => {
    // 1. Arrange
    var type = 'function'

    // 2. Act
    const userinfo = corprootIdentityAdmin.userinfo

    // 3. Assert
    expect(userinfo).to.be.a(type)
  })
})
