import axios, { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { doGetPost } from "../redux/posts/actionPosts";
import { doGetUsers, IGetUsers, IGetUsersID } from "../redux/users/actionUsers";
import { EUsers } from "../redux/users/typesUsers";
import { IUsers } from "../redux/users/users.interface";

const getUsers = () => axios.get<IUsers>("users");
const getUsersID = (id: number) => axios.get<IUsers>(`users/${id}`);

function* getUserSaga() {
  try {
    const { data }: AxiosResponse<IGetUsers> = yield call(getUsers);
    yield put(doGetUsers(data.payload.users));
  } catch (error) {}
}

function* getUsersIDSaga(action: IGetUsersID) {
  try {
    const { data }: AxiosResponse<IGetUsersID> = yield call(
      getUsersID,
      action.payload.id
    );
    yield put(doGetPost(data.payload.id));
  } catch (error) {}
}

export function* usersSaga() {
  yield takeEvery(EUsers.GET_USERS, getUserSaga);
  yield takeEvery(EUsers.GET_USERS_ID, getUsersIDSaga);
}
