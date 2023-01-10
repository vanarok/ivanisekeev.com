<script setup lang="ts">
import type { Project } from '~/types'
const { t } = useI18n()

const projects: Project[] = useProjects()
</script>

<template>
  <h2
    text-left
    text-2xl
    font-mono
    md="text-3xl"
    mb-3
    v-text="t('projects.title')"
  />
  <p
    text-xs
    md:text-base
    mb-3
    text-left
    italic
    font-mono
    v-text="t('projects.description')"
  />
  <ProjectItem
    v-for="project in projects"
    :key="project.name"
    :pictures="project.pictures"
    :title="t(`projects.${project.name}.title`)"
    :skills="project.skills"
    :description="[
      t(`projects.${project.name}.description1`),
      t(`projects.${project.name}.description2`),
      t(`projects.${project.name}.description3`),
      t(`projects.${project.name}.description4`),
      t(`projects.${project.name}.description5`),
    ]"
  />
</template>

<style></style>
