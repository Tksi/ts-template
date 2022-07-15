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
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    camelcase: 'warn',
    eqeqeq: 'warn',
    'max-params': 'warn',
    'max-depth': 'warn',
    'prefer-destructuring': 'warn',
    'array-callback-return': 'warn',
    'no-return-await': 'warn',
    'require-atomic-updates': 'warn',
    'no-param-reassign': ['warn', { props: true }],
    curly: ['warn', 'multi-line'],
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
    '@typescript-eslint/consistent-type-imports': 'warn',
    'sort-imports': ['warn', { ignoreDeclarationSort: true }],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'never',
        alphabetize: { order: 'asc' },
      },
    ],
    'import/newline-after-import': 'warn',
    'import/no-duplicates': 'warn',
    'no-console': [
      'warn',
      { allow: ['time', 'timeEnd', 'info', 'error', 'debug'] },
    ],
  },
  overrides: [
    {
      files: ['*.spec.ts'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
