<template lang="pug">
BaseModal(ref="base" v-model="isOpenProxy" v-slot="{ onHandler }" :onClose="local.onClose" :closeOnBackground="local.closeOnBackground"  :showCloseIcon="local.showCloseIcon")
  div
        template(v-if="local.mode === 'error'")

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
              button.inline-flex.justify-center.w-full.rounded-md.border.border-transparent.px-4.py-2.text-base.leading-6.font-medium.text-white.shadow-sm.transition.ease-in-out.duration-150(
                @click="onHandler(local.onClose)"
                type="button"
                class="focus:outline-none sm:text-sm sm:leading-5"
                :class="[ local.mode  === 'success' ? 'focus:shadow-outline-indigo focus:border-indigo-700 hover:bg-indigo-500 bg-indigo-600' : 'focus:shadow-outline-red focus:border-red-700 hover:bg-red-600 bg-red-700']") {{local.buttonText}}
        //- pre {{ $data }}
</template>

<script>
import BaseModal from '@/components/controls/BaseModal'
export default {
  components: { BaseModal },
  model: {
    prop: 'isOpen'
  },
  props: {
    title: { type: String, default: null },
    text: { type: String, default: null },
    errors: { type: Array, default: () => [] },
    buttonText: { type: String, default: 'OK' },
    onClose: { type: Function, default: undefined },
    isOpen: { type: Boolean, default: false },
    showButton: { type: Boolean, default: false },
    showCloseIcon: { type: Boolean, default: false },
    closeOnBackground: { type: Boolean, default: true },
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
        isOpen: this.isOpen,
        title: this.title,
        text: this.text,
        buttonText: this.buttonText,
        onClose: this.onClose,
        showButton: this.showButton,
        mode: this.mode,
        errors: this.errors,
        showCloseIcon: this.showCloseIcon,
        closeOnBackground: this.closeOnBackground
      }
    }
  },
  computed: {
    isOpenProxy: {
      get() {
        return this.local.isOpen
      },
      set(value) {
        this.local.isOpen = value
        this.$emit('input', value)
      }
    }
  },
  watch: {
    isOpen(open) {
      this.local.isOpen = open
    }
  },
  methods: {
    close() {
      this.local.onClose()
      this.$emit('close')
    },
    success(context) {
      return this.show({ mode: 'success', title: 'Success', ...context, errors: [] })
    },
    error(context) {
      let { errors } = context
      const { title } = context
      if (errors !== null && errors !== undefined) {
        if (errors instanceof Error) {
          if (errors.response && errors.response.status === 409) {
            errors = errors.response.data.errors
          } else {
            errors = [errors.message]
          }
        } else if (typeof errors === 'string') {
          errors = [errors]
        }
      }
      return this.show({ mode: 'error', title: title || 'Error', ...context, errors })
    },
    show(context) {
      return new Promise((resolve) => {
        const onClose = () => {
          this.reset(this)
          setTimeout(() => {
            if (context.onClose) context.onClose()
            resolve()
          }, 100)
        }
        this.reset({ ...this.local, ...context, onClose })
        this.isOpenProxy = true
      })
    },
    reset({ mode, title, text, buttonText, onClose, showButton, errors, showCloseIcon, closeOnBackground }) {
      this.local.title = title
      this.local.text = text
      this.local.buttonText = buttonText
      this.local.onClose = onClose
      this.local.showButton = showButton
      this.local.mode = mode
      this.local.errors = errors
      this.local.closeOnBackground = closeOnBackground
      this.local.showCloseIcon = showCloseIcon
      this.isOpenProxy = false
    }
  }
}
</script>
