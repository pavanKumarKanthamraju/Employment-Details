
module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  testEnvironment:'node',
  testMatch: ['<rootDir>src/main/webapp/pages/**/*.test.js'],
  collectCoverageFrom: ["temp/**/*.js"],
  moduleFileExtensions: ['js'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'html', 'json-summary'],
  reporters: [
    'default',
    ['jest-html-reporter', {
      pageTitle: 'Hybrid Test Report',
      outputPath: 'reports/test-report.html',
      includeFailureMsg: true,
      includeConsoleLog: true,
      theme: 'lightTheme'
    }]
  ]
};
