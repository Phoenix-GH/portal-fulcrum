<template lang="pug">
.min-h-screen.flex.flex-col.justify-center.py-12(class='sm:px-6 lg:px-8')
  div(class='sm:mx-auto sm:w-full sm:max-w-md')
    img.mx-auto.h-12.w-auto(src='../assets/images/fulcrum-logo-300.svg' alt='Fulcrum')

  .mt-8(class='sm:mx-auto sm:w-full sm:max-w-md')
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
              a.font-medium.text-indigo-600.transition.ease-in-out.duration-150(href='/recover' class='hover:text-indigo-500 focus:outline-none focus:underline') Forgot your password?
          .mt-1.rounded-md.shadow-sm
            input#password.appearance-none.block.w-full.px-3.py-2.border.border-gray-300.rounded-md.placeholder-gray-400.transition.duration-150.ease-in-out(type='password' v-model="password" required='' class='focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5')
        
        .mt-6
          span.block.w-full.rounded-md.shadow-sm
            button.w-full.flex.justify-center.py-2.px-4.border.border-transparent.text-sm.font-medium.rounded-md.text-white.bg-cool-gray-600.transition.duration-150.ease-in-out(type='submit' class='hover:bg-cool-gray-500 focus:outline-none focus:border-cool-gray-700 focus:shadow-outline-cool-gray active:bg-cool-gray-700') Sign in
    p.mt-4.text-sm.text-center 
      span.mr-1 Don't have an account?
      nuxt-link.font-medium.text-indigo-600.transition.ease-in-out.duration-150(to='/register' class='hover:text-indigo-500 focus:outline-none focus:underline') Sign up
    //-p: pre {{ auth_id }}
    p.mt-12.text-xs.text-center 
      a.font-medium.text-cool-gray-500.transition.ease-in-out.duration-150(href="//www.fulcrumsaas.com" class="hover:text-indigo-600") www.fulcrumsaas.com
    

    //- p.bg-gray-50.p-1: pre Session Key {{ $store.state.sessionKey }}
</template>

<script>
import ErrorHandlerMixin from '../utils/mixins/ErrorHandler'

export default {
  layout: 'blank',
  name: 'LoginPage',
  components: {},
  mixins: [ErrorHandlerMixin],
  meta: { isPublic: false },
  asyncData({ store, route, userAgent }) {
    return {
      userAgent,
      slugs: ['foo', 'bar', 'baz']
    }
  },
  data() {
    return {
      username: 'mgambill+456@nmyvision.com',
      password: 'password2@'
    }
  },

  methods: {
    async login() {
      try {
        const auth_id = this.$state.sessionKey.auth_id
        const { username: email, password } = this
        const { data } = await this.$axios.post('/user/login', {
          auth_id,
          email,
          password
        })

        if (data.error_state) {
          // TODO
          alert('Invalid credentials, unable to login')
        }

        await this.$store.dispatch('LOAD_STATE')

        this.$router.push(this.$route.query.p || '/')
      } catch (err) {
        this.handleErrors(err)
      }
    },
    async onSubmit() {
      await this.login()
    }
  }
}
</script>
