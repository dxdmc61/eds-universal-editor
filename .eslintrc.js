module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'plugin:json/recommended',
    'plugin:xwalk/recommended',
  ],
  env: {
    browser: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    // Essential code rules (keep)
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    'no-console': 'warn',

    // Relax formatting rules
    'indent': 'off',
    'quotes': 'off',
    'no-trailing-spaces': 'off',
    'arrow-body-style': 'off',
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'max-len': 'off',
    
    // Import and param rules (keep some defaults)
    'import/extensions': ['error', { js: 'always' }],
    'no-param-reassign': [2, { props: false }],
  },
  overrides: [
    {
      files: ['*.json'],
      rules: {
        'quotes': 'off',
      },
    },
  ],
};
