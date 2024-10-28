module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint-config-wondermove'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'css-modules'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
      },
    },
  },
  rules: {
    quotes: ['error', 'double'],
    // 'css-modules/no-unused-class': [2, { camelCase: true }],
    // 'css-modules/no-unused-class': 'warn',
    // 'css-modules/no-undef-class': 'error',
  },
};
