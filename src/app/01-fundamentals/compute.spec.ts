import { compute } from './compute';

describe('compute', () => {
  it('should return 0 if number is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });

  it('should return the input number increased by 1 if number is positive', () => {
    const result = compute(2);
    expect(result).toBe(3);
  });
});


