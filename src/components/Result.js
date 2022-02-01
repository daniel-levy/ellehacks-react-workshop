import React from "react";
import Heading from "@tds/core-heading";
import styled from "styled-components";

const StyledResultContainer = styled.div`
  margin-top: 24px;
`;

const Result = ({ result }) => {
  return (
    <StyledResultContainer>
      <Heading data-testid="poly_result" level="h2">
        {result}
      </Heading>
    </StyledResultContainer>
  );
};

export default Result;
