const express = require("express");
const app = express();
const mysql = require("mysql");
const util = require("util");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "international_football_champs_catalog",
});

const queryAsync = util.promisify(connection.query).bind(connection);

app.listen(3001, () => {
  console.log("Corriendo en el puerto 3001");
});

//Get Teams
app.get("/teams", async (req, res) => {
  try {
    // Usa await para esperar a que la consulta se complete
    const result = await queryAsync("SELECT * from teams");
    // Envía la respuesta solo después de obtener los datos
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al obtener datos");
  }
});

//Get Players
app.get("/players", (req, res) => {
  connection.query("SELECT * FROM players", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//Get Team
app.get("/team/:team_id", (req, res) => {
  const teamId = req.params.team_id;
  connection.query(
    "SELECT * FROM teams WHERE id = ?",
    teamId,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//Get Starting Teams (All)
app.get("/starting", (req, res) => {
  connection.query(
    "SELECT id_team, id_player, name, nat, starting_players.pos, ovr, speed, teamwork, number FROM players JOIN starting_players ON starting_players.id_player = players.id",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//Get Starting Team by team id
app.get("/starting/:team_id", async (req, res) => {
  const teamId = req.params.team_id;

  try {
    // Usa await para esperar a que la consulta se complete
    const result = await queryAsync(
      "SELECT id_team, id_player, name, nat, starting_players.pos, ovr, speed, teamwork, number FROM players JOIN starting_players ON starting_players.id_player = players.id WHERE id_team = ? ORDER BY FIELD(starting_players.pos, 'GK', 'SW', 'CB', 'RB', 'LB', 'DM', 'CM', 'RWB', 'LWB', 'RM', 'LM', 'AM', 'RW', 'LW', 'SS', 'CF');",
      teamId
    );

    // Envía la respuesta solo después de obtener los datos
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al obtener datos");
  }
});

//Get Reserve Team
app.get("/reserve/:team_id", (req, res) => {
  const teamId = req.params.team_id;
  connection.query(
    "SELECT id_team, id_player, name, nat, pos, ovr, speed, teamwork, number FROM players JOIN reserve_players ON reserve_players.id_player = players.id WHERE id_team = ? ORDER BY CASE pos WHEN 'GK' THEN 1 WHEN 'SW' THEN 2 WHEN 'CB' THEN 3 WHEN 'SB' THEN 4 WHEN 'RB' THEN 5 WHEN 'LB' THEN 6 WHEN 'DM' THEN 7 WHEN 'CM' THEN 8 WHEN 'WB' THEN 9 WHEN 'RWB' THEN 10 WHEN 'LWB' THEN 11 WHEN 'SM' THEN 12 WHEN 'RM' THEN 13 WHEN 'LM' THEN 14 WHEN 'AM' THEN 15 WHEN 'WF' THEN 16 WHEN 'RW' THEN 17 WHEN 'LW' THEN 18 WHEN 'SS' THEN 19 WHEN 'CF' THEN 20 ELSE 21 END, number;",
    teamId,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
