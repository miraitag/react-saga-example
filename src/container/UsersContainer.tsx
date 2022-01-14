import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosAPI } from "../helpers/api.helper";
import { doGetUsers } from "../redux/users/actionUsers";
import { IUserState } from "../redux/users/userReducer";

export const UsersContainer = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: IUserState) => state.users);

  useEffect(() => {
    axiosAPI
      .get("users")
      .then((response) => dispatch(doGetUsers(response.data)))
      .catch((e) => e.message);
  }, [dispatch]);

  return <div style={{ background: "red" }}>{JSON.stringify(users)}</div>;
};
