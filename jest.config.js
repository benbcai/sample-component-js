module.exports = {
  collectCoverage: true,
  coverageDirectory: 'tests/jest/reports/coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    'src/**/*.jsx',
  ],
  coveragePathIgnorePatterns: [
    'src/orion-dev-site',
    'src/terra-dev-site',
  ],
  coverageReporters: [
    'html',
    'lcov',
    'cobertura',
    'text-summary',
  ],
  setupFiles: [
    'raf/polyfill',
    './jestsetup.js',
  ],
  globalSetup: './jestglobalsetup.js',
  // This allows jest to resolve files from the generated aggregated-translations in addition to node_modules
  moduleDirectories: [
    'aggregated-translations',
    'node_modules',
  ],
  testMatch: [
    '**/jest/**/(*.)(spec|test).js?(x)',
  ],
  roots: [process.cwd()],
  snapshotSerializers: [
    './node_modules/enzyme-to-json/serializer',
  ],
  moduleNameMapper: {
    '\\.(css|scss|svg|jpg|png|md)$': 'identity-obj-proxy',
  },
  testURL: 'http://localhost',
};
