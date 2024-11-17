import counterReducer from "./counter";
import { combineReducers } from "redux";
import todoReducer from "./todo";

const allReducers = combineReducers({
  counterReducer,
  todoReducer,
  //-thêm các reducer tại đây
});

export default allReducers;