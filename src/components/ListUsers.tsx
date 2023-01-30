import React from "react";
import { User } from "../types";

interface Props {
  users: User[];
}

const ListUsers = ({ users }: Props) => {
  return (
    <>
      <h1 className="grid place-content-center text-4xl text-white font-bold mt-5 mb-5">
        Lista de Usuarios
      </h1>
      <ul className="flex flex-col space-y-2 divide-y">
        {users.map((u, i) => {
          return (
            <div
              className="flex justify-between space-x-6 items-center p-6 bg-white rounded"
              key={i}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={u.avatar}
                  className="rounded-full h-14 w-14"
                  alt="Img Not Found"
                />
                <div className="flex flex-col space-y-0">
                  <span>
                    {u.name} {u.lastName}
                  </span>
                  <span className="text-slate-400 text-sm">{u.nick}</span>
                </div>
              </div>
              <div>
                <button className="border rounded-md px-4 py-2">View</button>
              </div>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default ListUsers;
