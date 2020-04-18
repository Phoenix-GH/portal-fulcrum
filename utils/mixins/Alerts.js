import DeleteModal from '@/components/controls/DeleteModal.vue'
import AlertModal from '@/components/controls/AlertModal.vue'
export default {
  components: { AlertModal, DeleteModal },
  methods: {
    success(options) {
      this.alertModal.success(options)
    },
    error(options) {
      if (options instanceof Error) this.alertModal.error({ errors: options })
      else this.alertModal.error(options)
    },
    confirm(options) {
      return this.deleteModal.confirm(options)
    }
  },
  mounted() {
    console.log(this.$refs)
    this.$nextTick(() => {
      this.deleteModal = this.$refs.deleteModal
      this.alertModal = this.$refs.alertModal
    })
  }
}
