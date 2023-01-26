import { useState, useEffect } from "react";
import { Player } from "./types";
import ListPlayers from "./components/ListPlayers";
import "./App.css";

interface AppState {
  players: Player[]; // Array<Task>
}

const Initial_State = [
  {
    fullName: "Lionel Andrés Messi Cuccittini",
    age: 35,
    name: "Messi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
    dorsal: 10,
    position: "Delantero",
    country: "Argentina",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png",
  },
  {
    fullName: "Cristiano Ronaldo dos Santos Aveiro",
    age: 37,
    name: "Ronaldo",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/23/Cristiano_Ronaldo_WC2022_-_01.jpg",
    dorsal: 7,
    position: "Delantero",
    country: "Portugal",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1200px-Flag_of_Portugal.svg.png",
  },
];

function App() {
  const [players, setPlayers] = useState<AppState["players"]>([]);

  useEffect(() => {
    setPlayers(Initial_State);
  });

  return (
    <div className="App">
      <h1>Lista de jugadores</h1>
      <ListPlayers players={players} />
    </div>
  );
}

export default App;
