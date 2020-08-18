module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [{
    files: [
      '**/__tests__/*.{j,t}s?(x)',
      '**/tests/unit/**/*.spec.{j,t}s?(x)'
    ],
    env: {
      jest: true
    }
  }]
  // root: true,
  // 'extends': [
  //   'plugin:vue/essential',
  //   '@vue/standard'
  // ],
  // rules: {
  //   'indent': 'off',
  //   // allsow async-await
  //   'generator-star-spacing': 'off',
  //   // allow debugger during development
  //   'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  //   'vue/no-parsing-error': [2, {
  //     'x-invalid-end-tag': false
  //   }],
  //   'no-undef': 'off',
  //   'camelcase': 'off',
  //   'space-before-function-paren': ['error', {
  //     'anonymous': 'ignore',
  //     'named': 'never',
  //     'asyncArrow': 'always'
  //   }],
  //   'vue/valid-v-else-if': 'off',
  //   // 'no-tabs': 'off'
  //   'standard/computed-property-even-spacing': 0 // 允许两个[]不在同一行
  // },
  // parserOptions: {
  //   parser: 'babel-eslint'
  // }
}
