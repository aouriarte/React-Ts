import { useState, useEffect } from "react";
import { User, UsersResponse } from "./types";
import ListUsers from "./components/ListUsers";
import AddUser from "./components/AddUser";
import "./App.css";

interface AppState {
  users: User[]; // Array<User>
}

// const Initial_State = [
//   {
//     name: "Alexis",
//     lastName: "Uriarte",
//     nick: "@aouriarte",
//     avatar:
//       "https://static.wikia.nocookie.net/king-of-thieves/images/a/ab/White_shadow.png",
//   },
// ];

function App() {
  const [users, setUsers] = useState<AppState["users"]>([]);

  useEffect(() => {
    const getUsers = (): Promise<UsersResponse> => {
      return fetch(
        "https://run.mocky.io/v3/8a86154b-fc3f-41d4-9fa7-15eaea7b64a7"
      ).then((res) => res.json());
    };

    const mapFromApiToUsers = (response: UsersResponse): Array<User> => {
      return response.map((user) => {
        const {
          first_name: name,
          last_name: lastName,
          email: nick,
          avatar,
        } = user;

        return {
          name,
          lastName,
          nick,
          avatar,
        };
      });
    };
    
    getUsers().then(mapFromApiToUsers).then(setUsers);
  }, []);

  // guardar datos del form
  const handleNewUser = (newUser: User): void => {
    setUsers((users) => [...users, newUser]);
  };

  return (
    <div className="App">
      <ListUsers users={users} />
      <AddUser onNewUser={handleNewUser} />
    </div>
  );
}

export default App;
