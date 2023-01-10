<script setup lang="ts">
import { Lazy, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Picture } from '~/types'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/lazy'

defineProps<{
  title: string
  description: string[]
  pictures: Picture[]
  skills: string[]
}>()

const showAboutProject = ref(false)
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
    md:h-54
    cursor-pointer
    @click="showAboutProject = true"
  >
    <Swiper
      v-if="pictures"
      id="projectSlider"
      class="w-full md:min-w-80 md:w-80 md:h-100%"
      :pagination="{ clickable: true }"
      :modules="[Navigation, Pagination, Lazy]"
      navigation
      :slides-per-view="1"
      :space-between="50"
      :preload-images="false"
      lazy
    >
      <SwiperSlide v-for="slide in pictures" :key="slide.id">
        <img rounded-lg :src="slide.picture" />
      </SwiperSlide>
    </Swiper>
    <div>
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

  <div>
    <v-dialog
      v-model="showAboutProject"
      scrollable
      content-class="items-center"
    >
      <v-card class="align-center md:w-200">
        <v-card-title class="text-lg md:text-xl text-bold mt-2">
          {{ title }}
        </v-card-title>
        <v-card-text>
          <Swiper
            v-if="pictures"
            id="projectSlider"
            :pagination="{ clickable: true }"
            :modules="[Navigation, Pagination, Lazy]"
            navigation
            :slides-per-view="1"
            :space-between="50"
            :preload-images="false"
            lazy
            class="w-180 mb-6 md:mb-0"
          >
            <SwiperSlide
              v-for="slide in pictures"
              :key="slide.id"
              class="md:pa-10"
            >
              <img rounded-lg :src="slide.picture" />
            </SwiperSlide>
          </Swiper>
          <div mb-2 md:mb-6>
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
        <v-card-actions>
          <v-btn color="primary" block @click="showAboutProject = false">
            Close Dialog
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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
