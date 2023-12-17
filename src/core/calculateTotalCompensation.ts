import { calculateCompCLT } from "./calculateCompensationCLT";
import { calculateCompPJ } from "./calculateCompensationPJ";
import {
  Compensation,
  CompensationFrequency,
  CompensationIdentifiers,
  FinalCompensation,
  RawCompensationCLT,
  RawCompensationPJ
} from "./types/compensationTypes";


export function calculateTotalCompensation(compensationList: Compensation[], cltDependents: number): FinalCompensation {
  const rawCompPJ = <RawCompensationPJ>{};
  const rawCompCLT = <RawCompensationCLT>{};
  let compAnnualValuePJ = 0;
  let compAnnualValueCLT = 0;
  let annualBonusCLT = 0;
  let annualBonusPJ = 0;

  for (const comp of compensationList) {
    switch (comp.id) {
      case CompensationIdentifiers.SALARY:
        if (comp.clt.frequency == CompensationFrequency.ANNUAL) {
          rawCompCLT.grossSalary = comp.clt.value / 12;
        } else {
          rawCompCLT.grossSalary = comp.clt.value;
        }

        if (comp.pj.frequency == CompensationFrequency.ANNUAL) {
          rawCompPJ.grossSalary = comp.pj.value / 12;
        } else {
          rawCompPJ.grossSalary = comp.pj.value;
        }
        break;

      case CompensationIdentifiers.FOURTEENTH_SALARY:
        annualBonusCLT += comp.clt.value;
        annualBonusPJ += comp.pj.value;
        break;

      case CompensationIdentifiers.ANNUAL_BONUS:
        annualBonusCLT += comp.clt.value;
        annualBonusPJ += comp.pj.value;
        break;

      case CompensationIdentifiers.DAYS_OFF:
        rawCompCLT.daysOff = comp.clt.value;
        rawCompPJ.daysOff = comp.pj.value;
        break;

      case CompensationIdentifiers.THIRTEENTH_SALARY:
        rawCompPJ.thirteenthSalary = Boolean(comp.pj.value);
        break;

      case CompensationIdentifiers.VACATION_DAYS:
        rawCompPJ.vacationDays = comp.pj.value;
        break;

      case CompensationIdentifiers.PAID_VACATION:
        rawCompPJ.paidVacation = Boolean(comp.pj.value);
        break;

      default: {
        let frequencyMultiplier = 1;

        if (comp.pj.frequency == CompensationFrequency.DAILY) {
          frequencyMultiplier = 22;
        } else if (comp.pj.frequency == CompensationFrequency.MONTHLY) {
          frequencyMultiplier = 12;
        }
        compAnnualValuePJ += comp.pj.value * frequencyMultiplier;

        if (comp.clt.frequency == CompensationFrequency.DAILY) {
          frequencyMultiplier = 22;
        } else if (comp.clt.frequency == CompensationFrequency.MONTHLY) {
          frequencyMultiplier = 12;
        } else {
          frequencyMultiplier = 1;
        }
        compAnnualValueCLT += comp.clt.value * frequencyMultiplier;
        break;
      }
    }
  }

  rawCompPJ.additionalAnnualCompensation = compAnnualValuePJ;
  rawCompCLT.additionalAnnualCompensation = compAnnualValueCLT;

  rawCompPJ.bonusMultiplier = annualBonusPJ;
  rawCompCLT.bonusMultiplier = annualBonusCLT;

  rawCompCLT.dependents = cltDependents;

  return {
    compensationPJ: calculateCompPJ(rawCompPJ),
    compensationCLT: calculateCompCLT(rawCompCLT)
  }
}

const comps: Compensation[] = [
  {
    id: CompensationIdentifiers.SALARY,
    pj: {
      value: 700000,
      frequency: CompensationFrequency.MONTHLY
    },
    clt: {
      value: 660224,
      frequency: CompensationFrequency.MONTHLY
    }
  },
  {
    id: CompensationIdentifiers.MEAL_TICKET,
    pj: {
      value: 60000,
      frequency: CompensationFrequency.MONTHLY
    },
    clt: {
      value: 3000,
      frequency: CompensationFrequency.DAILY
    }
  },
  {
    id: CompensationIdentifiers.THIRTEENTH_SALARY,
    pj: {
      value: 0
    },
    clt: {
      value: 1
    }
  },
  {
    id: CompensationIdentifiers.FOURTEENTH_SALARY,
    pj: {
      value: 0
    },
    clt: {
      value: 1
    }
  },
  {
    id: CompensationIdentifiers.VACATION_DAYS,
    pj: {
      value: 15
    },
    clt: {
      value: 30
    }
  },
  {
    id: CompensationIdentifiers.PAID_VACATION,
    pj: {
      value: 0
    },
    clt: {
      value: 1
    }
  },
  {
    id: CompensationIdentifiers.EXPENSE_ALLOWANCE,
    pj: {
      value: 0
    },
    clt: {
      value: 15000,
      frequency: CompensationFrequency.MONTHLY,
    }
  },
  {
    id: CompensationIdentifiers.TECH_ALLOWANCE,
    pj: {
      value: 150000,
      frequency: CompensationFrequency.ANNUAL,
    },
    clt: {
      value: 0
    }
  },
  {
    id: CompensationIdentifiers.EDUCATION_ALLOWANCE,
    pj: {
      value: 300000,
      frequency: CompensationFrequency.ANNUAL,
    },
    clt: {
      value: 300000,
      frequency: CompensationFrequency.ANNUAL,
    }
  },
  {
    id: CompensationIdentifiers.ADDITIONAL,
    pj: {
      value: 0,
    },
    clt: {
      value: 15000,
      frequency: CompensationFrequency.MONTHLY,
    }
  },
  {
    id: CompensationIdentifiers.DAYS_OFF,
    pj: {
      value: 1,
    },
    clt: {
      value: 5,
      frequency: CompensationFrequency.MONTHLY,
    }
  },
]

console.log(calculateTotalCompensation(comps, 0));
