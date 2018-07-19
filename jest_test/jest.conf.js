const PATTERN_RESOURCE = '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$';

module.exports = {
  moduleNameMapper: {
    [PATTERN_RESOURCE]: '<rootDir>/test/mocks/fileMock.js'
  },
  testMatch: [
    '<rootDir>/test/**/*.spec.js'
  ],
  testURL: 'http://localhost.com:3000',
  coverageReporters: ['lcov', 'cobertura']
};
