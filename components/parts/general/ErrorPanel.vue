<template lang="pug">
div
  .mx-auto.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-red-100  
    svg.h-6.w-6.text-red-600(stroke="currentColor" fill="none" viewBox="0 0 24 24")        
      path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z")
  .mt-3.text-center(class="sm:mt-5")
    h3.text-lg.leading-6.font-medium.text-red-700 {{ text }}
  ul.mt-3.mx-1.text-center.text-gray-600.text-sm(class="sm:mt-5")
    template(v-for="error in errors")
      li.ml-2 {{ error.text }}
</template>

<script>
export default {
  props: {
    text: { type: String, default: null }
  },
  inject: ['sharedState'],
  computed: {
    errors() {
      return this.sharedState.errors
    }
  }
}
</script>
