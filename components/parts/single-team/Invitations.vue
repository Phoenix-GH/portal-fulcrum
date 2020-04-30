<template lang="pug">
  div
    .mt-6(class="sm:mt-5 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5")
      .flex.h-10.items-center.justify-between
        label.block.text-sm.font-medium.leading-5.text-gray-700(class="sm:mt-px") Invitations

        span.inline-flex.rounded-md.shadow-sm
            button.relative.inline-flex.items-center.px-4.py-2.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-indigo-600(type="button" class="hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700" @click='createInvitation()') Create Invitation
      .mt-3
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
                td.px-6.py-4.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                  | {{invitation.message}}
                td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                  | {{invitation.invitation_status}}
                td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                  | {{invitation.team_role}}
                td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                  | {{invitation.email}}
                td.px-6.py-4.whitespace-no-wrap.text-right.border-b.border-gray-200.text-sm.leading-5.font-medium
                  a.text-indigo-600(@click='showEditInvitationModal(invitation)' href='#' class='hover:text-indigo-900 focus:outline-none focus:underline') Edit
                  span &nbsp;|&nbsp;
                  a.text-red-600.leading-4(v-on:click='deleteInvitation(invitation)' class='hover:text-indigo-900 focus:outline-none focus:underline') Delete

    .fixed.bottom-0.inset-x-0.px-4.pb-4(v-if="editInvitationModalOpen" class="sm:inset-0 sm:flex sm:items-center sm:justify-center")
      .fixed.inset-0.transition-opacity(x-show="open" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"): .absolute.inset-0.bg-gray-500.opacity-75
      .relative.bg-white.rounded-lg.px-4.pt-5.pb-4.overflow-visible.shadow-xl.transform.transition-all(x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100" x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" class="sm:max-w-lg sm:w-full sm:p-6")
        .bg-white.border-gray-200
          div
            h3.text-lg.leading-6.font-medium.text-gray-900 Edit Invitation
          .mt-6.grid.grid-cols-1.row-gap-6.col-gap-4(class="sm:grid-cols-6")
            div(class="sm:col-span-4")
              label.block.text-sm.font-medium.leading-5.text-gray-700(for="invitationEmail") Email
              .mt-1.flex.rounded-md.shadow-sm: input#invitationEmail.flex-1.form-input.block.w-full.rounded-none.rounded-r-md.transition.duration-150.ease-in-out(v-model="invitationEmail" class="sm:text-sm sm:leading-5")
            div(class="sm:col-span-4")
              label.block.text-sm.font-medium.leading-5.text-gray-700(for="invitationMemberRole") Member Role
              span#invitationMemberRole.relative.z-0.inline-flex.shadow-sm
                .relative.inline-block.text-left
                  div
                    span.rounded-md.shadow-sm
                      button.inline-flex.justify-center.w-full.rounded-md.border.border-gray-300.px-4.py-2.bg-white.text-sm.leading-5.font-medium.text-gray-700.transition.ease-in-out.duration-150(@click="invitationDropdownOpen = !invitationDropdownOpen" type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800")
                        | {{ selectedInvitationRole && selectedInvitationRole.label || 'Select User Role'}}
                        svg.-mr-1.ml-2.h-5.w-5(fill="currentColor" viewBox="0 0 20 20"): path(fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd")
                  .origin-top-right.absolute.mt-2.w-56.rounded-md.shadow-lg(v-if="invitationDropdownOpen" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95")
                    .rounded-md.bg-white.shadow-xs
                      .py-1(v-for="role in roles" v-bind:key="role.id")
                        a.block.px-4.py-2.text-sm.leading-5.text-gray-700(href="#" class="hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" v-on:click="onSelectInvitationRole(role)") {{role.label}}
            div(class="sm:col-span-6")
              label.block.text-sm.font-medium.leading-5.text-gray-700(for="invitationMessage") Message
              .mt-1.rounded-md.shadow-sm: textarea#invitationMessage.form-textarea.block.w-full.transition.duration-150.ease-in-out(rows="3" class="sm:text-sm sm:leading-5" v-model="invitationMessage")
              p.mt-2.text-sm.text-gray-500 Write a few sentences about the invitation.
          .mt-8.pt-5
            .flex.justify-end
              span.inline-flex.rounded-md.shadow-sm: button.py-2.px-4.border.border-gray-300.rounded-md.text-sm.leading-5.font-medium.text-gray-700.transition.duration-150.ease-in-out(type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" v-on:click='editInvitationModalOpen=false;') Cancel
              span.ml-3.inline-flex.rounded-md.shadow-sm: button.inline-flex.justify-center.py-2.px-4.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-indigo-600.transition.duration-150.ease-in-out(type="submit" class="hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700" v-on:click='saveInvitation()') Save
</template>

<script>
export default {
  layout: 'default',
  name: 'Invitations',
  inject: ['alert'],
  props: {
    invitations: { type: Array, default: () => [] },
    loadData: { type: Function, default: () => {} }
  },
  data() {
    return {
      editInvitationModalOpen: false,
      selectedInvitation: null,
      invitationDropdownOpen: false,
      roles: [
        {
          id: 'owner',
          label: 'Owner',
          value: 0
        },
        {
          id: 'admin',
          label: 'Admin',
          value: 1
        },
        {
          id: 'lead',
          label: 'Lead',
          value: 2
        },
        {
          id: 'member',
          label: 'Member',
          value: 3
        }
      ]
    }
  },
  mounted() {},
  methods: {
    showEditInvitationModal(invitation) {
      this.invitationEmail = invitation.email
      this.invitationMessage = invitation.message
      this.selectedInvitationRole = this.roles.find((item) => item.id === invitation.team_role)
      this.selectedInvitation = invitation
      this.editInvitationModalOpen = true
    },
    saveInvitation() {
      this.$axios({
        method: 'post',
        url: '/team/invite-edit',
        data: {
          invitation_code: this.selectedInvitation.invitation_code,
          email: this.invitationEmail,
          current_invite_team_role: this.selectedInvitation.team_role,
          new_invite_team_role: this.selectedInvitationRole.id,
          custom_invitation_params: {
            message: this.invitationMessage
          }
        }
      })
        .catch((e) => {
          this.alert.error({ title: e.message || 'An error has occured, please try again later.', showButton: true })
        })
        .finally((f) => {
          this.loadData()
          this.editInvitationModalOpen = false
        })
    },
    onSelectInvitationRole(role) {
      this.selectedInvitationRole = role
      this.invitationDropdownOpen = false
    },
    async deleteInvitation(invitation) {
      const cont = await this.alert.confirm()
      if (!cont) return
      this.$axios({
        method: 'post',
        url: '/team/invite-delete',
        data: {
          invitation_code: invitation.invitation_code,
          team_role: invitation.team_role
        }
      })
        .catch((e) => {
          this.alert.error({ title: e.message || 'An error has occured, please try again later.', showButton: true })
        })
        .finally((f) => {
          this.loadData()
        })
    },
    createInvitation() {
      this.$router.push('/teams/create-invitation/')
    }
  }
}
</script>

<style></style>
