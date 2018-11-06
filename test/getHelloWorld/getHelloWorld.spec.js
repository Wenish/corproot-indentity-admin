const expect = require('chai').expect
const corprootIndentityAdmin = require('../../src')

describe('getHelloWorld()', () => {
  it('should return "Hello World"', () => {
    // 1. Arrange
    var text1 = 'Hello World'

    // 2. Act
    const text2 = corprootIndentityAdmin.getHelloWorld()

    // 3. Assert
    expect(text2).to.be.equal(text1)
  })
})
