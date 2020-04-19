<template lang="pug">
div
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

export default {
  name: 'ProfilePage',
  components: { GeneralSection, EmailSection }
}
</script>
