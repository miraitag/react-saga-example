import { IPosts } from "./posts.interface";
import { EPosts } from "./typesPosts";

/**
 * Types
 */

export type TActionPosts =
  | {
      type: EPosts.GET_POSTS;
    }
  | {
      type: EPosts.GET_POSTS_SUCCCESS;
      payload: {
        posts: IPosts[];
      };
    }
  | {
      type: EPosts.GET_POST;
      payload: {
        id: number;
      };
    }
  | {
      type: EPosts.GET_POST_SUCCCESS;
      payload: {
        post: IPosts;
      };
    };

/**
 * Interfaces
 */
export interface IGetsPosts {
  type: typeof EPosts.GET_POSTS;
}

export interface IActionGetPostsSuccess {
  type: typeof EPosts.GET_POSTS_SUCCCESS;
  payload: {
    posts: IPosts[];
  };
}

export interface IActionGetPost {
  type: typeof EPosts.GET_POST;
  payload: {
    id: number;
  };
}

export interface IActionGetPostSuccess {
  type: typeof EPosts.GET_POST_SUCCCESS;
  payload: {
    post: IPosts;
  };
}

/**
 * Action Creators
 */

export const doGetPosts = (): TActionPosts => ({
  type: EPosts.GET_POSTS,
});

export const doGetPostsSuccess = (posts: IPosts[]): TActionPosts => ({
  type: EPosts.GET_POSTS_SUCCCESS,
  payload: {
    posts,
  },
});

export const doGetPost = (id: number): TActionPosts => ({
  type: EPosts.GET_POST,
  payload: {
    id,
  },
});

export const doGetPostSuccess = (post: IPosts): TActionPosts => ({
  type: EPosts.GET_POST_SUCCCESS,
  payload: {
    post,
  },
});
