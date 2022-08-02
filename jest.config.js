/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  preset: 'ts-jest',
  testRegex: '\\.test\\.(js|jsx|ts|tsx)$',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  moduleNameMapper: {
    '^@core/(.*)$': '<rootDir>/src/core/$1',
    '^@web/(.*)$': '<rootDir>/src/web/$1'
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
