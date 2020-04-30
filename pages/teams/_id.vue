<template lang="pug">
.flex.flex-col
  .-my-2.py-2.overflow-x-auto(class='sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8')
    .align-middle.inline-block.min-w-full.shadow.overflow-hidden.border-b.border-gray-200(class='sm:rounded-lg')
      .bg-white.px-4.py-5.border-b.border-gray-200(class="sm:px-6")
        .-ml-4.-mt-2.flex.items-center.justify-between.flex-wrap(class="sm:flex-no-wrap")
          .ml-4.mt-2: h3.text-lg.leading-6.font-medium.text-gray-900 {{team && team.team_name}}

        Instances(:instances="instances" :loadData="loadData")
        Members(:users="users" :loadData="loadData")
        Invitations(:invitations="invitations" :loadData="loadData")

  portal(to="navigation-title")
    nuxt-link.text-lg.leading-6.font-semibold.text-gray-900.text-indigo-600(to="/teams") Teams
    span.mx-3.text-gray-300 \\
    h2.text-lg.leading-6.font-semibold.text-gray-900 {{ team && team.team_name }}
</template>

<script>
import Instances from '@/components/parts/single-team/Instances'
import Members from '@/components/parts/single-team/Members'
import Invitations from '@/components/parts/single-team/Invitations'

export default {
  layout: 'default',
  name: 'Team',
  inject: ['alert'],
  components: { Instances, Members, Invitations },
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
      ]
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
    changeTeam() {
      this.$router.push('/teams/')
    }
  }
}
</script>

<style></style>
