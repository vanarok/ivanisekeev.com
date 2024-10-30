<script setup lang="ts">
import { getSiteName } from '~/helpers'

function getLogoText() {
  switch (getSiteName()) {
    case 'localhost':
      return 'Development'
    case 'isekeev.com':
      return 'Ivan Isekeev'
    case 'ivanisekeev.com':
      return 'Ivan Isekeev'
    case 'flapwebdesign.com':
      return 'Flap Web Design'
    default:
      return 'Ivan Isekeev'
  }
}
</script>

<template>
  <h1
    icon-btn
    font-weight-1000
    text-lg
    md:text-3xl
    cursor-pointer
    :class="$style.logo"
    @click="$router.push('/')"
  >
    {{ getLogoText() }}
  </h1>
</template>

<style lang="postcss" module>
.logo {
  font-family: 'Indie Flower';
  transition: 0.4s;
}
</style>
