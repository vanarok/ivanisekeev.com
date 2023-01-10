<script setup lang="ts">
const gifki = ref([
  {
    id: 1,
    description: 'Main page (unlogged)',
    picture: '/gifki/gifki-main-unlogged.png',
  },
  {
    id: 2,
    description: 'Main page (logged)',
    picture: '/gifki/gifki-main-logged.png',
  },
  {
    id: 3,
    description: 'Login page',
    picture: '/gifki/gifki-login.png',
  },
])

const { t } = useI18n()
</script>

<template>
  <ProjectItem
    :pictures="gifki"
    :title="t(`projects.gifki.title`)"
    :description="[
      t(`projects.gifki.description1`),
      t(`projects.gifki.description2`),
      t(`projects.gifki.description3`),
      t(`projects.gifki.description4`),
      t(`projects.gifki.description5`),
    ]"
    :skills="[
      'JavaScript',
      'HTML',
      'Vue.JS',
      'Vuetify',
      'CSS',
      'SCSS',
      'RESTful API',
      'Tailwind',
      'Unocss',
      'Git',
      'NGINX',
      'Linux',
      'TypeScript',
    ]"
  />
</template>

<style lang="postcss"></style>
