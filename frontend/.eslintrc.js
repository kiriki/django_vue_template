module.exports = {
  root: true,

  env: {
    node: true
  },

  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'generator-star-spacing': 'off',
    'vue/script-indent': ['error', 2, { baseIndent: 1, switchCase: 1 }],
    'comma-dangle': ['error', 'only-multiline']
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ]
}
