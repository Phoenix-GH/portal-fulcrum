<template lang="pug">
header.bg-white.shadow-sm: .flex.max-w-7xl.mx-auto.py-4.px-4(class="sm:px-6 lg:px-8")
  .fixed.inset-0.transition-opacity.bg-blue-200.opacity-25(@click="open=false" v-if="open"): .absolute.inset-0
  .relative
    a.flex.items-center.px-2.h-6.cursor-pointer(@click.prevent="toggle" :class="{ 'text-indigo-600': open}" class="hover:text-gray-500")
      svg.w-5.h-5(viewBox="0 0 20 20" fill="currentColor" strokewidth="1")
        path(fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd")
  
    .z-20.absolute.mt-2.w-48.rounded-md.shadow-lg(v-show="open" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95")
      .py-1.rounded-md.bg-white.shadow-xs
        template(v-for="link in links")
          a.block.px-4.py-2.text-sm.text-gray-700(href="#" class="hover:bg-gray-100") {{ link.label }}
  h2.text-lg.leading-6.font-semibold.text-gray-900 Dashboard
</template>

<script>
export default {
  data() {
    return {
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
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>
