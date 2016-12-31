import chai, { expect } from 'chai';
import { log, toTest } from '../src/modules/log';
import extra from '../src/modules/extra';

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
  describe('#extra()', () => {
    it('should return a string', () => {
      const title = extra().title;
      expect(title).to.be.a('string');
    });
    it('should be "sunt aut" in title', () => {
      const word = extra().title.indexOf('sunt aut');
      expect(word).to.satisfy(
        num => num === 0,
      );
    });
  });
});
