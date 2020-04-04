<template lang="pug">
.fixed.bottom-0.inset-x-0.px-4.pb-6(v-bind:x-data="'{ open:' + isOpen + ' }'" x-show="open" class="sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center")
  .fixed.inset-0.transition-opacity(x-show="open" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"): .absolute.inset-0.bg-gray-500.opacity-75
  .bg-white.rounded-lg.px-4.pt-5.pb-4.overflow-hidden.shadow-xl.transform.transition-all(x-show="open" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100" x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" class="sm:max-w-sm sm:w-full sm:p-6")
    div
      .mx-auto.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-green-100: svg.h-6.w-6.text-green-600(stroke="currentColor" fill="none" viewBox="0 0 24 24"): path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7")
      .mt-3.text-center(class="sm:mt-5")
        h3.text-lg.leading-6.font-medium.text-gray-900 {{title}}
        .mt-2: p.text-sm.leading-5.text-gray-500 {{text}}
    .mt-5(class="sm:mt-6"): span.flex.w-full.rounded-md.shadow-sm: button.inline-flex.justify-center.w-full.rounded-md.border.border-transparent.px-4.py-2.bg-indigo-600.text-base.leading-6.font-medium.text-white.shadow-sm.transition.ease-in-out.duration-150(@click="onClose" type="button" class="hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5") {{buttonText}}
</template>

<script>
export default {
  props: {
    title: { type: String, default: null },
    text: { type: String, default: null },
    buttonText: { type: String, default: 'OK' },
    onClose: { type: Function, default: () => {} },
    isOpen: { type: Boolean, default: false }
  },
  methods: {}
}
</script>
