<template lang="pug">
.flex.flex-col
  .-my-2.py-2.overflow-x-auto(class='sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8')
    .align-middle.inline-block.min-w-full.shadow.overflow-hidden.border-b.border-gray-200(class='sm:rounded-lg')
      .bg-white.px-4.py-5.border-b.border-gray-200(class="sm:px-6")
        div
          div
            div
              h3.text-lg.leading-6.font-medium.text-gray-900 Team
              .mt-6(class="sm:mt-5")
                div(class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5")
                  label.block.text-sm.font-medium.leading-5.text-gray-700(for="username" class="sm:mt-px sm:pt-2") Instances list
                  .mt-1(class="sm:mt-0 sm:col-span-2")


              .mt-6(class="sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5")
                label.block.text-sm.font-medium.leading-5.text-gray-700(for="about" class="sm:mt-px sm:pt-2") Members list
                .mt-1(class="sm:mt-0 sm:col-span-2")


</template>

<script>
export default {
  layout: 'default',
  name: 'Team',
  components: {},
  data() {
    return {
      teamInfo: null,
      teamId: null
    }
  },
  mounted() {
    this.teams = this.$store.state.teams
    console.log('teams---', this.teams)
  },
  methods: {
    async loadData() {
      const { data } = await this.$axios({
        method: 'post',
        url: '/team/get-info',
        data: {
          auth_id: this.$state.sessionKey.auth_id,
          team_id: 3
        }
      })
      this.teamInfo = [...data.response]
    }
  }
}
</script>

<style></style>
