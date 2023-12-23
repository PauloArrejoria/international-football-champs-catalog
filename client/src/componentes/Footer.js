import React from "react";
import "../style/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Footer() {
  return (
    <footer className="d-flex justify-content-center">
      <p className="text-white">
        Hecho por{" "}
        <a
          href="https://www.linkedin.com/in/paulo-arrejoria-1070b4245/"
          className="fw-bold link text-white"
        >
          Paulo Arrejoria
        </a>{" "}
        •{" "}
        <a
          href="https://github.com/PauloArrejoria"
          className="fw-bold link text-white"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}

export default Footer;
