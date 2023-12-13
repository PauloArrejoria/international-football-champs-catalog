import "./App.css";
import React from "react";
import Stats from "./componentes/Stats.js";
import PlayersTable from "./componentes/PlayersTable.js";

function App() {
  return (
    <div className="App">
      <Stats></Stats>
      <h2>Starting Team</h2>
      <PlayersTable></PlayersTable>
    </div>
  );
}

export default App;
