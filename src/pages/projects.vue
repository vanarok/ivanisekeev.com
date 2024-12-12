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
      <SwiperSlide
        v-if="project.pictures.length > 0"
        class="cursor-pointer my-20"
      >
        <ProjectItem
          :title="t(`projects.${project.name}.title`)"
          :preview-picture="project.previewPicture"
          :pictures="project.pictures"
          :skills="project.skills"
          :description="project.description"
        />

        <div class="mt-4 font-bold color-black dark:color-white">
          {{ t(`projects.${project.name}.title`) }}
        </div>
      </SwiperSlide>
    </template>
  </Swiper>

  <div
    class="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-10 md:max-w-75vw md:mx-auto mt-10"
  >
    <div
      v-for="project in projects"
      :key="project.name"
      class="flex flex-col md:gap-3 p-4 rounded-lg md:hover:scale-115 transition duration-300 ease-in-out grayscale-100 md:hover:grayscale-0 md:hover:bg-purple-1 dark:invert-100 dark:md:hover:invert-0 brightness-85 md:hover:brightness-100 m-4 md:m-none"
    >
      <v-img :key="project.name" :src="project.logo" class="drop-shadow">
        <template #placeholder>
          <div class="flex justify-center items-center h-full">
            <v-progress-circular indeterminate />
          </div>
        </template>
      </v-img>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: projects
</route>
