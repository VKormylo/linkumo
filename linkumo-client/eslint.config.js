import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,ts,tsx}'],
    plugins: {
      js,
      import: importPlugin,
      prettier: prettierPlugin
    },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.app.json'
        },
        node: {
          extensions: ['.js', '.ts', '.tsx']
        }
      },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx']
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
          groups: [
            ['builtin', 'external'],
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type'
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          },
          pathGroups: [
            {
              pattern: 'react**',
              group: 'external',
              position: 'before'
            },
            {
              pattern: '@**',
              group: 'external',
              position: 'after'
            },
            {
              pattern: '{~/plugins,~/plugins/**}',
              group: 'internal',
              position: 'before'
            },
            {
              pattern: '{~/services,~/services/**}',
              group: 'internal',
              position: 'before'
            },
            {
              pattern: '{~/context,~/context/**,~/hooks,~/hooks/**}',
              group: 'internal',
              position: 'before'
            },
            {
              pattern:
                '{~/schemas,~/schemas/**,~/constants,~/constants/**,~/types,~/types/**}',
              group: 'internal',
              position: 'before'
            },
            {
              pattern:
                '{~/components,~/components/**,~/containers,~/containers/**,~/pages,~/pages/**}',
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
          devDependencies: [
            '**/*.test.{ts,tsx}',
            '**/*.spec.{ts,tsx}',
            '**/test/**',
            '**/tests/**',
            '**/setupTests.ts',
            '**/vitest.config.ts',
            '**/vite.config.ts',
            '**/*.config.{ts,js}',
            '**/vitest.setup.{ts,js}'
          ]
        }
      ]
    }
  },
  tseslint.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.app.json'
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
  // React-specific rules
  {
    files: ['**/*.{tsx,jsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ]
    }
  },
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'coverage/**',
      '*.config.js',
      '*.config.ts',
      'public/**',
      'vite-env.d.ts'
    ]
  }
])
