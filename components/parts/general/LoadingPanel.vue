<template lang="pug">
        div.flex.flex-col.items-center
          img(src="~/assets/images/fulcrum-loading.gif")
          template(v-if="text")
            p.text-gray-400.tracking-wider.text-sm.uppercase {{ text }}
</template>

<script>
export default {
  name: 'LoadingPanel',
  props: {
    text: { type: String, default: null }
  }
}
</script>
