import { calculateCompCLT } from "../../src/core/calculateCompensationCLT";

describe('calculateCompCLT', () => {
  const errorTestCases = [
    {
      description: 'when salary value is negative',
      input: {
        grossSalary: -1600000,
      }
    },
    {
      description: 'when salary is 0',
      input: {
        grossSalary: 0,
      }
    },
    {
      description: 'when dependents value is negative',
      input: {
        dependents: -1,
      }
    },
    {
      description: 'when bonus value is negative',
      input: {
        dependents: -2.5,
      }
    },
    {
      description: 'when additional value is negative',
      input: {
        dependents: -600000,
      }
    },
    {
      description: 'when days off value is negative',
      input: {
        dependents: -3,
      }
    },
  ]
  const compTestCases = [
    {
      description: 'minimum wage salary without dependents',
      input: {
        grossSalary: 132000,
        dependents: 0,
        bonusMultiplier: 0,
        additionalAnnualCompensation: 420000,
        daysOff: 0,
      },
      expected: {
        monthlyCompensation: 193400,
        annualCompensation: 2320800,
        monthlyINSS: 9900,
        annualINSS: 128700,
        monthlyIRRF: 0,
        annualIRRF: 0,
        monthlyFGTS: 10560,
        annualFGTS: 151360,
        monthlyTaxes: 9900,
        annualTaxes: 142560,
        vacationDays: 30
      }
    },
    {
      description: 'avg dev salary with a couple dependents',
      input: {
        grossSalary: 700000,
        dependents: 2,
        bonusMultiplier: 1,
        additionalAnnualCompensation: 1500000,
        daysOff: 1,
      },
      expected: {
        monthlyCompensation: 901207,
        annualCompensation: 10814495,
        monthlyINSS: 80590,
        annualINSS: 1047670,
        monthlyIRRF: 71415,
        annualIRRF: 928395,
        monthlyFGTS: 56000,
        annualFGTS: 802666,
        monthlyTaxes: 152005,
        annualTaxes: 2221504,
        vacationDays: 31
      }
    },
  ];

  errorTestCases.forEach(({ description, input }) => {
    test(`should throw error ${description}`, () => {
      const defaultValues = {
        grossSalary: 800000,
        dependents: 0,
        bonusMultiplier: 15,
        additionalAnnualCompensation: 800000,
        daysOff: 5,
      }

      expect(() => {
        calculateCompCLT({ ...defaultValues, ...input })
      }).toThrow(new Error("Invalid input: Negative values or empty salary are not allowed."))
    });
  });

  compTestCases.forEach(({ description, input, expected }) => {
    test(`should calculate correct comp for ${description}`, () => {
      const result = calculateCompCLT(input);

      expect(result).toMatchObject(expected);
    });
  });
});
