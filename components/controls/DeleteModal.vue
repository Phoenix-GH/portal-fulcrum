<template lang="pug">
BaseModal(ref="base" v-model="isOpenProxy" v-slot="{ onHandler }" :closeOnBackground="false" :showCloseIcon="false")
  div      
      div(class="sm:flex sm:items-start")
        .mx-auto.flex-shrink-0.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-red-100(class="sm:mx-0 sm:h-10 sm:w-10"): svg.h-6.w-6.text-red-600(stroke="currentColor" fill="none" viewBox="0 0 24 24"): path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z")
        .mt-3.text-center(class="sm:mt-0 sm:ml-4 sm:text-left")
          h3.text-lg.leading-6.font-medium.text-gray-900 {{local.title}}
          .mt-2
            slot
              p.text-sm.leading-5.text-gray-500 {{local.text}}
      .mt-5(class="sm:mt-4 sm:flex sm:flex-row-reverse")
        span.flex.w-full.rounded-md.shadow-sm(class="sm:ml-3 sm:w-auto"): button.inline-flex.justify-center.w-full.rounded-md.border.border-transparent.px-4.py-2.bg-red-600.text-base.leading-6.font-medium.text-white.shadow-sm.transition.ease-in-out.duration-150(@click="onHandler(local.onOk)" type="button" class="hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red sm:text-sm sm:leading-5") {{ local.okText}}
        span.mt-3.flex.w-full.rounded-md.shadow-sm(class="sm:mt-0 sm:w-auto"): button.inline-flex.justify-center.w-full.rounded-md.border.border-gray-300.px-4.py-2.bg-white.text-base.leading-6.font-medium.text-gray-700.shadow-sm.transition.ease-in-out.duration-150(@click="onHandler(local.onCancel)" type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline sm:text-sm sm:leading-5") {{ local.cancelText}}
      //-pre {{ $data }}
</template>

<script>
import BaseModal from '@/components/controls/BaseModal'
import { delay } from '@/utils'
export default {
  components: { BaseModal },
  model: {
    prop: 'isOpen'
  },
  props: {
    title: { type: String, default: 'Confirm Delete' },
    text: {
      type: String,
      default: 'Are you sure you want to delete this? This action cannot be undone.'
    },
    okText: { type: String, default: 'OK' },
    cancelText: { type: String, default: 'Cancel' },
    onOk: {
      type: Function,
      default: undefined
    },
    onCancel: {
      type: Function,
      default: undefined
    },
    isOpen: { type: Boolean, default: false }
  },
  data() {
    return {
      local: {
        isOpen: this.isOpen,
        title: this.title,
        text: this.text,
        onOk: this.onOk,
        onCancel: this.onCancel,
        okText: this.okText,
        cancelText: this.cancelText
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
    async confirm(context) {
      let result = null
      const onOk = () => {
        result = true
        this.reset(this)
      }
      const onCancel = () => {
        result = false
        this.reset(this)
      }
      this.reset({ ...this.local, ...context, onOk, onCancel })
      this.isOpenProxy = true

      while (true) {
        if (result !== null) break
        await delay(250)
      }

      return result
    },
    reset({ title, text, okText, cancelText, onOk, onCancel }) {
      this.local.title = title
      this.local.text = text
      this.local.okText = okText
      this.local.cancelText = cancelText
      this.local.onOk = onOk
      this.local.onCancel = onCancel
      this.isOpenProxy = false
    }
  }
}
</script>
