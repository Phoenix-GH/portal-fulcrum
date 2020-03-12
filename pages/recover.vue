<template lang="pug">
.min-h-screen.flex.flex-col.justify-center.py-12(class='sm:px-6 lg:px-8')
  div(class='sm:mx-auto sm:w-full sm:max-w-md')
    img.mx-auto.h-12.w-auto(src='../assets/images/fulcrum-logo-300.svg', alt='Fulcrum')
 
  .mt-8(class='sm:mx-auto sm:w-full sm:max-w-md')
    .bg-white.py-8.px-4.shadow(class='sm:rounded-lg sm:px-10')
      form(action='#', method='POST')
        div
              label.block.text-sm.font-medium.leading-5.text-gray-700(for='email') Email address
              .mt-1.relative.rounded-md.shadow-sm
                .absolute.inset-y-0.left-0.pl-3.flex.items-center.pointer-events-none
                  svg.h-5.w-5.text-gray-400(fill='currentColor', viewBox='0 0 20 20')
                    path(fill-rule='evenodd', d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z', clip-rule='evenodd')
                input#email.form-input.block.w-full.pl-10(class='sm:text-sm sm:leading-5', placeholder='you@example.com')
        .mt-6
          span.block.w-full.rounded-md.shadow-sm
            button.w-full.flex.justify-center.py-2.px-4.border.border-transparent.text-sm.font-medium.rounded-md.text-white.bg-cool-gray-600.transition.duration-150.ease-in-out(type='submit', class='hover:bg-cool-gray-500 focus:outline-none focus:border-cool-gray-700 focus:shadow-outline-cool-gray active:bg-cool-gray-700')
              | Reset Password
    p.mt-4.text-sm.text-center 
      | Don't have an account? 
      a.font-medium.text-indigo-600.transition.ease-in-out.duration-150(href='/register', class='hover:text-indigo-500 focus:outline-none focus:underline') register      
      | -- or go 
      a.font-medium.text-indigo-600.transition.ease-in-out.duration-150(href="/login") back 
      | .
    p.mt-12.text-xs.text-center 
      a.font-medium.text-cool-gray-500.transition.ease-in-out.duration-150(href="//www.fulcrumsaas.com" class="hover:text-indigo-600") www.fulcrumsaas.com

</template>

<script>
export default {
  name: 'ResetPage',
  layout: 'blank',
  components: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
