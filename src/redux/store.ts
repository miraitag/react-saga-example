import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootSaga } from "../sagas";
import { postReducer } from "./posts/postReducer";
import { userReducer } from "./users/userReducer";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    posts: postReducer,
    users: userReducer,
  }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
