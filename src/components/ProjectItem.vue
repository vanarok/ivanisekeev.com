<script setup lang="ts">
import { ref } from 'vue'
import type { Picture } from '~/types'
import ProjectItemModal from './ProjectItemModal.vue'

defineProps<{
  title: string
  description: string[]
  pictures: Picture[]
  skills: string[]
}>()

const visibleProjectDetailsModal = ref(false)
</script>

<template>
  <div
    flex
    flex-col
    md:flex-row
    gap-3
    border
    dark:border-stone-600
    hover:border-stone-300
    py-5
    px-2
    rounded-lg
    cursor-pointer
    mb-6
    @click="visibleProjectDetailsModal = true"
  >
    <img
      loading="lazy"
      :alt="title"
      width="300"
      height="176"
      class="rounded-lg"
      :src="pictures[0].picture"
    />
    <div md:w-80>
      <h4
        font-bold
        style="white-space: normal"
        text-sm
        md:text-lg
        text-left
        v-text="title"
      />
      <p
        text-left
        text-xs
        md:text-base
        style="white-space: normal"
        truncate
        line-clamp-3
        md="line-clamp-5"
        v-text="description[0]"
      />
    </div>
  </div>

  <ProjectItemModal
    v-model="visibleProjectDetailsModal"
    :title="title"
    :description="description"
    :skills="skills"
    :pictures="pictures"
  />
</template>

<style lang="postcss"></style>
