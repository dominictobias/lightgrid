const js = require('@eslint/js')
const globals = require('globals')
const typescriptEslint = require('@typescript-eslint/eslint-plugin')

module.exports = [
  {
    ignores: ['dist'],
  },
  js.configs.recommended,
  ...typescriptEslint.configs['flat/recommended'],
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      sourceType: 'module',
    },
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]
