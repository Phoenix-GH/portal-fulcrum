<template lang="pug">
div 
  .bg-white.py-8.px-4.shadow(class='sm:rounded-lg sm:px-10')
    template(v-if="state === 'loading'")
      LoadingPanel(text="verifying")
    template(v-else-if="state === 'error'")
      ErrorPanel(:errors="errors" text="Error verifying reset code.")
    template(v-else-if="state === 'complete'")
      SuccessPanel(title="Password has been reset." @click="$router.push('/')")
    template(v-else)
      template(v-if="hasErrors")
        template(v-for="error in errors")
          .bg-red-50.border-l-4.border-red-600.p-4.my-4
            .flex
              .flex-shrink-0.items-center.flex
                svg.h-5.w-5.text-red-600(fill="currentColor" viewBox="0 0 20 20"): path(fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd")
              .ml-3.text-red-700 {{ error.text }}

      div
        .flex.items-center.justify-between
          label.block.text-sm.font-medium.leading-5.text-gray-700(for='password') Password
        .mt-1.rounded-md.shadow-sm
          PasswordField(v-model="password")
        input.block.w-full(:value="code")
      .mt-6
        span.block.w-full.rounded-md.shadow-sm
          button.w-full.flex.justify-center.py-2.px-4.border.border-transparent.text-sm.font-medium.rounded-md.text-white.bg-cool-gray-600.transition.duration-150.ease-in-out(
            class='hover:bg-cool-gray-500 focus:outline-none focus:border-cool-gray-700 focus:shadow-outline-cool-gray active:bg-cool-gray-700' 
            type='submit' 
            @click="onUpdatePassword"
          ) Change Password

  p.mt-4.text-sm.text-center 
    | Don't have an account? 
    nuxt-link.font-medium.text-indigo-600.transition.ease-in-out.duration-150(to='./register' class='hover:text-indigo-500 focus:outline-none focus:underline') register      
    | -- or go 
    nuxt-link.font-medium.text-indigo-600.transition.ease-in-out.duration-150(to="../login") back 
    | .
</template>

<script>
import PasswordField from '../../components/controls/PasswordField'
import ErrorHandlerMixin from '../../utils/mixins/ErrorHandler'
import ErrorPanel from '@/components/parts/general/ErrorPanel'
import SuccessPanel from '@/components/parts/general/SuccessPanel'
import LoadingPanel from '@/components/parts/general/LoadingPanel'
import { delay } from '@/utils'
export default {
  name: 'ResetPage',
  layout: 'account',
  components: { ErrorPanel, SuccessPanel, LoadingPanel, PasswordField },
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

    await delay(1000)

    this.state = this.code ? 'fill' : 'error'

    if (this.code) this.$router.replace('/account/reset')
  },
  methods: {
    async onUpdatePassword() {
      await this.post('/password/reset', {
        password_reset_token: this.code,
        password: this.password,
        auth_id: null
      })

      this.state = this.hasErrors ? 'fill' : 'complete'

      if (this.state === 'complete') {
        await delay(1500)
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
