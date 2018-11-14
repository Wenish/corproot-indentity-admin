const expect = require('chai').expect
const cloudfoundryIdentityAdmin = require('../src')

describe('corprootIndentityAdmin', () => {
  it('should be an object', () => {
    // 1. Arrange
    var type = 'object'

    // 2. Act
    // Nothing to do

    // 3. Assert
    expect(cloudfoundryIdentityAdmin).to.be.a(type)
  })
})
