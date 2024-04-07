import antfu from '@antfu/eslint-config'

export default antfu(
  {
    stylistics: {
      indent: 2,
      quotes: 'single',
      semi: false,
    },
  },
  {
    rules: {
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
        },
      ],
      'arrow-parens': ['error', 'always'],
      'antfu/if-newline': ['off'],
    },
  },
)
