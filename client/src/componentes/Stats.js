import React from "react";
import Bar from "./Bar";
import TeamsCarousel from "./TeamsCarousel";
import { useState, useEffect } from "react";
import Axios from "axios";
import "../style/Stats.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Stats({ onUpdate }) {
  const [teamsList, setTeams] = useState([]);
  const [startingTeam, setStarting] = useState([]);
  const [reserveTeam, setReserve] = useState([]);
  const [teamListPos, setTeamListPos] = useState(0);
  const [bloqueado, setBloqueado] = useState(false);

  const incTeamListPos = () => {
    return new Promise((resolve) => {
      setTeamListPos((prevPos) => {
        const newPos = prevPos === teamsList.length - 1 ? 0 : prevPos + 1;
        resolve(newPos);
        return newPos;
      });
    });
  };

  const decTeamListPos = () => {
    return new Promise((resolve) => {
      setTeamListPos((prevPos) => {
        const newPos = prevPos === 0 ? teamsList.length - 1 : prevPos - 1;
        resolve(newPos);
        return newPos;
      });
    });
  };

  const nexTeam = async () => {
    if (!bloqueado) {
      const newTeamListPos = await incTeamListPos();
      const teamId = teamsList[newTeamListPos].id;
      getStartingTeam(teamId);
      getReserveTeam(teamId);
      setBloqueado(true);
      setTimeout(() => {
        setBloqueado(false);
      }, 600);
    }
  };

  const prevTeam = async () => {
    if (!bloqueado) {
      const newTeamListPos = await decTeamListPos();
      const teamId = teamsList[newTeamListPos].id;
      getStartingTeam(teamId);
      getReserveTeam(teamId);
      setBloqueado(true);
      setTimeout(() => {
        setBloqueado(false);
      }, 600);
    }
  };

  const getTeams = () => {
    return Axios.get("http://localhost:3001/teams").then((response) => {
      setTeams(response.data);
      console.log(response.data);
      return response.data; // Devuelve los equipos para que puedan ser utilizados en la siguiente promesa
    });
  };

  const getStartingTeam = (teamId) => {
    return Axios.get(`http://localhost:3001/starting/${teamId}`).then(
      (response) => {
        setStarting(response.data);
        console.log(response.data);
      }
    );
  };

  const getReserveTeam = (teamId) => {
    return Axios.get(`http://localhost:3001/reserve/${teamId}`).then(
      (response) => {
        setReserve(response.data);
        console.log(response.data);
      }
    );
  };

  onUpdate(startingTeam, reserveTeam);

  useEffect(() => {
    getTeams().then((teams) => {
      if (teams && teams.length > 0) {
        const teamId = teams[teamListPos].id;
        getStartingTeam(teamId);
        getReserveTeam(teamId);
      }
    });
  }, [teamListPos]);
  return (
    <div className="stats py-2 container-fluid">
      <div id="carouselExample" className="carousel slide">
        <TeamsCarousel teamsList={teamsList} />
        <button
          onClick={prevTeam}
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          onClick={nexTeam}
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="row d-flex align-items-center">
        <span className="col-3 text-white bg-green fw-bold">Attack</span>
        <span className="col-2 bg-yellow fw-bold text-warning">90</span>
        <Bar width={90}></Bar>
      </div>
      <div className="row d-flex align-items-center">
        <span className="col-3 text-white bg-green fw-bold">Defense</span>
        <span className="col-2 bg-yellow fw-bold ovr80-89">83</span>
        <Bar width={83}></Bar>
      </div>
      <div className="row d-flex align-items-center">
        <span className="col-3 text-white bg-green fw-bold">Midfield</span>
        <span className="col-2 bg-yellow fw-bold ovr80-89">84</span>
        <Bar width={84}></Bar>
      </div>
      <div className="row d-flex align-items-center">
        <span className="col-3 text-white bg-green fw-bold">Speed</span>
        <span className="col-2 bg-yellow fw-bold text-success">79</span>
        <Bar width={79}></Bar>
      </div>
      <div className="row d-flex align-items-center">
        <span className="col-3 text-white bg-green fw-bold">Teamwork</span>
        <span className="col-2 bg-yellow fw-bold text-success">76</span>
        <Bar width={76}></Bar>
      </div>
      <div className="ovr-container">
        <span className="text-white fw-bold ovr-font">
          Overall: <span className="ovr80-89">85</span>
        </span>
      </div>
    </div>
  );
}

export default Stats;
