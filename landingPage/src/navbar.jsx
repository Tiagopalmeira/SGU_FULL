import React from "react";
import './CSS/navbar.css'; 

function Navbar({ cliqueSecao }) {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="./src/public/react2.png" alt="Logo" />
      </div>

      <ul className="menu">
        <li><button onClick={() => cliqueSecao('inicio')}> Início </button></li>
        <li><button onClick={() => cliqueSecao('sobre')}> Contratar </button></li>
        <li><button onClick={() => cliqueSecao('servicos')}> Beneficios </button></li>
      </ul>

    </div>
  );
}

export default Navbar;
