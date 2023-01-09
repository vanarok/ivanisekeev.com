<script setup lang="ts">
const route = useRoute()
const upworkReferer = route.query.referer === 'upwork'

const { locale } = useI18n()
</script>

<template>
  <div flex flex-col md:flex-row justify-between gap-3>
    <a
      v-if="upworkReferer"
      icon-btn
      target="_blank"
      href="https://www.upwork.com/freelancers/~01d481153ecadb517e"
    >
      <div text-green i-simple-icons-upwork align-bottom flex-inline mr-1 />
      upwork profile
    </a>
    <template v-else>
      <a
        icon-btn
        href="mailto:ivanisekeev0@gmail.com?subject=ivansvoboda.com: Your subject&body=Greeting. My name is ..."
      >
        <div i-carbon-email align-text-bottom flex-inline mr-2 />
        ivanisekeev0@gmail.com
      </a>
      <a
        icon-btn
        target="_blank"
        href="https://www.linkedin.com/in/ivanisekeev/"
      >
        <div
          i-simple-icons-linkedin
          text-blue
          align-text-bottom
          flex-inline
          mr-1
        />
        linkedin
      </a>
      <a
        icon-btn
        target="_blank"
        :href="`https://kwork.${locale === 'ru' ? 'ru' : 'com'}/user/vanarok`"
      >
        <div i-carbon-link align-text-bottom flex-inline mr-1 />
        kwork
      </a>
    </template>
  </div>
</template>
