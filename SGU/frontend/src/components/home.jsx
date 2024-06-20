import React, { useState } from 'react';
import {FaFileDownload, FaTh, FaHeart , FaUserPlus } from "react-icons/fa";
import Classes from './classes';
import FormEnvio from './FormEnvio';
import HistoricoEnvios from './Hist';
import '../../public/css/home.css';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(null); 

 
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'FormEnvio':
        return <FormEnvio />;
      case 'classes':
        return <Classes />;
      case 'Historico':
        return <HistoricoEnvios />;

      default:
        return null;
    }
  };

  return (
    <div>
     
      <nav className="navbar">
       <h2>  Sistema de gerenciamento de unidades</h2>
      </nav>

     
      <main className="main">
      
        <h6 className="desejo"></h6>
        <div className="grid-container">
          <button className="square-button" onClick={() => handlePageChange('FormEnvio')}>
            <FaUserPlus size={64} />
            <span>Cadastrar</span>
          </button>
          <button className="square-button" onClick={() => handlePageChange('Historico')}>
            <FaTh  size={64} />
            <span>Membros</span>
          </button>

          <button className="square-button" onClick={() => handlePageChange('classes')}>
            <FaFileDownload size={64} />
            <span>Downloads</span>
          </button>
        </div>
        {renderCurrentPage()}
      </main>
    </div>
  );
}
