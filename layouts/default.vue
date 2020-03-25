<template lang="pug">
div
  GlobalNavigation
  header.bg-white.shadow-sm: .max-w-7xl.mx-auto.py-4.px-4(class="sm:px-6 lg:px-8")
    h2.text-lg.leading-6.font-semibold.text-gray-900 Dashboard
  main: .max-w-7xl.mx-auto.py-6(class="sm:px-6 lg:px-8"): .px-4.py-4(class="sm:px-0"): .border-4.border-dashed.border-gray-200.rounded-lg
    nuxt
  pre.text-xs.p-3.bg-gray-800.text-gray-50 {{  [ $state , $store.state ] }}
</template>
<script>
import GlobalNavigation from '@/components/parts/GlobalNavigation.vue'
export default {
  components: { GlobalNavigation }
}
</script>
<style>
html,
body {
  height: 100%;
}
</style>
