<template lang="pug">
div
  .min-h-screen
    GlobalNavigation
    Navigation
    main: .max-w-7xl.mx-auto.py-6(class="sm:px-6 lg:px-8"): .px-4.py-4(class="sm:px-0")
      nuxt
  pre.text-xs.p-3.bg-gray-800.text-gray-50 {{  [ $state , $store.state ] }}
</template>
<script>
import GlobalNavigation from '@/components/parts/GlobalNavigation.vue'
import Navigation from '@/components/parts/Navigation.vue'
export default {
  components: { GlobalNavigation, Navigation }
}
</script>
<style>
html,
body {
  height: 100%;
}
</style>
