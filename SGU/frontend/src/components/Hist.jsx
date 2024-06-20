import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditForm from './Editform'; 
import '../../public/css/hist.css'; 

const Historico = () => {
  const [desbravadores, setDesbravadores] = useState([]);
  const [erro, setErro] = useState(null);
  const [editingDesbravador, setEditingDesbravador] = useState(null); 
  useEffect(() => {
    fetchDesbravadores();
  }, []);

  const fetchDesbravadores = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/desbravadores');
      if (Array.isArray(response.data)) {
        setDesbravadores(response.data);
        setErro(null); 
      }
    } catch (error) {
      console.error('Erro ao buscar desbravadores:', error);
      setErro('Erro ao buscar desbravadores. Verifique a conexão ou tente novamente mais tarde.');
    }
  };

  const handleExcluir = async (idDesbravador) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/desbravadores/${idDesbravador}`);
      console.log('Desbravador excluído com sucesso:', response.data);
      fetchDesbravadores();
    } catch (error) {
      console.error('Erro ao excluir desbravador:', error);
      setErro('Erro ao excluir desbravador. Verifique a conexão ou tente novamente mais tarde.');
    }
  };

  const handleEditar = (idDesbravador) => {
    const desbravadorEdit = desbravadores.find(d => d.id_desbravador === idDesbravador);
    setEditingDesbravador(desbravadorEdit);
  };

  const handleCancelEdit = () => {
    setEditingDesbravador(null);
  };

  const handleUpdate = async (idDesbravador, updatedData) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/desbravadores/${idDesbravador}`, updatedData);
      console.log('Desbravador atualizado com sucesso:', response.data);
    
      fetchDesbravadores();
      setEditingDesbravador(null); 
    } catch (error) {
      console.error('Erro ao atualizar desbravador:', error);
      setErro('Erro ao atualizar desbravador. Verifique a conexão ou tente novamente mais tarde.');
    }
  };

  return (
    <div className="container">
      <div className='historico-table'>
        {erro && <p>{erro}</p>}
        {editingDesbravador && (
          <EditForm
            desbravador={editingDesbravador}
            onUpdate={handleUpdate}
            onCancel={handleCancelEdit}
          />
        )}
        <h1>Histórico de Desbravadores</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Unidade</th>
              <th>Contato</th>
              <th>Classe</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {desbravadores.map(desbravador => (
              <tr key={desbravador.id_desbravador}>
                <td>{desbravador.id_desbravador}</td>
                <td>{desbravador.nome}</td>
                <td>{desbravador.unidade}</td>
                <td>{desbravador.contato}</td>
                <td>{desbravador.ultimaClasse}</td>
                <td>
                  <button className='excluir' onClick={() => handleExcluir(desbravador.id_desbravador)}>
                    Excluir
                  </button>
                  <button className='editar' onClick={() => handleEditar(desbravador.id_desbravador)}>
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Historico;
