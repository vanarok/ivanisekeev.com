<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppLogo from './AppLogo.vue'

const { t, locale } = useI18n()

function toggleLocales() {
  locale.value = locale.value === 'ru' ? 'en' : 'ru'
}

const toggleDark = useToggleDark()

const route = useRoute()
const upworkReferer = route.query.referer === 'upwork'

const links = [
  {
    localeKey: 'button.projects',
    icon: 'i-carbon-idea',
    to: '/projects',
  },
  {
    localeKey: 'button.blog',
    icon: 'i-carbon-blog',
    to: 'https://blog.ivanisekeev.com',
  },
]
</script>

<template>
  <header
    backdrop-blur
    :class="$style.appBar"
    class="px-4 md:px-6 flex items-center gap-4 md:gap-6 text-neutral-5 dark:text-neutral-4"
  >
    <AppLogo />

    <nav class="ml-auto flex flex-row gap-4 md:gap-6">
      <component
        :is="link.to.startsWith('/') ? RouterLink : 'a'"
        v-for="link in links"
        :key="link.localeKey"
        class="icon-btn flex items-center"
        :to="link.to"
        :href="link.to"
      >
        <span class="inline md:hidden" :class="link.icon" />
        <span class="hidden md:inline">{{ t(link.localeKey) }}</span>
      </component>
    </nav>

    <a
      v-if="!upworkReferer"
      class="icon-btn text-lg"
      rel="noreferrer"
      href="https://github.com/vanarok"
      target="_blank"
      title="GitHub"
    >
      <div i-carbon-logo-github />
    </a>

    <button
      class="icon-btn text-lg"
      :title="t('button.toggle_dark')"
      @click="toggleDark()"
    >
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <button
      class="icon-btn text-lg"
      :title="t('button.toggle_langs')"
      @click="toggleLocales()"
    >
      <div i-carbon-ibm-watson-language-translator />
    </button>
  </header>
  <div class="h-4rem" />
</template>

<style lang="postcss" module>
.appBar {
  line-height: 1.5;
  height: 4rem;
  display: flex;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  mask: linear-gradient(to top, transparent, black 5%);
}

@media (min-width: 1024px) {
  .appBar {
    place-items: center;
  }
}
</style>
