<template lang="pug">
.mt-10(class="sm:mt-0")

  div(class="md:grid md:grid-cols-3 md:gap-6")
      div(class="md:col-span-1")
        .px-4(class="sm:px-0")
          h3.text-lg.font-medium.leading-6.text-gray-900 Invitations
          p.mt-1.text-sm.leading-5.text-gray-500 Invitations to join a Team.
      .mt-5(class="md:mt-0 md:col-span-2")
        form()
          .shadow.overflow-hidden(class="sm:rounded-md")
            .px-4.py-5.bg-white(class="sm:p-6")
              .rounded-lg.border
                template(v-if="invites.length ===0")
                  div.h-24.flex.justify-center.items-center.text-gray-400 No Invitations
                template(v-else)
                
                  template(v-for="(inv, $index) in invites")
                    div.p-3(:class="{'border-t': $index > 0}")
                      .flex.justify-between.items-center
                        div
                          h3
                            | Invitation from: 
                            b Matthew Gambill
                          p.text-sm.text-gray-500 Created {{ inv.create_datetime | toDate }}
                        div.flex
                            button.text-sm.py-1.px-3.rounded-md.font-semibold.text-gray-600(
                              class="hover:text-red-700"
                              type="button"
                              @click="onReject(inv)"
                              )
                              //-svg.w-5.h-5(fill="none" viewBox="0 0 24 24" stroke="currentColor" strokewidth="1.5")
                                path(stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12")
                              | Ignore
                            button.text-sm.ml-2.py-1.px-3.rounded-md.font-semibold.border-2.text-gray-600(
                              class="hover:border-green-500 hover:text-green-600"
                              type="button"
                              @click="onAccept(inv)"
                              )
                              //-svg.w-5.h-5(fill="none" viewBox="0 0 24 24" stroke="currentColor" strokewidth="1.5")
                                path(stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7")
                              | Accept
                      div.mt-4.overflow-hidden
                        div.text-sm {{ inv.message }}
                    //-pre(:key="inv.invitation_code") {{ inv }}
              
            
</template>

<script>
export default {
  inject: ['alert'],
  computed: {
    invites() {
      return this.$store.state.invites === undefined
        ? []
        : this.$store.state.invites.filter((x) => x.invitation_status === 'invitation')
    }
  },
  methods: {
    async onReject({ invitation_code }) {
      try {
        await this.$axios.post('/team/invite-accept', { invitation_code })
        await this.alert.success({ title: 'Finished', text: 'Invitation has been rejected.' })
      } catch (err) {
        this.alert.error({ errors: [err], showButton: true, closeOnBackground: false })
      }
    },
    async onAccept({ invitation_code }) {
      try {
        await this.$axios.post('/invitation/invite-accept', { invitation_code })
        await this.alert.success({ title: 'Finished', text: 'Invitation has been accepted.' })
      } catch (err) {
        this.alert.error({ errors: [err], showButton: true, closeOnBackground: false })
      }
    }
  }
}
</script>
