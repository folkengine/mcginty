const expect = require('chai').expect;
const should = require('chai').should();

const common = require('./common');

describe('common', () => {
  it('should make available the envTestConfig', () => {
    expect(common.envTestConfig).to.exist;
  });
});
