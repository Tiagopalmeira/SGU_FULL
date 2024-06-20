import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './CSS/App.css';

export default function Slideshow() {
    const imagens = [ './src/public/4.png', './src/public/5.png', './src/public/4.png']; 
    const [indiceAtual, setIndiceAtual] = useState(0);

    useEffect(() => {
        const interval = setInterval(passarSlide, 5000); 

        return () => clearInterval(interval); 
    }, [indiceAtual]); 

    const passarSlide = () => {
        setIndiceAtual(prevIndice => (prevIndice + 1) % imagens.length);
    };

    const voltarSlide = () => {
        setIndiceAtual(prevIndice => (prevIndice - 1 + imagens.length) % imagens.length);
    };

    const avancarSlide = () => {
        setIndiceAtual(prevIndice => (prevIndice + 1) % imagens.length);
    };

    return (
        <div className='img'>
            <img src={imagens[indiceAtual]} alt={`imagem${indiceAtual + 1}`} />
            <br />
            <button onClick={voltarSlide} className='botao'>
                <FontAwesomeIcon icon={faArrowLeft} /> Retornar
            </button>
            <button onClick={avancarSlide} className='botao'>
                Ver mais <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    );
}