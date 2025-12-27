import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,ts}'],
    plugins: {
      js,
      import: importPlugin,
      prettier: prettierPlugin
    },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
      }
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json'
        },
        node: {
          extensions: ['.js', '.ts']
        }
      },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts']
      }
    },
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      'no-else-return': 'warn',
      'prettier/prettier': 'error',

      // Enforce empty line after imports
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: 'import',
          next: '*'
        },
        {
          blankLine: 'any',
          prev: 'import',
          next: 'import'
        }
      ],

      // Import sorting and organization
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          },
          pathGroups: [
            {
              pattern: '{~/configs,~/configs/**}',
              group: 'internal',
              position: 'before'
            },
            {
              pattern: '{~/lib,~/lib/**}',
              group: 'internal',
              position: 'before'
            },
            {
              pattern: '{~/constants,~/constants/**,~/types,~/types/**}',
              group: 'internal',
              position: 'before'
            },
            {
              pattern: '{~/utils,~/utils/**}',
              group: 'internal',
              position: 'before'
            },
            {
              pattern: '~/**',
              group: 'internal'
            }
          ],
          pathGroupsExcludedImportTypes: ['builtin']
        }
      ],

      // Import validation
      'import/no-unresolved': 'error',
      'import/no-duplicates': 'error',
      'import/no-unused-modules': 'off',
      'import/no-cycle': ['error', { maxDepth: 10 }],

      // TypeScript-specific import rules
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['**/*.test.ts', '**/*.spec.ts', '**/test/**', '**/tests/**']
        }
      ]
    }
  },
  tseslint.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ]
    }
  },
  { ignores: ['dist/**', 'node_modules/**', 'coverage/**', 'src/generated/**', '*.config.js', '*.config.mjs'] }
])
