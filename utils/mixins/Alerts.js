import DeleteModal from '@/components/controls/DeleteModal.vue'
import AlertModal from '@/components/controls/AlertModal.vue'
export default {
  components: { AlertModal, DeleteModal },
  methods: {
    success(options) {
      return this.alertModal.success(options)
    },
    error(options) {
      return options instanceof Error ? this.alertModal.error({ errors: options }) : this.alertModal.error(options)
    },
    confirm(options) {
      return this.deleteModal.confirm(options)
    }
  },
  created() {
    this.$nextTick(() => {
      this.deleteModal = this.$refs.deleteModal
      this.alertModal = this.$refs.alertModal
    })
  }
}
