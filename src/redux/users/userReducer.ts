import { actionUsers } from "../users/actionUsers";
import { EUsers } from "./typesUsers";
import { IUsers } from "./users.interface";

export interface IUserState {
  users: IUsers[];
  userById: IUsers;
}

const InitialState: IUserState = {
  users: [],
  userById: {
    id: 1,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
    },
    geo: {
      lat: "-31.8129",
      lng: "62.5342",
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
};

export const userReducer = (
  state: IUserState = InitialState,
  action: actionUsers
) => {
  switch (action.type) {
    case EUsers.GET_USERS:
      return {
        ...state.users,
        users: [...action.payload.users],
      };
    case EUsers.GET_USERS_ID:
      const userById = state.users.find(
        (user) => action.payload.id === user.id
      );
      return {
        ...state.users,
        userById,
      };
    default:
      return state;
  }
};
