<script setup lang="ts">
const route = useRoute()
const upworkReferer = route.query.referer === 'upwork'

const { locale } = useI18n()
</script>

<template>
  <div v-if="!upworkReferer" md:text-left pb-5>
    <a
      icon-btn
      href="mailto:hello@ivanisekeev.com?subject=ivanisekeev.com: Your subject&body=Greeting. My name is ..."
    >
      <div i-carbon-email align-text-bottom flex-inline mr-2 />
     hello@ivanisekeev.com 
    </a>
  </div>
  <div flex justify-center md:justify-between gap-3>
    <a
      icon-btn
      target="_blank"
      href="https://www.upwork.com/freelancers/~01d481153ecadb517e"
    >
      <div text-green i-simple-icons-upwork align-bottom flex-inline mr-1 />
      upwork
    </a>
    <template v-if="!upworkReferer">
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
