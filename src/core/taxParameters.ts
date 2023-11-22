/* needs annual update | current values from: 05/2023 */
export const INSS_BRACKETS = [
  { ceiling: 132000, taxRate: 0.075 },
  { ceiling: 257129, taxRate: 0.09 },
  { ceiling: 385694, taxRate: 0.12 },
  { ceiling: 750749, taxRate: 0.14 }
];

// no ceiling limit for last IRRF bracket, fixed value is set as a calculation limit
export const IRRF_BRACKETS = [
  { ceiling: 211200, taxRate: 0, deduction: 0 },
  { ceiling: 282665, taxRate: 0.075, deduction: 15840 },
  { ceiling: 375105, taxRate: 0.15, deduction: 37040 },
  { ceiling: 466468, taxRate: 0.225, deduction: 65173 },
  { ceiling: 100000000, taxRate: 0.275, deduction: 88496 },
];

export const IRRF_DEPENDENT_DEDUCTION = 18959;

export const FGTS_RATE = 0.08;