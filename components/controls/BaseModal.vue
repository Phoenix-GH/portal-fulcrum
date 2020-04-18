<template lang="pug">
portal(to="modal" v-if="isOpen")
  .fixed.bottom-0.inset-x-0.px-4.pb-4(class="sm:inset-0 sm:flex sm:items-center sm:justify-center")
    .fixed.inset-0.transition-opacity: .absolute.inset-0.bg-gray-500.opacity-75(@click="onBackgroundClick")
    .relative.bg-white.rounded-lg.px-4.pt-5.pb-4.overflow-hidden.shadow-xl.transform.transition-all(class="sm:max-w-lg sm:w-full sm:p-6")
      template(v-if="showCloseIcon")
        .absolute.top-0.right-0.pt-4.pr-4(class="sm:block"): button.text-gray-400.transition.ease-in-out.duration-150(@click="close" type="button" class="hover:text-gray-500 focus:outline-none focus:text-gray-500"): svg.h-6.w-6(stroke="currentColor" fill="none" viewBox="0 0 24 24"): path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12")
      slot(:onHandler="handler")
      //- pre {{ { isOpen, onClose, closeOnBackground, showCloseIcon } }}
</template>

<script>
export default {
  inheritAttrs: false,
  model: {
    prop: 'isOpen'
  },
  props: {
    isOpen: { type: Boolean, default: false },
    onClose: { type: Function, default: () => undefined },
    closeOnBackground: { type: Boolean, default: true },
    showCloseIcon: { type: Boolean, default: false }
  },
  watch: {
    $route(to, from) {
      console.log('Route change')
    }
  },
  methods: {
    onBackgroundClick() {
      if (this.closeOnBackground) {
        this.close()
      }
    },
    handler(func) {
      console.log('BASE onClose', typeof func)
      if (typeof func === 'function') func()
      else this.close()
    },
    close() {
      this.$emit('input', false)
      if (this.onClose) this.onClose()
    }
  }
}
</script>
