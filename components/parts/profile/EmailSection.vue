<template lang="pug">
.mt-10(class="sm:mt-0")

  div(class="md:grid md:grid-cols-3 md:gap-6")
      div(class="md:col-span-1")
        .px-4(class="sm:px-0")
          h3.text-lg.font-medium.leading-6.text-gray-900 Email Addresses
          p.mt-1.text-sm.leading-5.text-gray-500 Associate multiple email addresses with your account.
      .mt-5(class="md:mt-0 md:col-span-2")
        form()
          .shadow.overflow-hidden(class="sm:rounded-md")
            .px-4.py-5.bg-white(class="sm:p-6")
              .rounded-lg.border
                template(v-if="emails.length === 0 ")
                  div.min-h-20
                    p.p-8.text-gray-500 No Emails addresses are associated with this account
                template(v-for="(item, index) in emails")
                  div.active-hover-anchor.p-4.h-20(:class="{'border-t border-gray-200': index > 0 }" :key="item.email")
                    .flex.justify-between
                      div.flex.items-center
                        .flex.flex-col
                          .flex
                            button.mr-2.text-indigo-600.flex.items-center.border-b.border-dashed(class="hover:text-indigo-700 hover:border-indigo-400" type="button" @click="onEmailEdit($event, item)")  {{ item.email }}

                            span.ml-4.align-center.bg-indigo-50.rounded-full.text-xs.text-indigo-600.px-2.uppercase.tracking.flex.items-center.text-xs.font-semibold(v-if="item.default") Primary



                          .flex.text-xs.mt-2
                            template(v-if="item.email_status[0] === 'u'")
                              span.font-bold.mr-3 Unverified
                              a.text-indigo-600(href="#" @click.prevent="onSendVerificationEmail(item.email)") Resend verification Email
                            template(v-else)
                              span.mr-3.text-green-600 Verified
                              svg.w-4.h-4.text-green-600(viewBox="0 0 20 20" fill="currentColor" strokewidth="2")
                                path(fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd")

                            span.ml-4 {{ item.label }}


                      .flex.items-center

                        template(v-if="canDelete || item.email_status[0] === 'u'")

                          button.ml-4.text-gray-700.bg-gray-50.p-2.rounded-full(type="button" @click="onEmailDelete($event, item.email)" class="hover:text-red-700 hover:bg-red-50" title="Remove email address.")
                            svg.w-4.h-4(fill="none" viewBox="0 0 24 24" stroke="currentColor" )
                              path(stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16")

            .px-4.py-3.bg-gray-50.text-right(class="sm:px-6")
              button.py-2.px-4.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-indigo-600.shadow-sm.transition.duration-150.ease-in-out(class="hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600" @click="onAddEmail" type="button") Add


  BaseModal(v-model="verificationModelOpen")
    div
        template(v-if="verificationModelState === 'error'")

          .mx-auto.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-red-100
            svg.h-6.w-6.text-red-600(stroke="currentColor" fill="none" viewBox="0 0 24 24")
              path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z")
          .mt-3.text-center(class="sm:mt-5")
            h3.text-lg.leading-6.font-medium.text-red-700 Unable to send verification email
          ul.mt-3.mx-1.text-center.text-gray-500.text-sm(class="sm:mt-5")
            template(v-for="error in errors")
              li.ml-2 {{ error.text }}

        template(v-else-if="verificationModelState === 'complete'")

          .mx-auto.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-green-100
            svg.h-6.w-6.text-green-600(stroke="currentColor" fill="none" viewBox="0 0 24 24"): path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7")
          .mt-3.text-center(class="sm:mt-5")
            h3.text-lg.leading-6.font-medium.text-gray-900 Verfication Email sent

        template(v-else)

          div.flex.flex-col.items-center
            img(src="~assets/images/fulcrum-loading.gif")
            p.text-gray-400.tracking-wider.text-sm.uppercase Sending verification email


  BaseModal(v-model="modalOpen" v-if="currentEmail" :closeOnBackground="false")
    div
        button.absolute.right-0.mr-4.-mt-2(@click="onEmailCancel")
          svg.w-5.h-5.text-gray-400(fill="none" viewBox="0 0 24 24" stroke="currentColor" strokewidth="2")
            path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12")
        template(v-if="modalState === 'success'")
            .mx-auto.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-green-100: svg.h-6.w-6.text-green-600(stroke="currentColor" fill="none" viewBox="0 0 24 24"): path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7")
            .mt-3.text-center(class="sm:mt-5")
              template(v-if="currentEmail.isEdit")
                h3.text-lg.leading-6.font-medium.text-gray-900 Email details successfully updated
              template(v-else)
                h3.text-lg.leading-6.font-medium.text-gray-900 Address successfully added
                .mt-2: p.text-sm.leading-5.text-gray-500
                  | Please check your email account for a
                  br
                  | verification email.
        template(v-else)

          template(v-if="modalState === 'error'")
            .bg-red-50.border-l-4.border-red-600.p-4.my-4
              .flex
                .flex-shrink-0: svg.h-5.w-5.text-red-600(fill="currentColor" viewBox="0 0 20 20"): path(fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd")
                .ml-3
                  p.text-sm.leading-5.text-red-700 {{ errors[0].text }}


          form( @submit.prevent="onEmailUpdate" )
            div
              h3.text-2xl.leading-6.font-medium.text-gray-900 {{ currentEmail.isEdit ? 'Edit email details' : 'Add an email address' }}
              .mt-5.flex-col(class="sm:flex")
                .w-full
                  label(for="new_email") Email Address
                  template(v-if="currentEmail.isEdit")
                    p.font-semibold.leading-5.pt-2.rounded-md.text-gray-700 {{ currentEmail.address }}
                  template(v-else)
                    .relative.rounded-md.shadow-sm: input#new_email.form-input.block.w-full(type="email" placeholder="you@example.com" class="sm:text-sm sm:leading-5" v-model="currentEmail.address")
                .w-full.mt-4
                  label(for="new_email_label") Description
                  .relative.rounded-md.shadow-sm: input#new_email_label.form-input.block.w-full(type="text" placeholder="work or home" class="sm:text-sm sm:leading-5" v-model="currentEmail.label")
                .mt-2.mt-4
                  label.block(class="md:w-2/3")
                    input.form-checkbox.leading-tight.text-indigo-600.w-5.h-5(type="checkbox" v-model="currentEmail.isPrimary")
                    span.ml-2 Primary email address

            .mt-5(class="sm:mt-6")
              span.flex.w-full.rounded-md.shadow-sm
                button.inline-flex.justify-center.w-full.rounded-md.border.border-transparent.px-4.py-2.bg-indigo-600.text-base.leading-6.font-medium.text-white.shadow-sm.transition.ease-in-out.duration-150(
                  class="hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5") Save
</template>

<script>
import BaseModal from '@/components/controls/BaseModal'
import ErrorHandlerMixin from '@/utils/mixins/ErrorHandler'
import { delay } from '@/utils'

const defaultEmail = {
  address: null,
  label: null,
  isPrimary: false,
  isEdit: false
}
export default {
  name: 'EmailSection',
  inject: ['alert'],
  components: { BaseModal },
  mixins: [ErrorHandlerMixin],
  data() {
    return {
      currentEmail: defaultEmail,
      verificationModelOpen: false,
      verificationModelState: 'loading',
      modalOpen: false,
      modalState: 'fill',
      alertTitle: null,
      alertMessage: null,
      alertMode: 'success',
      localUser: {}
    }
  },
  computed: {
    canDelete() {
      return this.emails && this.emails.filter((x) => x.email_status[0] !== 'u').length > 1
    },
    user() {
      return this.$store.state.user
    },
    emails() {
      return Array.from((this.$store.state && this.$store.state.emails) || [])
    }
  },
  watch: {
    modalOpen(state) {
      if (state === false) this.modalState = 'fill'
    }
  },
  methods: {
    async onEmailDelete(e, email) {
      if (await this.alert.confirm('Are you sure you want to delete this email account.')) {
        try {
          e.target.blur()
          await this.$axios.post('/email/delete', { email })

          this.$store.dispatch('LOAD_STATE')
          // this.modalOpen = false
        } catch (error) {
          this.alert.error(error)
          // AlertModal.
        }
      }
    },
    async saveEmail(payload) {
      await this.post('/email/create', payload)
    },
    async updateEmail(payload) {
      await this.post('/email/edit', payload)
    },
    async onEmailUpdate() {
      const payload = {
        email: this.currentEmail.address,
        custom_user_email_params: {
          label: this.currentEmail.label,
          default: this.currentEmail.isPrimary
        }
      }
      this.currentEmail.isEdit ? await this.updateEmail(payload) : await this.saveEmail(payload)
      if (this.hasErrors) {
        this.modalState = 'error'
      } else {
        this.modalState = 'success'
        this.$store.dispatch('LOAD_STATE')
      }
    },
    onEmailCancel() {
      this.modalOpen = false
    },
    onEmailEdit(e, email) {
      this.currentEmail = {
        address: email.email,
        label: email.label,
        isPrimary: email.default,
        isEdit: true
      }
      this.modalOpen = true
    },
    onAddEmail() {
      this.currentEmail = Object.assign({}, defaultEmail)
      this.modalOpen = true
    },
    async onSendVerificationEmail(email) {
      this.verificationModelState = 'loading'
      this.verificationModelOpen = true

      await this.post('/email/verification-resend', { email })
      await delay(1000)

      if (this.hasErrors) {
        this.verificationModelState = 'error'
      } else {
        this.verificationModelState = 'complete'
        //  the api call is fast so adding to show loading screen
        await delay(2000)

        this.verificationModelOpen = false
      }
    }
  }
}
</script>
