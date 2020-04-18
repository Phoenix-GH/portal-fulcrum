<template lang="pug">
header.bg-white.shadow-sm: .flex.max-w-7xl.mx-auto.py-4.px-4(class="sm:px-6 lg:px-8")
  .fixed.inset-0.transition-opacity.bg-blue-200.opacity-25(@click="open=false" v-if="open"): .absolute.inset-0
  .relative
    a.flex.items-center.pr-4.h-6.cursor-pointer(@click.prevent="toggle" :class="{ 'text-indigo-600': open}" class="hover:text-gray-500")
      svg.w-5.h-5(viewBox="0 0 20 20" fill="currentColor" strokewidth="1")
        path(fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd")

    transition(
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95" )

      .z-20.absolute.mt-2.w-48.rounded-md.shadow-lg(v-show="open")
        .py-1.rounded-md.bg-white.shadow-xs
          template(v-for="link in links")
            a.block.px-4.py-2.text-sm.text-gray-700(href="#" class="hover:bg-gray-100") {{ link.label }}

  portal-target.inline-flex.items-center(name="navigation-title")
    h2.text-lg.leading-6.font-semibold.text-gray-900 {{ this.title }}
  
</template>

<script>
// TODO: move to a utility class...
const toTitleCase = (str) =>
  str &&
  str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })

export default {
  data() {
    return {
      title: '',
      open: false,
      links: [
        { label: 'Dashboard', to: '' },
        { label: 'Browse users', to: '' },
        { label: 'Customer journey', to: '' },
        { label: 'User segments', to: '' },
        { label: 'Content management', to: '' },
        { label: 'Persona management', to: '' },
        { label: 'Url analyzer', to: '' },
        { label: 'Plugins', to: '' },
        { label: 'Email notifications', to: '' },
        { label: 'Instance code', to: '' },
        { label: 'A/B tests', to: '' }
      ]
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        // console.log({ title: this.$route.title, name: this.$route.name })
        // TODO: once we get further along we can modify this to build a bread crumb trail

        this.title = this.$store.state.meta.reduce(
          (pageTitle, meta) => meta.pageTitle || pageTitle,
          toTitleCase(this.$route.name)
        )
      }
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>
