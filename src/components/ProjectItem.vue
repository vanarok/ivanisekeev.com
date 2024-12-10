<script setup lang="ts">
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Picture } from '~/types'

const props = defineProps<{
  title: string
  description: string[]
  pictures: Picture[]
  skills: string[]
  previewPicture: string
}>()

const showAboutProject = ref(false)

const breakpoint = useBreakpoint()
const smallerMd = breakpoint.smaller('md')

function showProject() {
  if (props.description.length === 0) return
  showAboutProject.value = true
}
</script>

<template>
  <div
    class="flex flex-col md:flex-row gap-3 py-25 px-10 rounded-lg cursor-pointer logo-container hover:scale-115 transition duration-300 ease-in-out grayscale-100 hover:grayscale-0 hover:bg-purple-1 dark:invert-100 dark:hover:invert-0 brightness-85 hover:brightness-100"
    @click="showProject"
  >
    <v-img :aspect-ratio="20 / 9" class="drop-shadow-xl" :src="previewPicture">
      <template #placeholder>
        <div class="flex justify-center items-center h-full">
          <v-progress-circular indeterminate />
        </div>
      </template>
    </v-img>
    <!--    <div md:w-80> -->
    <!--      <h4 -->
    <!--        font-bold -->
    <!--        style="white-space: normal" -->
    <!--        text-sm -->
    <!--        md:text-lg -->
    <!--        text-left -->
    <!--        v-text="title" -->
    <!--      /> -->
    <!--      <p -->
    <!--        text-left -->
    <!--        text-xs -->
    <!--        md:text-base -->
    <!--        style="white-space: normal" -->
    <!--        truncate -->
    <!--        line-clamp-3 -->
    <!--        md="line-clamp-5" -->
    <!--        v-text="description[0]" -->
    <!--      /> -->
    <!--    </div> -->
  </div>

  <v-dialog
    v-model="showAboutProject"
    scrollable
    content-class="items-center"
    :fullscreen="smallerMd"
  >
    <v-card class="align-center md:w-200 pa-1">
      <v-card-title class="!text-base !md:text-xl !font-bold mt-2">
        <div max-w-75vw truncate v-text="title" />

        <div
          cursor-pointer
          absolute
          top-4
          right-4
          i-carbon-close
          text-3xl
          @click="showAboutProject = false"
        />
      </v-card-title>
      <v-card-text>
        <Swiper
          v-if="pictures"
          id="projectSlider"
          :pagination="{ clickable: true }"
          :modules="[Navigation, Pagination]"
          navigation
          :slides-per-view="1"
          :space-between="50"
          :preload-images="false"
          class="mb-2"
        >
          <SwiperSlide
            v-for="slide in pictures"
            :key="slide.id"
            class="py-10 md:pa-10 cursor-grab"
          >
            <p text-sm absolute top-0 italic my-2>
              {{ slide.description }}
            </p>
            <v-img
              :aspect-ratio="16 / 9"
              :src="slide.picture"
              class="rounded-lg"
            >
              <template #placeholder>
                <div class="flex justify-center items-center h-full">
                  <v-progress-circular indeterminate />
                </div>
              </template>
            </v-img>
          </SwiperSlide>
        </Swiper>
        <div mb-2 md:mb-2>
          <v-chip
            v-for="skill in skills"
            :key="skill"
            size="small"
            rounded
            class="bg-stone-200 text-xs font-light text-stone-8 mb-2 mr-1 md:mr-2"
          >
            {{ skill }}
          </v-chip>
        </div>
        <p
          v-for="paragraph in description"
          :key="paragraph"
          truncate
          text-left
          text-xs
          md:text-base
          style="white-space: normal"
          mb-4
          v-text="paragraph"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style lang="postcss">
#projectSlider .swiper-button-prev,
#projectSlider .swiper-button-next {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  color: #888888;
  --swiper-navigation-size: 20px;
}

#projectSlider .swiper-pagination-bullet {
  background: mediumpurple;
}
</style>
