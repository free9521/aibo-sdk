/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint', 'import'],
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    semi: 0,
    'comma-dangle': 0,
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/no-var-requires': 0, // 允许使用 require()
    'no-use-before-define': 0, // 允许interface、type不同的定义顺序
    'no-underscore-dangle': 0, // 允许使用下划线开头的变量名
    'object-curly-newline': 0, // 允许对象的属性换行
    'import/no-unresolved': 0, // 模块识别
    'import/extensions': 0,
    'space-before-function-paren': 0,
    'function-paren-newline': 0,
    'arrow-parens': 0,
    'no-restricted-syntax': 0,
    '@typescript-eslint/ban-ts-comment': 0, // 允许ts不检查语法
    'no-plusplus': 0, // 允许++
    'no-mixed-operators': 0,
    'no-param-reassign': 0, // 允许修改函数参数(Vue里用)
  }
}
