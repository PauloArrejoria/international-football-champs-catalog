import React from "react";
import Player from "./Player";
import "../style/PlayersTable.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function PlayersTable() {
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
        <Player
          number={23}
          pos={"GK"}
          name={"Dibu Martínez"}
          nat={"ar"}
          ovr={85}
        />
        <Player
          number={13}
          pos={"CB"}
          name={"Cuti Romero"}
          nat={"ar"}
          ovr={85}
        />
        <Player number={19} pos={"CB"} name={"Otamendi"} nat={"ar"} ovr={85} />
        <Player number={26} pos={"RB"} name={"Molina"} nat={"ar"} ovr={77} />
        <Player number={3} pos={"LB"} name={"Tagliafico"} nat={"ar"} ovr={84} />
        <Player
          number={24}
          pos={"DMF"}
          name={"Enzo Fernández"}
          nat={"ar"}
          ovr={84}
        />
        <Player number={7} pos={"CMF"} name={"De Paul"} nat={"ar"} ovr={88} />
        <Player
          number={20}
          pos={"AMF"}
          name={"A. Mac Allister"}
          nat={"ar"}
          ovr={82}
        />
        <Player number={11} pos={"LW"} name={"Di María"} nat={"ar"} ovr={92} />
        <Player number={10} pos={"SS"} name={"Messi"} nat={"ar"} ovr={97} />
        <Player
          number={9}
          pos={"CF"}
          name={"Julián Álvarez"}
          nat={"ar"}
          ovr={81}
        />
      </tbody>
    </table>
  );
}

export default PlayersTable;
