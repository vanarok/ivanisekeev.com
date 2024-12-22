<script setup lang="ts">
import type { Project } from '~/types'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const { t } = useI18n()

const projects = computed(() => {
  return [
    {
      name: 'gifki',
      skills: [
        'JavaScript',
        'Vue.JS',
        'SCSS',
        'PostCSS',
        'UnoCSS',
        'Vuetify',
        'RESTful API',
        'NGINX',
        'Linux',
        'Git',
      ],
      previewPicture: '/gifki-main-unlogged.png',
      logo: '/gifki-preview.svg',
      pictures: [
        {
          id: 1,
          description: 'Login page',
          picture: '/gifki/gifki-main-unlogged.png',
        },
        {
          id: 2,
          description: 'Main page (unlogged)',
          picture: '/gifki/gifki-main-unlogged.png',
        },
        {
          id: 3,
          description: 'Main page (logged)',
          picture: '/gifki/gifki-main-logged.png',
        },
        {
          id: 4,
          description: 'View toggle',
          picture: '/gifki/gifki-view-toggle.png',
        },
        {
          id: 5,
          description: 'Search autocompletion',
          picture: '/gifki/gifki-globalsearch-autocompletion.png',
        },
        {
          id: 6,
          description: 'Global search',
          picture: '/gifki/gifki-globalsearch.png',
        },
        {
          id: 7,
          description: 'Publish media',
          picture: '/gifki/gifki-publish.png',
        },
        {
          id: 8,
          description: 'Upload media',
          picture: '/gifki/gifki-upload.png',
        },
        {
          id: 9,
          description: 'Channel',
          picture: '/gifki/gifki-channel.png',
        },
        {
          id: 10,
          description: 'User settings',
          picture: '/gifki/gifki-user-settings.png',
        },
        {
          id: 11,
          description: 'Media page',
          picture: '/gifki/gifki-media.png',
        },
        {
          id: 12,
          description: 'Media edit',
          picture: '/gifki/gifki-media-edit.png',
        },
        {
          id: 13,
          description: 'Media share',
          picture: '/gifki/gifki-media-share.png',
        },
        {
          id: 14,
          description: 'Media comment',
          picture: '/gifki/gifki-media-comment.png',
        },
        {
          id: 15,
          description: 'Loops page',
          picture: '/gifki/gifki-loops.png',
        },
        {
          id: 16,
          description: 'My collections',
          picture: '/gifki/gifki-mycollections.png',
        },
        {
          id: 17,
          description: 'Collection edit',
          picture: '/gifki/gifki-mycollections-edit.png',
        },
      ],
      description: [
        t('projects.gifki.description1'),
        t('projects.gifki.description2'),
        t('projects.gifki.description3'),
        t('projects.gifki.description4'),
        t('projects.gifki.description5'),
      ],
    },

    {
      name: 'screenpixel',
      skills: [
        'JavaScript',
        'Vue.JS',
        'Laravel',
        'Figma',
        'Bootstrap',
        'SCSS',
        'PostCSS',
        'Git',
      ],
      previewPicture: '/screenpixel-plans.png',
      logo: '/screenpixel-preview.png',
      pictures: [
        {
          id: 1,
          description: 'Login',
          picture: '/screenpixel/screenpixel-login.png',
        },
        {
          id: 2,
          description: 'Sign up',
          picture: '/screenpixel/screenpixel-signup.png',
        },
        {
          id: 3,
          description: 'Reset password',
          picture: '/screenpixel/screenpixel-restore-account.png',
        },
        {
          id: 4,
          description: 'Account',
          picture: '/screenpixel/screenpixel-account.png',
        },
        {
          id: 5,
          description: 'Billing',
          picture: '/screenpixel/screenpixel-billing.png',
        },
        {
          id: 6,
          description: 'Invoices',
          picture: '/screenpixel/screenpixel-invoices.png',
        },
        {
          id: 7,
          description: 'Plans',
          picture: '/screenpixel/screenpixel-plans.png',
        },
        {
          id: 7,
          description: 'Notification',
          picture: '/screenpixel/screenpixel-notification.png',
        },
      ],
      description: [
        t('projects.screenpixel.description1'),
        t('projects.screenpixel.description2'),
        t('projects.screenpixel.description3'),
      ],
    },
    {
      name: 'xwave',
      skills: [
        'TypeScript',
        'Vue.JS',
        'Node.js',
        'SCSS',
        'PrimeFaces',
        'Docker',
        'Docker-compose',
        'RESTful API',
        'Git',
        'NGINX',
        'Linux',
      ],
      previewPicture: '/xwave/xwave-service.png',
      logo: '/xwave-preview.png',
      pictures: [
        {
          id: 1,
          description: 'Service',
          picture: '/xwave/xwave-service.png',
        },
        {
          id: 2,
          description: 'Date',
          picture: '/xwave/xwave-date.png',
        },
        {
          id: 3,
          description: 'Personal',
          picture: '/xwave/xwave-personal.png',
        },
      ],
      description: [t('projects.xwave.description1')],
    },
    {
      name: 'crm-sf',
      skills: ['TypeScript', 'Vue.JS', 'Vuetify', 'vue-I18n', 'Git'],
      previewPicture: '/crm-sf/crm-sf-clients.png',
      logo: '/crmsf-preview.svg',
      pictures: [
        {
          id: 1,
          description: 'List clients',
          picture: '/crm-sf/crm-sf-clients.png',
        },
        {
          id: 2,
          description: 'Client edit',
          picture: '/crm-sf/crm-sf-clients-edit.png',
        },
        {
          id: 3,
          description: 'Client info',
          picture: '/crm-sf/crm-sf-clients-info.png',
        },
      ],
      description: [t('projects.crm-sf.description1')],
    },
    {
      name: 'footyroom',
      skills: [],
      previewPicture: '/footyroom-preview.png',
      logo: '/footyroom-preview.png',
      pictures: [],
      description: [],
    },
    {
      name: 'startgame',
      skills: [],
      previewPicture: '/startgame-preview.svg',
      logo: '/startgame-preview.svg',
      pictures: [],
      description: [],
    },
  ]
}) as unknown as Project[]
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

  <p class="mt-40 text-2xl color-neutral-2 dark:color-white flex justify-center gap-3 animate-bounce">
    Scroll down <span class=" i-carbon:arrow-down text-3xl" />

  </p>

  <div class="flex flex-col gap-100 mt-40 md:mt-50 mb-100 mx-4">
    <template v-for="project in projects" :key="project.name">
      <ProjectItem
        v-if="project.pictures.length > 0"
        :title="t(`projects.${project.name}.title`)"
        :preview-picture="project.previewPicture"
        :pictures="project.pictures"
        :skills="project.skills"
        :description="project.description"
      />
    </template>
  </div>

  <div class="w-full">
    <h3
      class="mt-50 color-black dark:color-white text-3xl md:text-4xl font-bold mb-20 xl:text-left text-center"
    >
      {{ t('projects.title2') }}
    </h3>
    <div
      class="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-10 lg:max-w-75vw lg:mx-auto mt-10 max-w-75vw m-auto"
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
  </div>
</template>

<route lang="json">
{
  "meta": {
    "layout": "projects"
  }
}
</route>
