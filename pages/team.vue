<template lang="pug">
.flex.flex-col
  .-my-2.py-2.overflow-x-auto(class='sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8')
    .align-middle.inline-block.min-w-full.shadow.overflow-hidden.border-b.border-gray-200(class='sm:rounded-lg')
      table.min-w-full
        thead
          tr
            th.px-6.py-3.border-b.border-gray-200.bg-gray-50.text-left.text-xs.leading-4.font-medium.text-gray-500.uppercase.tracking-wider
              | Name
            th.px-6.py-3.border-b.border-gray-200.bg-gray-50.text-left.text-xs.leading-4.font-medium.text-gray-500.uppercase.tracking-wider
              | Description
            th.px-6.py-3.border-b.border-gray-200.bg-gray-50.text-left.text-xs.leading-4.font-medium.text-gray-500.uppercase.tracking-wider
              | Status
            th.px-6.py-3.border-b.border-gray-200.bg-gray-50.text-left.text-xs.leading-4.font-medium.text-gray-500.uppercase.tracking-wider
              | Created at
            th.px-6.py-3.border-b.border-gray-200.bg-gray-50
        tbody.bg-white(v-for="team in teams" v-bind:key="team.team_id")
          tr
            td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.font-medium.text-gray-900
              | {{team.team_name}}
            td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
              | {{team.description}}
            td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
              | {{team.team_status}}
            td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
              | {{Date(team.create_datetime)}}
            td.px-6.py-4.whitespace-no-wrap.text-right.border-b.border-gray-200.text-sm.leading-5.font-medium
              a.text-indigo-600(href='#' class='hover:text-indigo-900 focus:outline-none focus:underline') Edit

</template>

<script>
export default {
  layout: 'default',
  name: 'TeamManagement',
  components: {},
  data() {
    return {
      teams: [
        {
          team_id: 1,
          team_name: 'Team 1',
          description: 'Dummy team 1',
          team_status: 'active',
          create_datetime: 20200306172513.426,
          update_datetime: 20200306172513.426
        },
        {
          team_id: 2,
          team_name: 'Team 2',
          description: 'Dummy team 2',
          team_status: 'inactive',
          create_datetime: 20200306172713.426,
          update_datetime: 20200306172813.426
        }
      ]
    }
  },
  async mounted() {
    // const { data } = await this.$axios({
    //   baseURL: 'http://api-v1.fulcrumsaas.net/api',
    //   method: 'post',
    //   url: '/auth/get'
    // })
    // console.log('auth_id----', data.response.auth.auth_id)
  },
  methods: {}
}
</script>

<style></style>
