const getMessage = require('./getMessage');

describe('getMessage', () => {
  describe('for number equal 101', () => {
    it('returns "number is greater than 100', () => { // zamiast it może być alias 'test'
      expect(getMessage(101)).toEqual('number is greater than 100');
    });
  });
  describe('for number less than 100', () => {
    it('returns "number is smaller than 100', () => { 
      expect(getMessage(99)).toEqual('number is NOT greater than 100');
    });
  });
});

// alternatywny zapis:

// test('getMessage(version 2)', function() {
//     expect(getMessage(101)).toEqual('number is greater than 100');
//     expect(getMessage(99)).toEqual('number is NOT greater than 100');

// })