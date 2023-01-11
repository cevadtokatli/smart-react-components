const config = require('../jest.config')

module.exports = {
  ...config,
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/src/test/setup-after-env.tsx'],
}
