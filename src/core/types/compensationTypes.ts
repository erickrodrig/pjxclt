export enum CompensationFrequency {
  DAILY = "daily",
  MONTHLY = "monthly",
  ANNUAL = "annual"
}

export enum CompensationIdentifiers {
  SALARY = "salary",
  MEAL_TICKET = "meal_ticket",
  ANNUAL_BONUS = "annual_bonus",
  VACATION_DAYS = "vacation_days",
  DAYS_OFF = "days_off",
  PAID_VACATION = "paid_vacation",
  HEALTH_INSURANCE = "health_insurance",
  DENTAL_INSURANCE = "dental_insurance",
  TECH_ALLOWANCE = "tech_allowance",
  EXPENSE_ALLOWANCE = "expense_allowance",
  THIRTEENTH_SALARY = "thirteenth_salary",
  FOURTEENTH_SALARY = "fourteenth_salary",
  EDUCATION_ALLOWANCE = "education_allowance",
  TRANSPORTATION_TICKET = "transporation_ticket",
  ADDITIONAL = "additional",
}

export type Compensation = {
  id: CompensationIdentifiers;
  pj: CompValueFrequency;
  clt: CompValueFrequency;
}

export type CompValueFrequency = {
  value: number;
  frequency?: CompensationFrequency;
}

export type FinalCompensation = {
  compensationPJ: TotalCompensationPJ;
  compensationCLT: TotalCompensationCLT;
}

interface TotalCompensation {
  monthlyCompensation: number;
  monthlyTaxes: number;
  annualCompensation: number;
  annualTaxes: number;
  vacationDays: number;
}

export interface TotalCompensationCLT extends TotalCompensation {
  monthlyIRRF: number;
  annualIRRF: number;
  monthlyINSS: number;
  annualINSS: number;
  monthlyFGTS: number;
  annualFGTS: number;
}

export interface TotalCompensationPJ extends TotalCompensation { }

interface RawCompensation {
  grossSalary: number;
  bonusMultiplier: number;
  daysOff: number;
  additionalAnnualCompensation: number;
}

export interface RawCompensationCLT extends RawCompensation {
  dependents: number;
}

export interface RawCompensationPJ extends RawCompensation {
  thirteenthSalary: boolean;
  vacationDays: number;
  paidVacation: boolean;
}

export const COMPENSATION_IDENTIFIERS = {
  [CompensationIdentifiers.SALARY]: {
    id: CompensationIdentifiers.SALARY,
    label: "Salário"
  },
  [CompensationIdentifiers.MEAL_TICKET]: {
    id: CompensationIdentifiers.MEAL_TICKET,
    label: "Vale Refeição"
  },
  [CompensationIdentifiers.ANNUAL_BONUS]: {
    id: CompensationIdentifiers.ANNUAL_BONUS,
    label: "Bônus Anual"
  },
  [CompensationIdentifiers.VACATION_DAYS]: {
    id: CompensationIdentifiers.VACATION_DAYS,
    label: "Dias de Férias"
  },
  [CompensationIdentifiers.PAID_VACATION]: {
    id: CompensationIdentifiers.PAID_VACATION,
    label: "Férias Remuneradas"
  },
  [CompensationIdentifiers.HEALTH_INSURANCE]: {
    id: CompensationIdentifiers.HEALTH_INSURANCE,
    label: "Plano de Saúde"
  },
  [CompensationIdentifiers.DENTAL_INSURANCE]: {
    id: CompensationIdentifiers.DENTAL_INSURANCE,
    label: "Plano Odontológico"
  },
  [CompensationIdentifiers.TECH_ALLOWANCE]: {
    id: CompensationIdentifiers.TECH_ALLOWANCE,
    label: "Auxílio Tecnologia"
  },
  [CompensationIdentifiers.EXPENSE_ALLOWANCE]: {
    id: CompensationIdentifiers.EXPENSE_ALLOWANCE,
    label: "Auxílio Despesas"
  },
  [CompensationIdentifiers.THIRTEENTH_SALARY]: {
    id: CompensationIdentifiers.THIRTEENTH_SALARY,
    label: "13º Salário"
  },
  [CompensationIdentifiers.FOURTEENTH_SALARY]: {
    id: CompensationIdentifiers.FOURTEENTH_SALARY,
    label: "14º Salário"
  },
  [CompensationIdentifiers.EDUCATION_ALLOWANCE]: {
    id: CompensationIdentifiers.EDUCATION_ALLOWANCE,
    label: "Auxílio Educação"
  },
  // does it make sense to add this?
  // [CompensationIdentifiers.TRANSPORTATION_TICKET]: {
  //   id: CompensationIdentifiers.TRANSPORTATION_TICKET,
  //   label: "Vale Transporte"
  // },
  [CompensationIdentifiers.ADDITIONAL]: {
    id: CompensationIdentifiers.ADDITIONAL,
    label: "Adicionais"
  },
};
