<template lang="pug">
.flex.flex-col
  .-my-2.py-2.overflow-x-auto(class='sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8')
    .align-middle.inline-block.min-w-full.shadow.overflow-hidden.border-b.border-gray-200(class='sm:rounded-lg')
      .bg-white.px-4.py-5.border-b.border-gray-200(class="sm:px-6")
        div
          div
            div
              h3.text-lg.leading-6.font-medium.text-gray-900 New Team
              p.mt-1.text-sm.leading-5.text-gray-500 This information will be displayed publicly so be careful what you share.
            .mt-6.grid.grid-cols-1.row-gap-6.col-gap-4(class="sm:grid-cols-6")
              div(class="sm:col-span-4")
                label.block.text-sm.font-medium.leading-5.text-gray-700(for="teamname") Team Name
                .mt-1.flex.rounded-md.shadow-sm: input#teamname.flex-1.form-input.block.w-full.rounded-none.rounded-r-md.transition.duration-150.ease-in-out(v-model="team_name" class="sm:text-sm sm:leading-5")
              div(class="sm:col-span-6")
                label.block.text-sm.font-medium.leading-5.text-gray-700(for="description") Team Description
                .mt-1.rounded-md.shadow-sm: textarea#description.form-textarea.block.w-full.transition.duration-150.ease-in-out(rows="3" class="sm:text-sm sm:leading-5" v-model="description")
                p.mt-2.text-sm.text-gray-500 Write a few sentences about the team.
            .mt-8.border-t.border-gray-200.pt-5
              .flex.justify-end
                span.inline-flex.rounded-md.shadow-sm: button.py-2.px-4.border.border-gray-300.rounded-md.text-sm.leading-5.font-medium.text-gray-700.transition.duration-150.ease-in-out(type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" v-on:click='cancel()') Cancel
                span.ml-3.inline-flex.rounded-md.shadow-sm: button.inline-flex.justify-center.py-2.px-4.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-indigo-600.transition.duration-150.ease-in-out(type="button" class="hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700" v-on:click='save()') Save
  portal(to="navigation-title")
    nuxt-link.text-lg.leading-6.font-semibold.text-gray-900.text-indigo-600(to="/teams") Teams
    span.mx-3.text-gray-300 \\
    h2.text-lg.leading-6.font-semibold.text-gray-900 Create a new team
</template>

<script>
export default {
  layout: 'default',
  name: 'TeamCreate',
  inject: ['alert'],
  data() {
    return {
      team_name: '',
      description: ''
    }
  },
  methods: {
    save() {
      const isFirstTeam = this.$store.state.teams.length === 0
      this.$axios({
        method: 'post',
        url: '/team/create',
        data: {
          auth_id: this.$state.sessionKey.auth_id,
          team_name: this.team_name,
          custom_team_params: {
            description: this.description
          }
        }
      })
        .then((response) => {
          this.team_name = null
          this.description = null
          if (isFirstTeam) {
            this.$store
              .dispatch('SET_CURRENT_TEAM', { selectedTeam: response.data.response.team.team_id })
              .then((response2) => {
                this.alert.success({
                  title: 'Success',
                  text: 'The team was added successfully!',
                  onClose: this.cancel
                })
              })
          } else {
            this.alert.success({ title: 'Success', text: 'The team was added successfully!', onClose: this.closeAlert })
          }
        })
        .catch((e) => {
          this.alert.error(e.message || 'An error has occured, please try again later.')
        })
    },
    cancel() {
      this.$router.go(-1)
    }
  }
}
</script>

<style></style>
