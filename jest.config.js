
module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  testEnvironment:'node',
  testMatch: ['<rootDir>src/main/webapp/pages/**/*.test.js'],
  collectCoverageFrom: ["temp/**/*.js"],
  moduleFileExtensions: ['js'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json-summary','text', 'html'],
  reporters: [
    'default',
    ['jest-html-reporter', {
      pageTitle: 'Hybrid Test Report',
      outputPath: 'utreports/test-report.html',
      includeFailureMsg: true,
      includeConsoleLog: true,
      theme: 'lightTheme'
    }],
    ['jest-junit', {
      outputDirectory: 'utreports',
      outputName: 'junit.xml'
    }]
  ]
};
