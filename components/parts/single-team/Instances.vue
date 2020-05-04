<template lang="pug">
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
                  | Status
                th.px-6.py-3.border-b.border-gray-200.bg-gray-50.text-left.text-xs.leading-4.font-medium.text-gray-500.uppercase.tracking-wider
                  | Description
                th.px-6.py-3.border-b.border-gray-200.bg-gray-50
            tbody.bg-white(v-for="instance in instances" v-bind:key="instance.instance_id")
              tr(v-if="instance.instance_status!=='deleted'")
                td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                  | {{instance.instance_name}}
                td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                  | {{instance.time_zone_offset}}
                td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                  a.text-indigo-600(href='#' class="hover:text-indigo-900 focus:outline-none focus:underline" v-on:click='selectInstance(instance.instance_id)')
                    | {{instance.instance_status === 'active' ? 'Currently active' : 'Select'}}
                td.px-6.py-4.whitespace-no-wrap.border-b.border-gray-200.text-sm.leading-5.text-gray-500
                  | {{instance.description}}
                td.px-6.py-4.whitespace-no-wrap.text-right.border-b.border-gray-200.text-sm.leading-5.font-medium
                  a.text-indigo-600(v-on:click='showEditInstanceModal(instance)' href='#' class='hover:text-indigo-900 focus:outline-none focus:underline') Edit
                  span &nbsp;|&nbsp;
                  a.text-red-600.leading-4(v-on:click='deleteInstance(instance)' class='hover:text-indigo-900 focus:outline-none focus:underline') Delete

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
</template>

<script>
export default {
  layout: 'default',
  name: 'Instances',
  inject: ['alert'],
  props: {
    instances: { type: Array, default: () => [] },
    loadData: { type: Function, default: () => {} }
  },
  data() {
    return {
      editInstanceModalOpen: false,
      selectedInstance: null,
      instanceDescription: null,
      instanceOffset: 0
    }
  },
  mounted() {},
  methods: {
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
    onSelectRole(role) {
      this.selectedRole = role
      this.dropdownOpen = false
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
          auth_id: this.$store.state.session.auth_id,
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
    async deleteInstance(instance) {
      const cont = await this.alert.confirm()
      if (!cont) return
      this.$axios({
        method: 'post',
        url: '/instance/edit',
        data: {
          auth_id: this.$store.state.session.auth_id,
          instance_id: instance.instance_id,
          instance_status: 'deleted'
        }
      })
        .catch((e) => {
          this.alert.error({ title: e.message || 'An error has occured, please try again later.', showButton: true })
        })
        .finally((f) => {
          this.loadData()
        })
    },
    selectInstance() {}
  }
}
</script>

<style></style>
