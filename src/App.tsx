import { Provider } from "react-redux";
import { PostsContainer } from "./container/PostsContainer";
import { UsersContainer } from "./container/UsersContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <PostsContainer />
      {/* <br />
      <hr />
      <br />
      <UsersContainer /> */}
    </Provider>
  );
}

export default App;
