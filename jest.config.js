/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  preset: 'ts-jest',
  testRegex: '\\.test\\.(js|jsx|ts|tsx)$',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', 'src/web/plugins/error/lib/blankError.ts'],
  moduleNameMapper: {
    '^@core/(.*)$': '<rootDir>/src/core/$1',
    '^@web/(.*)$': '<rootDir>/src/web/$1',
    'some-esm/esm/(.*)': '<rootDir>/node_modules/some-esm/cjs/$1'
  },
  modulePathIgnorePatterns: ['dist', 'node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx']

  // TODO
  // coverageThreshold: {
  //   global: {
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //     statements: 100
  //   }
  // },
}
