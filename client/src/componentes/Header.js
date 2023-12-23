import React from "react";
import "../style/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Header() {
  return (
    <header className="text-white">
      <p className="fw-bold display-6">World Champions Catalog</p>
      <p className="subtitle">All the world champions in one app</p>
    </header>
  );
}

export default Header;
