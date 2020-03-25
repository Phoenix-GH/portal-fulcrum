<template lang="pug">
  nav.bg-gray-800( @keydown.window.escape="open = false")
    .max-w-7xl.mx-auto.px-4(class="sm:px-6 lg:px-8")
      .flex.items-center.justify-between.h-16
        .flex.items-center
          .flex-shrink-0: img.h-8.w-8(src="/img/logos/workflow-mark-on-dark.svg" alt="")
          .hidden(class="md:block" v-for="section in sections" v-bind:key="section.id")
            .ml-6.flex.items-baseline
              nuxt-link.ml-4.px-3.py-2.rounded-md.text-sm.font-medium(:to="section.link" class="hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700" :class="[ selectedMenu===section.link ? 'bg-gray-900 text-white' : 'text-gray-300' ]") {{section.label}}

        .hidden(class="md:block")
          .ml-4.relative.flex.items-center(class="md:ml-6")
            div.fixed.inset-0.z-10.opacity-0.bg-black(v-if="open" @click="open=false")
            button.p-1.border-2.border-transparent.text-gray-400.rounded-full(class="hover:text-white focus:outline-none focus:text-white focus:bg-gray-700")
              svg.h-6.w-6(stroke="currentColor" fill="none" viewBox="0 0 24 24"): path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9")
            .ml-3.relative
              div: button.z-20.max-w-xs.flex.items-center.text-sm.rounded-full.text-white(@click="open = !open" class="focus:outline-none focus:shadow-solid"): img.h-8.w-8.rounded-full(src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="")
              .origin-top-right.z-20.absolute.right-0.mt-2.w-48.rounded-md.shadow-lg(v-show="open" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95")
                .py-1.rounded-md.bg-white.shadow-xs
                  a.block.px-4.py-2.text-sm.text-gray-700(href="#" class="hover:bg-gray-100") Your Profile
                  a.block.px-4.py-2.text-sm.text-gray-700(href="#" class="hover:bg-gray-100") Settings
                  a.block.px-4.py-2.text-sm.text-gray-700(href="#" class="hover:bg-gray-100") Sign out
        .-mr-2.flex(class="md:hidden")
          button.inline-flex.items-center.justify-center.p-2.rounded-md.text-gray-400(@click="open = !open" class="hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white")
            svg.h-6.w-6(stroke="currentColor" fill="none" viewBox="0 0 24 24")
              path.inline-flex(:class="{'hidden': open, 'inline-flex': !open }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16")
              path.hidden(:class="{'hidden': !open, 'inline-flex': open }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12")
    //-.hidden(:class="{'block': open, 'hidden': !open}" class="md:hidden")
      .px-2.pt-2.pb-3(class="sm:px-3")
        a.mt-1.block.px-3.py-2.rounded-md.text-base.font-medium.text-white.bg-gray-900(href="#" class="focus:outline-none focus:text-white focus:bg-gray-700") Dashboard
        a.mt-1.block.px-3.py-2.rounded-md.text-base.font-medium.text-gray-300(href="#" class="hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700") Team
        a.mt-1.block.px-3.py-2.rounded-md.text-base.font-medium.text-gray-300(href="#" class="hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700") Projects
        a.mt-1.block.px-3.py-2.rounded-md.text-base.font-medium.text-gray-300(href="#" class="hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700") Calendar
        a.mt-1.block.px-3.py-2.rounded-md.text-base.font-medium.text-gray-300(href="#" class="hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700") Reports
      .pt-4.pb-3.border-t.border-gray-700
        .flex.items-center.px-5
          .flex-shrink-0: img.h-10.w-10.rounded-full(src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="")
          .ml-3
            .text-base.font-medium.leading-none.text-white Tom Cook
            .mt-1.text-sm.font-medium.leading-none.text-gray-400 tom@example.com
        .mt-3.px-2
          a.block.px-3.py-2.rounded-md.text-base.font-medium.text-gray-400(href="#" class="hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700") Your Profile
          a.mt-1.block.px-3.py-2.rounded-md.text-base.font-medium.text-gray-400(href="#" class="hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700") Settings
          a.mt-1.block.px-3.py-2.rounded-md.text-base.font-medium.text-gray-400(href="#" class="hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700") Sign out

</template>

<script>
export default {
  name: 'GlobalNavigation',
  components: {},
  data() {
    return {
      open: false,
      sections: [
        {
          label: 'Dashboard',
          link: '/'
        },
        {
          label: 'Team',
          link: '/team'
        },
        {
          label: 'Projects',
          link: '/projects'
        },
        {
          label: 'Calendar',
          link: '/calendar'
        },
        {
          label: 'Reports',
          link: '/reports'
        }
      ]
    }
  },
  computed: {
    selectedMenu() {
      let link = this.$route.name
      if (link === 'index') {
        link = ''
      }
      return `/${link}`
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
