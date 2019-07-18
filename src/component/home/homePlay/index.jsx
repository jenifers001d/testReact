import React from "react";
import styled from "styled-components";
import MaterialIcon from "material-icons-react";

const HomePlayWrapper = styled.div`
  flex: 0 0 auto;
  z-index: 1;
  width: 540px;
  margin-left: 26px;
  margin-right: 59px;
  display: flex;
  align-items: center;
`;

const OuterCir = styled.div`
  width: 100%;
  height: 540px;
  border: 3px #ff4384 solid;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerCir = styled.div`
  width: 95%;
  height: 95%;
  background-color: #ff4384;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Stop = styled.div`
  font-size: 66px;
  color: white;
  position: absolute;
  top: 44%;
  right: 37%;
  :hover {
    cursor: pointer;
  }
`;

export default class extends React.Component {
  render() {
    return (
      <HomePlayWrapper>
        <OuterCir>
          <InnerCir>
            <MaterialIcon icon="play_circle_filled" color="#ffffff" />
            <Stop>.</Stop>
          </InnerCir>
        </OuterCir>
      </HomePlayWrapper>
    );
  }
}
