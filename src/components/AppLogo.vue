<script setup lang="ts"></script>

<template>
  <h1
    font-weight-1000
    text-lg
    md:text-3xl
    cursor-pointer
    :class="$style.logo"
    @click="$router.push('/')"
  >
    Ivan Svoboda
  </h1>
</template>

<style lang="postcss" module>
.logo {
  font-family: 'Indie Flower';
  transition: 0.4s;
}
.logo:hover {
  color: hsla(160, 100%, 37%, 1);
}
</style>
