<script setup lang="ts">
import TheAppBar from '~/components/TheAppBar.vue'
import TheFooter from '~/components/TheFooter.vue'
</script>

<template>
  <TheAppBar />
  <main
    class="md:w-180 m-auto px-2rem py-16 text-center text-gray-600 dark:text-gray-200"
  >
    <RouterView />
  </main>
</template>
