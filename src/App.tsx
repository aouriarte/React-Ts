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
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  // guardar datos del form
  const handleNewUser = (newUser: User): void => {
    setUsers((users) => [...users, newUser]);
  };

  return (
    <div className="grid place-content-center gap-3">
      <ListUsers users={users} />
      <button
        type="submit"
        onClick={() => {
          setOpenModal(true);
        }}
        className="p-2 w-full border rounded-md transition bg-sky-500 hover:bg-sky-700 text-white mb-5"
      >
        Agregar usuario
      </button>
      {openModal && (
        <AddUser onNewUser={handleNewUser} closeModal={setOpenModal} />
      )}
    </div>
  );
}

export default App;
