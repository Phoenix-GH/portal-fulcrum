<template lang="pug">
.flex.flex-col
  .-my-2.py-2.overflow-x-auto(class='sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8')
    .align-middle.inline-block.min-w-full.shadow.overflow-hidden.border-b.border-gray-200(class='sm:rounded-lg')
      .bg-white.px-4.py-5.border-b.border-gray-200(class="sm:px-6")
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
          tr
            td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.font-medium.text-gray-900
              | {{team.team_name}}
            td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
              | {{team.description}}
            td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
              | {{team.create_datetime}}
            td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
              a.text-indigo-600(href='#' class="hover:text-indigo-900 focus:outline-none focus:underline" v-on:click='selectTeam(team.team_id)' v-if="currentTeam !== team.team_id") Select
            td.px-6.py-4.whitespace-no-wrap.text-right.border-b.border-gray-200.text-sm.leading-5.font-medium
              a.text-indigo-600(v-on:click='showEditTeamModal(team.team_id)' href='#' class='hover:text-indigo-900 focus:outline-none focus:underline') Edit
              span &nbsp;|&nbsp;
              a.text-red-600.leading-4(v-on:click='showDeleteTeamModal(team.team_id)' class='hover:text-indigo-900 focus:outline-none focus:underline') Delete
  script(src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.0.1/dist/alpine.js" defer="")
  .fixed.bottom-0.inset-x-0.px-4.pb-4(v-bind:x-data="'{ open:' + deleteModalOpen + '}'" x-show="open" class="sm:inset-0 sm:flex sm:items-center sm:justify-center")
    .fixed.inset-0.transition-opacity(x-show="open" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"): .absolute.inset-0.bg-gray-500.opacity-75
    .relative.bg-white.rounded-lg.px-4.pt-5.pb-4.overflow-hidden.shadow-xl.transform.transition-all(x-show="open" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100" x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" class="sm:max-w-lg sm:w-full sm:p-6")
      .hidden.absolute.top-0.right-0.pt-4.pr-4(class="sm:block"): button.text-gray-400.transition.ease-in-out.duration-150(@click="deleteModalOpen = false;" type="button" class="hover:text-gray-500 focus:outline-none focus:text-gray-500"): svg.h-6.w-6(stroke="currentColor" fill="none" viewBox="0 0 24 24"): path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12")
      div(class="sm:flex sm:items-start")
        .mx-auto.flex-shrink-0.flex.items-center.justify-center.h-12.w-12.rounded-full.bg-red-100(class="sm:mx-0 sm:h-10 sm:w-10"): svg.h-6.w-6.text-red-600(stroke="currentColor" fill="none" viewBox="0 0 24 24"): path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z")
        .mt-3.text-center(class="sm:mt-0 sm:ml-4 sm:text-left")
          h3.text-lg.leading-6.font-medium.text-gray-900 Delete team
          .mt-2: p.text-sm.leading-5.text-gray-500 Are you sure you want to delete this team? All of your data will be permanantly removed from our servers forever. This action cannot be undone.
      .mt-5(class="sm:mt-4 sm:flex sm:flex-row-reverse")
        span.flex.w-full.rounded-md.shadow-sm(class="sm:ml-3 sm:w-auto"): button.inline-flex.justify-center.w-full.rounded-md.border.border-transparent.px-4.py-2.bg-red-600.text-base.leading-6.font-medium.text-white.shadow-sm.transition.ease-in-out.duration-150(@click="deleteTeam()" type="button" class="hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red sm:text-sm sm:leading-5") Deactivate
        span.mt-3.flex.w-full.rounded-md.shadow-sm(class="sm:mt-0 sm:w-auto"): button.inline-flex.justify-center.w-full.rounded-md.border.border-gray-300.px-4.py-2.bg-white.text-base.leading-6.font-medium.text-gray-700.shadow-sm.transition.ease-in-out.duration-150(@click="deleteModalOpen = false;" type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline sm:text-sm sm:leading-5") Cancel

  .fixed.bottom-0.inset-x-0.px-4.pb-4(v-bind:x-data="'{ open:' + editModalOpen + '}'" x-show="open" class="sm:inset-0 sm:flex sm:items-center sm:justify-center")
    .fixed.inset-0.transition-opacity(x-show="open" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0"): .absolute.inset-0.bg-gray-500.opacity-75
    .relative.bg-white.rounded-lg.px-4.pt-5.pb-4.overflow-hidden.shadow-xl.transform.transition-all(x-show="open" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100" x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" class="sm:max-w-lg sm:w-full sm:p-6")
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
            span.inline-flex.rounded-md.shadow-sm: button.py-2.px-4.border.border-gray-300.rounded-md.text-sm.leading-5.font-medium.text-gray-700.transition.duration-150.ease-in-out(type="button" class="hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" v-on:click='cancel()') Cancel
            span.ml-3.inline-flex.rounded-md.shadow-sm: button.inline-flex.justify-center.py-2.px-4.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-indigo-600.transition.duration-150.ease-in-out(type="submit" class="hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700" v-on:click='saveTeam()') Save
</template>

<script>
export default {
  layout: 'default',
  name: 'TeamManagement',
  components: {},
  data() {
    return {
      deleteModalOpen: false,
      editModalOpen: false,
      selectedTeamId: null,
      teams: null,
      currentTeam: this.$store.state.selectedTeam
    }
  },
  mounted() {
    this.teams = this.$store.state.teams
  },
  methods: {
    async loadData() {
      const { data } = await this.$axios({
        method: 'post',
        url: '/auth/get'
      })
      this.teams = [...data.response.teams]
    },
    createTeam() {
      this.$router.push('team-create')
    },
    showDeleteTeamModal(id) {
      this.deleteModalOpen = true
      this.selectedTeamId = id
    },
    showEditTeamModal(id) {
      this.editModalOpen = true
      this.selectedTeamId = id
    },
    selectTeam(id) {
      this.$store.commit('SELECT_TEAM', { selectedTeam: id })
      this.$router.push('team')
    },
    deleteTeam() {
      this.$axios({
        method: 'post',
        url: '/team/delete',
        data: {
          auth_id: this.$state.sessionKey.auth_id,
          team_id: this.selectedTeamId
        }
      })
        .then((data) => {
          this.loadData()
        })
        .catch((e) => {
          alert(e.message || 'An error has occured, please try again later.')
        })
        .finally((f) => {
          this.loadData()
          this.selectedTeamId = null
          this.deleteModalOpen = false
        })
    },
    cancel() {
      this.editModalOpen = false
    },
    saveTeam() {}
  }
}
</script>

<style></style>
