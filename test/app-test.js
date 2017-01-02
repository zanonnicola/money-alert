import chai, { expect, assert } from 'chai';
// import sinon, { stub } from 'sinon';
import convertCurrency from '../src/modules/convertCurrency';

const mockData = {
  base: 'EUR',
  date: '2016-12-30',
  rates: {
    AUD: 1.4596,
    BGN: 1.9558,
  },
};

describe('App.js', () => {
  describe('#convertCurrency()', () => {
    it('should exist', () => {
      chai.should().exist(convertCurrency);
    });
    it('should return an integer', () => {
      expect(convertCurrency(mockData, 'AUD', 'BGN')).to.be.a('number');
    });
    it('should throw an erorr if ammount is not an integer', () => {
      assert.throws(() => convertCurrency(mockData, 'AUD', 'BGN', '2'), Error, 'Illegal argument: 2 should be an integer');
    });
  });
});
