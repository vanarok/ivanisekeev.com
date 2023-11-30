<script setup lang="ts">
import { useModelWrapper } from '~/composables/useModelWrapper'
import { Picture } from '~/types'
import Slider from './Slider.vue'
import Slide from './Slide.vue'

const props = defineProps<{
  modelValue: boolean
  title: string
  description: string[]
  pictures: Picture[]
  skills: string[]
}>()
const emit = defineEmits()

const modal = useModelWrapper(props, emit)
</script>

<template>
  <Transition>
    <div
      v-if="modal"
      fixed
      w-85vw
      h-85vh
      bg-white
      dark:bg-black
      border
      shadow-xl
      rounded-md
      overflow-scroll
      z-101
      absolute-centered
    >
      <div
        class="!text-base !md:text-xl !font-bold h-14"
        shadow-xl
        flex
        justify-center
        items-center
      >
        <div max-w-75vw truncate v-text="title" />
        <div
          cursor-pointer
          absolute
          top-3
          right-4
          i-carbon-close
          text-3xl
          @click="modal = false"
        />
      </div>
      <div pa-8 overflow-scroll class="h-106">
        <Slider v-if="pictures" :items="pictures" class="mb-2">
          <Slide
            v-for="slide in pictures"
            :itemKey="slide.id"
            :key="slide.id"
            class="cursor-grab"
          >
            <p text-sm italic>
              {{ slide.description }}
            </p>
            <img :src="slide.picture" class="rounded-lg" loading="lazy" />
          </Slide>
        </Slider>
        <div mb-2 md:mb-2 flex flex-wrap>
          <div
            v-for="skill in skills"
            :key="skill"
            rounded-full
            text-nowrap
            bg-blue-100
            dark:bg-blue-500
            text-xs
            mb-2
            mr-1
            md:mr-2
            py-1
            px-2
          >
            {{ skill }}
          </div>
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
      </div>
    </div>
  </Transition>
</template>
