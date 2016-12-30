import chai, { expect } from 'chai';
const assert = chai.assert;
import log from '../src/modules/log';

describe('App.js', function() {
  describe('#log()', function() {
    it('should be defined', function() {
      assert.isDefined(log, 'Log has been defined');
    });
  });
});
