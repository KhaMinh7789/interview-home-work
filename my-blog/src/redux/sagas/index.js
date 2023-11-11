import { all } from "redux-saga/effects";
import { watchAddComment, watchAddPost, watchAddUser } from "./watchers";

export default function* rootSaga() {
  yield all([
    watchAddComment(),
    watchAddPost(),
    watchAddUser(),
    // Add more watchers for other sagas
  ]);
}
