import Calculator from '../../src/js/calculator';

describe('calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator(1, 2);
  });

  it('add', () => {
    expect(calculator.add()).toBe(3);
  });

  it('sub', () => {
    expect(calculator.sub()).toBe(-1);
  });

  it('mul', () => {
    expect(calculator.mul()).toBe(2);
  });

  it('div', () => {
    expect(calculator.div()).toBe(0.5);
  });
});