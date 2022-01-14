import { all } from "redux-saga/effects";
import { postsSaga } from "./posts";
import { usersSaga } from "./users";

export function* rootSaga() {
  yield all([postsSaga(), usersSaga()]);
}
