import "./App.css";
import React, { useState } from "react";
import Stats from "./componentes/Stats.js";
import PlayersTable from "./componentes/PlayersTable.js";
import Footer from "./componentes/Footer.js";
import Header from "./componentes/Header.js";

function App() {
  const [startingTeam, setStarting] = useState([]);
  const [reserveTeam, setReserve] = useState([]);

  const handleStatsUpdate = (newStartingTeam, newReserveTeam) => {
    setStarting(newStartingTeam);
    setReserve(newReserveTeam);
  };

  return (
    <div className="App">
      <Header />
      <Stats onUpdate={handleStatsUpdate} />
      <h2>Starting Team</h2>
      <PlayersTable squad={startingTeam} />
      <h2>Reserve Team</h2>
      <PlayersTable squad={reserveTeam} />
      <Footer />
    </div>
  );
}

export default App;
