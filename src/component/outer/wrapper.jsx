import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 1280px;
  height: 800px;
  background-color: #ffedf7;
  overflow-x: scroll;
  position: relative;
`;

export default function() {
  return <Wrapper />;
}
