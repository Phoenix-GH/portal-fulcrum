<template lang="pug">
div
  .min-h-screen
    GlobalNavigation
    Navigation
    main: .max-w-7xl.mx-auto.py-6(class="sm:px-6 lg:px-8"): .px-4.py-4(class="sm:px-0")
      nuxt
  pre.text-xs.p-3.bg-gray-800.text-gray-50.whitespace-pre-wrap {{  $store.state }}
  
  AlertModal(ref="alertModal")
  DeleteModal(ref="deleteModal")
  portal-target(name="modal")
</template>
<script>
import DeleteModal from '@/components/controls/DeleteModal.vue'
import AlertModal from '@/components/controls/AlertModal.vue'
import GlobalNavigation from '@/components/parts/GlobalNavigation.vue'
import Navigation from '@/components/parts/Navigation.vue'
import ErrorHandlerMixin from '@/utils/mixins/ErrorHandler'
import AlertsMixin from '@/utils/mixins/Alerts'
export default {
  name: 'DefaultLayout',
  components: { GlobalNavigation, Navigation, AlertModal, DeleteModal },
  mixins: [ErrorHandlerMixin, AlertsMixin],
  provide() {
    return {
      alert: {
        success: this.success,
        error: this.error,
        confirm: this.confirm
      },
      post(url, payload, header) {}
    }
  }
}
</script>
<style>
html,
body {
  height: 100%;
}
</style>
