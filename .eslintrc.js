module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
