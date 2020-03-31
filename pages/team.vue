<template lang="pug">
.flex.flex-col
  .-my-2.py-2.overflow-x-auto(class='sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8')
    .align-middle.inline-block.min-w-full.shadow.overflow-hidden.border-b.border-gray-200(class='sm:rounded-lg')
      .bg-white.px-4.py-5.border-b.border-gray-200(class="sm:px-6")
        div
          div
            div
              h3.text-lg.leading-6.font-medium.text-gray-900 Team
              .mt-6(class="sm:mt-5")
                div(class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5")
                  label.block.text-sm.font-medium.leading-5.text-gray-700(for="username" class="sm:mt-px sm:pt-2") Instances
                  .mt-1(class="sm:mt-0 sm:col-span-2")


              .mt-6(class="sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5")
                label.block.text-sm.font-medium.leading-5.text-gray-700(for="about" class="sm:mt-px sm:pt-2") Members
                .mt-1(class="sm:mt-0 sm:col-span-2")
                  .align-middle.inline-block.min-w-full.shadow.overflow-hidden.border-b.border-gray-200(class="sm:rounded-lg")
                    table.min-w-full
                      thead
                        tr
                          th.px-6.py-3.border-b.border-gray-200.bg-gray-50.text-left.text-xs.leading-4.font-medium.text-gray-500.uppercase.tracking-wider
                            | First Name
                          th.px-6.py-3.border-b.border-gray-200.bg-gray-50.text-left.text-xs.leading-4.font-medium.text-gray-500.uppercase.tracking-wider
                            | Last Name
                          th.px-6.py-3.border-b.border-gray-200.bg-gray-50.text-left.text-xs.leading-4.font-medium.text-gray-500.uppercase.tracking-wider
                            | Company Name
                          th.px-6.py-3.border-b.border-gray-200.bg-gray-50.text-left.text-xs.leading-4.font-medium.text-gray-500.uppercase.tracking-wider
                            | Team Role
                          th.px-6.py-3.border-b.border-gray-200.bg-gray-50
                      tbody.bg-white(v-for="user in users" v-bind:key="user.user_id")
                        tr
                          td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                            | {{user['p.firstname']}}
                          td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                            | {{user['p.lastname']}}
                          td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                            | {{user['p.companyname']}}
                          td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                            | {{user.team_role}}
                          td.px-6.py-4.whitespace-no-wrap.text-right.border-b.border-gray-200.text-sm.leading-5.font-medium
                            a.text-indigo-600(href='#' class='hover:text-indigo-900 focus:outline-none focus:underline') Edit
                            span &nbsp;|&nbsp;
                            a.text-red-600.leading-4(v-on:click='showDeleteUserModal(user.user_id)' class='hover:text-indigo-900 focus:outline-none focus:underline') Delete
              .mt-6(class="sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5")
                label.block.text-sm.font-medium.leading-5.text-gray-700(for="about" class="sm:mt-px sm:pt-2") Invitations
                .mt-1(class="sm:mt-0 sm:col-span-2")
                  .align-middle.inline-block.min-w-full.shadow.overflow-hidden.border-b.border-gray-200(class="sm:rounded-lg")
                    table.min-w-full
                      thead
                        tr
                          th.px-6.py-3.border-b.border-gray-200.bg-gray-50.text-left.text-xs.leading-4.font-medium.text-gray-500.uppercase.tracking-wider
                            | Message
                          th.px-6.py-3.border-b.border-gray-200.bg-gray-50.text-left.text-xs.leading-4.font-medium.text-gray-500.uppercase.tracking-wider
                            | Status
                          th.px-6.py-3.border-b.border-gray-200.bg-gray-50.text-left.text-xs.leading-4.font-medium.text-gray-500.uppercase.tracking-wider
                            | Team Role
                          th.px-6.py-3.border-b.border-gray-200.bg-gray-50.text-left.text-xs.leading-4.font-medium.text-gray-500.uppercase.tracking-wider
                            | Email
                          th.px-6.py-3.border-b.border-gray-200.bg-gray-50
                      tbody.bg-white(v-for="invitation in invitations" v-bind:key="invitation.invitation_code")
                        tr
                          td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                            | {{invitation.message}}
                          td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                            | {{invitation.invitation_status}}
                          td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                            | {{invitation.team_role}}
                          td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                            | {{invitation.email}}
                          td.px-6.py-4.whitespace-no-wrap.text-right.border-b.border-gray-200.text-sm.leading-5.font-medium
                            a.text-indigo-600(href='#' class='hover:text-indigo-900 focus:outline-none focus:underline') Edit
                            span &nbsp;|&nbsp;
                            a.text-red-600.leading-4(v-on:click='showDeleteInvitationModal(invitation.invitation_code)' class='hover:text-indigo-900 focus:outline-none focus:underline') Delete

</template>

<script>
export default {
  layout: 'default',
  name: 'Team',
  components: {},
  data() {
    return {
      teamId: null,
      users: [],
      invitations: []
    }
  },
  mounted() {
    this.teamId = this.$store.state.teams.find((item) => item.team_status === 'active').team_id
    this.loadData()
  },
  methods: {
    async loadData() {
      const { data } = await this.$axios({
        method: 'post',
        url: '/team/get-info',
        data: {
          auth_id: this.$state.sessionKey.auth_id,
          team_id: this.teamId
        }
      })
      this.users = data.response.users
      this.invitations = data.response.invitations
      console.log('invitations---', this.invitations)
    },
    showDeleteUserModal() {},
    showDeleteInvitationModal() {}
  }
}
</script>

<style></style>
