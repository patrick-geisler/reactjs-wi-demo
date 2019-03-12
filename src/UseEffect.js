import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Status = styled.div`
  font-size: 40px;
  color: ${props => (props.clicked ? "#2ecc71" : "#e74c3c")};
`;

const ClientStatus = props => {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    window.addEventListener("keydown", () => setClicked(true));
    return window.addEventListener("keyup", () => setClicked(false));
  });
  return (
    <Status clicked={clicked}>{clicked ? "Pressed" : "Not Pressed"}</Status>
  );
};

export default ClientStatus;
