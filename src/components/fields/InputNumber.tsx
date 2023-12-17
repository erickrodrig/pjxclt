import { Box, NumberInput, NumberInputField } from "@chakra-ui/react";
import { useState } from "react";

export function InputNumber() {

  const format = (val: string) => `R$ ${val}`;

  const parse = (val: string) => val.replace(/^R\$/, '');


  const [value, setValue] = useState('0');

  return (
    <Box>
      <NumberInput
        onChange={(valueString) => setValue(parse(valueString))}
        value={format(value)}
        precision={2}
        max={1000000}
        clampValueOnBlur={false}
      >
        <NumberInputField />
      </NumberInput>
    </Box>
  );
}