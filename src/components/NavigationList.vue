<script setup lang="ts">
import { RouterLink } from 'vue-router'

const { t } = useI18n()
</script>

<template>
  <nav text-xs md:text-base ml-auto flex flex-row gap-2 md:gap-6>
    <RouterLink class="icon-btn flex items-center gap-2" to="/">
      <div i-carbon-campsite />
      {{ t('button.home') }}
    </RouterLink>
    <RouterLink class="icon-btn flex items-center gap-2" to="/projects">
      <div i-carbon-badge />
      {{ t('button.projects') }}
    </RouterLink>
    <a class="icon-btn flex items-center gap-2" href="https://dev.to/vanarok">
      <div i-carbon-blog />
      {{ t(`button.blog`) }}</a>
  </nav>
</template>
