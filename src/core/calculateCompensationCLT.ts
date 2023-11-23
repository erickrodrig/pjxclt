import { calculateINSS } from "./calculateINSS";
import { calculateIRRF } from "./calculateIRRF";
import { RawCompensationCLT, TotalCompensationCLT } from "./types/compensationTypes";
import { truncateDecimal } from "../utils/numberUtils";
import { FGTS_RATE } from "./taxParameters";

// base clt
const SALARY_QUANTITY = 13;
const CLT_VAC_DAYS = 30;

export function calculateCompCLT(rawComp: RawCompensationCLT): TotalCompensationCLT {
  if (
    rawComp.grossSalary <= 0 ||
    rawComp.dependents < 0 ||
    rawComp.bonusMultiplier < 0 ||
    rawComp.additionalAnnualCompensation < 0 ||
    rawComp.daysOff < 0) {
    throw new Error("Invalid input: Negative values or empty salary are not allowed.");
  }

  const monthlyGrossSalary = rawComp.grossSalary;

  // imposto
  const { monthlyINSS, annualINSS } = calculateINSSValues(monthlyGrossSalary);
  const { monthlyIRRF, annualIRRF } = calculateIRRFValues(monthlyGrossSalary, monthlyINSS, rawComp.dependents);
  const monthlyTaxes = monthlyINSS + monthlyIRRF;

  // salario
  const monthlyNetSalary = monthlyGrossSalary - monthlyTaxes;
  const annualNetSalary = truncateDecimal(monthlyNetSalary * SALARY_QUANTITY);

  // ferias
  const vacComp = calculateVacationCompensation(monthlyGrossSalary, rawComp.dependents);

  // fgts
  const fgtsComp = calculateFGTSCompensation(monthlyGrossSalary, vacComp.vacGrossSalary);

  // bonus, ppr, plr, etc
  const bonus = truncateDecimal(rawComp.bonusMultiplier * monthlyGrossSalary);

  // total
  const annualCompensation =
    annualNetSalary
    + vacComp.vacNetSalary
    + fgtsComp.annualFGTS
    + bonus
    + rawComp.additionalAnnualCompensation;

  const annualTaxes =
    annualINSS
    + annualIRRF
    + vacComp.vacINSS
    + vacComp.vacIRRF;

  return {
    monthlyCompensation: truncateDecimal(annualCompensation / 12),
    annualCompensation,
    monthlyINSS,
    annualINSS,
    monthlyIRRF,
    annualIRRF,
    monthlyFGTS: fgtsComp.monthlyFGTS,
    annualFGTS: fgtsComp.annualFGTS,
    monthlyTaxes,
    annualTaxes,
    vacationDays: CLT_VAC_DAYS + rawComp.daysOff
  };
}

function calculateINSSValues(monthlyGrossSalary: number) {
  const monthlyINSS = calculateINSS(monthlyGrossSalary);
  const annualINSS = monthlyINSS * SALARY_QUANTITY;
  return { monthlyINSS, annualINSS };
}

function calculateIRRFValues(monthlyGrossSalary: number, monthlyINSS: number, dependents: number) {
  const monthlyIRRF = calculateIRRF(monthlyGrossSalary - monthlyINSS, dependents);
  const annualIRRF = monthlyIRRF * SALARY_QUANTITY;
  return { monthlyIRRF, annualIRRF };
}

function calculateVacationCompensation(monthlyGrossSalary: number, dependents: number) {
  const vacGrossSalary = truncateDecimal(monthlyGrossSalary + (monthlyGrossSalary / 3));
  const vacINSS = calculateINSS(vacGrossSalary);
  const vacIRRF = calculateIRRF(vacGrossSalary, dependents);
  const vacNetSalary = vacGrossSalary - (vacINSS + vacIRRF);
  return { vacGrossSalary, vacINSS, vacIRRF, vacNetSalary };
}

function calculateFGTSCompensation(monthlyGrossSalary: number, vacGrossSalary: number) {
  const monthlyFGTS = truncateDecimal(monthlyGrossSalary * FGTS_RATE);
  const vacFGTS = truncateDecimal(vacGrossSalary * FGTS_RATE);
  const annualFGTS = truncateDecimal(vacFGTS + (monthlyFGTS * SALARY_QUANTITY));
  return { monthlyFGTS, annualFGTS };
}

// const sal = 132000;

// const obj: RawCompensationCLT = {
//   grossSalary: 1600000,
//   dependents: 0,
//   bonusMultiplier: 0,
//   additionalAnnualCompensation: 0,
//   daysOff: 5,
// }
// console.log(calculateCompCLT(obj));
