import chai, { expect } from 'chai';
import { log, toTest } from '../src/modules/log';

const assert = chai.assert;

describe('App.js', () => {
  describe('#log()', () => {
    it('should be defined', () => {
      assert.isDefined(log, 'Log has been defined');
    });
  });
  describe('#toTest()', () => {
    it('shouldreturn test', () => {
      expect(toTest()).to.be.equal('test');
    });
  });
});
