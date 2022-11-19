module.exports = {
  moduleFileExtensions: ['tsx', 'js', 'json'],
  setupFiles: ['<rootDir>/src/test/setup.tsx'],
  testRegex: '/src/.*.test.tsx',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}
