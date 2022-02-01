import React from "react";
import Heading from "@tds/core-heading";
import { colorTelusPurple } from "@tds/core-colours";

import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 72px;
  background-color: ${colorTelusPurple};
  padding: 10px 0 10px 100px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Heading level="h1" invert>
        React Testing Tutorial
      </Heading>
    </StyledHeader>
  );
};

export default Header;
