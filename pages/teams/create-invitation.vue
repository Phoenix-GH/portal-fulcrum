<template lang="pug">
.flex.flex-col
  .-my-2.py-2.overflow-x-auto(class='sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8')
    .align-middle.inline-block.min-w-full.shadow.overflow-hidden.border-b.border-gray-200(class='sm:rounded-lg')
      .bg-white.px-4.py-5.border-b.border-gray-200(class="sm:px-6")
        div
          div
            div
              h3.text-lg.leading-6.font-medium.text-gray-900 Invite new member
            .mt-6.grid.grid-cols-1.row-gap-6.col-gap-4(class="sm:grid-cols-6")
              div(class="sm:col-span-4")
                label.block.text-sm.font-medium.leading-5.text-gray-700(for="email") Email
                .mt-1.flex.rounded-md.shadow-sm: input#email.form-input.block.w-full.rounded-md.transition.duration-150.ease-in-out(v-model="email" class="sm:text-sm sm:leading-5")
              div(class="sm:col-span-4")
                label.block.text-sm.font-medium.leading-5.text-gray-700(for="role") Member Role
                span#role.relative.z-0.inline-flex.shadow-sm
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
              div(class="sm:col-span-6")
                label.block.text-sm.font-medium.leading-5.text-gray-700(for="message") Message
                .mt-1.rounded-md.shadow-sm: textarea#message.form-textarea.block.w-full.transition.duration-150.ease-in-out(rows="3" class="sm:text-sm sm:leading-5" v-model="message")
                p.mt-2.text-sm.text-gray-500 Write a few sentences about the invitation.
            .mt-8.border-t.border-gray-200.pt-5
              .flex.justify-end
                span.inline-flex.rounded-md.shadow-sm: button.py-2.px-4.border.border-gray-300.rounded-md.text-sm.leading-5.font-medium.text-gray-700.transition.duration-150.ease-in-out(type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" v-on:click='cancel()') Cancel
                span.ml-3.inline-flex.rounded-md.shadow-sm: button.inline-flex.justify-center.py-2.px-4.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-indigo-600.transition.duration-150.ease-in-out(type="submit" class="hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700" v-on:click='save()') Save
</template>

<script>
export default {
  layout: 'default',
  name: 'TeamInvitationCreate',
  inject: ['alert'],
  data() {
    return {
      email: '',
      message: '',
      selectedRole: null,
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
        },
        {
          id: 'member',
          label: 'Member'
        }
      ],
      dropdownOpen: false
    }
  },
  methods: {
    save() {
      const selectedTeam = this.$store.state.selectedTeam
      if (!this.selectedRole) {
        this.alert.error({ title: 'Please select a team role!', showButton: true })
        return
      }
      if (selectedTeam) {
        this.$axios({
          method: 'post',
          url: '/team/invite-create',
          data: {
            email: this.email,
            team_role: this.selectedRole.id,
            team_id: selectedTeam,
            custom_invitation_params: {
              message: this.message
            }
          }
        })
          .then((response) => {
            this.alert.success({
              title: 'The invitation was sent!',
              onClose: this.closeAlert,
              showButton: true
            })
            this.email = null
            this.message = null
          })
          .catch((e) => {
            this.alert.error({ title: e.message || 'An error has occured, please try again later.', showButton: true })
          })
      }
    },
    cancel() {
      this.$router.go(-1)
    },
    closeAlert() {
      this.$router.go(-1)
      /* Temporary solution */
      setTimeout(this.$router.go(-1), 500)
    },
    onSelectRole(role) {
      this.selectedRole = role
      this.dropdownOpen = false
    }
  }
}
</script>

<style></style>
