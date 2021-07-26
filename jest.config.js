const config = {
  verbose: true,
  transform: {
    "\\.[jt]sx?$": "babel-jest"
  },
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "babel-jest"
  },
  setupFilesAfterEnv: ["./src/setupTests.js"],
  testMatch: ['**/__tests__/*.test.js?(x)'],
  collectCoverage: true,
  coverageReporters: ['text-summary', 'html', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  coverageDirectory: 'coverage',
  snapshotSerializers: [require.resolve('enzyme-to-json/serializer')]
};

module.exports = config;