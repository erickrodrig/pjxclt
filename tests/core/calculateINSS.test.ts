import { calculateINSS } from "../../src/core/calculateINSS";
import { INSS_BRACKETS } from "../../src/core/taxParameters";
import { truncateDecimal } from "../../src/utils/numberUtils";

describe('calculateINSS', () => {
  const testCases = [
    { salary: 100000, bracket: 1 },
    { salary: 132000, bracket: 1 },
    { salary: 200000, bracket: 2 },
    { salary: 257129, bracket: 2 },
    { salary: 300000, bracket: 3 },
    { salary: 385694, bracket: 3 },
    { salary: 600000, bracket: 4 },
    { salary: 800000, bracket: 4 }
  ];

  testCases.forEach(({ salary, bracket }) => {
    test(`should calculate INSS correctly for salary ${salary} in bracket ${bracket}`, () => {
      const inss = calculateINSS(salary);
      const expectedINSS = calculateExpectedINSS(salary);
      expect(inss).toBe(expectedINSS);
    });
  });

  test('should return 0 for negative salary values', () => {
    expect(calculateINSS(-10000)).toBe(0);
  });
});

function calculateExpectedINSS(salary: number): number {
  let previousCeiling = 0;
  let inss = 0;

  for (const bracket of INSS_BRACKETS) {
    const taxableSalary = Math.min(salary - previousCeiling, bracket.ceiling - previousCeiling);
    inss += truncateDecimal(bracket.taxRate * taxableSalary);
    if (bracket.ceiling >= salary) break;
    previousCeiling = bracket.ceiling;
  }
  return inss;
}

