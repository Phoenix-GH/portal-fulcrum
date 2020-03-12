<template lang="pug">
.min-h-screen.flex.flex-col.justify-center.py-12(class='sm:px-6 lg:px-8')
  div(class='sm:mx-auto sm:w-full sm:max-w-md')
    img.mx-auto.h-12.w-auto.mb-8(src='../assets/images/fulcrum-logo-300.svg', alt='Fulcrum')
    .bg-white.py-8.px-4.shadow(class='sm:rounded-lg sm:px-10')
      form(@submit.prevent="onSubmit")        
        div
          div
            h3.text-lg.leading-6.font-medium.text-gray-900
              | Personal Information
            p.mt-1.text-sm.leading-5.text-gray-500
              | A little information to get the process started.
          .mt-6.grid.grid-cols-1.row-gap-6.col-gap-4(class='sm:grid-cols-6')
            div(class='sm:col-span-3')
              label.block.text-sm.font-medium.leading-5.text-gray-700(for='first_name')
                | First name
              .mt-1.rounded-md.shadow-sm
                input#first_name.form-input.block.w-full.transition.duration-150.ease-in-out(class='sm:text-sm sm:leading-5' v-model="firstName")
            div(class='sm:col-span-3')
              label.block.text-sm.font-medium.leading-5.text-gray-700(for='last_name')
                | Last name
              .mt-1.rounded-md.shadow-sm
                input#last_name.form-input.block.w-full.transition.duration-150.ease-in-out(class='sm:text-sm sm:leading-5' v-model="lastName")
            div(class='sm:col-span-6')
              label.block.text-sm.font-medium.leading-5.text-gray-700(for='email') Email address
              .mt-1.relative.rounded-md.shadow-sm
                .absolute.inset-y-0.left-0.pl-3.flex.items-center.pointer-events-none
                  svg.h-5.w-5.text-gray-400(fill='currentColor', viewBox='0 0 20 20')
                    path(fill-rule='evenodd', d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z', clip-rule='evenodd')
                input#email.form-input.block.w-full.pl-10(class='sm:text-sm sm:leading-5', placeholder='you@example.com' v-model="email")

            div(class='sm:col-span-6')
              label.block.text-sm.font-medium.leading-5.text-gray-700(for='password') Password
              .mt-1.relative.rounded-md.shadow-sm
                .absolute.inset-y-0.left-0.pl-3.flex.items-center.pointer-events-none
                  svg.w-5.h-5.text-gray-400(viewBox='0 0 20 20', fill='currentColor', strokewidth='0.5')
                    path(fill-rule='evenodd', d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z', clip-rule='evenodd')

                input#password.form-input.block.w-full.pl-10(class='sm:text-sm sm:leading-5', placeholder='you@example.com' type="password" v-model="password")
          
        //-.mt-8.border-t.border-gray-200.pt-8
          div
            h3.text-lg.leading-6.font-medium.text-gray-900
              | Notifications
            p.mt-1.text-sm.leading-5.text-gray-500
              | We'll always let you know about important changes, but you pick what else you want to hear about.
          .mt-6
            fieldset
              legend.text-base.font-medium.text-gray-900
                | By Email
              .mt-4
                .relative.flex.items-start
                  .absolute.flex.items-center.h-5
                    input#comments.form-checkbox.h-4.w-4.text-indigo-600.transition.duration-150.ease-in-out(type='checkbox')
                  .pl-7.text-sm.leading-5
                    label.font-medium.text-gray-700(for='comments') Comments
                    p.text-gray-500 Get notified when someones posts a comment on a posting.
                .mt-4
                  .relative.flex.items-start
                    .absolute.flex.items-center.h-5
                      input#candidates.form-checkbox.h-4.w-4.text-indigo-600.transition.duration-150.ease-in-out(type='checkbox')
                    .pl-7.text-sm.leading-5
                      label.font-medium.text-gray-700(for='candidates') Candidates
                      p.text-gray-500 Get notified when a candidate applies for a job.
                .mt-4
                  .relative.flex.items-start
                    .absolute.flex.items-center.h-5
                      input#offers.form-checkbox.h-4.w-4.text-indigo-600.transition.duration-150.ease-in-out(type='checkbox')
                    .pl-7.text-sm.leading-5
                      label.font-medium.text-gray-700(for='offers') Offers
                      p.text-gray-500 Get notified when a candidate accepts or rejects an offer.
            fieldset.mt-6
              legend.text-base.font-medium.text-gray-900
                | Push Notifications
              p.text-sm.leading-5.text-gray-500 These are delivered via SMS to your mobile phone.
              .mt-4
                .flex.items-center
                  input#push_everything.form-radio.h-4.w-4.text-indigo-600.transition.duration-150.ease-in-out(name='form-input push_notifications', type='radio')
                  label.ml-3(for='push_everything')
                    span.block.text-sm.leading-5.font-medium.text-gray-700 Everything
                .mt-4.flex.items-center
                  input#push_email.form-radio.h-4.w-4.text-indigo-600.transition.duration-150.ease-in-out(name='form-input push_notifications', type='radio')
                  label.ml-3(for='push_email')
                    span.block.text-sm.leading-5.font-medium.text-gray-700 Same as email
                .mt-4.flex.items-center
                  input#push_nothing.form-radio.h-4.w-4.text-indigo-600.transition.duration-150.ease-in-out(name='form-input push_notifications', type='radio')
                  label.ml-3(for='push_nothing')
                    span.block.text-sm.leading-5.font-medium.text-gray-700 No push notifications
        .mt-6
          span.block.w-full.rounded-md.shadow-sm
            button.w-full.flex.justify-center.py-2.px-4.border.border-transparent.text-sm.font-medium.rounded-md.text-white.bg-cool-gray-600.transition.duration-150.ease-in-out(type='submit', class='hover:bg-cool-gray-500 focus:outline-none focus:border-cool-gray-700 focus:shadow-outline-cool-gray active:bg-cool-gray-700')
              | Register
    p.mt-4.text-sm.text-center 
      | Already have an account? 
      a.font-medium.text-indigo-600.transition.ease-in-out.duration-150(href='/login', class='hover:text-indigo-500 focus:outline-none focus:underline') Sign In
    p.mt-12.text-xs.text-center 
      a.font-medium.text-cool-gray-500.transition.ease-in-out.duration-150(href="//www.fulcrumsaas.com" class="hover:text-indigo-600") www.fulcrumsaas.com

</template>

<script>
export default {
  name: 'RegisterPage',
  layout: 'blank',
  components: {},
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null
    }
  },
  methods: {
    async register() {
      const { email, password } = this
      // eslint-disable-next-line
      const { data } = await this.$axios({
        baseURL: 'http://api-v1.fulcrumsaas.net/api',
        method: 'post',
        url: '/user/create',
        data: {
          email,
          password,
          custom_user_params: {
            'p.firstname': this.firstName,
            'p.lastname': this.lastName
          }
        }
      })

      // if (data.error_state) {
      //   Object.values(data.errors).text[0]
      // }

      this.$router.push('/campaigns')
    },
    async onSubmit() {
      await this.register()
    }
  }
}
</script>
