import React from "react";
import "./pages.css";
import styled from "styled-components";
//import MaterialIcon from "material-icons-react";
import MaterialIcon from "@material/react-material-icon";
import Todolist from "./todolist/index.jsx";
import CloseLogoBar from "./closeLogoBar/index.jsx";

import { Route, NavLink } from "react-router-dom";

const Wrapper = styled.div`
  min-width: 1280px;
  height: 800px;
  background-color: #003164;
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
const Tags = styled.div`
  flex: 0 0 auto;
  width: 483px;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  flex: 0 0 auto;
  width: 445px;
  margin-right: 142px;
`;
const StyledLink = styled(NavLink)`
  font-size: 36px;
  margin-bottom: 42px;
  span {
    display: inline-block;
    margin-left: 18px;
  }
`;

function Analytics() {
  return <h2>Analytics</h2>;
}
function Ringtones() {
  return <h2>Ringtones</h2>;
}
export default class extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Main>
            <Tags>
              <StyledLink
                to="/info/todolist"
                activeStyle={{ color: "#FF4384" }}
              >
                <MaterialIcon icon="list" />
                <span>TO-DO LIST</span>
              </StyledLink>
              <StyledLink
                to="/info/analytics"
                activeStyle={{ color: "#FF4384" }}
              >
                <MaterialIcon icon="assessment" />
                <span>ANALYTICS</span>
              </StyledLink>
              <StyledLink
                to="/info/ringtones"
                activeStyle={{ color: "#FF4384" }}
              >
                <MaterialIcon icon="library_music" />
                <span>RINGTONES</span>
              </StyledLink>
            </Tags>
            <Content>
              <Route path="/info/todolist" component={Todolist} />
              <Route path="/info/analytics" component={Analytics} />
              <Route path="/info/ringtones" component={Ringtones} />
            </Content>
            <CloseLogoBar />
          </Main>
        </Container>
      </Wrapper>
    );
  }
}
