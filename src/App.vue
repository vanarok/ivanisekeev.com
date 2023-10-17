<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Ivan Isekeev',
  meta: [
    { name: 'description', content: 'Ivan Isekeev`s personal website' },
    { name: 'author', content: 'Ivan Isekeev' },
    {
      name: 'keywords',
      content:
        'HTML, CSS, JavaScript, TypeScript, Vue, Personal, Ivan, Isekeev, Vanarok',
    },
    {
      name: 'theme-color',
      content: computed(() => (isDark.value ? '#00aba9' : '#ffffff')),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() =>
        preferredDark.value ? '/favicon-dark.png' : '/favicon.png',
      ),
    },
  ],
})

function hasRefererQuery(route: any) {
  return route.query.referer
}

const router = useRouter()

router.beforeEach((to, from, next) => {
  if (!hasRefererQuery(to) && hasRefererQuery(from))
    next({ query: from.query, name: String(to.name) })
  else next()
})
</script>

<template>
  <RouterView />
</template>
