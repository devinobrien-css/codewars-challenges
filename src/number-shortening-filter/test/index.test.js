import { assert as _assert, config } from 'chai'
const assert = _assert
config.truncateThreshold = 0
import { shortenNumber } from '../index.js'

describe('Sample Tests', () => {
  it('Filters', () => {
    let filter = shortenNumber(['','k','m'],1000);

    assert.strictEqual(filter('234324'), '234k');
    assert.strictEqual(filter('98234324'), '98m');
    assert.strictEqual(filter([1,2,3]), '1,2,3');
    assert.strictEqual(filter(''), '');
    assert.strictEqual(filter('32424234223'), '32424m');

  })

  it('Filters', () => {
    let filter = shortenNumber(['','KB','MB','GB'],1024);

    assert.strictEqual(filter('32'), '32');
    assert.strictEqual(filter('2100'), '2KB');
    assert.strictEqual(filter('pippi'), 'pippi');
    assert.strictEqual(filter('2100k'), '2100k');
    assert.strictEqual(filter('1073741823'), '1023MB');
  })
})
