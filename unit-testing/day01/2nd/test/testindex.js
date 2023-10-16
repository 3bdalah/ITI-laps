// Import the function to be tested
const { createArray } = require('../index');
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

describe('createArray', () => {
    let initialValue = 1;

    beforeEach(() => {
        initialValue++;
    });

    // Using the 'expect' style
    it('should return an array (using expect)', () => {
        const result = createArray(initialValue);
        expect(result).to.be.an('array');
    });

    // Using the 'should' style
    it('should return an array with the specified length (using should)', () => {
        const result = createArray(initialValue);
        result.should.be.an('array').with.lengthOf(initialValue);
    });

    // Using the 'assert' style
    it('should include the value 1 (using assert)', () => {
        const result = createArray(initialValue);
        assert.isArray(result, 'Result is not an array');
        assert.include(result, 1, 'Result does not include 1');
    });

    // Pending test case
    it('should have a pending test (pending test)', () => {
        // This test is pending, and it will be marked as such.
    });
});
