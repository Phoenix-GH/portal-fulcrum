<template lang="pug">
div

  div
    div(class="md:grid md:grid-cols-3 md:gap-6")
      div(class="md:col-span-1")
        .px-4(class="sm:px-0")
          h3.text-lg.font-medium.leading-6.text-gray-900 Personal Information
          p.mt-1.text-sm.leading-5.text-gray-500 Use a permanent address where you can receive mail.
      .mt-5(class="md:mt-0 md:col-span-2")
        form(method="POST" @submit.prevent="onSavePersonal")
          .shadow.overflow-hidden(class="sm:rounded-md")
            .px-4.py-5.bg-white(class="sm:p-6")
              .grid.grid-cols-6.gap-6
                .col-span-6(class="sm:col-span-3")
                  label.block.text-sm.font-medium.leading-5.text-gray-700(for="first_name") First name
                  input#first_name.mt-1.form-input.block.w-full.py-2.px-3.border.border-gray-300.rounded-md.shadow-sm.transition.duration-150.ease-in-out(class="focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5" v-model="firstname")
                .col-span-6(class="sm:col-span-3")
                  label.block.text-sm.font-medium.leading-5.text-gray-700(for="last_name") Last name
                  input#last_name.mt-1.form-input.block.w-full.py-2.px-3.border.border-gray-300.rounded-md.shadow-sm.transition.duration-150.ease-in-out(class="focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5" v-model="lastname")
                .col-span-6(class="sm:col-span-4")
                  label.block.text-sm.font-medium.leading-5.text-gray-700(for="email_address") Company name
                  input#email_address.mt-1.form-input.block.w-full.py-2.px-3.border.border-gray-300.rounded-md.shadow-sm.transition.duration-150.ease-in-out(class="focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5" v-model="companyname")
                .col-span-6(class="sm:col-span-2")
                  label.block.text-sm.font-medium.leading-5.text-gray-700(for="email_address") Zipcode
                  input#email_address.mt-1.form-input.block.w-full.py-2.px-3.border.border-gray-300.rounded-md.shadow-sm.transition.duration-150.ease-in-out(class="focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5" v-model="postcode")

              //-  
                .col-span-6(class="sm:col-span-3")
                  label.block.text-sm.font-medium.leading-5.text-gray-700(for="country") Country / Region
                  select#country.mt-1.block.form-select.w-full.py-2.px-3.py-0.border.border-gray-300.bg-white.rounded-md.shadow-sm.transition.duration-150.ease-in-out(class="focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5")
                    option United States
                    option Canada
                    option Mexico
                .col-span-6
                  label.block.text-sm.font-medium.leading-5.text-gray-700(for="street_address") Street address
                  input#street_address.mt-1.form-input.block.w-full.py-2.px-3.border.border-gray-300.rounded-md.shadow-sm.transition.duration-150.ease-in-out(class="focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5")
                .col-span-6(class="sm:col-span-6 lg:col-span-2")
                  label.block.text-sm.font-medium.leading-5.text-gray-700(for="city") City
                  input#city.mt-1.form-input.block.w-full.py-2.px-3.border.border-gray-300.rounded-md.shadow-sm.transition.duration-150.ease-in-out(class="focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5")
                .col-span-6(class="sm:col-span-3 lg:col-span-2")
                  label.block.text-sm.font-medium.leading-5.text-gray-700(for="state") State / Province
                  input#state.mt-1.form-input.block.w-full.py-2.px-3.border.border-gray-300.rounded-md.shadow-sm.transition.duration-150.ease-in-out(class="focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5")
                .col-span-6(class="sm:col-span-3 lg:col-span-2")
                  label.block.text-sm.font-medium.leading-5.text-gray-700(for="postal_code") ZIP / Postal
                  input#postal_code.mt-1.form-input.block.w-full.py-2.px-3.border.border-gray-300.rounded-md.shadow-sm.transition.duration-150.ease-in-out(class="focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5")
            .px-4.py-3.bg-gray-50.text-right(class="sm:px-6")
              button.py-2.px-4.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-indigo-600.shadow-sm.transition.duration-150.ease-in-out(class="hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600") Save
    div
  .hidden(class="sm:block"): .py-5: .border-t.border-gray-200
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
                template(v-for="(item, index) in emails")
                  div.active-hover-anchor.p-4.h-20(:class="{'border-t border-gray-200': index > 0 }" :key="item.email")
                    .flex.justify-between
                      div.flex.items-center
                        button.mr-2.flex.items-center(class="hover:text-indigo-600")
                          | {{ item.email }}
                          svg.w-4.h-4.ml-2.active-hover(fill="none" viewBox="0 0 24 24" stroke="currentColor")
                            path(stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z")
                        //-template(v-if="item.email_status[0] === 'u'")
                          svg.w-4.h-4.text-gray-400(viewBox="0 0 20 20" fill="currentColor" strokewidth="2")
                            path(fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd")
                        //-template(v-else)
                          svg.w-4.h-4.text-green-600(viewBox="0 0 20 20" fill="currentColor" strokewidth="2")
                            path(fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd")
                      button.text-red-700(type="button" @click="onEmailDelete($event, item.email)")
                        svg.w-4.h-4.active-hover(fill="none" viewBox="0 0 24 24" stroke="currentColor" )
                          path(stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16")

                    ul.mt-2.text-sm(v-if="item.email_status[0] === 'u'")
                      li.text-xs 
                        span.font-bold.mr-3 Unverified
                        a.text-indigo-600(href="#" @click.prevent="onSendVerificationEmail") Resend verification Email
                    ul.mt-2.text-sm(v-else)
                      li.text-xs.flex
                          span.mr-3.text-green-600 Verified
                          svg.w-4.h-4.text-green-600(viewBox="0 0 20 20" fill="currentColor" strokewidth="2")
                            path(fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd")



            .px-4.py-3.bg-gray-50.text-right(class="sm:px-6")
              button.py-2.px-4.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-indigo-600.shadow-sm.transition.duration-150.ease-in-out(class="hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600" @click="onAddEmail" type="button") Add
    
  .hidden(class="sm:block"): .py-5: .border-t.border-gray-200
  //-.mt-10(class="sm:mt-0")
    div(class="md:grid md:grid-cols-3 md:gap-6")
      div(class="md:col-span-1")
        .px-4(class="sm:px-0")
          h3.text-lg.font-medium.leading-6.text-gray-900 Notifications
          p.mt-1.text-sm.leading-5.text-gray-500 Decide which communications you'd like to receive and how.
      .mt-5(class="md:mt-0 md:col-span-2")
        form(action="#" method="POST")
          .shadow.overflow-hidden(class="sm:rounded-md")
            .px-4.py-5.bg-white(class="sm:p-6")
              fieldset
                legend.text-base.leading-6.font-medium.text-gray-900 By Email
                .mt-4
                  .flex.items-start
                    .absolute.flex.items-center.h-5: input#comments.form-checkbox.h-4.w-4.text-indigo-600.transition.duration-150.ease-in-out(type="checkbox")
                    .pl-7.text-sm.leading-5
                      label.font-medium.text-gray-700(for="comments") Comments
                      p.text-gray-500 Get notified when someones posts a comment on a posting.
                  .mt-4
                    .flex.items-start
                      .absolute.flex.items-center.h-5: input#candidates.form-checkbox.h-4.w-4.text-indigo-600.transition.duration-150.ease-in-out(type="checkbox")
                      .pl-7.text-sm.leading-5
                        label.font-medium.text-gray-700(for="candidates") Candidates
                        p.text-gray-500 Get notified when a candidate applies for a job.
                  .mt-4
                    .flex.items-start
                      .absolute.flex.items-center.h-5: input#offers.form-checkbox.h-4.w-4.text-indigo-600.transition.duration-150.ease-in-out(type="checkbox")
                      .pl-7.text-sm.leading-5
                        label.font-medium.text-gray-700(for="offers") Offers
                        p.text-gray-500 Get notified when a candidate accepts or rejects an offer.
              fieldset.mt-6
                legend.text-base.leading-6.font-medium.text-gray-900 Push Notifications
                p.text-sm.leading-5.text-gray-500 These are delivered via SMS to your mobile phone.
                .mt-4
                  .flex.items-center
                    input#push_everything.form-radio.h-4.w-4.text-indigo-600.transition.duration-150.ease-in-out(name="form-input push_notifications" type="radio")
                    label.ml-3(for="push_everything"): span.block.text-sm.leading-5.font-medium.text-gray-700 Everything
                  .mt-4.flex.items-center
                    input#push_email.form-radio.h-4.w-4.text-indigo-600.transition.duration-150.ease-in-out(name="form-input push_notifications" type="radio")
                    label.ml-3(for="push_email"): span.block.text-sm.leading-5.font-medium.text-gray-700 Same as email
                  .mt-4.flex.items-center
                    input#push_nothing.form-radio.h-4.w-4.text-indigo-600.transition.duration-150.ease-in-out(name="form-input push_notifications" type="radio")
                    label.ml-3(for="push_nothing"): span.block.text-sm.leading-5.font-medium.text-gray-700 No push notifications
            .px-4.py-3.bg-gray-50.text-right(class="sm:px-6"): button.py-2.px-4.border.border-transparent.text-sm.font-medium.rounded-md.text-white.bg-indigo-600.shadow-sm.transition.duration-150.ease-in-out(class="hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue focus:bg-indigo-500 active:bg-indigo-600") Save

  template(v-if="modalOpen")
    .fixed.bottom-0.inset-x-0.px-4.pb-6( class="sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center")
      .fixed.inset-0.transition-opacity(@click="modalOpen=false"): .absolute.inset-0.bg-gray-500.opacity-75
      .relative.bg-white.rounded-lg.px-4.pt-5.pb-4.overflow-hidden.shadow-xl.transform.transition-all.x-20(class="sm:max-w-sm sm:w-full sm:p-6")
        button.absolute.right-0.mr-4.-mt-2(@click="onEmailCancel")
          svg.w-5.h-5.text-gray-400(fill="none" viewBox="0 0 24 24" stroke="currentColor" strokewidth="2")
            path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12")
        template(v-if="modalState === 'success'")
            .mx-auto.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-green-100: svg.h-6.w-6.text-green-600(stroke="currentColor" fill="none" viewBox="0 0 24 24"): path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7")
            .mt-3.text-center(class="sm:mt-5")
              h3.text-lg.leading-6.font-medium.text-gray-900 Address successfully added
              .mt-2: p.text-sm.leading-5.text-gray-500 
                | Please check your email account for a 
                br 
                | verification email.
        template(v-else-if="modalState === 'error'")
          p Error
        template(v-else)
            
          form( @submit.prevent="onEmailSave" )
            div
              h3.text-lg.leading-6.font-medium.text-gray-900 Add an email address
              .mt-5(class="sm:flex sm:items-center")
                .w-full
                  label(for="new_email") Email Address
                  .relative.rounded-md.shadow-sm: input#new_email.form-input.block.w-full(placeholder="you@example.com" class="sm:text-sm sm:leading-5" v-model="currentEmail.address")
              .mt-5(class="sm:flex sm:items-center")
                .w-full
                  label(for="new_email_label") Label
                  .relative.rounded-md.shadow-sm
                    select#new_email_label.form-select.block.w-full(placeholder="you@example.com" class="sm:text-sm sm:leading-5" v-model="currentEmail.label")
                      option 
                      option Home
                      option Work
                      option Other

            .mt-5(class="sm:mt-6")
              span.flex.w-full.rounded-md.shadow-sm
                button.inline-flex.justify-center.w-full.rounded-md.border.border-transparent.px-4.py-2.bg-indigo-600.text-base.leading-6.font-medium.text-white.shadow-sm.transition.ease-in-out.duration-150(              
                  class="hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5") Add an email address
</template>

<script>
import AlertModal from '../components/parts/Modal'
const defaultEmail = {
  address: '',
  label: 'work'
}
export default {
  name: 'ProfilePage',
  components: { AlertModal },

  data() {
    console.log(':', this.user)
    return {
      currentEmail: defaultEmail,
      modalOpen: false,
      modalState: 'fill',
      localUser: {}
    }
  },
  computed: {
    firstname: {
      get() {
        return this.localUser['p.firstname'] || this.user['p.firstname']
      },
      set(value) {
        this.$set(this.localUser, 'p.firstname', value)
      }
    },
    lastname: {
      get() {
        return this.localUser['p.lastname'] || this.user['p.lastname']
      },
      set(value) {
        this.$set(this.localUser, 'p.lastname', value)
      }
    },
    companyname: {
      get() {
        return this.localUser['p.companyname'] || this.user['p.companyname']
      },
      set(value) {
        this.$set(this.localUser, 'p.companyname', value)
      }
    },
    postcode: {
      get() {
        return this.localUser['p.postcode'] || this.user['p.postcode']
      },
      set(value) {
        this.$set(this.localUser, 'p.postcode', value)
      }
    },
    user() {
      return this.$store.state.user
    },
    emails() {
      return Array.from(this.$store.state.user_emails)
    }
  },
  watch: {
    modalOpen(state) {
      if (state === false) this.modalState = 'fill'
    }
  },
  mounted() {
    console.log('!', this)
  },
  methods: {
    async onEmailDelete(e, email) {
      if (window.confirm('Are you sure')) {
        try {
          e.target.blur()
          const { data } = await this.$axios.post('/email/delete', { email })

          this.$store.dispatch('LOAD_STATE')
          // this.modalOpen = false
        } catch (error) {
          alert(error.message)
          // AlertModal.
        }
      }
    },
    onAddEmail() {
      this.currentEmail = {
        address: '',
        label: 'work'
      }
      this.modalOpen = true
    },
    async onEmailSave() {
      try {
        const { data } = await this.$axios.post('/email/create', {
          email: this.currentEmail.address,
          custom_user_email_params: {
            label: this.currentEmail.label,
            default: true
          }
        })
        this.currentEmail = defaultEmail
        this.modalState = 'success'
        // this.modalOpen = false
        this.$store.dispatch('LOAD_STATE')
      } catch (error) {
        alert(error.message)
        this.modalState = 'error'
        // AlertModal.
      }
    },
    onEmailCancel() {
      this.modalOpen = false
    },
    async onSavePersonal() {
      try {
        const { data } = await this.$axios.post('/user/edit', {
          custom_user_params: {
            'p.firstname': this.firstname,
            'p.lastname': this.lastname,
            'p.companyname': this.companyname,
            'p.postcode': this.postcode
          }
        })
        this.$store.dispatch('LOAD_STATE')
        alert('Saved')
      } catch (error) {
        alert(error.message)
        // AlertModal.
      }
    },
    onSendVerificationEmail() {}
  }
}
</script>

<style>
.active-hover-anchor .active-hover {
  opacity: 0.2;
}

.active-hover-anchor:hover .active-hover {
  opacity: 1;
}
</style>
