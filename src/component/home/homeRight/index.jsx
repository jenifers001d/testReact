import React from "react";
import styled from "styled-components";
import MaterialIcon from "material-icons-react";
import { Link } from "react-router-dom";

import Logo from "../../logo/index";

const IconsBtn = styled.div`
  height: 204px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const HomeRightWrapper = styled.div`
  width: 36px;
  flex: 0 0 auto;
  z-index: 1;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default class extends React.Component {
  render() {
    return (
      <HomeRightWrapper>
        <IconsBtn>
          <Link to="/info/todolist">
            <MaterialIcon icon="list" color="#ffffff" />
          </Link>
          <Link to="/info/analytics">
            <MaterialIcon icon="assessment" color="#ffffff" />
          </Link>
          <Link to="/info/ringtones">
            <MaterialIcon icon="library_music" color="#ffffff" />
          </Link>
        </IconsBtn>
        <Logo />
      </HomeRightWrapper>
    );
  }
}
