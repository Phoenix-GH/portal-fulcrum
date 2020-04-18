<template lang="pug">
div
  .bg-white.py-8.px-4.shadow(class='sm:rounded-lg sm:px-10')
    template(v-if="status === 'initial' || errors.length > 0")
      div.bg-red-100.border.rounded.border-red-700.p-2.mb-4.flex.items-center.text-red-700(v-if="errors.length > 0")
        ul
          template(v-for="error in errors")
            //-svg.w-5.h-5(viewBox="0 0 20 20" fill="currentColor" strokewidth="2")
              path(fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd")
            li.text-red-700.ml-2 {{ error.text }}
      form(action='#' method='POST')
        div
              label.block.text-sm.font-medium.leading-5.text-gray-700(for='email') Email address
              .mt-1.relative.rounded-md.shadow-sm
                .absolute.inset-y-0.left-0.pl-3.flex.items-center.pointer-events-none
                  svg.h-5.w-5.text-gray-400(fill='currentColor' viewBox='0 0 20 20')
                    path(fill-rule='evenodd' d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' clip-rule='evenodd')
                input#email.form-input.block.w-full.pl-10(class='sm:text-sm sm:leading-5' placeholder='you@example.com' v-model="email")
        .mt-6
          span.block.w-full.rounded-md.shadow-sm
            button.w-full.flex.justify-center.py-2.px-4.border.border-transparent.text-sm.font-medium.rounded-md.text-white.bg-cool-gray-600.transition.duration-150.ease-in-out(
              type='submit' 
              @click="onReset"
              class='hover:bg-cool-gray-500 focus:outline-none focus:border-cool-gray-700 focus:shadow-outline-cool-gray active:bg-cool-gray-700') Reset Password
    template(v-else-if="status === 'pending'")
      div Loading
    template(v-else-if="status === 'success'")
      nuxt-link.flex.text-green-500.align-center(to="../login")
        div.flex.items-center
          svg.w-8.h-8(viewBox="0 0 20 20" fill="currentColor" strokewidth="2")
            path(fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd")
        span.ml-3 
          | Success, please check your email.
          br 
          | Click here to go to the login.

  p.mt-4.text-sm.text-center 
    | Don't have an account? 
    nuxt-link.font-medium.text-indigo-600.transition.ease-in-out.duration-150(to='./register' class='hover:text-indigo-500 focus:outline-none focus:underline') register      
    | --  
    nuxt-link.font-medium.text-indigo-600.transition.ease-in-out.duration-150(to="../login") back to login
    | .


</template>

<script>
export default {
  name: 'ResetPage',
  layout: 'account',
  components: {},
  meta: { isPublic: true },
  data() {
    return {
      email: '',
      status: 'initial',
      errors: []
    }
  },
  methods: {
    async onReset() {
      try {
        this.errors = []
        this.status = 'pending'
        await this.$axios.post('/password/reset-request', {
          email: this.email
        })

        this.status = 'success'
      } catch (err) {
        this.status = 'error'
        if (err.response.status === 409) {
          this.errors = Object.values(err.response.data.errors)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
