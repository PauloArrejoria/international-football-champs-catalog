import "./App.css";
import React, { useState, useEffect } from "react";
import Stats from "./componentes/Stats.js";
import PlayersTable from "./componentes/PlayersTable.js";

function App() {
  const [startingTeam, setStarting] = useState([]);
  const [reserveTeam, setReserve] = useState([]);

  const handleStatsUpdate = (newStartingTeam, newReserveTeam) => {
    setStarting(newStartingTeam);
    setReserve(newReserveTeam);
  };

  useEffect(() => {
    console.log(startingTeam);
    console.log(reserveTeam);
  });
  return (
    <div className="App">
      <Stats onUpdate={handleStatsUpdate} />
      <h2>Starting Team</h2>
      <PlayersTable squad={startingTeam} />
      <h2>Reserve Team</h2>
      <PlayersTable squad={reserveTeam} />
    </div>
  );
}

export default App;
