<template lang="pug">
.flex.flex-col
  .-my-2.py-2.overflow-x-auto(class='sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8')
    .align-middle.inline-block.min-w-full.shadow.overflow-hidden.border-b.border-gray-200(class='sm:rounded-lg')
      .bg-white.px-4.py-5.border-b.border-gray-200.overflow-scroll-x(class="sm:px-6")
        .-ml-4.-mt-2.flex.items-center.justify-between.flex-wrap(class="sm:flex-no-wrap")
          .ml-4.mt-2: h3.text-lg.leading-6.font-medium.text-gray-900 Teams
          .ml-4.mt-2.flex-shrink-0: span.inline-flex.rounded-md.shadow-sm: button.relative.inline-flex.items-center.px-4.py-2.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-indigo-600(type="button" class="hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700" v-on:click='createTeam()') Create new team
      table.min-w-full
        thead
          tr
            th.px-6.py-3.border-b.border-gray-200.bg-gray-50.text-left.text-xs.leading-4.font-medium.text-gray-500.uppercase.tracking-wider
              | Name
            th.px-6.py-3.border-b.border-gray-200.bg-gray-50.text-left.text-xs.leading-4.font-medium.text-gray-500.uppercase.tracking-wider
              | Description
            th.px-6.py-3.border-b.border-gray-200.bg-gray-50.text-left.text-xs.leading-4.font-medium.text-gray-500.uppercase.tracking-wider
              | Created at
            th.px-6.py-3.border-b.border-gray-200.bg-gray-50
            th.px-6.py-3.border-b.border-gray-200.bg-gray-50
        tbody.bg-white(v-for="team in teams" v-bind:key="team.team_id")
          tr(v-if="teams && teams.length > 0")
            td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.font-medium.text-gray-900
              | {{team.team_name}}
            td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
              | {{team.description}}
            td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
              | {{team.create_datetime}}
            td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
              a.text-indigo-600(href='#' class="hover:text-indigo-900 focus:outline-none focus:underline" v-on:click='selectTeam(team.team_id)')
                | {{currentTeam !== team.team_id ? 'Select' : 'Currently active'}}
            td.px-6.py-4.whitespace-no-wrap.text-right.border-b.border-gray-200.text-sm.leading-5.font-medium
              a.text-indigo-600(v-on:click='showEditTeamModal(team.team_id)' href='#' class='hover:text-indigo-900 focus:outline-none focus:underline') Edit
              span &nbsp;|&nbsp;
              a.text-red-600.leading-4(v-on:click='deleteTeam(team.team_id)' class='hover:text-indigo-900 focus:outline-none focus:underline') Delete
        tbody.bg-white(v-if="!teams || teams.length == 0")
          tr
            td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.font-medium.text-gray-900(colspan=5)
              | No teams are available. Please create a new one.
  //-DeleteModal(:isOpen="deleteModalOpen" :onOK="deleteTeam" :onCancel="closeDeleteModal")
  .fixed.bottom-0.inset-x-0.px-4.pb-4(v-if="editModalOpen" class="sm:inset-0 sm:flex sm:items-center sm:justify-center")
    .fixed.inset-0.transition-opacity(): .absolute.inset-0.bg-gray-500.opacity-75
    .relative.bg-white.rounded-lg.px-4.pt-5.pb-4.shadow-xl.transform.transition-all(class="sm:max-w-lg sm:w-full sm:p-6")
      .bg-white.border-gray-200
        div
          h3.text-lg.leading-6.font-medium.text-gray-900 Edit Team
        .mt-6.grid.grid-cols-1.row-gap-6.col-gap-4(class="sm:grid-cols-6")
          div(class="sm:col-span-4")
            label.block.text-sm.font-medium.leading-5.text-gray-700(for="teamname") Team Name
            .mt-1.flex.rounded-md.shadow-sm: input#teamname.flex-1.form-input.block.w-full.rounded-none.rounded-r-md.transition.duration-150.ease-in-out(v-model="team_name" class="sm:text-sm sm:leading-5")
          div(class="sm:col-span-6")
            label.block.text-sm.font-medium.leading-5.text-gray-700(for="description") Team Description
            .mt-1.rounded-md.shadow-sm: textarea#description.form-textarea.block.w-full.transition.duration-150.ease-in-out(rows="3" class="sm:text-sm sm:leading-5" v-model="description")
            p.mt-2.text-sm.text-gray-500 Write a few sentences about the team.
        .mt-8.pt-5
          .flex.justify-end
            span.inline-flex.rounded-md.shadow-sm: button.py-2.px-4.border.border-gray-300.rounded-md.text-sm.leading-5.font-medium.text-gray-700.transition.duration-150.ease-in-out(type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" v-on:click='cancelEditTeam()') Cancel
            span.ml-3.inline-flex.rounded-md.shadow-sm: button.inline-flex.justify-center.py-2.px-4.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-indigo-600.transition.duration-150.ease-in-out(type="submit" class="hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700" v-on:click='saveTeam()') Save
</template>

<script>
export default {
  layout: 'default',
  name: 'TeamManagement',
  inject: ['alert'],
  data() {
    return {
      editModalOpen: false,
      selectedTeamId: null,
      teams: null,
      team_name: null,
      description: null,
      currentTeam: this.$store.state.selectedTeam
    }
  },
  mounted() {
    this.teams = this.$store.state.teams
  },
  methods: {
    async loadData() {
      const {
        data: { response }
      } = await this.$axios.post('/auth/get', {
        auth_id: this.$store.state.session.auth_id
      })
      this.teams = response.teams
    },
    createTeam() {
      this.$router.push('/teams/create')
    },
    showEditTeamModal(id) {
      this.editModalOpen = true
      this.selectedTeamId = id
      const selectedItem = this.teams.find((item) => item.team_id === id)
      this.team_name = selectedItem.team_name
      this.description = selectedItem.description
    },
    selectTeam(id) {
      this.$store.dispatch('SET_CURRENT_TEAM', { selectedTeam: id }).then(() => this.$router.push(`/teams/${id}`))
    },
    async deleteTeam(teamId) {
      const cont = await this.alert.confirm()
      if (cont === false) return
      try {
        await this.$axios({
          method: 'post',
          url: '/team/delete',
          data: {
            team_id: teamId
          }
        })
        this.loadData()
      } catch (e) {
        this.alert.error(e)
      }
    },
    cancelEditTeam() {
      this.editModalOpen = false
      this.team_name = null
      this.description = null
    },
    saveTeam() {
      this.$axios({
        method: 'post',
        url: '/team/edit',
        data: {
          team_id: this.selectedTeamId,
          custom_team_params: {
            team_name: this.team_name,
            description: this.description
          }
        }
      })
        .then((response) => {
          this.team_name = null
          this.description = null
          this.editModalOpen = false
          this.loadData()
        })
        .catch((e) => {
          this.alert.error(e.message || 'An error has occured, please try again later.')
        })
    }
  }
}
</script>

<style></style>
