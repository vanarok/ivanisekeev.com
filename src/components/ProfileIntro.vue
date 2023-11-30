<script setup lang="ts">
import MyContacts from './MyContacts.vue'
</script>

<template>
  <div>
    <h2
      v-t="'profile.name'"
      text-2xl
      justify-center
      mt-10
      md="justify-start text-left mt-0"
      font-mono
      font-bold
    />
    <p v-t="'profile.motto'" text-lg my-5 font-mono md="text-left" />
    <MyContacts />
  </div>
</template>
