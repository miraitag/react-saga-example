import { EUsers } from "./typesUsers";
import { IUsers } from "./users.interface";

/**
 * Types
 */

export type actionUsers =
  | {
      type: EUsers.GET_USERS;
      payload: { users: IUsers[] };
    }
  | {
      type: EUsers.GET_USERS_ID;
      payload: { id: number };
    };

/**
 * Interfaces
 */

export interface IGetUsers {
  type: typeof EUsers.GET_USERS;
  payload: { users: IUsers[] };
}

export interface IGetUsersID {
  type: typeof EUsers.GET_USERS_ID;
  payload: { id: number };
}

/**
 * Action Creators
 */

export const doGetUsers = (users: IUsers[]): actionUsers => ({
  type: EUsers.GET_USERS,
  payload: {
    users,
  },
});

export const doGetUsersID = (id: number): actionUsers => ({
  type: EUsers.GET_USERS_ID,
  payload: {
    id,
  },
});
