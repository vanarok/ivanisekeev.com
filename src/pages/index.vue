<script setup lang="ts">
const { t } = useI18n()

const linksFindMe = [
  {
    height: 18,
    iconImagePath: '/linkedin.svg',
    link: 'https://www.linkedin.com/in/ivanisekeev/',
    name: 'LinkedIn',
    width: 18,
  },
  {
    height: 23,
    iconImagePath: '/upwork.svg',
    link: 'https://www.upwork.com/freelancers/~01d481153ecadb517e',
    name: 'Upwork',
    width: 23,
  },
  {
    height: 18,
    iconImagePath: '/github.svg',
    link: 'https://github.com/vanarok',
    name: 'GitHub',
    width: 18,
  },
  {
    height: 16,
    iconImagePath: '/kwork.ico',
    link: 'https://kwork.ru/user/vanarok',
    name: 'Kwork',
    width: 15,
  },
]

const creatorOf = [
  { iconImagePath: '/gifsru.ico', link: 'https://gifs.ru', name: 'Gifs.ru' },
  {
    iconImagePath: '/shuriken.png',
    link: 'https://github.com/vanarok/Shuriken',
    name: 'Shuriken',
  },
]
</script>

<template>
  <div class="flex flex-col items-center" md="flex-row gap-10 w-full mt-10">
    <div class="h-full">
      <div class="flex flex-row gap-4">
        <v-img
          class="rounded-full hover:scale-110 transition duration-300 ease-in-out"
          max-width="50"
          src="/face-optimized.webp"
          lazy-src="/face-lazy.webp"
          height="50"
          width="50"
          alt="Ivan Isekeev"
        />
        <h2
          v-t="'profile.name'"
          class="content-center font-black color-black dark:color-white text-3xl"
          md="justify-start text-left mt-0 text-[2.25rem]"
        />
      </div>

      <p v-t="'profile.motto'" class="mt-7 text-left" />
    </div>
  </div>

  <div class="flex text-left mb-6 mt-7">
    <div class="flex items-center gap-1">
      {{ t('profile.creatorListLabel') }}
      <a
        v-for="creator in creatorOf"
        :key="creator.name"
        :href="creator.link"
        target="_blank"
        class="color-neutral-5 bg-stone-2 dark:bg-stone-7 dark:hover:bg-purple-800 dark:hover:text-white dark:color-gray-2 font-mono px-1.5 py-0 rounded flex flex-row gap-1 hover:bg-purple-1 items-center"
      >
        <v-img :width="16" :height="16" :src="creator.iconImagePath" />
        {{ creator.name }}
      </a>
    </div>
  </div>

  <i18n-t
    keypath="profile.bio"
    scope="global"
    tag="p"
    class="text-base text-left"
    style="line-height: 2"
  >
    <template #projectLink>
      <a href="/projects" class="link">
        {{ t('profile.projectLinkText') }}
      </a>
    </template>
  </i18n-t>

  <h3 class="mt-10 text-left">
    {{ t('profile.contactHeader') }}
    <div class="flex flex-wrap gap-3 mt-5">
      <a
        v-for="link in linksFindMe"
        :key="link.name"
        :href="link.link"
        target="_blank"
        class="link flex items-center"
      >
        <v-img
          :src="link.iconImagePath"
          :height="link.height"
          :width="link.width"
          class="mr-1 align-text-bottom flex-inline grayscale dark:invert-100"
        />
        {{ link.name }}
      </a>
    </div>
    <div class="mt-5">
      {{ t('profile.contactMailLabel') }}
      <a
        href="mailto:hi@ivanisekeev.com?subject=ivanisekeev.com: Your subject&body=Greeting. My name is ..."
        class="link"
      >
        hi@ivanisekeev.com
      </a>
    </div>
  </h3>
</template>

<route lang="yaml">
meta:
layout: home
</route>
