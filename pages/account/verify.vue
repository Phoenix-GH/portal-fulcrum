<template lang="pug">
div
  .bg-white.py-8.px-4.shadow(class='sm:rounded-lg sm:px-10')
    template(v-if="state === 'loading'")
      LoadingPanel(text="verifying")
    template(v-else-if="state === 'error'")
      ErrorPanel(:errors="errors" text="Error verifying email address.")
    template(v-else)
      SuccessPanel(title="Email account verified" @click="$router.push('/')")
  p.mt-4.text-sm.text-center 
    | Don't have an account? 
    nuxt-link.font-medium.text-indigo-600.transition.ease-in-out.duration-150(to='./register' class='hover:text-indigo-500 focus:outline-none focus:underline') register      
    | -- or go 
    nuxt-link.font-medium.text-indigo-600.transition.ease-in-out.duration-150(to="/login") back 
    | .
</template>

<script>
import ErrorHandlerMixin from '../../utils/mixins/ErrorHandler'
import ErrorPanel from '@/components/parts/general/ErrorPanel'
import SuccessPanel from '@/components/parts/general/SuccessPanel'
import LoadingPanel from '@/components/parts/general/LoadingPanel'

export default {
  name: 'VerifyPage',
  layout: 'account',
  components: { ErrorPanel, SuccessPanel, LoadingPanel },
  mixins: [ErrorHandlerMixin],
  meta: { isPublic: true },
  data() {
    return {
      password: null,
      code: null,
      state: 'loading'
    }
  },
  async mounted() {
    if (this.state !== 'loading') return

    this.code = this.$route.query.code

    if (this.code) this.$router.replace('/account/verify')

    await this.verifyToken()
  },
  methods: {
    async verifyToken() {
      await this.post('/email/verification', {
        verification_token: this.code
      })
      this.state = this.hasErrors ? 'error' : 'complete'
    }
  }
}
</script>

<style lang="scss" scoped></style>
