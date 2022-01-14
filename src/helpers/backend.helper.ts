import { get } from "./api.helper";
import * as url from "./url.helper";

export const getPosts = () => get(url.GET_POSTS);

export const getPost = (id: number) =>
  get(url.GET_POST, {
    params: {
      id,
    },
  });
