<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <h2
    text-left
    text-2xl
    font-mono
    md="text-3xl"
    mb-3
    v-text="t('projects.title')"
  />
  <p
    text-xs
    md:text-base
    mb-3
    text-left
    italic
    font-mono
    v-text="t('projects.description')"
  />
  <GifkiProject />
</template>

<style></style>
