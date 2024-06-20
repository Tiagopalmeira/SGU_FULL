import React, { useState } from "react";
import Navbar from './navbar'; 
import Slideshow from './Slide.jsx'; 
import './CSS/App.css';
import SobreMim from "./sobre.jsx";
import Servicos from "./servicos.jsx";

export default function Topo() {
    const [secaoAtual, setSecaoAtual] = useState('inicio');

    const cliqueSecao = (secao) => {
        setSecaoAtual(secao);
    }

    return (
        <header>
            <Navbar cliqueSecao={cliqueSecao} /> 

            <div className='sessao'>
             
                {secaoAtual === 'inicio' && (
                    <div className="secao">
                        <h1> Confira algumas informações: </h1>
                        <Slideshow /> 
                    </div>

                    
                )}
                {secaoAtual === 'sobre' && (
                    <div className="secao">
                      <SobreMim />
                    </div>

                    
                )}

                {secaoAtual === 'servicos' && (
                    <div className="secao">
                        <h1> Página inicial </h1>

                        <Servicos/> 
                        
                    </div>
                )}


            </div>
        </header>
    );
}
