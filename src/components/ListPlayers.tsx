import React from "react";
import { Player } from "../types";

interface Props {
  players: Player[];
}

const ListPlayers = ({ players }: Props) => {
  return (
    <div>
      <ul>
        {players.map((p) => {
          return (
            <li key={p.name}>
              <img src={p.flag} alt="País" />
              <p>{p.country}</p>
              <img className="img" src={p.image} />
              <h3>{p.name}</h3>
              <span>{p.position}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListPlayers;
