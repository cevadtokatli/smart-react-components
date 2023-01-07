module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
  ],
  ignorePatterns: ['*.test.tsx'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-for-in-array': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-base-to-string': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/restrict-plus-operator': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'no-async-promise-executor': 'off',
    'no-case-declarations': 'off',
    'no-floating-decimal': 'off',
    'no-prototype-builtins': 'off',
    'react/display-name': 'off',
    'react/no-find-dom-node': 'off',
    'react/prop-types': 'off',
    'operator-linebreak': ['error', 'before'],
  },
  settings: {
    react: {
      version: '18.2.0',
    },
  },
}
