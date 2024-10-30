<script setup lang="ts">
function getLogoText() {
  const site = 2

  switch (site) {
    case 1:
      return 'Ivan Isekeev'
    case 2:
      return 'Flap webdesign'
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
    ]
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
