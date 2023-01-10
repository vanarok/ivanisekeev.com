<script setup lang="ts"></script>

<template>
  <v-img
    src="/face.jpg"
    class="min-w-29.1 h-30 rounded-full md:min-w-48.75 md:h-50"
  >
    <template #placeholder>
      <div class="flex justify-center items-center h-full">
        <v-progress-circular indeterminate />
      </div>
    </template>
  </v-img>
</template>
