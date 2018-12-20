import {getCurrencies} from './getCurrencies';

describe('getCurrencies', () => {
  it('should have an array containing USD, AUD, EUR', () => {
    const results = getCurrencies();
    expect(results).toContain('USD');
    expect(results).toContain('AUD');
    expect(results).toContain('EUR');
  });
});
