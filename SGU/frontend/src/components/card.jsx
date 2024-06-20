import React from 'react';
import '../../public/css/card.css';

const Card = ({ dados, onEdit, onDelete }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{dados.nomeDesbravador}</h3>
      </div>
      <div className="card-body">
        <p><strong>Cargo:</strong> {dados.cargoDesbravador}</p>
        <p><strong>Unidade:</strong> {dados.unidade}</p>
        <p><strong>Contato:</strong> {dados.contato}</p>
        <p><strong>Contato de Emergência:</strong> {dados.contatoEmergencia}</p>
        <p><strong>Última Classe:</strong> {dados.ultimaClasse.join(', ')}</p>
        <p><strong>Alergias:</strong> {dados.alergias}</p>
        {dados.alergias === 'Sim' && (
          <p><strong>Quais Alergias:</strong> {dados.quaisAlergias}</p>
        )}
        <div className="card-buttons">
          <button onClick={() => onEdit(dados)}>Editar</button>
          <button onClick={() => onDelete(dados)}>Excluir</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
