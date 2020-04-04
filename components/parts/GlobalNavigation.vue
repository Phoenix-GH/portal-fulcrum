<template lang="pug">
  nav.bg-gray-800( @keydown.window.escape="open = false")
    .max-w-7xl.mx-auto.px-4(class="sm:px-6 lg:px-8")
      .flex.items-center.justify-between.h-16
        .flex.items-center
          .flex-shrink-0
            nuxt-link(to="/")
              svg.h-10.text-cool-gray-400(fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 384 325")
                path(fill="currentColor" d="M323 59.2A34.9 34.9 0 01348.4 0a35 35 0 11-10 68.6L254.8 194a35 35 0 11-55.5 5l-35.6-43.8a34.8 34.8 0 01-28.5 0L65 225.4A35 35 0 1152 213l69.2-69a35 35 0 1156.4 0l34.9 42.8a34.8 34.8 0 0127.2-2.5l83.5-125zM35 226a17.5 17.5 0 110 35 17.5 17.5 0 010-35zm193.8-26a17.5 17.5 0 110 35 17.5 17.5 0 010-35zm-79.5-94.2a17.5 17.5 0 110 35 17.5 17.5 0 010-35zm199-88.3a17.5 17.5 0 110 35 17.5 17.5 0 010-35z")
                path(fill="#81bb47" d="M294.3 163.4v153.2c0 4.6-3.7 8.4-8.3 8.4H11.2a8.3 8.3 0 01-8.3-8.4v-33.5a51.1 51.1 0 0081-53.9v-.2l55.8-55.6a51.2 51.2 0 0018.2.1l22.6 27.8a50.9 50.9 0 1093.5-7.4l20.3-30.5z")
                path(fill="#5f8ca9" d="M2.9 203.9v-162c0-4.7 3.7-8.4 8.3-8.4H286c4.6 0 8.3 3.7 8.3 8.3v31.6l-62.2 93.3a51.7 51.7 0 00-14.5 1l-21-25.6a51 51 0 10-95.2-1.2l-53.3 53.3a51.7 51.7 0 00-45.2 9.7z")
              //- svg.h-10(fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 418 344")
                path(fill="#81bb47" d="M311.665 138.686v195.383c0 4.812-3.738 8.719-8.341 8.719H28.55c-4.604 0-8.341-3.907-8.341-8.719V299.02c3.962 3.363 63.434-71.226 63.434-71.226l64.087-64.502c3.111.621 18.048 5.832 21.33 5.832 2.919 0 13.11-3.189 15.895-3.683l41.69 49.5c-1.727 5.349-6.248 16.944-6.084 22.897.489 17.698 9.85 27.133 27.547 24.485 14.456-2.163 23.149-3.856 24.126-28.394.356-8.935-7.485-13.953-11.213-21.357l50.644-73.886z")
                path(fill="#5f8ca9" d="M20.209 236.869V59.673a8.345 8.345 0 018.341-8.341h274.774c4.603 0 8.341 3.738 8.341 8.341v45.592l-62.232 93.219a51.7 51.7 0 00-3.279-.104c-3.848 0-7.597.427-11.203 1.237l-31.697-38.36c2.331-5.839 6.783-21.852 6.056-28.48-2.443-22.285-15.034-34.876-43.182-34.876-28.147 0-43.182 15.034-43.182 43.182 0 6.223 8.446 16.904 10.492 22.423l-68.03 62.508-.032-14.009c-.941-.245-1.888 13.536-2.84 13.343a51.615 51.615 0 00-15.416-.766 50.78 50.78 0 00-14.346 3.627c-4.528 1.884-8.766 5.575-12.565 8.66z")
                path(fill="#fff" d="M320.633 77.832a51.07 51.07 0 01-6.652-25.277c0-28.337 23.007-51.343 51.344-51.343s51.344 23.006 51.344 51.343c0 28.338-23.007 51.344-51.344 51.344-.68 0-1.357-.013-2.032-.04l-71.978 107.819a50.743 50.743 0 015.839 23.702c0 28.148-22.853 51-51 51-28.148 0-51-22.852-51-51 0-5.697.936-11.177 2.663-16.295l-22.634-27.72a51.236 51.236 0 01-8.566.718c-3.282 0-6.492-.311-9.603-.905l-55.781 55.627.075.256a51.623 51.623 0 011.898 17.855 50.856 50.856 0 01-3.301 14.805c-2.892 7.463-7.564 14.2-13.517 19.547a51.119 51.119 0 01-17.707 10.369 51.116 51.116 0 01-17.337 2.672 50.979 50.979 0 01-17.995-3.645 51.227 51.227 0 01-27.886-27.216 50.9 50.9 0 01-4.081-17.833 51.17 51.17 0 012.244-17.455 51.028 51.028 0 018.97-16.8c5.337-6.625 12.322-11.882 20.178-15.151a50.78 50.78 0 0114.346-3.627 51.69 51.69 0 0118.256 1.423l.032.009 53.372-53.224a50.836 50.836 0 01-3.163-17.707c0-28.148 22.852-51 51-51s51 22.852 51 51a50.808 50.808 0 01-3.614 18.878l20.948 25.656a51.068 51.068 0 0111.203-1.237c1.1 0 2.193.035 3.279.104l71.2-106.652z")
                path(d="M340.381 77.066c-6.046-6.292-9.764-14.836-9.764-24.242 0-19.317 15.683-35 35-35s35 15.683 35 35-15.683 35-35 35c-3.441 0-6.766-.497-9.906-1.424l-83.71 125.392c5.684 6.223 9.153 14.504 9.153 23.588 0 19.317-15.683 35-35 35-19.318 0-35-15.683-35-35a34.816 34.816 0 015.389-18.658l-35.66-43.674a34.838 34.838 0 01-14.266 3.035c-5.03 0-9.814-1.063-14.139-2.978l-70.235 70.041a34.816 34.816 0 015.088 18.173c0 19.317-15.683 35-35 35s-35-15.683-35-35 15.683-35 35-35a34.811 34.811 0 0116.984 4.395l69.1-68.91a34.825 34.825 0 01-6.798-20.721c0-19.317 15.683-35 35-35s35 15.683 35 35a34.826 34.826 0 01-6.782 20.699l34.867 42.704a34.813 34.813 0 0116.452-4.106c3.759 0 7.38.594 10.775 1.693l83.452-125.007zM52.331 243.819c9.659 0 17.5 7.841 17.5 17.5 0 9.658-7.841 17.5-17.5 17.5-9.658 0-17.5-7.842-17.5-17.5 0-9.659 7.842-17.5 17.5-17.5zm193.823-25.939c9.658 0 17.5 7.842 17.5 17.5 0 9.659-7.842 17.5-17.5 17.5-9.659 0-17.5-7.841-17.5-17.5 0-9.658 7.841-17.5 17.5-17.5zm-79.537-94.297c9.658 0 17.5 7.842 17.5 17.5 0 9.659-7.842 17.5-17.5 17.5-9.659 0-17.5-7.841-17.5-17.5 0-9.658 7.841-17.5 17.5-17.5zm199-88.259c9.658 0 17.5 7.842 17.5 17.5 0 9.659-7.842 17.5-17.5 17.5-9.659 0-17.5-7.841-17.5-17.5 0-9.658 7.841-17.5 17.5-17.5z")
          .hidden.-ml-6(class="md:block")
            .ml-6.flex.items-baseline
              template(v-for="section in sections")
                nuxt-link.ml-4.px-3.py-2.rounded-md.text-sm.font-medium(:to="section.link" :key="section.id" class="hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700" :class="[ selectedMenu===section.link ? 'bg-gray-900 text-white' : 'text-gray-300' ]") {{section.label}}

        .hidden(class="md:block")
          .ml-4.relative.flex.items-center(class="md:ml-6")
            div.fixed.inset-0.z-10.opacity-0.bg-black(v-if="open" @click="open=false; openTeam=false")
            button.p-1.border-2.border-transparent.text-gray-400.rounded-full(class="hover:text-white focus:outline-none focus:text-white focus:bg-gray-700")
              svg.h-6.w-6(stroke="currentColor" fill="none" viewBox="0 0 24 24"): path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9")
            .ml-3.relative
              button.p-1.border-2.border-transparent.text-gray-400.rounded-full(class="hover:text-white focus:outline-none focus:text-white focus:bg-gray-700" @click="openTeam = !openTeam")
                svg.h-6.w-6(fill="none" viewBox="0 0 24 24" stroke="currentColor"): path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z")
              .origin-top-right.z-20.absolute.right-0.mt-2.w-48.rounded-md.shadow-lg(v-show="openTeam" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95")
                .py-1.rounded-md.bg-white.shadow-xs
                  a.block.px-4.py-2.text-sm.text-gray-700(href="#" @click.prevent="navigate('/team')" class="hover:bg-gray-100") Team Info
                  a.block.px-4.py-2.text-sm.text-gray-700(href="#" @click.prevent="navigate('/team-list')" class="hover:bg-gray-100") Change Team
            .ml-3.relative
              div: button.z-20.max-w-xs.flex.items-center.text-sm.rounded-full.text-white(@click="open = !open" class="focus:outline-none focus:shadow-solid"): img.h-8.w-8.rounded-full(src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="")
              .origin-top-right.z-20.absolute.right-0.mt-2.w-48.rounded-md.shadow-lg(v-show="open" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95")
                .py-1.rounded-md.bg-white.shadow-xs
                  a.block.px-4.py-2.text-sm.text-gray-700(href="#" @click.prevent="navigate('/profile')" class="hover:bg-gray-100") Your Profile
                  a.block.px-4.py-2.text-sm.text-gray-700(href="#" class="hover:bg-gray-100") Settings
                  a.block.px-4.py-2.text-sm.text-gray-700(href="#" @click.prevent="signOut" class="hover:bg-gray-100") Sign out


</template>

<script>
export default {
  name: 'GlobalNavigation',
  components: {},
  data() {
    return {
      open: false,
      openTeam: false,
      sections: []
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
    navigate(path) {
      this.open = false
      this.openTeam = false
      this.$router.push(path)
    },
    async signOut() {
      try {
        await this.$axios.post('/user/logout', {
          auth_id: this.$state.sessionKey.auth_id
        })
        this.$store.commit('CLEAR_STATE')

        this.$router.push('/logout')
      } catch (err) {
        alert(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
