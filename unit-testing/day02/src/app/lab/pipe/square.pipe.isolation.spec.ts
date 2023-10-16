import { SquarePipeForLab } from './square.pipe'; // Replace with the correct path to your SquarePipeForLab

describe('SquarePipeForLab', () => {
  let pipe: SquarePipeForLab;

  beforeEach(() => {
    pipe = new SquarePipeForLab();
  });

  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  it('should square a positive number', () => {
    const result = pipe.transform(5);
    expect(result).toBe(25);
  });

  it('should handle zero correctly', () => {
    const result = pipe.transform(0);
    expect(result).toBe(0);
  });

  it('should return "Invalid input" when passing a non-numeric value', () => {
    const result = pipe.transform('string'); // Pass a non-numeric value
    expect(result).toBe('Invalid input');
  });
});
