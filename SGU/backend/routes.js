const express = require('express');
const db = require('./db'); // Importe a conexão com o banco de dados

const router = express.Router();

// Rota para receber dados do formulário e inserir no banco de dados
router.post('/inserirDados', (req, res) => {
  const { cadastrante, desbravador, saude } = req.body;

  console.log('Recebido dados do formulário:', req.body);

  // Inserir dados do cadastrante
  db.query('INSERT INTO cadastrante SET ?', cadastrante, (err, result) => {
    if (err) {
      console.error('Erro ao inserir cadastrante:', err);
      res.status(500).send('Erro ao inserir cadastrante');
      return;
    }
    console.log('Cadastrante inserido:', result.insertId);

    // Inserir dados do desbravador associando ao cadastrante
    desbravador.id_cadastrante = result.insertId;
    db.query('INSERT INTO desbravador SET ?', desbravador, (err, result) => {
      if (err) {
        console.error('Erro ao inserir desbravador:', err);
        res.status(500).send('Erro ao inserir desbravador');
        return;
      }
      console.log('Desbravador inserido:', result.insertId);

      // Inserir dados de saúde se houver
      if (saude && saude.alergias === 'Sim') {
        saude.id_desbravador = result.insertId;
        db.query('INSERT INTO saude SET ?', saude, (err, result) => {
          if (err) {
            console.error('Erro ao inserir dados de saúde:', err);
            res.status(500).send('Erro ao inserir dados de saúde');
            return;
          }
          console.log('Dados de saúde inseridos:', result.insertId);
          res.send('Dados inseridos com sucesso!');
        });
      } else {
        res.send('Dados inseridos com sucesso!');
      }
    });
  });
});

// Rota para buscar todos os desbravadores
router.get('/desbravadores', (req, res) => {
  const query = 'SELECT * FROM desbravador'; // Consulta SQL para buscar todos os desbravadores

  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao buscar desbravadores:', err);
      res.status(500).send('Erro ao buscar desbravadores');
      return;
    }
    res.json(results); // Envia os resultados como JSON para o frontend
  });
});

// Rota para buscar os dados de saúde de um desbravador por ID
router.get('/saude/:idDesbravador', (req, res) => {
  const { idDesbravador } = req.params;
  const query = 'SELECT * FROM saude WHERE id_desbravador = ?'; // Consulta SQL para buscar dados de saúde por ID de desbravador

  db.query(query, idDesbravador, (err, results) => {
    if (err) {
      console.error('Erro ao buscar dados de saúde:', err);
      res.status(500).send('Erro ao buscar dados de saúde');
      return;
    }
    res.json(results); // Envia os resultados como JSON para o frontend
  });
});

// Rota para atualizar dados de um desbravador por ID
router.put('/desbravadores/:idDesbravador', (req, res) => {
  const { idDesbravador } = req.params;
  const { nome, cargo, unidade, contato, contatoEmergencia, ultimaClasse } = req.body;

  const updateData = {
    nome,
    cargo,
    unidade,
    contato,
    contatoEmergencia,
    ultimaClasse
  };

  db.query('UPDATE desbravador SET ? WHERE id_desbravador = ?', [updateData, idDesbravador], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar desbravador:', err);
      res.status(500).send('Erro ao atualizar desbravador');
      return;
    }
    console.log('Desbravador atualizado:', idDesbravador);
    res.send('Desbravador atualizado com sucesso!');
  });
});


// Rota para excluir um desbravador por ID
// Rota para excluir um desbravador por ID
router.delete('/desbravadores/:idDesbravador', (req, res) => {
  const { idDesbravador } = req.params;

  db.query('DELETE FROM desbravador WHERE id_desbravador = ?', idDesbravador, (err, result) => {
    if (err) {
      console.error('Erro ao excluir desbravador:', err);
      res.status(500).send('Erro ao excluir desbravador');
      return;
    }
    console.log('Desbravador excluído:', idDesbravador);
    res.send('Desbravador excluído com sucesso!');
  });
});





module.exports = router;
