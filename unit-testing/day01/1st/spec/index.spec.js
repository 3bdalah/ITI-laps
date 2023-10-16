// Import the function to be tested
const { capitalizeText } = require("./../index.js");

describe('Testing the capitalizeText function', () => {
  it('it should return a string', () => {
    const result = capitalizeText('test');
    expect(typeof result).toBe('string');
  });

  it('it should return a capitalized string', () => {
    const result = capitalizeText('test');
    expect(result).toBe('TEST');
  });

  it('it should throw an error when the input is not a string', () => {
    expect(() => capitalizeText(123)).toThrowError('parameter should be string');
  });
});
