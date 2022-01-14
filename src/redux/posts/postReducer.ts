import { IError } from "../../interfaces/error.interface";
import { TActionPosts } from "./actionPosts";
import { IPosts } from "./posts.interface";
import { EPosts } from "./typesPosts";

export interface IPostsState {
  posts: IPosts[];
  post: IPosts | {};
  loading: boolean;
  error: IError;
}

const InitialState: IPostsState = {
  posts: [],
  post: {},
  loading: false,
  error: {
    status: false,
    message: "",
  },
};

export const postReducer = (
  state: IPostsState = InitialState,
  action: TActionPosts
) => {
  debugger;
  switch (action.type) {
    case EPosts.GET_POSTS:
    case EPosts.GET_POST:
      return {
        ...state,
        loading: true,
      };
    case EPosts.GET_POSTS_SUCCCESS:
      return {
        ...state,
        posts: action.payload.posts,
        loading: false,
      };
    case EPosts.GET_POST_SUCCCESS:
      return {
        ...state,
        post: action.payload.post,
        loading: false,
      };
    default:
      return state;
  }
};
