import chai, { expect } from 'chai';
// import sinon, { stub } from 'sinon';
import convertCurrency from '../src/modules/convertCurrency';

// const assert = chai.assert;

describe('App.js', () => {
  describe('#convertCurrency()', () => {
    it('should exist', () => {
      chai.should().exist(convertCurrency);
    });
    it('should return an integer', () => {
      const mockData = {
        base: 'EUR',
        date: '2016-12-30',
        rates: {
          AUD: 1.4596,
          BGN: 1.9558,
        },
      };
      expect(convertCurrency(mockData, 'AUD', 'BGN')).to.be.a('number');
    });
  });
});
