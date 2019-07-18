import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  font-family: Futura;
  font-size: 24px;
  transform: translate(0, -64px) rotate(90deg);
`;

export default function() {
  return <Logo>POMODORO</Logo>;
}
