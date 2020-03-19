<template lang="pug">
.container
  div
    h1.title Team management
    .links.pt-3
      a.button--green.px-4.py-2.bg-gray-500(href="https://nuxtjs.org/" target="_blank" class="hover:bg-gray-800") Documentation
      a.button--grey.px-4.py-2(href="https://github.com/nuxt/nuxt.js" target="_blank") GitHub
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
/*
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
*/
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>
