import { call, put, takeEvery } from "redux-saga/effects";
import { getPost, getPosts } from "../helpers/backend.helper";
import {
  doGetPostsSuccess,
  doGetPostSuccess,
  IActionGetPost,
} from "../redux/posts/actionPosts";
import { EPosts } from "../redux/posts/typesPosts";

function* getPostsSaga() {
  try {
    const { data } = yield call(getPosts);
    yield put(doGetPostsSuccess(data));
  } catch (e) {
    //yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* getPostSaga(action: IActionGetPost) {
  try {
    const { data } = yield call(getPost, action.payload.id);
    yield put(doGetPostSuccess(data[0]));
  } catch (e) {
    // yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

export function* postsSaga() {
  yield takeEvery(EPosts.GET_POSTS, getPostsSaga);
  yield takeEvery(EPosts.GET_POST, getPostSaga);
}
