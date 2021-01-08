module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  rules: {
    'no-console': 'off'
  }
};