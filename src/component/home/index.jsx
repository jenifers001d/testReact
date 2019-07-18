import React from "react";
import styled from "styled-components";

import HomeLeft from "./homeLeft/index";
import HomePlay from "./homePlay/index";
import HomeRight from "./homeRight/index";

const Wrapper = styled.div`
  min-width: 1280px;
  height: 800px;
  background-color: #ffedf7;
  overflow-x: scroll;
  position: relative;
`;
const Container = styled.div`
  max-width: 1280px;
  height: 800px;
  margin: 0px auto;
`;
const Main = styled.div`
  width: 100%;
  height: 100%;
  padding: 48px 85px;
  display: flex;
`;
const Aside = styled.aside`
  width: 35.5%;
  height: 100%;
  position: absolute;
  right: 0px;
  top: 0px;
  background-color: #003164;
`;
export default class extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Main>
            <HomeLeft />
            <HomePlay />
            <HomeRight />
            <Aside />
          </Main>
        </Container>
      </Wrapper>
    );
  }
}
