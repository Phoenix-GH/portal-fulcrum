<template lang="pug">
portal(to="modal" v-if="local.isOpen")
  .fixed.bottom-0.inset-x-0.px-4.pb-6(class="sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center")
    .fixed.inset-0.transition-opacity
      .absolute.inset-0.bg-gray-500.opacity-75(@click="close")
    transition(name="fade")
      .bg-white.rounded-lg.px-4.pt-5.pb-4.overflow-hidden.shadow-xl.transform.transition-all(class="sm:max-w-sm sm:w-full sm:p-6")
        template(v-if="local.mode === 'error'")
          //- ErrorPanel()
          .mx-auto.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-red-100

            svg.h-6.w-6.text-red-600(stroke="currentColor" fill="none" viewBox="0 0 24 24")
              path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z")
          .mt-3.text-center(class="sm:mt-5")
            h3.text-lg.leading-6.font-medium.text-red-700 {{ local.title }}
          ul.mt-3.mx-1.text-center.text-gray-500.text-sm(class="sm:mt-5")
            template(v-for="error in local.errors")
              li.ml-2 {{ error.text || error }}

        template(v-else-if="local.mode === 'success'")

          .mx-auto.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-green-100
            svg.h-6.w-6.text-green-600(stroke="currentColor" fill="none" viewBox="0 0 24 24")
              path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7")
          .mt-3.text-center(class="sm:mt-5")
            h3.text-lg.leading-6.font-medium.text-gray-900 {{local.title}}
            .mt-2: p.text-sm.leading-5.text-gray-500 {{local.text}}

        template(v-if="local.showButton")
          .mt-5(class="sm:mt-6")
            span.flex.w-full.rounded-md.shadow-sm
              button.inline-flex.justify-center.w-full.rounded-md.border.border-transparent.px-4.py-2.bg-indigo-600.text-base.leading-6.font-medium.text-white.shadow-sm.transition.ease-in-out.duration-150(@click="close" type="button" class="hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5") {{local.buttonText}}
</template>

<script>
export default {
  props: {
    title: { type: String, default: null },
    text: { type: String, default: null },
    errors: { type: Array, default: () => [] },
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
  data() {
    return {
      local: {
        title: this.title,
        text: this.text,
        buttonText: this.buttonText,
        onClose: this.onClose,
        isOpen: this.isOpen,
        showButton: this.showButton,
        mode: this.mode,
        errors: this.errors
      }
    }
  },
  methods: {
    close() {
      this.local.onClose()
      this.$emit('close')
    },
    success({ title, text, onClose }) {
      this.show('success', title, text, onClose)
    },
    error({ title, text, errors, onClose }) {
      if (errors !== null && errors !== undefined) {
        if (errors instanceof Error) {
          if (errors.response && errors.response.status === 409) {
            this.local.errors = errors.response.data.errors
          } else this.local.errors = [errors.message]
        } else if (typeof errors === 'string') {
          this.local.errors = [errors]
        } else {
          this.local.errors = errors
        }
      }
      this.show('error', title || 'Error', text, onClose)
    },
    show(mode, title, text, onClose) {
      const def = () => {
        this.local.isOpen = false
        this.reset()
      }
      this.local.mode = mode
      this.local.title = title
      this.local.text = text
      this.local.showButton = false
      this.local.onClose = onClose || def

      this.local.isOpen = true
    },
    reset() {
      this.local.title = this.title
      this.local.text = this.text
      this.local.buttonText = this.buttonText
      this.local.onClose = this.onClose
      this.local.isOpen = this.isOpen
      this.local.showButton = this.showButton
      this.local.mode = this.mode
      this.local.errors = this.errors
    }
  }
}
</script>
