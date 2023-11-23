import { INSS_BRACKETS } from "./taxParameters";
import { truncateDecimal } from "../utils/numberUtils";

/**
 * Calculates the INSS based on the given salary.
 * @param salary gross salary from which to calculate the INSS.
 * @returns the calculated INSS tax, rounded down to two decimal places.
 */
export function calculateINSS(salary: number): number {
  let previousCeiling = 0;
  let inss = 0;

  if (salary <= 0) {
    return inss;
  }

  for (const bracket of INSS_BRACKETS) {
    // applies the tax progressively, either on the remaining salary or the ceiling diff
    const taxeableSalary = Math.min(salary - previousCeiling, bracket.ceiling - previousCeiling);

    inss += truncateDecimal(bracket.taxRate * taxeableSalary);

    // stops if salary reaches ceiling
    if (bracket.ceiling >= salary) break;

    previousCeiling = bracket.ceiling;
  }
  return inss;
}
