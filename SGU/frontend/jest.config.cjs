/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jest-environment-jsdom', // Atualize para usar o pacote separado
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Usa babel-jest para transformar arquivos JS e JSX
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'], // Extensões de arquivos reconhecidas
  
};
