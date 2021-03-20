module.exports = {
  verbose: true,
  setupFiles: ['./jest.setup.js'],
  collectCoverageFrom: ['./src/*.js', './src/**/*.js', '!src/index.js'],
  coverageThreshold: {
    './src/**': {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
