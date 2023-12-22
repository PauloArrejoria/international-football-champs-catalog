import React from "react";
import Player from "./Player";
import "../style/PlayersTable.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function PlayersTable({ squad }) {
  return (
    <table className="table players-table container-fluid">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Pos</th>
          <th scope="col">Name</th>
          <th scope="col">Nat</th>
          <th scope="col">Ovr</th>
        </tr>
      </thead>
      <tbody>
        {squad.map((val, key) => (
          <Player
            key={val.id_player}
            number={val.number}
            pos={val.pos}
            name={val.name}
            nat={val.nat}
            ovr={val.ovr}
          />
        ))}
      </tbody>
    </table>
  );
}

export default PlayersTable;
