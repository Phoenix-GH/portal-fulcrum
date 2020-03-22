<template lang="pug">
  div
    h3 blnk
    nuxt
    
    pre.p-3.bg-gray-800.text-gray-50 {{ $store.state }}
</template>

<script>
export default {
  async fetch({ store }) {
    await store.dispatch('SET_SESSION')
  }
}
</script>

<style>
html,
body {
  height: 100%;
  @apply bg-cool-gray-200;
}
</style>
