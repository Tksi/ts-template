// @ts-check
import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import gitignore from 'eslint-config-flat-gitignore';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintImport from 'eslint-plugin-import-x';
import jsdoc from 'eslint-plugin-jsdoc';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config([
  gitignore(),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  eslint.configs.recommended,
  eslintPluginUnicorn.configs['recommended'],
  jsdoc.configs['flat/recommended'],
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    plugins: {
      '@stylistic': stylistic,
      import: eslintImport,
    },
    rules: {
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'func-style': 'error',
      'guard-for-in': 'error',
      'no-useless-assignment': 'warn',
      camelcase: 'warn',
      'max-depth': 'warn',
      'array-callback-return': 'warn',
      'no-implicit-coercion': 'warn',
      'no-param-reassign': ['warn', { props: true }],
      curly: ['warn', 'multi-line'],
      'no-console': [
        'warn',
        { allow: ['time', 'timeEnd', 'info', 'warn', 'error', 'debug'] },
      ],
      'sort-imports': ['warn', { ignoreDeclarationSort: true }],
      'unicorn/catch-error-name': [
        'warn',
        {
          name: 'err',
        },
      ],
      'unicorn/filename-case': [
        'warn',
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
        },
      ],
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/no-await-expression-member': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/prefer-ternary': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prefer-native-coercion-function': 'off',
      'unicorn/no-new-array': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/prefer-array-index-of': 'off',
      'unicorn/prefer-dom-node-text-content': 'off',
      'unicorn/prefer-includes': 'off',
      'unicorn/prefer-string-replace-all': 'off',
      'unicorn/text-encoding-identifier-case': 'off',
      'unicorn/no-unreadable-array-destructuring': 'off',
      'jsdoc/require-jsdoc': [
        'warn',
        {
          publicOnly: true,
          enableFixer: false,
          require: {
            ArrowFunctionExpression: true,
            ClassDeclaration: true,
            ClassExpression: true,
            FunctionDeclaration: true,
            FunctionExpression: true,
          },
        },
      ],
      'jsdoc/require-description': [
        'warn',
        {
          contexts: [
            'ArrowFunctionExpression',
            'ClassDeclaration',
            'ClassExpression',
            'FunctionDeclaration',
            'FunctionExpression',
          ],
        },
      ],
      'jsdoc/require-returns': 'off',
      'jsdoc/require-returns-type': 'off',
      'jsdoc/require-param-type': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      '@typescript-eslint/naming-convention': [
        'warn',
        { selector: 'typeLike', format: ['PascalCase'] },
      ],
      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
      '@typescript-eslint/sort-type-constituents': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@stylistic/spaced-comment': 'warn',
      '@stylistic/padding-line-between-statements': [
        'warn',
        {
          blankLine: 'always',
          prev: '*',
          next: [
            'block-like',
            'return',
            'throw',
            'export',
            'break',
            'continue',
          ],
        },
        { blankLine: 'always', prev: 'block-like', next: '*' },
        {
          blankLine: 'never',
          prev: ['case', 'default'],
          next: ['case', 'default'],
        },
        { blankLine: 'always', prev: '*', next: 'type' },
        { blankLine: 'always', prev: 'type', next: '*' },
      ],
      'import/newline-after-import': 'warn',
      'import/no-duplicates': 'warn',
      'import/no-default-export': 'warn',
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
    },
  },
  {
    files: ['*.config.{js,ts}'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
  {
    files: ['**/*.js'],
    ...tseslint.configs.disableTypeChecked,
  },
  eslintConfigPrettier,
]);
