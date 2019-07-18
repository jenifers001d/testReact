import React from "react";
import styled from "styled-components";
import MaterialIcon from "material-icons-react";
import Logo from "../../logo/index.jsx";

import { Link } from "react-router-dom";

const CloseLogoBar = styled.div`
  width: 36px;
  flex: 0 0 auto;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default class extends React.Component {
  render() {
    return (
      <CloseLogoBar>
        <Link to="/">
          <MaterialIcon icon="close" color="#ffffff" />
        </Link>
        <Logo />
      </CloseLogoBar>
    );
  }
}
