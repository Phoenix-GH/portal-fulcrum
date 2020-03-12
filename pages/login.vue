<template lang="pug">
.min-h-screen.flex.flex-col.justify-center.py-12(class='sm:px-6 lg:px-8')
  div(class='sm:mx-auto sm:w-full sm:max-w-md')
    img.mx-auto.h-12.w-auto(src='../assets/images/fulcrum-logo-300.svg' alt='Fulcrum')
    //-h2.mt-6.text-center.text-3xl.leading-9.font-extrabold.text-gray-900
      | Sign in to your account
    //-p.mt-2.text-center.text-sm.leading-5.text-gray-600.max-w
      | Or
      a.font-medium.text-cool-gray-600.transition.ease-in-out.duration-150(href='#' class='hover:text-cool-gray-500 focus:outline-none focus:underline')
        | start your 14-day free trial
  .mt-8(class='sm:mx-auto sm:w-full sm:max-w-md')
    .bg-white.py-8.px-4.shadow(class='sm:rounded-lg sm:px-10')
      form(@submit.prevent="onSubmit")
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
        .mt-6.flex.items-center.justify-between
          //- .flex.items-center
            input#remember_me.form-checkbox.h-4.w-4.text-indigo-600.transition.duration-150.ease-in-out(type='checkbox')
            label.ml-2.block.text-sm.leading-5.text-indigo-900(for='remember_me') Remember me
        .mt-6
          span.block.w-full.rounded-md.shadow-sm
            button.w-full.flex.justify-center.py-2.px-4.border.border-transparent.text-sm.font-medium.rounded-md.text-white.bg-cool-gray-600.transition.duration-150.ease-in-out(type='submit' class='hover:bg-cool-gray-500 focus:outline-none focus:border-cool-gray-700 focus:shadow-outline-cool-gray active:bg-cool-gray-700') Sign in
    p.mt-4.text-sm.text-center 
      | Don't have an account? 
      a.font-medium.text-indigo-600.transition.ease-in-out.duration-150(href='/register' class='hover:text-indigo-500 focus:outline-none focus:underline') Sign up
    //-p: pre {{ auth_id }}
    p.mt-12.text-xs.text-center 
      a.font-medium.text-cool-gray-500.transition.ease-in-out.duration-150(href="//www.fulcrumsaas.com" class="hover:text-indigo-600") www.fulcrumsaas.com
</template>

<script>
export default {
  layout: 'blank',
  name: 'LoginPage',
  components: {},
  data() {
    return {
      auth_id: '41e38190-60fe-11ea-880a-fb4e90c9f219',
      username: 'eric@zibix.com',
      password: 'testing'
    }
  },
  // async mounted() {
  //   await this.getAuth()
  // },
  methods: {
    async getAuth() {
      const { data } = await this.$axios({
        baseURL: 'http://api-v1.fulcrumsaas.net/api',
        method: 'post',
        url: '/auth/get'
      })
      this.auth_id = data.response.auth.auth_id
    },
    async login() {
      const { username: email, password, auth_id } = this

      const { data } = await this.$axios({
        baseURL: 'http://api-v1.fulcrumsaas.net/api',
        method: 'post',
        url: '/user/login',
        data: {
          email,
          password,
          auth_id
        }
      })

      if (data.error_state) {
        // TODO
        alert('Invalid credentials, unable to login')
      }

      this.$router.push('/campaigns')
      // eslint-disable-next-line
      console.log(data)
    },
    async onSubmit() {
      await this.login()
    }
  }
}
</script>
