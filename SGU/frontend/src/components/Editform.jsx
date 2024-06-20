import React, { useState } from 'react';
import '../../public/css/form.css'
const EditForm = ({ desbravador, onUpdate, onCancel }) => {
  const [cargo, setCargo] = useState(desbravador.cargo);
  const [nomeCadastrante, setNomeCadastrante] = useState(desbravador.nomeCadastrante);
  const [nome, setNomeDesbravador] = useState(desbravador.nomeDesbravador);
  const [cargoDesbravador, setCargoDesbravador] = useState(desbravador.cargoDesbravador);
  const [unidade, setUnidade] = useState(desbravador.unidade);
  const [contato, setContato] = useState(desbravador.contato);
  const [contatoEmergencia, setContatoEmergencia] = useState(desbravador.contatoEmergencia);
  const [ultimaClasse, setUltimaClasse] = useState(desbravador.ultimaClasse);
  const [alergias, setAlergias] = useState(desbravador.alergias);
  const [quaisAlergias, setQuaisAlergias] = useState(desbravador.quaisAlergias);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedData = {
      cargo,
      nomeCadastrante,
      nome,
      cargoDesbravador,
      unidade,
      contato,
      contatoEmergencia,
      ultimaClasse,
      alergias,
      quaisAlergias,
    };

    try {
      // Chamada para atualizar os dados no servidor
      const response = await fetch(`http://localhost:5000/api/desbravadores/${desbravador.id_desbravador}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar os dados');
      }

      
      onUpdate(desbravador.id_desbravador, updatedData);

    } catch (error) {
      console.error('Erro ao atualizar:', error);
   
    }
  };

  return (
    <div className="edit-form">
      <h2>Editar Desbravador</h2>
      <form onSubmit={handleSubmit}>
        <label >
          ID do desbravador a ser atualizado:
          <span>{desbravador.id_desbravador}</span>
        </label>
        <label>
          Cargo do Cadastrante:
          <input
            type="text"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </label>
        <label>
          Nome do Cadastrante:
          <input
            type="text"
            value={nomeCadastrante}
            onChange={(e) => setNomeCadastrante(e.target.value)}
          />
        </label>
        <label>
          Nome do Desbravador:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNomeDesbravador(e.target.value)}
          />
        </label>
        <label>
          Cargo do Desbravador:
          <input
            type="text"
            value={cargoDesbravador}
            onChange={(e) => setCargoDesbravador(e.target.value)}
          />
        </label>
        <label>
          Unidade:
          <input
            type="text"
            value={unidade}
            onChange={(e) => setUnidade(e.target.value)}
          />
        </label>
        <label>
          Contato:
          <input
            type="text"
            value={contato}
            onChange={(e) => setContato(e.target.value)}
          />
        </label>
        <label>
          Contato de Emergência:
          <input
            type="text"
            value={contatoEmergencia}
            onChange={(e) => setContatoEmergencia(e.target.value)}
          />
        </label>
        <label>
          Última Classe Concluída:
          <input
            type="text"
            value={ultimaClasse}
            onChange={(e) => setUltimaClasse(e.target.value)}
          />
        </label>
        <label>
          Alergias:
          <input
            type="text"
            value={alergias}
            onChange={(e) => setAlergias(e.target.value)}
          />
        </label>
        <label>
          Quais Alergias:
          <input
            type="text"
            value={quaisAlergias}
            onChange={(e) => setQuaisAlergias(e.target.value)}
          />
        </label>
        <button type="submit">Confirmar</button>
        <button type="button" onClick={onCancel}>Cancelar</button>
      </form>
    </div>
  );
};

export default EditForm;
