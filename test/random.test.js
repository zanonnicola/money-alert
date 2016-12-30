import chai, { expect } from 'chai';
const assert = chai.assert;
import log from '../src/modules/log';

function hello() {
  return "hello";
}

describe('Random Test', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
  describe('Promise', () => {
    it('should succeed when promise is resolved', () => {
      const result = Promise.resolve('success');

      return result.then((value) => {
        expect(value).to.equal('success');
      });
    });
  });
});
describe('hello', function(){
  it('should say hello', function(){
    expect(hello()).to.be.equal('hello');
  });
});
