import { Box, Input, InputGroup, InputLeftElement, NumberInput, NumberInputField } from "@chakra-ui/react";
import { useState } from "react";

export function FrequencySelector() {
  return (
    <NumberInput
      max={1000000}
    >
      <NumberInputField />
    </NumberInput>
  )
}