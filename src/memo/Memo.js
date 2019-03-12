import React, { Component, memo } from "react";
import styled from "styled-components";

const CountColor = styled.div`
  && {
    display: flex;
    jusitfy-content: center;
    align-items: center;
    color: ${props => (props.color % 5 ? "#e74c3c" : "#f1c40f")};
    font-size: 40px;
  }
`;

const Button = styled.button`
  border: none;
  padding: 8px 16px;
  margin: 16px;
  background-color: #ecf0f1;
  font-size: 24px;
  color: #3498db;
`;

const RenderCount = memo(({ count }) => (
  <CountColor color={count}>%5</CountColor>
));

class Memo extends Component {
  state = {
    count: 0
  };
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    const { count } = this.state;
    return (
      <>
        <CountColor>
          {count}
          <RenderCount count={count % 5} />
        </CountColor>
        <Button onClick={this.handleClick}>increment</Button>
      </>
    );
  }
}

export default Memo;
