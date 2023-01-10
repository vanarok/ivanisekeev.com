export function useProjects() {
  const gifki = {
    name: 'gifki',
    skills: [
      'JavaScript',
      'HTML',
      'Vue.JS',
      'Vuetify',
      'CSS',
      'SCSS',
      'RESTful API',
      'Tailwind',
      'Unocss',
      'Git',
      'NGINX',
      'Linux',
      'TypeScript',
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
    ],
  }

  return [gifki]
}
