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

const router = useRouter()
</script>

<template>
  <h1
    class="icon-btn font-weight-1000 text-2xl md:text-3xl cursor-pointer font-indieFlower transition duration-400 ease-in-out"
    @click="router.push('/')"
  >
    {{ getLogoText() }}
  </h1>
</template>
