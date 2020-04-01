<template lang="pug">
.h-screen
  .p-8
    .mt-10(class="sm:mt-0")
      div(class="md:grid md:grid-cols-3 md:gap-6")
        div(class="md:col-span-1")
          .px-4(class="sm:px-0")
            h3.text-lg.font-medium.leading-6.text-gray-900 Email Addresses
            p.mt-1.text-sm.leading-5.text-gray-500 Associate multiple email addresses with your account.
        .mt-5(class="md:mt-0 md:col-span-2")
          form(action="#" method="POST")
            .shadow.overflow-hidden(class="sm:rounded-md")
              .px-4.py-5.bg-white(class="sm:p-6")
                .rounded-lg.border
                  template(v-for="(email, index) in emails")
                    div.p-4.h-20(:class="{'border-t border-gray-200': index > 0 }")
                      .flex.justify-between
                        div.flex.items-center
                          span.mr-2 {{ email.email }}
                          template(v-if="email.email_status[0] === 'u'")
                            svg.w-4.h-4.text-gray-400(viewBox="0 0 20 20" fill="currentColor" strokewidth="2")
                              path(fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd")
                          //-template(v-else)
                            svg.w-4.h-4.text-green-600(viewBox="0 0 20 20" fill="currentColor" strokewidth="2")
                              path(fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd")
                        button.text-red-700
                          svg.w-4.h-4(fill="none" viewBox="0 0 24 24" stroke="currentColor" )
                            path(stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16")

                      ul.mt-2.text-sm(v-if="email.email_status[0] === 'u'")
                        li.text-xs 
                          span.font-bold.mr-3 Unverified
                          a.text-indigo-600 Resend verification Email
                      ul.mt-2.text-sm(v-else)
                        li.text-xs.flex
                            span.mr-3.text-green-600 Verified
                            svg.w-4.h-4.text-green-600(viewBox="0 0 20 20" fill="currentColor" strokewidth="2")
                              path(fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd")
                          
                    

              .px-4.py-3.bg-gray-50.text-right(class="sm:px-6"): button.py-2.px-4.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-indigo-600.shadow-sm.transition.duration-150.ease-in-out(class="hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600") Add
      
</template>

<script>
export default {
  name: 'Matt',
  layout: 'blank',

  meta: { isPublic: false },
  components: {},
  data() {
    return {
      emails: [
        {
          email_status: 'verified',
          create_datetime: 20200324030631.582,
          update_datetime: 20200324030631.582,
          email: 'mgambill+456@nmyvision.com'
        },

        {
          email_status: 'unverified',
          create_datetime: 20200324030631.582,
          update_datetime: 20200324030631.582,
          email: 'mgambill+456@nmyvision.com'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
