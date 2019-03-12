import React, { Component } from "react";
import { MyContext } from "./ColorContext";
import styled from "styled-components";

const H1 = styled.h1`
  && {
    flex: 0;
    color: ${props => props.color};
  }
`;

class Color extends Component {
  static contextType = MyContext;
  componentDidMount() {
    const value = this.context;
    console.log(this.context);
  }
  render() {
    const value = this.context;
    return <H1 color={value}>{value}</H1>;
  }
}

export default Color;
