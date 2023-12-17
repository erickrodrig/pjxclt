import { useState } from 'react';
import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { FrequencySelector } from './fields/FrequencySelector';
import { InputNumber } from './fields/InputNumber';

type Field = {
  id: string;
  name: string;
  clt: InputField;
  pj: InputField;
};

type InputField = {
  component: JSX.Element,
  frequency: JSX.Element
}

// const defaultFields: Field[] = [
//   {
//     id: 'salary',
//     name: 'Salário',
//     clt: {
//       component: <CurrencyInput />,
//       frequency: <FrequencySelector />
//     },
//     pj: {
//       component: <CurrencyInput />,
//       frequency: <FrequencySelector />
//     },
//   },
//   {
//     id: 'mealTicket',
//     name: 'VR/VA',
//     clt: {
//       component: <CurrencyInput />,
//       frequency: <FrequencySelector />
//     },
//     pj: {
//       component: <CurrencyInput />,
//       frequency: <FrequencySelector />
//     },
//   },
// only CLT
// {
//   id: 'dependents',
//   name: 'Dependentes',
//   component: <DependentsSlider />,
// },
// ];

export function ComparisonTable() {
  const [fields, setFields] = useState<Field[]>([]);

  // const handleAddField = () => {
  //   const newField: Field = {
  //     id: Date.now().toString(), // simple unique ID generation
  //     name: '',
  //     clt: <NumberInput />
  //   };
  //   setFields([...fields, newField]);
  // };

  const handleRemoveField = (id: string) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleFieldChange = (id: string, key: keyof Field, value: string | number) => {
    setFields(fields.map((field) => (field.id === id ? { ...field, [key]: value } : field)));
  };

  return (
    // <div className="mt-20 text-left flex-grow">
    //   <div className="rounded-xl bg-slate-300 p-10 mx-auto border">
    <Grid
      templateColumns='repeat(3, 1fr)'
      gap={4}
      className='flex-grow m-2 p-5 md:mx-20 md:p-10 rounded-xl '
    >
      <GridItem w='100%' h='10' bg='blue.500' />
      <InputNumber />
      <GridItem w='100%' h='10' bg='blue.500' />
    </Grid>
    // </div>
    // </div>
  )
}