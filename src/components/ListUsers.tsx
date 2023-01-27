import React from "react";
import { User } from "../types";

interface Props {
  users: User[];
}

const ListUsers = ({ users }: Props) => {
  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map((u, i) => {
          return (
            <li key={i}>
              <img src={u.avatar} alt="img not found" />
              <p>{u.name}</p>
              <p>{u.lastName}</p>
              <p>{u.nick}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListUsers;
