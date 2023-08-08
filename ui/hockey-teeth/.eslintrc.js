module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json"
  },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-warning-comments': ['error', { terms: ['todo'], location: 'start' }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
