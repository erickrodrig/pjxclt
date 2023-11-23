import { calculateIRRF } from "../../src/core/calculateIRRF"
import { IRRF_DEPENDENT_DEDUCTION } from "../../src/core/taxParameters";

describe('calculateIRRF', () => {
  const testCases = [
    { salary: 200000, dependents: 0, expected: 0 },
    { salary: 250000, dependents: 1, expected: Math.ceil(0.075 * (250000 - IRRF_DEPENDENT_DEDUCTION * 1) - 15840) },
    { salary: 300000, dependents: 0, expected: Math.ceil(0.15 * 300000 - 37040) },
    { salary: 420000, dependents: 2, expected: Math.ceil(0.225 * (420000 - IRRF_DEPENDENT_DEDUCTION * 2) - 65173) },
    { salary: 500000, dependents: 0, expected: Math.ceil(0.275 * 500000 - 88496) },
    { salary: -100000, dependents: 0, expected: 0 },
    { salary: 0, dependents: 0, expected: 0 }
  ];

  testCases.forEach(({ salary, dependents, expected }) => {
    test(`should calculate correct tax for salary ${salary} and ${dependents} dependents`, () => {
      expect(calculateIRRF(salary, dependents)).toBe(expected);
    });
  });
});
