import js from '@eslint/js';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';
import { configs, plugins } from 'eslint-config-airbnb-extended';

export default defineConfig([
  globalIgnores(['build/', 'dist/', 'node_modules/', 'coverage/']),

  {
    name: 'js/recommended',
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
  },

  plugins.stylistic,
  plugins.importX,
  plugins.react,
  plugins.reactHooks,
  plugins.reactA11y,
  plugins.typescriptEslint,

  ...configs.base.recommended,
  ...configs.base.typescript,
  ...configs.react.recommended,
  ...configs.react.typescript,

  {
    name: 'project/rules',
    languageOptions: {
      globals: { ...globals.browser },
    },
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-warning-comments': ['error', { terms: ['todo'], location: 'start' }],
      // React 19 ignores defaultProps on function components; use default arguments instead.
      'react/require-default-props': ['error', { functions: 'defaultArguments' }],
    },
  },

  {
    name: 'project/vite-config',
    files: ['vite.config.*', 'vite.*.config.*', 'eslint.config.*'],
    languageOptions: { globals: { ...globals.node } },
    rules: {
      'import-x/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'import-x/no-unresolved': 'off',
    },
  },
]);
