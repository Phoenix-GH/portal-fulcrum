<template lang="pug">
.mt-1.rounded-md.shadow-sm
  .mt-1.relative.rounded-md.shadow-sm    
    input#password.form-input.block.w-full.pr-10(
      class='sm:text-sm sm:leading-5'
      :type='inputType' 
      v-model="valueProxy" 
      required
      )
    .absolute.inset-y-0.right-0.pr-2.flex.items-center
      a.text-xs.tracking-wider.py-1.px-2.rounded-sm.uppercase.font-semibold.text-gray-700.bg-gray-100.w-14.text-center(href="" @click.prevent="toggle" class="hover:bg-indigo-100 hover:text-indigo-700") {{ hidden ? 'show' : 'hide' }}
      //-svg.w-5.h-5.text-gray-400(viewBox='0 0 20 20' fill='currentColor')
        path(fill-rule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clip-rule='evenodd')


</template>

<script>
export default {
  name: 'PasswordField',
  components: {},
  props: { value: String },
  data() {
    return {
      hidden: true
    }
  },
  computed: {
    inputType() {
      return this.hidden ? 'password' : 'text'
    },
    valueProxy: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    toggle() {
      this.hidden = !this.hidden
    }
  }
}
</script>

<style lang="scss" scoped></style>
