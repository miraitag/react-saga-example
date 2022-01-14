import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { doGetPost, doGetPosts } from "../redux/posts/actionPosts";
import { IPostsState } from "../redux/posts/postReducer";

export const PostsContainer = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector<RootStateOrAny, IPostsState>(
    (state) => state.posts
  );
  const { post } = useSelector<RootStateOrAny, IPostsState>(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(doGetPosts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(doGetPost(5));
  }, [dispatch]);

  return (
    <div>
      {console.log(posts)}
      {console.log(post)}
      <div style={{ background: "red" }}>
        <code>{JSON.stringify(posts)}</code>
      </div>
      <br />
      <br />
      <br />
      <div style={{ background: "blue" }}>
        <code>{JSON.stringify(post)}</code>
      </div>
    </div>
  );
};
