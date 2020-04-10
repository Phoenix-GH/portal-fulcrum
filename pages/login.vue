<template lang="pug">
  div
    .bg-white.py-8.px-4.shadow(class='sm:rounded-lg sm:px-10')
      form(@submit.prevent="onSubmit")
        div.bg-red-100.border.rounded.border-red-700.p-2.mb-4.flex.items-center.text-red-700(v-if="errors.length > 0")
          ul
            template(v-for="error in errors")
              //-svg.w-5.h-5(viewBox="0 0 20 20" fill="currentColor" strokewidth="2")
                path(fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd")
              li.text-red-700.ml-2 {{ error.text }}
        div
          label.block.text-sm.font-medium.leading-5.text-gray-700(for='email') Email address
          .mt-1.rounded-md.shadow-sm
            input#email.appearance-none.block.w-full.px-3.py-2.border.border-gray-300.rounded-md.placeholder-gray-400.transition.duration-150.ease-in-out(type='email' v-model="username" required='' class='focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5')
        .mt-6
          .flex.items-center.justify-between
            label.block.text-sm.font-medium.leading-5.text-gray-700(for='password') Password
            .text-xs.leading-5
              nuxt-link.font-medium.text-indigo-600.transition.ease-in-out.duration-150(to='/account/recover' class='hover:text-indigo-500 focus:outline-none focus:underline') Forgot your password?
          PasswordField(v-model="password")
          //-.mt-1.rounded-md.shadow-sm
            input#password.appearance-none.block.w-full.px-3.py-2.border.border-gray-300.rounded-md.placeholder-gray-400.transition.duration-150.ease-in-out(type='password' v-model="password" required='' class='focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5')
        
        .mt-6
          span.block.w-full.rounded-md.shadow-sm
            button.w-full.flex.justify-center.py-2.px-4.border.border-transparent.text-sm.font-medium.rounded-md.text-white.bg-cool-gray-600.transition.duration-150.ease-in-out(type='submit' class='hover:bg-cool-gray-500 focus:outline-none focus:border-cool-gray-700 focus:shadow-outline-cool-gray active:bg-cool-gray-700') Sign in
    p.mt-4.text-sm.text-center 
      span.mr-1 Don't have an account?
      nuxt-link.font-medium.text-indigo-600.transition.ease-in-out.duration-150(to='/account/register' class='hover:text-indigo-500 focus:outline-none focus:underline') Sign up
 
</template>

<script>
import PasswordField from '../components/controls/PasswordField'
import ErrorHandlerMixin from '../utils/mixins/ErrorHandler'
import { COOKIE_NAME } from '../utils'

export default {
  layout: 'account',
  name: 'LoginPage',
  components: { PasswordField },
  mixins: [ErrorHandlerMixin],
  meta: { isPublic: false },
  data() {
    return {
      username: 'mgambill+456@nmyvision.com',
      password: 'password2@'
    }
  },
  methods: {
    async login() {
      const { username: email, password } = this

      await this.post('/user/login', {
        email,
        password
      })

      if (!this.hasErrors) {
        await this.$store.dispatch('LOAD_STATE')
        this.$router.push(this.$route.query.p || '/')
      }
    },
    async onSubmit() {
      await this.login()
    }
  }
}
</script>
