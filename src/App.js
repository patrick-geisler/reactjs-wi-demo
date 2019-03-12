import React, { Component } from "react";
import styled from "styled-components";
import Memo from "./memo/Memo";
import Lazy from "./Lazy";
import Context from "./Context";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import { ContextProvider } from "./ColorContext";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Row = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  flex: 0 1 100%;
  display: flex;
  justify-content: ${props => props.jusitfy || "center"};
  align-items: center;
  padding: 40px 20vw;
  background-color: ${props => props.color || "white"};
  h1 {
    color: white;
    flex: 1;
  }
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Row color="#1abc9c" jusitfy="space-around">
          <h1>Memo</h1>
          <Memo />
        </Row>
        <Row color="#f1c40f" jusitfy="space-around">
          <h1>Lazy</h1>
          <Lazy />
        </Row>
        <Row color="#e67e22">
          <h1>UseState</h1>
          <UseState />
        </Row>
        <Row color="#3498db">
          <h1>UseEffect</h1>
          <UseEffect className={"UseEffect"} />
        </Row>
      </Wrapper>
    );
  }
}

export default App;
