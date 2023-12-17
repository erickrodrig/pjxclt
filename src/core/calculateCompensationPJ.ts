import { RawCompensationPJ, TotalCompensationPJ } from "./types/compensationTypes";
import { truncateDecimal } from "../utils/numberUtils";

const SALARY_QUANTITY = 12;

export function calculateCompPJ(rawComp: RawCompensationPJ): TotalCompensationPJ {
  if (
    rawComp.grossSalary <= 0 ||
    rawComp.bonusMultiplier < 0 ||
    rawComp.additionalAnnualCompensation < 0 ||
    rawComp.daysOff < 0) {
    throw new Error("Invalid input: Negative values or empty salary are not allowed.");
  }
  const monthlyGrossSalary = rawComp.grossSalary;

  // imposto - to be defined
  const taxRate = 0.06;
  const monthlyTaxes = truncateDecimal(taxRate * monthlyGrossSalary);
  const annualTaxes = truncateDecimal(monthlyTaxes * SALARY_QUANTITY);
  //needs to add inss...

  // salario
  const monthlyNetSalary = monthlyGrossSalary - monthlyTaxes;
  const annualNetSalary = truncateDecimal(monthlyNetSalary * SALARY_QUANTITY);

  // ferias
  let netVacationSalary = 0;
  if (rawComp.paidVacation) {
    const dailySalary = truncateDecimal(monthlyNetSalary / 30); // working days or regular days?
    netVacationSalary = truncateDecimal(dailySalary * rawComp.vacationDays);
  }

  // ppr, plr, etc
  const bonus = truncateDecimal(rawComp.bonusMultiplier * monthlyGrossSalary);

  // total
  const annualComp =
    annualNetSalary
    + netVacationSalary
    + bonus
    + rawComp.additionalAnnualCompensation;

  return {
    annualCompensation: annualComp,
    monthlyCompensation: truncateDecimal(annualComp / 12),
    monthlyTaxes: monthlyTaxes,
    annualTaxes: annualTaxes,
    vacationDays: rawComp.vacationDays + rawComp.daysOff
  };
}

// const sal = 588782;
// const obj: RawCompensationPJ = {
//   grossSalary: 2000000,
//   bonusMultiplier: 0,
//   daysOff: 0,
//   additionalAnnualCompensation: 844800,
//   thirteenthSalary: false,
//   vacationDays: 30,
//   paidVacation: false,
// }
// console.log(calculateCompPJ(obj));
