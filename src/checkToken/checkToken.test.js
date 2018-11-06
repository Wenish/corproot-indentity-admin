const expect = require('chai').expect
const { checkToken } = require('../')

describe('checkToken', () => {
  it('should be a function', () => {
    // 1. Arrange
    var type = 'function'

    // 2. Act
    // Nothing to do

    // 3. Assert
    expect(checkToken).to.be.a(type)
  })
})
