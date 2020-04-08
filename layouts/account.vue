<template lang="pug">
div
  .min-h-screen.flex.flex-col.justify-center.py-12(class='sm:px-6 lg:px-8')
    div(class='sm:mx-auto sm:w-full sm:max-w-md')
      img.mx-auto.h-12.w-auto(src='../assets/images/fulcrum-logo-300.svg' alt='Fulcrum')

    .mt-8(class='sm:mx-auto sm:w-full sm:max-w-md')    
      nuxt
      p.mt-12.text-xs.text-center 
        a.font-medium.text-cool-gray-500.transition.ease-in-out.duration-150(href="//www.fulcrumsaas.com" class="hover:text-indigo-600") www.fulcrumsaas.com
      
  pre.text-xs.p-3.bg-gray-800.text-gray-50 {{ $store.state }}
</template>

<script>
export default {}
</script>

<style>
html,
body {
  height: 100%;
  @apply bg-cool-gray-200;
}
</style>
