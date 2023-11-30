import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import generateSitemap from 'vite-ssg-sitemap'
import Layouts from 'vite-plugin-vue-layouts'
import { VitePWA } from 'vite-plugin-pwa'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import Inspector from 'vite-plugin-vue-inspector'
import Unocss from 'unocss/vite'
import VueRouter from 'unplugin-vue-router/vite'

export default defineConfig({
  server: {
    port: 3000,
  },

  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    VueRouter(),

    Vue(),

    Layouts(),

    Unocss(),

    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.png', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Ivan Isekeev',
        short_name: 'Ivan Isekeev',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),

    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),

    Inspector({
      toggleButtonVisibility: 'never',
    }),
  ],

  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    onFinished() {
      generateSitemap()
    },
  },

  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['workbox-window', /vue-i18n/, 'vuetify'],
  },
})
