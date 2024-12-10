<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const { t } = useI18n()
const projects = useProjects()
</script>

<template>
  <h2
    class="mb-3 font-black color-black dark:color-white text-[2.25rem] line-height-1.11"
    v-text="t('projects.title')"
  />
  <p
    class="mt-12 italic color-neutral-4 dark:color-white text-lg"
    v-text="t('projects.description')"
  />

  <v-btn
    href="https://github.com/vanarok"
    target="_blank"
    class="mt-10"
    variant="outlined"
    prepend-icon="i-carbon-logo-github"
  >
    GitHub
  </v-btn>

  <div
    class="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-10 mt-20 md:max-w-75vw md:mx-auto"
  >
    <ProjectItem
      v-for="project in projects"
      :key="project.name"
      :pictures="project.pictures"
      :title="t(`projects.${project.name}.title`)"
      :skills="project.skills"
      :description="project.description"
      :preview-picture="project.previewPicture"
    />
  </div>
</template>

<route lang="yaml">
meta:
  layout: projects
</route>
