import { User, UsersResponse } from "../types";

const getUsers = (): Promise<UsersResponse> => {
  return fetch(
    "https://run.mocky.io/v3/8a86154b-fc3f-41d4-9fa7-15eaea7b64a7"
  ).then((res) => res.json());
};

const mapFromApiToUsers = (response: UsersResponse): Array<User> => {
  return response.map((user) => {
    const { first_name: name, last_name: lastName, email: nick, avatar } = user;

    return {
      name,
      lastName,
      nick,
      avatar,
    };
  });
};

export const getAllUsers = () => {
  return getUsers().then(mapFromApiToUsers);
};
