import { computed } from 'vue'
import { useI18n } from "vue-i18n"

export function useProjects() {
  const { t } = useI18n()

  const gifki = computed(() => {
    return {
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
      pictures: [
        {
          id: 1,
          description: 'Login page',
          picture: '/gifki/gifki-login.png',
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
    }
  })

  const screenpixel = computed(() => {
    return {
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
    }
  })

  const xwave = computed(() => {
    return {
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
    }
  })

  const crmSf = computed(() => {
    return {
      name: 'crm-sf',
      skills: ['TypeScript', 'Vue.JS', 'Vuetify', 'vue-I18n', 'Git'],
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
    }
  })

  const personalSite = computed(() => {
    return {
      name: 'personal-site',
      skills: [
        'TypeScript',
        'PostCSS',
        'UnoCSS',
        'Vue.JS',
        'Vue-SSG',
        'Vue-I18n',
        'Vuetify',
        'Cypress',
        'Vitest',
        'Pinia',
        'Swiper',
        'PWA',
        'PNPM',
        'Git',
      ],
      pictures: [
        {
          id: 1,
          description: 'Profile',
          picture: '/ivansvoboda/ivansvoboda-profile.png',
        },
        {
          id: 2,
          description: 'Projects',
          picture: '/ivansvoboda/ivansvoboda-projects.png',
        },
        {
          id: 3,
          description: 'Project popup',
          picture: '/ivansvoboda/ivansvoboda-popup.png',
        },
        {
          id: 4,
          description: 'Dark theme',
          picture: '/ivansvoboda/ivansvoboda-dark.png',
        },
      ],
      description: [
        t('projects.personal-site.description1'),
        t('projects.personal-site.description2'),
        t('projects.personal-site.description3'),
      ],
    }
  })

  const projects = computed(() => {
    return [
      gifki.value,
      screenpixel.value,
      xwave.value,
      crmSf.value,
      personalSite.value,
    ]
  })

  return projects
}
