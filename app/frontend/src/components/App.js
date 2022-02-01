import React from "react";
import Header from "./Header";
import Polynomial from "./Polynomial";
import styled from "styled-components";

const PaddedContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
`;

function App() {
  return (
    <div>
      <Header />
      <PaddedContent>
        <Polynomial></Polynomial>
      </PaddedContent>
    </div>
  );
}

export default App;
