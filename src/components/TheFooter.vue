<script setup lang="ts">
const { t, locale } = useI18n()

const toggleLocales = () => {
  locale.value = locale.value === 'ru' ? 'en' : 'ru'
}

const toggleDark = useToggleDark()
</script>

<template>
  <nav
    backdrop-blur
    text-xl
    fixed
    bottom-0
    left-0
    w-full
    flex
    py-1
    md:py-4
    z-100
  >
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
        class="icon-btn mx-2"
        rel="noreferrer"
        href="https://github.com/vanarok"
        target="_blank"
        title="GitHub"
      >
        <div i-carbon-logo-github />
      </a>
    </div>
  </nav>
</template>
