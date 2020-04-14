<template lang="pug">
div
  .min-h-screen
    GlobalNavigation
    Navigation
    main: .max-w-7xl.mx-auto.py-6(class="sm:px-6 lg:px-8"): .px-4.py-4(class="sm:px-0")
      nuxt
  pre.text-xs.p-3.bg-gray-800.text-gray-50.whitespace-pre-wrap {{  [ $state , $store.state ] }}
  
  portal-target(name="modal")
</template>
<script>
import GlobalNavigation from '@/components/parts/GlobalNavigation.vue'
import Navigation from '@/components/parts/Navigation.vue'
import ErrorHandlerMixin from '@/utils/mixins/ErrorHandler'
export default {
  name: 'DefaultLayout',
  components: { GlobalNavigation, Navigation },
  mixins: [ErrorHandlerMixin]

  //   methods: {
  //     alert(mode, title, message, showButton) {
  //       if (mode instanceof Error)
  // {}
  //       else  {
  //       console.log('ALERT', mode, title, message, showButton)
  //       this.alertMode = mode || 'success'
  //       this.alertTitle = title
  //       this.alertText = message
  //       this.alertVisible = true
  //       this.showAlertButton = showButton !== undefined ? showButton : mode === 'error'
  //       }
  //     },
  //     closeAlert(){
  //       this.alertVisible = false
  //     },
  //     async post(url, payload) {
  //       try {
  //         const { data } = await this.$axios.post(url, payload)
  //         return data.response || data
  //       } catch (err) {
  //         this.handleErrors(err)
  //         this.alert('error', 'Error', null, false)
  //       }
  //     }
  //   }
}
</script>
<style>
html,
body {
  height: 100%;
}
</style>
