<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useToggleDark } from '~/composables/dark'

const { t, locale } = useI18n()

const toggleLocales = () => {
  locale.value = locale.value === 'ru' ? 'en' : 'ru'
}

const toggleDark = useToggleDark()

const route = useRoute()
const upworkReferer = route.query.referer === 'upwork'
</script>

<template>
  <div m-auto flex>
    <button
      class="icon-btn mx-2 !outline-none"
      :title="t('button.toggle_dark')"
      @click="toggleDark()"
    >
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <a
      class="icon-btn mx-2"
      :title="t('button.toggle_langs')"
      @click="toggleLocales()"
    >
      <div i-carbon-ibm-watson-language-translator />
    </a>

    <a
      v-if="!upworkReferer"
      class="icon-btn mx-2"
      rel="noreferrer"
      href="https://github.com/vanarok"
      target="_blank"
      title="GitHub"
    >
      <div i-carbon-logo-github />
    </a>
  </div>
</template>
