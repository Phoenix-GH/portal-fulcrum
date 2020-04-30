<template lang="pug">
  nav.bg-gray-800( @keydown.window.escape="open=false")
    .max-w-7xl.mx-auto.px-4(class="sm:px-6 lg:px-8")
      .flex.items-center.justify-between.h-16
        .flex.items-center
          .flex-shrink-0
            nuxt-link(to="/")
              .flex
                svg.h-10.text-cool-gray-400(fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 384 325")
                  path(fill="currentColor" d="M323 59.2A34.9 34.9 0 01348.4 0a35 35 0 11-10 68.6L254.8 194a35 35 0 11-55.5 5l-35.6-43.8a34.8 34.8 0 01-28.5 0L65 225.4A35 35 0 1152 213l69.2-69a35 35 0 1156.4 0l34.9 42.8a34.8 34.8 0 0127.2-2.5l83.5-125zM35 226a17.5 17.5 0 110 35 17.5 17.5 0 010-35zm193.8-26a17.5 17.5 0 110 35 17.5 17.5 0 010-35zm-79.5-94.2a17.5 17.5 0 110 35 17.5 17.5 0 010-35zm199-88.3a17.5 17.5 0 110 35 17.5 17.5 0 010-35z")
                  path(fill="#81bb47" d="M294.3 163.4v153.2c0 4.6-3.7 8.4-8.3 8.4H11.2a8.3 8.3 0 01-8.3-8.4v-33.5a51.1 51.1 0 0081-53.9v-.2l55.8-55.6a51.2 51.2 0 0018.2.1l22.6 27.8a50.9 50.9 0 1093.5-7.4l20.3-30.5z")
                  path(fill="#5f8ca9" d="M2.9 203.9v-162c0-4.7 3.7-8.4 8.3-8.4H286c4.6 0 8.3 3.7 8.3 8.3v31.6l-62.2 93.3a51.7 51.7 0 00-14.5 1l-21-25.6a51 51 0 10-95.2-1.2l-53.3 53.3a51.7 51.7 0 00-45.2 9.7z")
                //- svg.h-10(fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 418 344")
                  path(fill="#81bb47" d="M311.665 138.686v195.383c0 4.812-3.738 8.719-8.341 8.719H28.55c-4.604 0-8.341-3.907-8.341-8.719V299.02c3.962 3.363 63.434-71.226 63.434-71.226l64.087-64.502c3.111.621 18.048 5.832 21.33 5.832 2.919 0 13.11-3.189 15.895-3.683l41.69 49.5c-1.727 5.349-6.248 16.944-6.084 22.897.489 17.698 9.85 27.133 27.547 24.485 14.456-2.163 23.149-3.856 24.126-28.394.356-8.935-7.485-13.953-11.213-21.357l50.644-73.886z")
                  path(fill="#5f8ca9" d="M20.209 236.869V59.673a8.345 8.345 0 018.341-8.341h274.774c4.603 0 8.341 3.738 8.341 8.341v45.592l-62.232 93.219a51.7 51.7 0 00-3.279-.104c-3.848 0-7.597.427-11.203 1.237l-31.697-38.36c2.331-5.839 6.783-21.852 6.056-28.48-2.443-22.285-15.034-34.876-43.182-34.876-28.147 0-43.182 15.034-43.182 43.182 0 6.223 8.446 16.904 10.492 22.423l-68.03 62.508-.032-14.009c-.941-.245-1.888 13.536-2.84 13.343a51.615 51.615 0 00-15.416-.766 50.78 50.78 0 00-14.346 3.627c-4.528 1.884-8.766 5.575-12.565 8.66z")
                  path(fill="#fff" d="M320.633 77.832a51.07 51.07 0 01-6.652-25.277c0-28.337 23.007-51.343 51.344-51.343s51.344 23.006 51.344 51.343c0 28.338-23.007 51.344-51.344 51.344-.68 0-1.357-.013-2.032-.04l-71.978 107.819a50.743 50.743 0 015.839 23.702c0 28.148-22.853 51-51 51-28.148 0-51-22.852-51-51 0-5.697.936-11.177 2.663-16.295l-22.634-27.72a51.236 51.236 0 01-8.566.718c-3.282 0-6.492-.311-9.603-.905l-55.781 55.627.075.256a51.623 51.623 0 011.898 17.855 50.856 50.856 0 01-3.301 14.805c-2.892 7.463-7.564 14.2-13.517 19.547a51.119 51.119 0 01-17.707 10.369 51.116 51.116 0 01-17.337 2.672 50.979 50.979 0 01-17.995-3.645 51.227 51.227 0 01-27.886-27.216 50.9 50.9 0 01-4.081-17.833 51.17 51.17 0 012.244-17.455 51.028 51.028 0 018.97-16.8c5.337-6.625 12.322-11.882 20.178-15.151a50.78 50.78 0 0114.346-3.627 51.69 51.69 0 0118.256 1.423l.032.009 53.372-53.224a50.836 50.836 0 01-3.163-17.707c0-28.148 22.852-51 51-51s51 22.852 51 51a50.808 50.808 0 01-3.614 18.878l20.948 25.656a51.068 51.068 0 0111.203-1.237c1.1 0 2.193.035 3.279.104l71.2-106.652z")
                  path(d="M340.381 77.066c-6.046-6.292-9.764-14.836-9.764-24.242 0-19.317 15.683-35 35-35s35 15.683 35 35-15.683 35-35 35c-3.441 0-6.766-.497-9.906-1.424l-83.71 125.392c5.684 6.223 9.153 14.504 9.153 23.588 0 19.317-15.683 35-35 35-19.318 0-35-15.683-35-35a34.816 34.816 0 015.389-18.658l-35.66-43.674a34.838 34.838 0 01-14.266 3.035c-5.03 0-9.814-1.063-14.139-2.978l-70.235 70.041a34.816 34.816 0 015.088 18.173c0 19.317-15.683 35-35 35s-35-15.683-35-35 15.683-35 35-35a34.811 34.811 0 0116.984 4.395l69.1-68.91a34.825 34.825 0 01-6.798-20.721c0-19.317 15.683-35 35-35s35 15.683 35 35a34.826 34.826 0 01-6.782 20.699l34.867 42.704a34.813 34.813 0 0116.452-4.106c3.759 0 7.38.594 10.775 1.693l83.452-125.007zM52.331 243.819c9.659 0 17.5 7.841 17.5 17.5 0 9.658-7.841 17.5-17.5 17.5-9.658 0-17.5-7.842-17.5-17.5 0-9.659 7.842-17.5 17.5-17.5zm193.823-25.939c9.658 0 17.5 7.842 17.5 17.5 0 9.659-7.842 17.5-17.5 17.5-9.659 0-17.5-7.841-17.5-17.5 0-9.658 7.841-17.5 17.5-17.5zm-79.537-94.297c9.658 0 17.5 7.842 17.5 17.5 0 9.659-7.842 17.5-17.5 17.5-9.659 0-17.5-7.841-17.5-17.5 0-9.658 7.841-17.5 17.5-17.5zm199-88.259c9.658 0 17.5 7.842 17.5 17.5 0 9.659-7.842 17.5-17.5 17.5-9.659 0-17.5-7.841-17.5-17.5 0-9.658 7.841-17.5 17.5-17.5z")
                svg.h-12.text-cool-gray-400.pl-1(viewBox="0 -12 490 130" )
                  path(d="M11.42,98.76a1.18,1.18,0,0,1-1.17-1.17v-76a1.18,1.18,0,0,1,1.17-1.17h50a1.18,1.18,0,0,1,1.18,1.17V33.54a1.18,1.18,0,0,1-1.18,1.18H25.62V52.34H55a1.17,1.17,0,0,1,1.17,1.18V65.35A1.17,1.17,0,0,1,55,66.52H25.62V97.59a1.17,1.17,0,0,1-1.17,1.17Z" transform="translate(-10.25 -11.69)" fill="currentColor")
                  path(d="M87.41,98.76C76.39,98.76,71,93.4,71,82.39V21.6a1.17,1.17,0,0,1,1.17-1.17h13a1.18,1.18,0,0,1,1.17,1.17v60c0,2.29.58,2.84,3,2.84h21.49c2.29,0,2.85-.55,2.85-2.84v-60a1.17,1.17,0,0,1,1.17-1.17h13a1.18,1.18,0,0,1,1.17,1.17V82.39c0,11-5.36,16.37-16.37,16.37Z" transform="translate(-10.25 -11.69)" fill="currentColor")
                  path(d="M144.29,98.76a1.18,1.18,0,0,1-1.18-1.17v-76a1.18,1.18,0,0,1,1.18-1.17h13a1.17,1.17,0,0,1,1.17,1.17V84.47h33.13a1.17,1.17,0,0,1,1.17,1.18V97.59a1.17,1.17,0,0,1-1.17,1.17Z" transform="translate(-10.25 -11.69)" fill="currentColor")
                  path(d="M215,98.76c-10.86,0-16.37-5.51-16.37-16.37V36.8c0-11,5.36-16.37,16.37-16.37h24.31c11,0,16.37,5.36,16.37,16.37v11a1.17,1.17,0,0,1-1.17,1.18h-13a1.18,1.18,0,0,1-1.18-1.18V37.56c0-2.29-.55-2.84-2.84-2.84H216.9c-2.37,0-3,.55-3,2.84V81.63c0,2.29.58,2.84,3,2.84h20.52c2.29,0,2.84-.55,2.84-2.84V71.43a1.18,1.18,0,0,1,1.18-1.18h13a1.17,1.17,0,0,1,1.17,1.18v11c0,10.86-5.5,16.37-16.37,16.37Z" transform="translate(-10.25 -11.69)" fill="currentColor")
                  path(d="M311,98.76a1.18,1.18,0,0,1-1.05-.65L296.28,70.43H282.77V97.59a1.17,1.17,0,0,1-1.17,1.17h-13a1.18,1.18,0,0,1-1.17-1.17v-76a1.18,1.18,0,0,1,1.17-1.17h39c11,0,16.37,5.36,16.37,16.37V53.73c0,9.18-3.68,14.4-11.25,15.89l13.52,27.45a1.19,1.19,0,0,1-.06,1.14,1.17,1.17,0,0,1-1,.55ZM305.7,56.47c2.28,0,2.84-.58,2.84-2.95V37.45c0-2.28-.56-2.84-2.84-2.84H282.77V56.47Z" transform="translate(-10.25 -11.69)" fill="currentColor")
                  path(d="M352.48,98.76c-11,0-16.37-5.36-16.37-16.37V21.6a1.18,1.18,0,0,1,1.17-1.17h13a1.17,1.17,0,0,1,1.17,1.17v60c0,2.29.58,2.84,2.95,2.84h21.5c2.28,0,2.84-.55,2.84-2.84v-60a1.17,1.17,0,0,1,1.17-1.17h13a1.18,1.18,0,0,1,1.17,1.17V82.39c0,11-5.36,16.37-16.37,16.37Z" transform="translate(-10.25 -11.69)" fill="currentColor")
                  path(d="M469.71,98.76a1.17,1.17,0,0,1-1.17-1.17V49.45L451.79,87.64a1.19,1.19,0,0,1-1.08.7h-10a1.19,1.19,0,0,1-1.08-.7L422.9,49.45V97.59a1.17,1.17,0,0,1-1.17,1.17H409.36a1.17,1.17,0,0,1-1.17-1.17v-76a1.17,1.17,0,0,1,1.17-1.17H424a1.18,1.18,0,0,1,1.07.69l20.86,45.95L466.8,21.12a1.16,1.16,0,0,1,1.06-.69h14.66a1.17,1.17,0,0,1,1.17,1.17v76a1.17,1.17,0,0,1-1.17,1.17Z" transform="translate(-10.25 -11.69)" fill="currentColor")
  
          .hidden.-ml-6(class="md:block")
            .ml-6.flex.items-baseline
              template(v-for="section in sections")
                nuxt-link.ml-4.px-3.py-2.rounded-md.text-sm.font-medium(:to="section.link" :key="section.id" class="hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700" :class="[ selectedMenu===section.link ? 'bg-gray-900 text-white' : 'text-gray-300' ]") {{section.label}}

        .hidden(class="md:block")
          .ml-4.relative.flex.items-center(class="md:ml-6")
            div.fixed.inset-0.z-10.opacity-0.bg-black(v-if="open" @click="open=false")

            .ml-3.relative
              button.p-1.border-2.border-transparent.text-gray-400.rounded-full(class="hover:text-white focus:outline-none focus:text-white focus:bg-gray-700" @click="onOpen('notifications')" title="Manage Notifications")
                div.relative
                  svg.h-6.w-6(:stroke="[ hasNotifications ? 'currentColor' : null ]" :fill="[ hasNotifications ? 'none' : 'currentColor' ]" viewBox="0 0 24 24")
                    path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9")
                  span.absolute.top-0.right-0.block.rounded-full.text-gray-800.shadow-solid.bg-red-600(class="h-1.5 w-1.5" v-if="hasNotifications")
                  
              transition( name="fade")
                .origin-top-right.z-20.absolute.right-0.mt-2.w-96.rounded-md.shadow-lg(v-show="isOpen('notifications')")
                  .py-1.rounded-md.bg-white.shadow-xs
                    .overflow-y-auto(style="max-height: calc(100vh * .60)")
                      template(v-if="notifications.length === 0")
                        div.h-32.flex.justify-center.items-center
                          p.text-gray-500 No Notifications

                      template(v-else)
                        template(v-for="(item, $index) in notifications")
                          div.py-1.px-2.mb-1.text-sm(:class="{'border-t border-gray-300': $index > 0}")
                            header.flex.justify-between
                              h3.font-semibold.pr-1 {{item.title}}
                              time.text-xs.whitespace-no-wrap.text-gray-500 {{ item.date }}
                            main.my-1
                              p.text-sm.text-gray-600 {{ item.description }}
                            footer
                              a.text-sm.text-indigo-600 Learn More
                    div.flex.justify-between.px-2.py-1.border-t.border-gray-300.text-sm.text-gray-600.bg-gray-50
                      a(href="#" class="hover:text-indigo-600" @click="onClear"): span(v-show="notifications.length > 0") Clear All
                      a(href="#" class="hover:text-indigo-600") Manage

            .ml-3.relative
              button.p-1.border-2.border-transparent.text-gray-400.rounded-full(class="hover:text-white focus:outline-none focus:text-white focus:bg-gray-700" @click="onOpen('team')" title="Manage teams")
                svg.h-6.w-6(fill="none" viewBox="0 0 24 24" stroke="currentColor"): path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z")
              transition( name="fade")
                .origin-top-right.z-20.absolute.right-0.mt-2.w-48.rounded-md.shadow-lg(v-show="isOpen('team')")
                  .py-1.rounded-md.bg-white.shadow-xs
                    a.block.px-4.py-2.text-sm.text-gray-700(href="#" @click.prevent="navigateToTeamInfo" class="hover:bg-gray-100") Team Info
                    a.block.px-4.py-2.text-sm.text-gray-700(href="#" @click.prevent="navigate('/teams/')" class="hover:bg-gray-100") Change Team
            .ml-3.relative
              button.p-1.border-2.border-transparent.text-gray-400.rounded-full(class="hover:text-white focus:outline-none focus:text-white focus:bg-gray-700" @click="onOpen('profile')" title="Show profile options")
                //-div: button.z-20.max-w-xs.flex.items-center.text-sm.rounded-full.text-white(@click="onOpen('profile')" class="focus:outline-none focus:shadow-solid")
                  img.h-8.w-8.rounded-full(src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Manage Profile")
                svg.w-6.h-6(viewBox="0 0 20 20" fill="currentColor")
                  path(fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd")
              transition( name="fade")
                .origin-top-right.z-20.absolute.right-0.mt-2.w-48.rounded-md.shadow-lg(v-show="isOpen('profile')")
                  .py-1.rounded-md.bg-white.shadow-xs
                    a.block.px-4.py-2.text-sm.text-gray-700(href="#" @click.prevent="navigate('/profile')" class="hover:bg-gray-100") Your Profile
                    //- a.block.px-4.py-2.text-sm.text-gray-700(href="#" class="hover:bg-gray-100") Settings
                    a.block.px-4.py-2.text-sm.text-gray-700(href="#" @click.prevent="signOut" class="hover:bg-gray-100") Sign out


</template>

<script>
const notifications = [
  {
    type: 'announcement',
    title: 'New Chart - Number of builds per day',
    date: 'a day ago',
    description:
      'Check out how many builds your team has ran per day in this new chart, available under Builds > Usage & insights.'
  },
  {
    type: 'announcement',
    title: 'Take the JAMstack community survey!',
    date: '15 days ago',
    description:
      'Help your fellow developers and make your voice heard! We’ll share results online and at JAMstack Conf virtual. Survey closes April 19th.'
  },
  {
    type: 'announcement',
    title: 'New! Enhancements to Netlify Analytics!',
    date: '22 days ago',
    description:
      'Get filtered data of how your site is used over a day, week, or month (30 days) and check a map of which countries visit your site most.'
  },
  {
    type: 'announcement',
    title: 'Manage your team’s build capacity',
    date: 'a month ago',
    description:
      'You can adjust your concurrent build allowance to fit your team’s needs, available now under the Builds tab.'
  },
  {
    type: 'announcement',
    title: 'New chart - Build minutes used per day',
    date: '3 months ago',
    description:
      'Check out how many build minutes your team has used per day in this new chart, available under Builds > Insights.'
  },
  {
    type: 'announcement',
    title: 'New Billing tab',
    date: '4 months ago',
    description:
      'Find more information about your metered feature usage and service charges in our new Billing interface.'
  },
  {
    type: 'announcement',
    title: 'Node.js 12 for Netlify Functions',
    date: '4 months ago',
    description:
      'Starting December 4th, JavaScript serverless functions on all new sites will use Node.js 12 as the default runtime.'
  },
  {
    type: 'announcement',
    title: 'New! Re-designed, re-organized docs',
    date: '6 months ago',
    description:
      'Browse for the topics you need more easily, and find related information more quickly in our new docs.'
  },
  {
    type: 'announcement',
    title: 'New! Improved monorepo support',
    date: '6 months ago',
    description: 'Easily deploy multiple Netlify sites from a single Git repository.'
  },
  {
    type: 'announcement',
    title: 'Check out the new Builds tab in your dashboard',
    date: '6 months ago',
    description:
      'View all your team’s builds together, including which builds succeed, which builds fail, and how long it takes for builds to deploy.'
  },
  {
    type: 'announcement',
    title: 'Get product updates in Netlify Community',
    date: '10 months ago',
    description: 'Find out about the latest improvements to the Netlify platform and services.'
  }
]

export default {
  name: 'GlobalNavigation',
  components: {},
  data() {
    return {
      open: false,
      currentDropdown: null,
      sections: [],
      hasNotifications: true,
      notifications
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
  methods: {
    onClear() {
      this.hasNotifications = false
      this.open = false

      this.notifications.length = 0
    },
    onOpen(key) {
      this.currentDropdown = key
      this.open = true
    },
    isOpen(key) {
      return this.currentDropdown === key && this.open
    },
    navigate(path) {
      this.open = false
      this.currentDropdown = null
      this.$router.push(path)
    },
    async signOut() {
      try {
        await this.$axios.post('/user/logout')

        this.$store.commit('CLEAR_STATE')
        this.$router.push('/logout')
      } catch (err) {
        alert(err)
      }
    },
    navigateToTeamInfo() {
      const currentTeam = this.$store.state.selectedTeam
      if (currentTeam) {
        this.navigate(`/teams/${currentTeam}`)
      } else {
        this.navigate(`/teams/`)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
