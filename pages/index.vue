<template lang="pug">
.container
  div
    
    h1.title portal-fulcrumsaas-net
    h2.subtitle Portal at fulcrumsaas.net

    button.py-2.px-4.border.border-gray-300.rounded-md.text-sm.leading-5.font-medium.text-gray-700.transition.duration-150.ease-in-out(type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 hover:bg-gray-50") TEST

    .links.pt-3
      a.button--green.px-4.py-2.bg-gray-500(href="https://nuxtjs.org/" target="_blank" class="hover:bg-gray-800") Documentation
      a.button--grey.px-4.py-2(href="https://github.com/nuxt/nuxt.js" target="_blank") GitHub
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  name: 'IndexPage',
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

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
