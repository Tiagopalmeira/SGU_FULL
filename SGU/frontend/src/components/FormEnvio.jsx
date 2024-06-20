import React, { useState } from 'react';
import '../../public/css/form.css';

export default function FormEnvio() {
  const [cargo, setCargo] = useState('');
  const [nomeCadastrante, setNomeCadastrante] = useState('');
  const [nomeDesbravador, setNomeDesbravador] = useState('');
  const [cargoDesbravador, setCargoDesbravador] = useState('');
  const [unidade, setUnidade] = useState('');
  const [contato, setContato] = useState('');
  const [contatoEmergencia, setContatoEmergencia] = useState('');
  const [ultimaClasse, setUltimaClasse] = useState('');
  const [alergias, setAlergias] = useState('');
  const [quaisAlergias, setQuaisAlergias] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      cadastrante: {
        cargo,
        nome: nomeCadastrante,
      },
      desbravador: {
        nome: nomeDesbravador,
        cargo: cargoDesbravador,
        unidade,
        contato,
        contatoEmergencia,
        ultimaClasse,
      },
      saude: {
        alergias,
        quaisAlergias,
      },
    };

    try {
      const response = await fetch('http://localhost:5000/api/inserirDados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar os dados');
      }

      console.log('Dados enviados com sucesso!');
      limparFormulario();

    } catch (error) {
      console.error('Erro:', error);
      
    }
  };

  const limparFormulario = () => {
    setCargo('');
    setNomeCadastrante('');
    setNomeDesbravador('');
    setCargoDesbravador('');
    setUnidade('');
    setContato('');
    setContatoEmergencia('');
    setUltimaClasse('');
    setAlergias('');
    setQuaisAlergias('');
  };

  const handleSelectChange = (event) => {
    setUltimaClasse(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="box">
        <span className="titulo">Dados do cadastrante:</span>
        <ul>
          <li>
            <span className="textointerno">Cargo:</span>
            <label>
              <input
                type="radio"
                name="cargo"
                value="Conselheiro"
                onChange={() => setCargo('Conselheiro')}
                checked={cargo === 'Conselheiro'}
              />
              Conselheiro
            </label>
            <label>
              <input
                type="radio"
                name="cargo"
                value="Conselheiro associado"
                onChange={() => setCargo('Conselheiro associado')}
                checked={cargo === 'Conselheiro associado'}
              />
              Conselheiro associado
            </label>
          </li>
          <li>
            <span className="textointerno">Nome:</span>
            <input
              type="text"
              className="inputtext"
              value={nomeCadastrante}
              onChange={(e) => setNomeCadastrante(e.target.value)}
              placeholder="Digite o nome do cadastrante"
            />
          </li>
        </ul>
      </div>

      <div className="box">
        <span className="titulo">Dados do desbravador:</span>
        <ul>
          <li>
            <span className="textointerno">Nome:</span>
            <input
              type="text"
              className="inputtext"
              value={nomeDesbravador}
              onChange={(e) => setNomeDesbravador(e.target.value)}
              placeholder="Digite o nome do desbravador"
            />
          </li>
          <li>
            <span className="textointerno">Cargo:</span>
            <label>
              <input
                type="radio"
                name="cargoDesbravador"
                value="Capitão"
                onChange={() => setCargoDesbravador('Capitão')}
                checked={cargoDesbravador === 'Capitão'}
              />
              Capitão
            </label>
            <label>
              <input
                type="radio"
                name="cargoDesbravador"
                value="Secretário"
                onChange={() => setCargoDesbravador('Secretário')}
                checked={cargoDesbravador === 'Secretário'}
              />
              Secretário
            </label>
            <label>
              <input
                type="radio"
                name="cargoDesbravador"
                value="Desbravador"
                onChange={() => setCargoDesbravador('Desbravador')}
                checked={cargoDesbravador === 'Desbravador'}
              />
              Desbravador
            </label>
          </li>
          <li>
            <span className="textointerno">Unidade:</span>
            <select
              className="inputtext"
              value={unidade}
              onChange={(e) => setUnidade(e.target.value)}
            >
              <option value="Leão">Leão</option>
              <option value="Castor">Castor</option>
              <option value="Bellatrix">Bellatrix</option>
              <option value="Ursa Maior">Ursa Maior</option>
              <option value="Outra">Outra</option>
            </select>
          </li>
          <li>
            <span className="textointerno">Contato:</span>
            <input
              type="text"
              className="inputtext"
              value={contato}
              onChange={(e) => setContato(e.target.value)}
              placeholder="Digite o contato do desbravador"
            />
          </li>
          <li>
            <span className="textointerno">Contato de emergência:</span>
            <input
              type="text"
              className="inputtext"
              value={contatoEmergencia}
              onChange={(e) => setContatoEmergencia(e.target.value)}
              placeholder="Digite o contato de emergência"
            />
          </li>
          <li>
            <span className="textointerno">Última classe concluída:</span>
            <select
              value={ultimaClasse}
              onChange={handleSelectChange}
              className="inputtext"
            >
              <option value="Amigo">Amigo</option>
              <option value="Companheiro">Companheiro</option>
              <option value="Pesquisador">Pesquisador</option>
              <option value="Pioneiro">Pioneiro</option>
              <option value="Excursionista">Excursionista</option>
              <option value="Guia">Guia</option>
            </select>
          </li>
        </ul>
      </div>

      <div className="box">
        <span className="titulo">Dados de saúde:</span>
        <ul>
          <li>
            <span className="textointerno">Alergias:</span>
            <label>
              <input
                type="radio"
                name="alergias"
                value="Sim"
                onChange={() => setAlergias('Sim')}
                checked={alergias === 'Sim'}
              />
              Sim
            </label>
            <label>
              <input
                type="radio"
                name="alergias"
                value="Não"
                onChange={() => setAlergias('Não')}
                checked={alergias === 'Não'}
              />
              Não
            </label>
          </li>
          {alergias === 'Sim' && (
            <li>
              <span className="textointerno">
                Quais alergias o desbravador possui?
              </span>
              <input
                type="text"
                className="inputtext"
                value={quaisAlergias}
                onChange={(e) => setQuaisAlergias(e.target.value)}
                placeholder="Descreva as alergias, se houver"
              />
            </li>
          )}
        </ul>
      </div>

      <div className="button1">
        <button type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
}
