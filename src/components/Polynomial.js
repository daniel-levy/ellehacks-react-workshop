import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Heading from "@tds/core-heading";
import Strong from "@tds/core-strong";
import Box from "@tds/core-box";
import Button from "@tds/core-button";
import InputFields from "./InputFields";
import Result from "./Result";
import { factor } from "../helpers/factor";

const StyledPolynomialContainer = styled.div`
  margin: auto;
  margin-top: 100px;
  width: 50%;
  text-align: center;
`;

const Polynomial = () => {
  const [result, setResult] = useState("");
  const [complete, setComplete] = useState(false);
  const [coefficients, setCoefficients] = useState({
    a: 0,
    b: 0,
    c: 0,
  });

  const solvePolynomial = () => {
    const { r1, r2 } = factor(coefficients.a, coefficients.b, coefficients.c);
    if (!r1 || !r2) {
      setResult(`There are no real roots`);
    } else if (r1 === r2) {
      setResult(`The real root is ${r1}`);
    } else {
      setResult(`The real roots are ${r1} and ${r2}`);
    }
    setComplete(true);
  };

  return (
    <div>
      <StyledPolynomialContainer>
        <Box between={4}>
          <Heading level="h2">
            Please enter the polynomial coefficients:
          </Heading>
          <Heading level="h1">
            <Strong>A</Strong>x<sup>2</sup> + <Strong>B</Strong>x +{" "}
            <Strong>C</Strong>
          </Heading>
        </Box>
        {complete && <Result result={result} />}
        <InputFields
          coefficients={coefficients}
          setCoefficients={setCoefficients}
        />
        <Box between={2} inline>
          <Button data-testid="solve_poly" onClick={solvePolynomial}>
            Solve Polynomial
          </Button>
          <Button
            data-testid="clear_poly"
            onClick={() => {
              setComplete(false);
              setResult("");
            }}
          >
            Clear Result
          </Button>
        </Box>
      </StyledPolynomialContainer>
    </div>
  );
};
export default Polynomial;
