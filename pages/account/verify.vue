<template lang="pug">
div 
  .mt-8(class='sm:mx-auto sm:w-full sm:max-w-md')
    .bg-white.py-8.px-4.shadow(class='sm:rounded-lg sm:px-10')
      template(v-if="hasErrors")
        ul
          template(v-for="error in errors")
            li.text-red-700.ml-2 {{ error.text }}
      template(v-else)
        .flex.items-center.justify-between
          label.block.text-sm.font-medium.leading-5.text-gray-700(for='password') Password
        .mt-1.rounded-md.shadow-sm
          PasswordField(v-model="password")
        input.block.w-full(:value="code")
      .mt-6
        span.block.w-full.rounded-md.shadow-sm
          button.w-full.flex.justify-center.py-2.px-4.border.border-transparent.text-sm.font-medium.rounded-md.text-white.bg-cool-gray-600.transition.duration-150.ease-in-out(
            class='hover:bg-cool-gray-500 focus:outline-none focus:border-cool-gray-700 focus:shadow-outline-cool-gray active:bg-cool-gray-700' 
            type='submit' 
            @click="onUpdatePassword"
          ) Change Password

    p.mt-4.text-sm.text-center 
      | Don't have an account? 
      nuxt-link.font-medium.text-indigo-600.transition.ease-in-out.duration-150(to='./register' class='hover:text-indigo-500 focus:outline-none focus:underline') register      
      | -- or go 
      nuxt-link.font-medium.text-indigo-600.transition.ease-in-out.duration-150(to="../login") back 
      | .
</template>

<script>
import ErrorHandlerMixin from '../../utils/mixins/ErrorHandler'
import PasswordField from '../../components/controls/PasswordField'
export default {
  name: 'VerifyPage',
  layout: 'account',
  components: { PasswordField },
  mixins: [ErrorHandlerMixin],
  meta: { isPublic: true },
  data() {
    return {
      password: null,
      code: null
    }
  },
  mounted() {
    this.code = this.$route.query.code
    // a security
    this.$router.replace('/account/verify')
  },
  methods: {
    async onUpdatePassword() {
      try {
        const { data } = await this.$axios.post('/password/reset', {
          password_reset_token: this.code,
          password: this.password,
          auth_id: null
        })

        if (data.error_state) {
          // TODO
          alert('Invalid credentials, unable to login')
        }
      } catch (err) {
        this.handleErrors(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
