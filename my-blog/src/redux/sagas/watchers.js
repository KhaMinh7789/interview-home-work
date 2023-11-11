import { takeLatest, put, call } from "redux-saga/effects";
import * as api from "./api"; // Your API functions
import { ADD_COMMENT, ADD_POST, ADD_USER } from "../actions/types";
import { addCommentSuccess, addPostSuccess, addUserSuccess } from "../actions";

// Watcher for adding comments
export function* watchAddComment() {
  yield takeLatest(ADD_COMMENT, addComment);
}

// Worker for adding comments
function* addComment(action) {
  try {
    const newComment = yield call(api.addComment, action.payload);
    yield put(addCommentSuccess(newComment));
  } catch (error) {
    // Handle error
  }
}

// Similar watchers and workers for adding posts and users
// ...
