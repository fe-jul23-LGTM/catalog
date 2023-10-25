module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: "@mate-academy/eslint-config",
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules/**'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
