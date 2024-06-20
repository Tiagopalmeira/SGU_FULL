-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS meu_banco_de_dados;
USE meu_banco_de_dados;

-- Tabela cadastrante
CREATE TABLE IF NOT EXISTS cadastrante (
    id_cadastrante INT AUTO_INCREMENT PRIMARY KEY,
    cargo VARCHAR(255),
    nome VARCHAR(255)
);

-- Tabela desbravador
CREATE TABLE IF NOT EXISTS desbravador (
    id_desbravador INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    cargo VARCHAR(255),
    unidade VARCHAR(255),
    contato VARCHAR(255),
    contato_emergencia VARCHAR(255),
    ultima_classe_concluida VARCHAR(255)
);

-- Tabela saude
CREATE TABLE IF NOT EXISTS saude (
    id_saude INT AUTO_INCREMENT PRIMARY KEY,
    alergias VARCHAR(3),
    quais_alergias VARCHAR(255)
);
