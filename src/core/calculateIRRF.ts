import { IRRF_DEPENDENT_DEDUCTION, IRRF_BRACKETS } from "./taxParameters";

/**
 * Calculates the IRRF based on the given salary and dependents.
 * @param salary gross salary minus INSS, from which to calculate the tax.
 * @param dependents number of dependents for deductions.
 * @returns the calculated IRRF tax, rounded up to two decimal places.
 */
export function calculateIRRF(salary: number, dependents: number): number {
  let irrf = 0;

  const deductedSalary = salary - (dependents * IRRF_DEPENDENT_DEDUCTION);

  if (deductedSalary <= 0) {
    return irrf;
  }

  for (const bracket of IRRF_BRACKETS) {
    if (bracket.ceiling > deductedSalary) {
      irrf = (bracket.taxRate * deductedSalary) - bracket.deduction;
      break;
    }
  }
  // irrf tax always round up according to paychecks used for comparison
  return Math.ceil(irrf);
}
