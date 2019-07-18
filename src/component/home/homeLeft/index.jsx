import React from "react";
import styled from "styled-components";
import MaterialIcon from "@material/react-material-icon";
import InputMission from "../../inputMission/index.jsx";

import { Link } from "react-router-dom";

import store from "../../redux/store";

const HomeLeftWrapper = styled.div`
  flex: 0 0 auto;
  width: 445px;
`;
const Title = styled.div`
  margin-top: 145px;
  display: flex;
`;
const ListStyleBigO = styled.div`
  width: 48px;
  height: 48px;
  border: 2px #003164 solid;
  border-radius: 50%;
`;
const ListStyleRight = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h2 {
    letter-spacing: 1px;
    font-size: 24px;
    color: #003164;
  }
  div {
    width: 12px;
    height: 12px;
    border: 1px #ff4384 solid;
    border-radius: 50%;
  }
`;
const Timer = styled.div`
  width: 445px;
  height: 206px;
  font-size: 172px;
  color: #ff4384;
`;
const Container = styled.div`
  margin-top: 100px;
`;
const ListContainer = styled.div`
  display: flex;
  align-items: center;
  color: #003164;
  height: 32px;
  padding: 23px 0px;
  border-bottom: 1px solid rgba(0, 49, 100, 0.2);
`;
const List = styled.li`
  list-style-type: none;
  text-indent: 6px;
`;
const StyledMaterialIcon = styled(MaterialIcon)`
  flex: 1;
  text-align: right;
  cursor: pointer;
`;
const More = styled.p`
  text-align: right;
  color: #ff4384;
  cursor: pointer;
`;
export default class extends React.Component {
  state = {
    todolist: store.getState().appReducer.todolist,
  };
  unsubscribe = null;
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const mission = store.getState().appReducer.todolist;
      this.setState({
        todolist: mission,
      });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { todolist } = this.state;
    let count = 0;
    let selectedTodo = "";
    if (todolist.length !== 0) {
      for (let i = 0; i < todolist.length; i++) {
        if (todolist[i].selected === true) {
          selectedTodo = todolist[i].content;
          break;
        }
      }
    }
    return (
      <HomeLeftWrapper>
        <InputMission />
        <Title>
          <ListStyleBigO />
          <ListStyleRight>
            {todolist.length !== 0 ? (
              <h2>{selectedTodo}</h2>
            ) : (
              <h2>Please add a mission at first</h2>
            )}
            <div />
          </ListStyleRight>
        </Title>
        <Timer>25:00</Timer>
        <Container>
          <ul>
            {todolist.map((todo, index) => {
              if (
                todo.isDone === false &&
                todo.selected !== true &&
                count < 3
              ) {
                count++;
                return (
                  <ListContainer key={todo.id}>
                    <MaterialIcon icon="radio_button_unchecked" />
                    <List>{todo.content}</List>
                    <StyledMaterialIcon icon="play_circle_outline" />
                  </ListContainer>
                );
              }
            })}
          </ul>
        </Container>
        {count < 3 ? null : (
          <Link to="/info/todolist">
            <More>MORE</More>
          </Link>
        )}
      </HomeLeftWrapper>
    );
  }
}
