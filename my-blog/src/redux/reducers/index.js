import { combineReducers } from "redux";
import commentReducer from "./commentReducer";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  comments: commentReducer,
  posts: postReducer,
  users: userReducer,
});

export default rootReducer;
