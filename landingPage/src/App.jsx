import React from "react";
import Topo from "./topo.jsx";
import Rodape from "./rodape.jsx";
import './CSS/App.css'



export default function App() {
  return (
    <div className="container">
      <Topo />

      <div style={{ marginBottom: '20px' }}></div>

      <Rodape />
    </div>
  );
}
