<template lang="pug">
.flex.flex-col
  .-my-2.py-2.overflow-x-auto(class='sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8')
    .align-middle.inline-block.min-w-full.shadow.overflow-hidden.border-b.border-gray-200(class='sm:rounded-lg')
      .bg-white.px-4.py-5.border-b.border-gray-200(class="sm:px-6")
        .-ml-4.-mt-2.flex.items-center.justify-between.flex-wrap(class="sm:flex-no-wrap")
          .ml-4.mt-2: h3.text-lg.leading-6.font-medium.text-gray-900 {{team && team.team_name}}
          .ml-4.mt-2.flex-shrink-0: span.inline-flex.rounded-md.shadow-sm: button.relative.inline-flex.items-center.px-4.py-2.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-indigo-600(type="button" class="hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700" v-on:click='changeTeam()') Change team
        div
          div
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
                          a.text-indigo-600(v-on:click='showEditUserModal(user.user_id)' href='#' class='hover:text-indigo-900 focus:outline-none focus:underline') Edit
                          span &nbsp;|&nbsp;
                          a.text-red-600.leading-4(v-on:click='showDeleteMemberModal(user.user_id)' class='hover:text-indigo-900 focus:outline-none focus:underline') Delete
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
  script(src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.0.1/dist/alpine.js" defer="")
  DeleteModal(:isOpen="deleteMemberModalOpen" :onOK="deleteMember" :onCancel="closeDeleteMemberModal")
</template>

<script>
import DeleteModal from '@/components/controls/DeleteModal'
export default {
  layout: 'default',
  name: 'Team',
  components: {
    DeleteModal
  },
  data() {
    return {
      team: null,
      users: [],
      invitations: [],
      deleteMemberModalOpen: false,
      selectedMemberId: null
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.$axios({
        method: 'post',
        url: '/team/get-info',
        data: {
          auth_id: this.$state.sessionKey.auth_id,
          team_id: this.$store.state.selectedTeam
        }
      }).then((res) => {
        const { data } = res
        this.team = data.response.team
        this.users = data.response.users
        this.invitations = data.response.invitations
      })
    },
    showEditUserModal() {},
    showDeleteMemberModal(id) {
      this.deleteMemberModalOpen = true
      this.selectedMemberId = id
    },
    showDeleteInvitationModal() {},
    changeTeam() {
      this.$router.push('/teams/id')
    },
    deleteMember() {
      this.$axios({
        method: 'post',
        url: '/team/member-delete',
        data: {
          auth_id: this.$state.sessionKey.auth_id,
          team_id: this.$store.state.selectedTeam,
          user_id: this.selectedMemberId,
          current_member_team_role: 'admin'
        }
      })
        .catch((e) => {
          alert(e.message || 'An error has occured, please try again later.')
        })
        .finally((f) => {
          this.loadData()
          this.selectedMemberId = null
          this.deleteMemberModalOpen = false
        })
    },
    closeDeleteMemberModal() {
      this.deleteMemberModalOpen = false
      this.selectedMemberId = null
    }
  }
}
</script>

<style></style>
