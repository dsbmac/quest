import { combineReducers } from "redux";

import todo_reducer from "./todo_reducer";
import program_reducer from "./program_reducer";

export default combineReducers({
  todos: todo_reducer,
  programs: program_reducer
});
