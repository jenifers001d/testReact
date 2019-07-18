import { combineReducers } from "redux";

const iniState = {
  todolist: [
    {
      content: "Have Dinner",
      isDone: false,
      id: 1563348503586,
      selected: true,
    },
    {
      content: "Take A Shower",
      isDone: false,
      id: 1563348603586,
      selected: false,
    },
    { content: "Eat Snack", isDone: true, id: 1563348703586, selected: false },
  ],
};

function appReducer(prevState = iniState, action) {
  switch (action.type) {
    case "ADD_MISSION":
      prevState.todolist.push(action.newMission);
      return {
        todolist: prevState.todolist,
      };
    case "FINISH_MISSION":
      if (prevState.todolist[action.index].isDone === false) {
        prevState.todolist[action.index].isDone = true;
      } else {
        prevState.todolist[action.index].isDone = false;
      }
      return {
        todolist: prevState.todolist,
      };
    default:
      return prevState;
  }
}

export default combineReducers({
  appReducer,
});
