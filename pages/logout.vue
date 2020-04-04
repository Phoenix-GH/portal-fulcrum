<template lang="pug">
div
  h3 Logging out
</template>

<script>
export default {
  name: 'LogoutPage',
  components: {},
  data() {
    return {}
  },
  async mounted() {
    const { data } = await this.$axios.post('/user/logout')
    if (data.error_state) {
      console.error('Unable to logout')
      return
    }
    await this.$store.dispatch('GENERATE_SESSION')
    // this.$router.push('/login')
  }
}
</script>

<style lang="scss" scoped></style>
