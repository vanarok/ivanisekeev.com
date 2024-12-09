import type { Project } from '~/types'

export function useProjects() {
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
        previewPicture: '/gifki-preview.svg',
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
        previewPicture: '/screenpixel-preview.png',
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
        previewPicture: '/xwave-preview.png',
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
        previewPicture: '/crmsf-preview.svg',
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
    ]
  })

  return projects as unknown as Project[]
}
