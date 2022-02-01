import React from "react";
import Input from "@tds/core-input";
import Box from "@tds/core-box";

const InputFields = ({ coefficients, setCoefficients }) => {
  return (
    <Box between={2} inline vertical={5}>
      <Input
        data-testid="a_input"
        onChange={(evt) => {
          setCoefficients({
            ...coefficients,
            a: parseInt(evt.target.value),
          });
        }}
        label="A"
      />
      <Input
        data-testid="b_input"
        onChange={(evt) => {
          setCoefficients({
            ...coefficients,
            b: parseInt(evt.target.value),
          });
        }}
        label="B"
      />
      <Input
        data-testid="c_input"
        onChange={(evt) => {
          setCoefficients({
            ...coefficients,
            c: parseInt(evt.target.value),
          });
        }}
        label="C"
      />
    </Box>
  );
};
export default InputFields;
