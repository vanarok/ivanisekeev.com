<script setup lang="ts"></script>

<template>
  <div flex flex-col items-center md="flex-row gap-10">
    <PhotoPortrait />
    <ProfileIntro />
  </div>
  <i18n-t
    keypath="profile.bio"
    scope="global"
    tag="p"
    text-base
    my-7
    text-left
    style="line-height: 2"
  >
    <template #specialization>
      <span text-blue>{{ $t('profile.specialization') }}</span>
    </template>
    <template #vuejs>
      <span text-green-300>{{ $t('profile.vuejs') }}</span>
    </template>
    <template #js>
      <span text-yellow>{{ $t('profile.js') }}</span>
    </template>
    <template #nodejs>
      <span text-green>{{ $t('profile.nodejs') }}</span>
    </template>
  </i18n-t>

  <p
    v-t="'profile.bio2'"
    text-base
    my-7
    line-heigth-5
    text-left
    style="line-height: 2"
  />
</template>
