import React, { Component, lazy, Suspense } from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  padding: 8px 16px;
  margin: 16px;
  background-color: #ecf0f1;
  font-size: 24px;
  color: #3498db;
`;
const LazyComponent = lazy(() => import("./LazyComponent"));

class Lazy extends Component {
  state = {
    imageShowing: false
  };

  showImage = event => {
    event.preventDefault();
    this.setState({ imageShowing: true });
  };

  hideImage = event => {
    event.preventDefault();
    this.setState({ imageShowing: false });
  };

  render() {
    return (
      <Suspense fallback={<div />}>
        <Button
          onClick={this.state.imageShowing ? this.hideImage : this.showImage}
          className="lazy"
        >
          Toggle Component
        </Button>
        {this.state.imageShowing && <LazyComponent />}
      </Suspense>
    );
  }
}

export default Lazy;
