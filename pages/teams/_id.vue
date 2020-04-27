<template lang="pug">
.flex.flex-col
  .-my-2.py-2.overflow-x-auto(class='sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8')
    .align-middle.inline-block.min-w-full.shadow.overflow-hidden.border-b.border-gray-200(class='sm:rounded-lg')
      .bg-white.px-4.py-5.border-b.border-gray-200(class="sm:px-6")
        .-ml-4.-mt-2.flex.items-center.justify-between.flex-wrap(class="sm:flex-no-wrap")
          .ml-4.mt-2: h3.text-lg.leading-6.font-medium.text-gray-900 {{team && team.team_name}}
        div
          div
            .mt-6(class="sm:mt-12 sm:grid sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5")
              label.block.text-sm.font-medium.leading-5.text-gray-700(for="username" class="sm:mt-px sm:pt-2") Instances
              .ml-4.mt-2.flex-shrink-0.text-right: span.inline-flex.rounded-md.shadow-sm: button.relative.inline-flex.items-center.px-4.py-2.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-indigo-600(type="button" class="hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700" v-on:click='createInstance()') Create Instance
              .mt-1(class="sm:mt-0 sm:col-span-2")
                .align-middle.inline-block.min-w-full.shadow.overflow-hidden.border-b.border-gray-200(class="sm:rounded-lg")
                  table.min-w-full
                    thead
                      tr
                        th.px-6.py-3.border-b.border-gray-200.bg-gray-50.text-left.text-xs.leading-4.font-medium.text-gray-500.uppercase.tracking-wider
                          | Name
                        th.px-6.py-3.border-b.border-gray-200.bg-gray-50.text-left.text-xs.leading-4.font-medium.text-gray-500.uppercase.tracking-wider
                          | Time Zone Offset
                        th.px-6.py-3.border-b.border-gray-200.bg-gray-50.text-left.text-xs.leading-4.font-medium.text-gray-500.uppercase.tracking-wider
                          | Instance Status
                        th.px-6.py-3.border-b.border-gray-200.bg-gray-50.text-left.text-xs.leading-4.font-medium.text-gray-500.uppercase.tracking-wider
                          | Description
                        th.px-6.py-3.border-b.border-gray-200.bg-gray-50
                    tbody.bg-white(v-for="instance in instances" v-bind:key="instance.instance_id")
                      tr
                        td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                          | {{instance.instance_name}}
                        td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                          | {{instance.time_zone_offset}}
                        td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                          | {{instance.instance_status}}
                        td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                          | {{instance.description}}
                        td.px-6.py-4.whitespace-no-wrap.text-right.border-b.border-gray-200.text-sm.leading-5.font-medium
                          a.text-indigo-600(v-on:click='showEditInstanceModal(instance)' href='#' class='hover:text-indigo-900 focus:outline-none focus:underline') Edit
                          span &nbsp;|&nbsp;
                          a.text-red-600.leading-4(v-on:click='deleteInstance(instance)' class='hover:text-indigo-900 focus:outline-none focus:underline') Delete
            .mt-6(class="sm:mt-12 sm:grid sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5")
              .flex.h-10.items-center.justify-between
                label.block.text-sm.font-medium.leading-5.text-gray-700(for="about" class="sm:mt-px sm:pt-2") Members

              .mt-3
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
                          | {{ user['p.firstname'] || user.firstName}}
                        td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                          | {{ user['p.lastname'] || user.lastName}}
                        td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                          | {{ user['p.companyname'] }}
                        td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                          | {{ user.team_role }}
                        td.px-6.py-4.whitespace-no-wrap.text-right.border-b.border-gray-200.text-sm.leading-5.font-medium(v-if="roles.find(item => item.id === user.team_role).value >= currentUserRoleValue")
                          a.text-indigo-600(@click.prevent='showEditMemberModal(user)' href='#' class='hover:text-indigo-800 focus:outline-none focus:underline') Edit
                          span &nbsp;|&nbsp;
                          a.text-red-600.leading-4(@click.prevent='deleteMember(user)' href='#' class='hover:text-red-800 focus:outline-none focus:underline') Delete
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
  .fixed.bottom-0.inset-x-0.px-4.pb-4(v-if="editInstanceModalOpen" x-show="open" class="sm:inset-0 sm:flex sm:items-center sm:justify-center")
    .fixed.inset-0.transition-opacity(x-show="open" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"): .absolute.inset-0.bg-gray-500.opacity-75
    .relative.bg-white.rounded-lg.px-4.pt-5.pb-4.overflow-visible.shadow-xl.transform.transition-all(x-show="open" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100" x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" class="sm:max-w-lg sm:w-full sm:p-6")
      .bg-white.border-gray-200
        div
          h3.text-lg.leading-6.font-medium.text-gray-900 Edit Instance
        .mt-6.grid.grid-cols-1.row-gap-6.col-gap-4(class="sm:grid-cols-6")
          div(class="sm:col-span-4")
            label.block.text-sm.font-medium.leading-5.text-gray-700(for="instanceName") Instance Name
            .mt-1.flex.rounded-md.shadow-sm: input#instanceName.flex-1.form-input.block.w-full.rounded-none.rounded-r-md.transition.duration-150.ease-in-out(v-model="instanceName" class="sm:text-sm sm:leading-5")
          div(class="sm:col-span-4")
            label.block.text-sm.font-medium.leading-5.text-gray-700(for="instanceOffset") Time Offset
            .mt-1.flex.rounded-md.shadow-sm: input#instanceOffset.flex-1.form-input.block.w-full.rounded-none.rounded-r-md.transition.duration-150.ease-in-out(v-model="instanceOffset" class="sm:text-sm sm:leading-5" type="number")
          div(class="sm:col-span-6")
            label.block.text-sm.font-medium.leading-5.text-gray-700(for="instanceDescription") Description
            .mt-1.rounded-md.shadow-sm: textarea#instanceDescription.form-textarea.block.w-full.transition.duration-150.ease-in-out(rows="3" class="sm:text-sm sm:leading-5" v-model="instanceDescription")
            p.mt-2.text-sm.text-gray-500 Write a few sentences about the instance.
        .mt-8.pt-5
          .flex.justify-end
            span.inline-flex.rounded-md.shadow-sm: button.py-2.px-4.border.border-gray-300.rounded-md.text-sm.leading-5.font-medium.text-gray-700.transition.duration-150.ease-in-out(type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" v-on:click='editInstanceModalOpen=false;') Cancel
            span.ml-3.inline-flex.rounded-md.shadow-sm: button.inline-flex.justify-center.py-2.px-4.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-indigo-600.transition.duration-150.ease-in-out(type="submit" class="hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700" v-on:click='saveInstance()') Save

  .fixed.bottom-0.inset-x-0.px-4.pb-4(v-if="editMemberModalOpen" x-show="open" class="sm:inset-0 sm:flex sm:items-center sm:justify-center")
    .fixed.inset-0.transition-opacity: .absolute.inset-0.bg-gray-500.opacity-75
    .relative.bg-white.rounded-lg.px-4.pt-5.pb-4.overflow-visible.shadow-xl.transform.transition-all(class="sm:max-w-lg sm:w-full sm:p-6")
      .bg-white.border-gray-200
        div
          h3.text-lg.leading-6.font-medium.text-gray-900 Edit Member
        .mt-6.grid.grid-cols-1.row-gap-6.col-gap-4(class="sm:grid-cols-6")
          div(class="sm:col-span-4")
            label.block.text-sm.font-medium.leading-5.text-gray-700(for="memberRole") Member Role
            span#memberRole.relative.z-0.inline-flex.shadow-sm
              .relative.inline-block.text-left
                div
                  span.rounded-md.shadow-sm
                    button.inline-flex.justify-center.w-full.rounded-md.border.border-gray-300.px-4.py-2.bg-white.text-sm.leading-5.font-medium.text-gray-700.transition.ease-in-out.duration-150(@click="dropdownOpen = !dropdownOpen" type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800")
                      | {{ selectedRole && selectedRole.label || 'Select User Role'}}
                      svg.-mr-1.ml-2.h-5.w-5(fill="currentColor" viewBox="0 0 20 20"): path(fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd")
                .origin-top-right.absolute.mt-2.w-56.rounded-md.shadow-lg(v-if="dropdownOpen")
                  .rounded-md.bg-white.shadow-xs
                    .py-1(v-for="role in roles" v-bind:key="role.id")
                      a.block.px-4.py-2.text-sm.leading-5.text-gray-700(href="#" class="hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" @click="onSelectRole(role)") {{role.label}}
        .mt-8.pt-5
          .flex.justify-end
            span.inline-flex.rounded-md.shadow-sm: button.py-2.px-4.border.border-gray-300.rounded-md.text-sm.leading-5.font-medium.text-gray-700.transition.duration-150.ease-in-out(type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" @click='editMemberModalOpen=false;') Cancel
            span.ml-3.inline-flex.rounded-md.shadow-sm: button.inline-flex.justify-center.py-2.px-4.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-indigo-600.transition.duration-150.ease-in-out(type="submit" class="hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700" @click='saveMember()') Save

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

  portal(to="navigation-title")
    nuxt-link.text-lg.leading-6.font-semibold.text-gray-900.text-indigo-600(to="/teams") Teams
    span.mx-3.text-gray-300 \\
    h2.text-lg.leading-6.font-semibold.text-gray-900 {{ team && team.team_name }}
</template>

<script>
export default {
  layout: 'default',
  name: 'Team',
  inject: ['alert'],
  middleware({ params, redirect }) {
    // if id is not a number... then redirect back to teams page
    if (/^\d+$/.test(params.id) === false) return redirect('/teams')
  },

  data() {
    return {
      team: null,
      users: [],
      invitations: [],
      instances: [],
      editMemberModalOpen: false,
      editInvitationModalOpen: false,
      editInstanceModalOpen: false,
      selectedMember: null,
      selectedInvitation: null,
      selectedInstance: null,
      dropdownOpen: false,
      invitationDropdownOpen: false,
      currentUserRoleValue: 0,
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
      ],
      selectedRole: null,
      selectedInvitationRole: null,
      invitationMessage: null,
      invitationEmail: null,
      invitationMemberRole: null,
      instanceName: null,
      instanceDescription: null,
      instanceOffset: 0
    }
  },
  computed: {
    canDeleteOwner() {
      // TODO: need to look at current user to see if they have permissions to delete
      return this.users ? this.users.filter((x) => x.team_role === 'owner').length > 1 : false
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
          team_id: parseInt(teamId)
        }
      })
        .then((res) => {
          const { data } = res
          this.team = data.response.team
          this.users = data.response.users
          this.instances = data.response.instances
          const currentUserRole = data.response.users.find((item) => item.user_id === this.$store.state.user.user_id)
            .team_role
          this.currentUserRoleValue = this.roles.find((item) => item.id === currentUserRole).value
          this.invitations = data.response.invitations
        })
        .catch((err) => {
          this.alert.error(err)
        })
    },
    showEditMemberModal(member) {
      this.editMemberModalOpen = true
      this.selectedMember = member
      this.selectedRole = this.roles.find((item) => item.id === member.team_role)
    },
    showEditInvitationModal(invitation) {
      this.invitationEmail = invitation.email
      this.invitationMessage = invitation.message
      this.selectedInvitationRole = this.roles.find((item) => item.id === invitation.team_role)
      this.selectedInvitation = invitation
      this.editInvitationModalOpen = true
    },
    changeTeam() {
      this.$router.push('/teams/')
    },
    async deleteMember(user) {
      const cont = await this.alert.confirm()
      if (!cont) return
      await this.$axios({
        method: 'post',
        url: '/team/member-delete',
        data: {
          team_id: this.$store.state.selectedTeam,
          user_id: user.user_id,
          current_member_team_role: user.team_role
        }
      })
        .catch((e) => {
          this.alert.error({ title: e.message || 'An error has occured, please try again later.', showButton: true })
        })
        .finally((f) => {
          this.loadData()
        })
    },
    saveMember() {
      this.$axios({
        method: 'post',
        url: '/team/member-edit',
        data: {
          team_id: this.$store.state.selectedTeam,
          user_id: this.selectedMember.user_id,
          current_member_team_role: this.selectedMember.team_role,
          new_member_team_role: this.selectedRole.id
        }
      })
        .catch((e) => {
          this.alert.error({ title: e.message || 'An error has occured, please try again later.', showButton: true })
        })
        .finally((f) => {
          this.loadData()
          this.editMemberModalOpen = false
        })
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
    onSelectRole(role) {
      this.selectedRole = role
      this.dropdownOpen = false
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
    },
    createInstance() {
      this.$router.push(`/teams/create-instance/`)
    },
    showEditInstanceModal(instance) {
      this.editInstanceModalOpen = true
      this.selectedInstance = instance
      this.instanceName = instance.instance_name
      this.instanceOffset = instance.time_zone_offset
      this.instanceDescription = instance.description
    },
    saveInstance() {
      this.$axios({
        method: 'post',
        url: '/instance/edit',
        data: {
          auth_id: this.$state.sessionKey.auth_id,
          instance_id: this.selectedInstance.instance_id,
          instance_name: this.instanceName,
          time_zone_offset: parseInt(this.instanceOffset),
          custom_instance_params: {
            description: this.instanceDescription
          }
        }
      })
        .then((response) => {
          this.alert.success({
            title: 'The instance was updated successfully!',
            onClose: this.closeAlert,
            showButton: true
          })
          this.instanceName = null
          this.instanceDescription = null
          this.instanceOffset = 0
        })
        .catch((e) => {
          this.alert.error({ title: e.message || 'An error has occured, please try again later.', showButton: true })
        })
        .finally((f) => {
          this.loadData()
          this.editInstanceModalOpen = false
        })
    },
    async deleteInstance() {}
  }
}
</script>

<style></style>
