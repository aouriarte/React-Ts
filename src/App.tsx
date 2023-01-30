import { useState, useEffect } from "react";
import { User } from "./types";
import ListUsers from "./components/ListUsers";
import AddUser from "./components/AddUser";
import { getAllUsers } from "./services/getAllUsers";

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
    getAllUsers().then(setUsers);
  }, []);

  // guardar datos del form
  const handleNewUser = (newUser: User): void => {
    setUsers((users) => [...users, newUser]);
  };

  return (
    <div className="grid place-content-center space-y-2">
      <ListUsers users={users} />
      <button
        type="submit"
        className="p-4 w-full border p-2 rounded-md transition bg-sky-500 hover:bg-sky-700 text-white"
      >
        Agregar usuario
      </button>
      {/* <AddUser onNewUser={handleNewUser} /> */}
    </div>
  );
}

export default App;
