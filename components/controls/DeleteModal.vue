<template lang="pug">
.fixed.bottom-0.inset-x-0.px-4.pb-4(v-bind:x-data="'{ open:' + isOpen + '}'" x-show="open" class="sm:inset-0 sm:flex sm:items-center sm:justify-center")
    .fixed.inset-0.transition-opacity(x-show="open" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"): .absolute.inset-0.bg-gray-500.opacity-75
    .relative.bg-white.rounded-lg.px-4.pt-5.pb-4.overflow-hidden.shadow-xl.transform.transition-all(x-show="open" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100" x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" class="sm:max-w-lg sm:w-full sm:p-6")
      .hidden.absolute.top-0.right-0.pt-4.pr-4(class="sm:block"): button.text-gray-400.transition.ease-in-out.duration-150(@click="isOpen = false;" type="button" class="hover:text-gray-500 focus:outline-none focus:text-gray-500"): svg.h-6.w-6(stroke="currentColor" fill="none" viewBox="0 0 24 24"): path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12")
      div(class="sm:flex sm:items-start")
        .mx-auto.flex-shrink-0.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-red-100(class="sm:mx-0 sm:h-10 sm:w-10"): svg.h-6.w-6.text-red-600(stroke="currentColor" fill="none" viewBox="0 0 24 24"): path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z")
        .mt-3.text-center(class="sm:mt-0 sm:ml-4 sm:text-left")
          h3.text-lg.leading-6.font-medium.text-gray-900 {{title}}
          .mt-2: p.text-sm.leading-5.text-gray-500 {{text}}
      .mt-5(class="sm:mt-4 sm:flex sm:flex-row-reverse")
        span.flex.w-full.rounded-md.shadow-sm(class="sm:ml-3 sm:w-auto"): button.inline-flex.justify-center.w-full.rounded-md.border.border-transparent.px-4.py-2.bg-red-600.text-base.leading-6.font-medium.text-white.shadow-sm.transition.ease-in-out.duration-150(@click="onOK" type="button" class="hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red sm:text-sm sm:leading-5") {{okText}}
        span.mt-3.flex.w-full.rounded-md.shadow-sm(class="sm:mt-0 sm:w-auto"): button.inline-flex.justify-center.w-full.rounded-md.border.border-gray-300.px-4.py-2.bg-white.text-base.leading-6.font-medium.text-gray-700.shadow-sm.transition.ease-in-out.duration-150(@click="onCancel" type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline sm:text-sm sm:leading-5") {{cancelText}}
</template>

<script>
export default {
  props: {
    title: { type: String, default: 'Confirm Delete' },
    text: {
      type: String,
      default:
        'Are you sure you want to delete this? All of your data will be permanantly removed from our servers forever. This action cannot be undone.'
    },
    okText: { type: String, default: 'OK' },
    cancelText: { type: String, default: 'Cancel' },
    onOK: { type: Function, default: () => {} },
    onCancel: { type: Function, default: () => {} },
    isOpen: { type: Boolean, default: false }
  },
  methods: {}
}
</script>