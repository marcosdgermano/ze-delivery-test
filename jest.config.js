module.exports = {
  verbose: true,
  collectCoverageFrom: ['./src/*.js', './src/**/*.js'],
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
