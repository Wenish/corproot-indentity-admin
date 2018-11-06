const expect = require('chai').expect
const getHelloWorld = require('./getHelloWorld')

describe('getHelloWorld()', () => {
    it('should return "Hello World"', () => {
        //1. Arrange
        var text1 = "Hello World"

        //2. ACT
        const text2 = getHelloWorld()

        //3. ASSERT
        expect(text2).to.be.equal(text1)
    })
})