<script setup lang="ts"></script>

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
    Ivan  Isekeev 
  </h1>
</template>

<style lang="postcss" module>
.logo {
  font-family: 'Indie Flower';
  transition: 0.4s;
}
</style>
