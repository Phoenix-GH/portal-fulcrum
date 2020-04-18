import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
/*
Code used for testing... figure out how to replicate tests in jest
<template lang="pug">
div
  AlertModal(ref="aModal" v-model="alertIsOpen" title="Success" text="Some Text"  )

  DeleteModal(ref="dModal" v-model="deleteIsOpen" )
    p.text-sm.leading-5.text-gray-500
      | Are you sure? This action is
      b permanent.

  .flex
    fieldset.flex-1
      label.text-lg.font-medium Alert
      .w-full
        button.mr-4.py-2.px-4.border.border-gray-300.rounded-md.text-sm.leading-5.font-medium.text-gray-700.transition.duration-150.ease-in-out(type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" v-on:click='openAlert()') Open Alert Open
        button.mr-4.py-2.px-4.border.border-gray-300.rounded-md.text-sm.leading-5.font-medium.text-gray-700.transition.duration-150.ease-in-out(type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" v-on:click='launchSuccessAlert()') Success Modal
        button.mr-4.py-2.px-4.border.border-gray-300.rounded-md.text-sm.leading-5.font-medium.text-gray-700.transition.duration-150.ease-in-out(type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" v-on:click='launchErrorAlert()') Error Modal
    fieldset.flex-1
      label.text-lg.font-medium Delete
      .w-full
        button.mr-4.py-2.px-4.border.border-gray-300.rounded-md.text-sm.leading-5.font-medium.text-gray-700.transition.duration-150.ease-in-out(type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" v-on:click='openDelete()') Open Delete Open
        button.mr-4.py-2.px-4.border.border-gray-300.rounded-md.text-sm.leading-5.font-medium.text-gray-700.transition.duration-150.ease-in-out(type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" v-on:click='onConfirm()') Confirm

  .w-full.py-8.flex
    .flex-1
      button.mr-4.py-2.px-4.border.border-gray-300.rounded-md.text-sm.leading-5.font-medium.text-gray-700.transition.duration-150.ease-in-out(type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" v-on:click='baseSuccessAlert()') Launch Success Modal

    .flex-1
      button.mr-4.py-2.px-4.border.border-gray-300.rounded-md.text-sm.leading-5.font-medium.text-gray-700.transition.duration-150.ease-in-out(type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" v-on:click='baseErrorAlert()') Launch Error Modal

    .flex-1
      button.mr-4.py-2.px-4.border.border-gray-300.rounded-md.text-sm.leading-5.font-medium.text-gray-700.transition.duration-150.ease-in-out(type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" v-on:click='baseConfirm()') Launch Confirm

//-div
  GeneralSection

  .hidden(class="sm:block"): .py-5: .border-t.border-gray-200

  EmailSection()

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


</template>

<script>
import GeneralSection from '@/components/parts/profile/GeneralSection'
import EmailSection from '@/components/parts/profile/EmailSection'
import DeleteModal from '@/components/controls/DeleteModal'
import AlertModal from '@/components/controls/AlertModal'
export default {
  name: 'ProfilePage',
  components: { GeneralSection, EmailSection, DeleteModal, AlertModal },
  inject: ['alert'],
  data() {
    return {
      alertIsOpen: false,
      deleteIsOpen: false,
      status: null
    }
  },
  methods: {
    openAlert() {
      this.alertIsOpen = true
    },
    launchSuccessAlert() {
      this.$refs.aModal.success({ text: 'A successful popup ' })
    },
    launchErrorAlert() {
      this.$refs.aModal.error({ text: 'An error popup', showButton: true, errors: 'Some Error message' })
    },
    openDelete() {
      this.deleteIsOpen = true
    },
    cancelDelete() {
      this.deleteIsOpen = false
    },
    onDeleteCancel() {
      this.status = 'deleteCancel'
      this.cancelDelete()
    },
    onDeleteOk() {
      this.status = 'deleteOk'
      this.cancelDelete()
    },
    async onConfirm() {
      const cont = await this.$refs.dModal.confirm({ text: 'Are you sure you want to delete?' })
      alert(cont)
    },
    baseSuccessAlert() {
      this.alert.success({ text: 'A successful popup ', showButton: true , showCloseIcon: true })
    },
    baseErrorAlert() {
      this.alert.error({ text: 'An error popup', errors: 'Some Error message' })
    },
    async baseConfirm() {
      const cont = await this.alert.confirm({ text: 'Are you sure you want to delete?' })
      alert(cont)
    }
  }
}
</script>

  */
