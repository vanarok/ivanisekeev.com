import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: true,

  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },

  typescript: true,
  vue: true,
  unocss: true,

  jsonc: true,
  yaml: true,
})
