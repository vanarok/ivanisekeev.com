<script setup lang="ts">
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

const { t } = useI18n()
const projects = useProjects()
const swiper = ref(null)
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

  <!--  TODO: add more projects -->
  <Swiper
    ref="swiper"
    :breakpoints="{ 1024: { slidesPerView: 3 } }"
    :preload-images="false"
    :modules="[Autoplay]"
    :space-between="50"
    class="w-full"
    loop
    :autoplay="true"
  >
    <template v-for="project in projects" :key="project.name">
      <SwiperSlide v-if="project.pictures.length > 0" class="cursor-grab my-20">
        <v-img
          :src="project.pictures[0].picture"
          class="rounded-lg drop-shadow-2xl dark:drop-shadow-none"
        >
          <template #placeholder>
            <div class="flex justify-center items-center h-full">
              <v-progress-circular indeterminate />
            </div>
          </template>
        </v-img>
      </SwiperSlide>
    </template>
  </Swiper>

  <div
    class="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-10 md:max-w-75vw md:mx-auto"
  >
    <!--     TODO: refactor to remove overhead of component -->
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
