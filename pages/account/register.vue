<template lang="pug">
div
    .bg-white.py-8.px-4.shadow(class='sm:rounded-lg sm:px-10')
      div.bg-red-100.border.rounded.border-red-700.p-2.mb-4.flex.items-center.text-red-700(v-if="hasErrors")
        ul.list-disc
          template(v-for="error in errors")
            li.text-red-700.text-sm.ml-6 {{ error.text || error }}
      template(v-if="status === 'complete'")
        div
          .mx-auto.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-green-100: svg.h-6.w-6.text-green-600(stroke="currentColor" fill="none" viewBox="0 0 24 24"): path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7")
          .mt-3.text-center(class="sm:mt-5")
            h3.text-lg.leading-6.font-medium.text-gray-900 Account created
            .mt-2: p.text-sm.leading-5.text-gray-500
              | Almost ready, check your email to
              br
              b confirm your email address
              |  to get started.
        .mt-5(class="sm:mt-6"): span.flex.w-full.rounded-md.shadow-sm
          button.inline-flex.justify-center.w-full.rounded-md.border.border-transparent.px-4.py-2.bg-indigo-600.text-base.leading-6.font-medium.text-white.shadow-sm.transition.ease-in-out.duration-150(
            @click="$router.push('/')"
            type="button" 
            class="hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5") Go back to login
      template(v-else)
        form(@submit.prevent="onSubmit")
          div
            div
              h3.text-lg.leading-6.font-medium.text-gray-900 Personal Information
              p.mt-1.text-sm.leading-5.text-gray-500 A little information to get the process started.
            .mt-6.grid.grid-cols-1.row-gap-6.col-gap-4(class='sm:grid-cols-6')
              div(class='sm:col-span-3')
                label.block.text-sm.font-medium.leading-5.text-gray-700(for='first_name') First name
                .mt-1.rounded-md.shadow-sm
                  input#first_name.form-input.block.w-full.transition.duration-150.ease-in-out(class='sm:text-sm sm:leading-5' v-model="firstName")
              div(class='sm:col-span-3')
                label.block.text-sm.font-medium.leading-5.text-gray-700(for='last_name') Last name
                .mt-1.rounded-md.shadow-sm
                  input#last_name.form-input.block.w-full.transition.duration-150.ease-in-out(class='sm:text-sm sm:leading-5' v-model="lastName")
              div(class='sm:col-span-6')
                label.block.text-sm.font-medium.leading-5.text-gray-700(for='email') Email address
                .mt-1.relative.rounded-md.shadow-sm
                  input#email.form-input.block.w-full.pl-10(required class='sm:text-sm sm:leading-5' placeholder='you@example.com' v-model.lazy="email" :class="[ emailValid ? 'border-red-300 text-red-700 focus:shadow-outline-red': '' ]")
                  .absolute.inset-y-0.left-0.pl-3.flex.items-center.pointer-events-none( :class="[ emailValid ? 'text-red-600':'text-gray-400']")
                    svg.h-5.w-5(fill='currentColor', viewBox='0 0 20 20')
                      path(fill-rule='evenodd' d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' clip-rule='evenodd')
                  .absolute.inset-y-0.right-0.pr-3.flex.items-center.pointer-events-none.text-red-600(v-if="emailValid")
                    svg.h-5.w-5(fill='currentColor', viewBox='0 0 20 20')
                      path(fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd")
                p.mt-1.text-sm.text-red-600 {{ emailValid }}


              div(class='sm:col-span-4')
                label.block.text-sm.font-medium.leading-5.text-gray-700(for='companyName') Company Name
                .mt-1.relative.rounded-md.shadow-sm
                  .absolute.inset-y-0.left-0.pl-3.flex.items-center.pointer-events-none
                    svg.w-5.h-5.text-gray-400(viewBox="0 0 20 20" fill="currentColor")
                      path(fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd")
                  input#companyName.form-input.block.w-full.pl-10(class='sm:text-sm sm:leading-5', v-model="companyName")

              div(class='sm:col-span-2')
                label.block.text-sm.font-medium.leading-5.text-gray-700(for='zipcode') Zipcode
                .mt-1.relative.rounded-md.shadow-sm
                  input#zipcode.form-input.block.w-full(class='sm:text-sm sm:leading-5' placeholder='12345' v-model="zipcode")

              div(class='sm:col-span-6')
                label.block.text-sm.font-medium.leading-5.text-gray-700(for='password') Password
                PasswordField(v-model="password")
                .mt-1.relative.rounded-md.shadow-sm
                  input#password.form-input.block.w-full.pl-10(required class='sm:text-sm sm:leading-5' placeholder='you@example.com' type="password" v-model="password")
                  .absolute.inset-y-0.left-0.pl-3.flex.items-center.pointer-events-none
                    svg.w-5.h-5.text-gray-400(viewBox='0 0 20 20' fill='currentColor')
                      path(fill-rule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clip-rule='evenodd')



          .mt-6
            span.block.w-full.rounded-md.shadow-sm              
              button.w-full.flex.justify-center.py-2.px-4.border.border-transparent.text-sm.font-medium.rounded-md.text-white.bg-cool-gray-600.transition.duration-150.ease-in-out(
                type='submit'
                class='hover:bg-cool-gray-500 focus:outline-none focus:border-cool-gray-700 focus:shadow-outline-cool-gray active:bg-cool-gray-700') Register
    p.mt-4.text-sm.text-center.mr-1 Already have an account?
      nuxt-link.font-medium.text-indigo-600.transition.ease-in-out.duration-150.ml-1(to='../login', class='hover:text-indigo-500 focus:outline-none focus:underline') Sign In
 

</template>

<script>
import PasswordField from '../../components/controls/PasswordField'
import ErrorHandlerMixin from '../../utils/mixins/ErrorHandler'
export default {
  name: 'RegisterPage',
  layout: 'account',
  components: { PasswordField },
  mixins: [ErrorHandlerMixin],
  meta: { isPublic: true },
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      companyName: null,
      zipcode: null,
      status: 'signup',
      emailValid: null
    }
  },
  watch: {
    email: {
      async handler(value) {
        if (this.validEmail(value)) {
          const { data } = await this.$axios.post('/email/inuse', { email: value })
          this.emailValid = data.response.inuse ? 'Email address in use.' : null
        } else {
          this.emailValid = 'Invalid email.'
        }
      }
    }
  },
  methods: {
    async register() {
      try {
        const { email, password } = this
        // eslint-disable-next-line
        const { data } = await this.$axios({
          method: 'post',
          url: '/user/create',
          data: {
            email,
            password,
            custom_user_params: {
              'p.firstname': this.firstName,
              'p.lastname': this.lastName,
              'p.postcode': this.zipcode,
              'p.companyname': this.companyName
            }
          }
        })

        this.status = 'complete'
        // if (data.error_state) {
        //   Object.values(data.errors).text[0]
        // }

        // this.$router.push('/campaigns')
      } catch (err) {
        this.handleErrors(err)
      }
    },
    async onSubmit() {
      await this.register()
    },
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>
