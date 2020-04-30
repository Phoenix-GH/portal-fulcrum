<template lang="pug">
  div
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

</template>

<script>
export default {
  layout: 'default',
  name: 'Members',
  inject: ['alert'],
  props: {
    users: { type: Array, default: () => [] },
    loadData: { type: Function, default: () => {} },
    currentUserRoleValue: { type: Number, default: 0 }
  },
  data() {
    return {
      team: null,
      editMemberModalOpen: false,
      selectedMember: null,
      dropdownOpen: false,

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
      selectedRole: null
    }
  },
  methods: {
    showEditMemberModal(member) {
      this.editMemberModalOpen = true
      this.selectedMember = member
      this.selectedRole = this.roles.find((item) => item.id === member.team_role)
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
    onSelectRole(role) {
      this.selectedRole = role
      this.dropdownOpen = false
    }
  }
}
</script>

<style></style>
