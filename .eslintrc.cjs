module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: '*',
        next: ['block-like', 'return', 'throw', 'export'],
      },
      { blankLine: 'always', prev: 'block-like', next: '*' },
    ],
    '@typescript-eslint/padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'type' },
      { blankLine: 'always', prev: 'type', next: '*' },
    ],
    '@typescript-eslint/naming-convention': [
      'warn',
      { selector: 'typeLike', format: ['PascalCase'] },
    ],
    'prefer-destructuring': 'warn',
    'no-console': [
      'warn',
      { allow: ['time', 'timeEnd', 'info', 'error', 'debug'] },
    ],
  },
};
