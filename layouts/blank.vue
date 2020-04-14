<template lang="pug">
  div
    nuxt
    
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
pre {
  white-space: pre-wrap;
}
</style>
