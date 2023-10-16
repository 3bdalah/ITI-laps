import { StrengthPipe } from './strength.pipe';

describe('Strength Pipe', () => {
  let pipe:StrengthPipe;
  beforeEach(() => {
    pipe = new StrengthPipe();
  });
  it('expect if passing 7 ,transform will return  "7 (weak)"', () => {
    expect(pipe.transform(7)).toBe('7 (weak)');
  });
  it('expect if passing 15 ,transform will return  "15 (strong)"', () => {
      expect(pipe.transform(15)).toContain('strong')
  });
});
