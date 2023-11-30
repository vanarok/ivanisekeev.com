<script setup lang="ts">
import NavigationList from './NavigationList.vue'
import AppLogo from './AppLogo.vue'
import TheAppBarActions from './TheAppBarActions.vue'
</script>

<template>
  <header backdrop-blur :class="$style.appBar">
    <AppLogo />
    <TheAppBarActions />
    <NavigationList />
  </header>
  <div class="h-4rem" />
</template>

<style lang="postcss" module>
.appBar {
  padding: 0 2rem;
  line-height: 1.5;
  height: 4rem;
  display: flex;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

@media (min-width: 1024px) {
  .appBar {
    place-items: center;
  }
}
</style>
