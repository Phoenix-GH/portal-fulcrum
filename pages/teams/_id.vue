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
            .mt-6(class="sm:mt-12 sm:grid sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5")
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
                        td.px-6.py-4.whitespace-no-wrap.text-right.border-b.border-gray-200.text-sm.leading-5.font-medium(v-if="user.team_role!=='owner'")
                          a.text-indigo-600(v-on:click='showEditMemberModal(user)' href='#' class='hover:text-indigo-900 focus:outline-none focus:underline') Edit
                          span &nbsp;|&nbsp;
                          a.text-red-600.leading-4(v-on:click='showDeleteMemberModal(user)' class='hover:text-indigo-900 focus:outline-none focus:underline') Delete
            .mt-6(class="sm:mt-5 sm:grid sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5")
              label.block.text-sm.font-medium.leading-5.text-gray-700(for="about" class="sm:mt-px sm:pt-2") Invitations
              .ml-4.mt-2.flex-shrink-0.text-right: span.inline-flex.rounded-md.shadow-sm: button.relative.inline-flex.items-center.px-4.py-2.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-indigo-600(type="button" class="hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700" v-on:click='createInvitation()') Create Invitation
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
                          a.text-indigo-600(v-on:click='showEditInvitationModal(invitation)' href='#' class='hover:text-indigo-900 focus:outline-none focus:underline') Edit
                          span &nbsp;|&nbsp;
                          a.text-red-600.leading-4(v-on:click='showDeleteInvitationModal(invitation)' class='hover:text-indigo-900 focus:outline-none focus:underline') Delete
  DeleteModal(:isOpen="deleteMemberModalOpen" :onOK="deleteMember" :onCancel="closeDeleteMemberModal")
  .fixed.bottom-0.inset-x-0.px-4.pb-4(v-if="editMemberModalOpen" x-show="open" class="sm:inset-0 sm:flex sm:items-center sm:justify-center")
    .fixed.inset-0.transition-opacity(x-show="open" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"): .absolute.inset-0.bg-gray-500.opacity-75
    .relative.bg-white.rounded-lg.px-4.pt-5.pb-4.overflow-hidden.shadow-xl.transform.transition-all(x-show="open" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100" x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" class="sm:max-w-lg sm:w-full sm:p-6")
      .bg-white.border-gray-200
        div
          h3.text-lg.leading-6.font-medium.text-gray-900 Edit Member Role
        .mt-6.grid.grid-cols-1.row-gap-6.col-gap-4(class="sm:grid-cols-6")
          div(class="sm:col-span-4")
            label.block.text-sm.font-medium.leading-5.text-gray-700(for="teamname") Member Role
            span.relative.z-0.inline-flex.shadow-sm
              .relative.inline-block.text-left
                div
                  span.rounded-md.shadow-sm
                    button.inline-flex.justify-center.w-full.rounded-md.border.border-gray-300.px-4.py-2.bg-white.text-sm.leading-5.font-medium.text-gray-700.transition.ease-in-out.duration-150(@click="dropdownOpen = !dropdownOpen" type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800")
                      | {{ selectedRole && selectedRole.label || 'Select User Role'}}
                      svg.-mr-1.ml-2.h-5.w-5(fill="currentColor" viewBox="0 0 20 20"): path(fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd")
                .origin-top-right.absolute.mt-2.w-56.rounded-md.shadow-lg(v-if="dropdownOpen" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95")
                  .rounded-md.bg-white.shadow-xs
                    .py-1(v-for="role in roles" v-bind:key="role.id")
                      a.block.px-4.py-2.text-sm.leading-5.text-gray-700(href="#" class="hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" v-on:click="onSelectRole(role)") {{role.label}}
        .mt-8.pt-5
          .flex.justify-end
            span.inline-flex.rounded-md.shadow-sm: button.py-2.px-4.border.border-gray-300.rounded-md.text-sm.leading-5.font-medium.text-gray-700.transition.duration-150.ease-in-out(type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" v-on:click='editMemberModalOpen=false;') Cancel
            span.ml-3.inline-flex.rounded-md.shadow-sm: button.inline-flex.justify-center.py-2.px-4.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-indigo-600.transition.duration-150.ease-in-out(type="submit" class="hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700" v-on:click='saveMember()') Save
  DeleteModal(:isOpen="deleteInvitationModalOpen" :onOK="deleteInvitation" :onCancel="closeDeleteMemberModal")
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
      editMemberModalOpen: false,
      deleteInvitationModalOpen: false,
      editInvitationModalOpen: false,
      selectedMember: null,
      selectedInvitation: null,
      dropdownOpen: false,
      roles: [
        {
          id: 'owner',
          label: 'Owner'
        },
        {
          id: 'admin',
          label: 'Admin'
        },
        {
          id: 'lead',
          label: 'Lead'
        }
      ],
      selectedRole: null
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      const teamId = this.$route.params.id || this.$store.state.selectedTeam

      this.$axios({
        method: 'post',
        url: '/team/get-info',
        data: {
          auth_id: this.$state.sessionKey.auth_id,
          team_id: parseInt(teamId)
        }
      }).then((res) => {
        const { data } = res
        this.team = data.response.team
        this.users = data.response.users
        this.invitations = data.response.invitations
      })
    },
    showEditMemberModal(member) {
      this.editMemberModalOpen = true
      this.selectedMember = member
      this.selectedRole = this.roles.find((item) => item.id === member.team_role)
    },
    showDeleteMemberModal(member) {
      this.deleteMemberModalOpen = true
      this.selectedMember = member
    },
    showEditInvitationModal(invitation) {
      this.selectedInvitation = invitation
      this.showEditInvitationModal = true
    },
    showDeleteInvitationModal(invitation) {
      this.selectedInvitation = invitation
      this.deleteInvitationModalOpen = true
    },
    changeTeam() {
      this.$router.push('/teams/')
    },
    deleteMember() {
      this.$axios({
        method: 'post',
        url: '/team/member-delete',
        data: {
          auth_id: this.$state.sessionKey.auth_id,
          team_id: this.$store.state.selectedTeam,
          user_id: this.selectedMember.user_id,
          current_member_team_role: this.selectedMember.team_role
        }
      })
        .catch((e) => {
          alert(e.message || 'An error has occured, please try again later.')
        })
        .finally((f) => {
          this.loadData()
          this.selectedMember = null
          this.deleteMemberModalOpen = false
        })
    },
    closeDeleteMemberModal() {
      this.deleteMemberModalOpen = false
      this.selectedMember = null
    },
    saveMember() {
      this.$axios({
        method: 'post',
        url: '/team/member-edit',
        data: {
          auth_id: this.$state.sessionKey.auth_id,
          team_id: this.$store.state.selectedTeam,
          user_id: this.selectedMember.user_id,
          current_member_team_role: this.selectedMember.team_role,
          new_member_team_role: this.selectedRole.id
        }
      })
        .catch((e) => {
          alert(e.message || 'An error has occured, please try again later.')
        })
        .finally((f) => {
          this.loadData()
          this.editMemberModalOpen = false
        })
    },
    onSelectRole(role) {
      this.selectedRole = role
      this.dropdownOpen = false
    },
    deleteInvitation() {
      this.$axios({
        method: 'post',
        url: '/team/invite-delete',
        data: {
          auth_id: this.$state.sessionKey.auth_id,
          invitation_code: this.selectedInvitation.invitation_code,
          team_role: this.selectedInvitation.team_role
        }
      })
        .catch((e) => {
          alert(e.message || 'An error has occured, please try again later.')
        })
        .finally((f) => {
          this.loadData()
          this.selectedInvitation = null
          this.deleteInvitationModalOpen = false
        })
    },
    closeDeleteInvitationModal() {
      this.deleteInvitationModalOpen = false
    },
    createInvitation() {
      this.$router.push('/teams/create-invitation/')
    }
  }
}
</script>

<style></style>
