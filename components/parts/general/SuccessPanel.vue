<template lang="pug">
        div
          .mx-auto.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-green-100
            svg.h-6.w-6.text-green-600(stroke="currentColor" fill="none" viewBox="0 0 24 24"): path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7")
          template(v-if="title")
            .mt-3.text-center(class="sm:mt-5")
              h3.text-lg.leading-6.font-medium.text-green-700 {{ title }}
          template(v-if="text")
            div.mt-2
              p.text-sm.leading-5.text-gray-500 {{ text }}
</template>

<script>
export default {
  name: 'SuccessPanel',
  components: {},
  props: {
    text: { type: String },
    title: { type: String }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
