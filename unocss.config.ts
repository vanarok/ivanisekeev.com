import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-purple-700 text-white cursor-pointer hover:bg-purple-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
    [
      'icon-btn',
      'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-purple-600',
    ],
    [
      'link',
      'border-b-1 color-black hover:border-black transition duration-400 ease-in-out dark:color-white dark:hover:border-white dark:border-neutral-7',
    ],
  ],
  presets: [
    presetWind(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: [{ name: 'Inter' }, { name: 'sans', provider: 'none' }],
        serif: [{ name: 'Inter' }, { name: 'serif', provider: 'none' }],
        mono: [
          { name: 'Roboto Condensed' },
          { name: 'sans', provider: 'none' },
        ],
        indieFlower: [
          { name: 'Indie Flower' },
          { name: 'sans', provider: 'none' },
        ],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
