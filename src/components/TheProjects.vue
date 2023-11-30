<script setup lang="ts">
import type { Project } from '~/types'
import { useProjects } from '~/composables/projects'
import { useI18n } from 'vue-i18n'
import ProjectItem from './ProjectItem.vue'

const { t } = useI18n()

const projects = useProjects() as unknown as Project[]
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
    :description="project.description"
  />
</template>

<style></style>
