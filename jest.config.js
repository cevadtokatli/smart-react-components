module.exports = {
  moduleFileExtensions: ['tsx', 'js', 'json'],
  testEnvironment: 'jsdom',
  testRegex: '/src/.*.test.tsx$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}
