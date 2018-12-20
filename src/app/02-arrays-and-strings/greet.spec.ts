import { greet } from './greet';

describe('greet', () => {
  it('should include the name in the message', () => {
    const results = greet('Marv');
    expect(results).toContain('Marv');
  });
});
