import React from "react";
import styled from "styled-components";
import MaterialIcon from "@material/react-material-icon";
import InputMission from "../../inputMission/index.jsx";

import { finishMission } from "../../redux/actions.jsx";
import store from "../../redux/store.jsx";

const Title = styled.div`
  color: white;
  font-size: 24px;
  margin-top: 48px;
  padding: 8px 16px;
  background-color: rgba(255, 255, 255, 0.2);
`;
const Container = styled.div`
  padding: 5px 0px;
`;
const ListContainer = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  height: 32px;
  padding: 23px 0px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
const List = styled.li`
  list-style-type: none;
  text-indent: 10px;
`;
const CursorMaterialIcon = styled(MaterialIcon)`
  cursor: pointer;
`;
const StyledMaterialIcon = styled(CursorMaterialIcon)`
  flex: 1;
  text-align: right;
`;
const StyledList = styled(List)`
  text-decoration: line-through;
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
  toggleDone = e => {
    const index = e.target.id;
    store.dispatch(finishMission(index));
  };
  render() {
    const { todolist } = this.state;
    return (
      <div>
        <InputMission />
        <div className="todo">
          <Title>TO-DO</Title>
          <Container>
            <ul>
              {todolist.map((todo, index) => {
                if (todo.isDone === false) {
                  return (
                    <ListContainer key={todo.id}>
                      <CursorMaterialIcon
                        id={index}
                        onClick={this.toggleDone}
                        icon="radio_button_unchecked"
                      />
                      <List>{todo.content}</List>
                      <StyledMaterialIcon icon="play_circle_outline" />
                    </ListContainer>
                  );
                }
              })}
            </ul>
          </Container>
        </div>
        <div className="done">
          <Title>DONE</Title>
          <Container>
            <ul>
              {todolist.map((todo, index) => {
                if (todo.isDone === true) {
                  return (
                    <ListContainer key={todo.id}>
                      <CursorMaterialIcon
                        id={index}
                        onClick={this.toggleDone}
                        icon="check_circle_outline"
                      />
                      <StyledList>{todo.content}</StyledList>
                    </ListContainer>
                  );
                }
              })}
            </ul>
          </Container>
        </div>
      </div>
    );
  }
}
