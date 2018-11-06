const expect = require('chai').expect
const { userinfo } = require('../')

describe('userinfo', () => {
  it('should be a function', () => {
    // 1. Arrange
    var type = 'function'

    // 2. Act
    // Nothing to do

    // 3. Assert
    expect(userinfo).to.be.a(type)
  })
})
