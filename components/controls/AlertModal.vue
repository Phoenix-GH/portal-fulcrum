<template lang="pug">
portal(to="modal" v-if="isOpen")
  .fixed.bottom-0.inset-x-0.px-4.pb-6(class="sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center")
    .fixed.inset-0.transition-opacity
      .absolute.inset-0.bg-gray-500.opacity-75(@click="onClose")
    .bg-white.rounded-lg.px-4.pt-5.pb-4.overflow-hidden.shadow-xl.transform.transition-all(x-show="open" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100" x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" class="sm:max-w-sm sm:w-full sm:p-6")
      template(v-if="mode === 'error'")
        ErrorPanel()
        //- .mx-auto.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-red-100
        
        //-   svg.h-6.w-6.text-red-600(stroke="currentColor" fill="none" viewBox="0 0 24 24")        
        //-     path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z")
        //- .mt-3.text-center(class="sm:mt-5")
        //-   h3.text-lg.leading-6.font-medium.text-red-700 Verification Failed
        //- ul.mt-3.mx-1.text-center.text-gray-500.text-sm(class="sm:mt-5")
        //-   template(v-for="error in errors")
        //-     li.ml-2 {{ error.text }}

      template(v-else-if="mode === 'success'")

        .mx-auto.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-green-100
          svg.h-6.w-6.text-green-600(stroke="currentColor" fill="none" viewBox="0 0 24 24")
            path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7")
        .mt-3.text-center(class="sm:mt-5")
          h3.text-lg.leading-6.font-medium.text-gray-900 {{title}}
          .mt-2: p.text-sm.leading-5.text-gray-500 {{text}}

      template(v-if="showButton")
        .mt-5(class="sm:mt-6"): span.flex.w-full.rounded-md.shadow-sm: button.inline-flex.justify-center.w-full.rounded-md.border.border-transparent.px-4.py-2.bg-indigo-600.text-base.leading-6.font-medium.text-white.shadow-sm.transition.ease-in-out.duration-150(@click="onClose" type="button" class="hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5") {{buttonText}}
</template>

<script>
export default {
  props: {
    title: { type: String, default: null, required: true },
    text: { type: String, default: null, required: true },
    buttonText: { type: String, default: 'OK' },
    onClose: { type: Function, default: () => {} },
    isOpen: { type: Boolean, default: false },
    showButton: { type: Boolean, default: true },
    mode: {
      type: String,
      default: 'success',
      validator(value) {
        return ['success', 'error', 'loading'].includes(value)
      }
    }
  },
  methods: {}
}
</script>
