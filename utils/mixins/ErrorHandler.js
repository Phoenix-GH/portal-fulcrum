// import AlertModal from '@/components/controls/AlertModal.vue'

export default {
  // components: { AlertModal },
  data() {
    return {
      alertVisible: false,
      alertTitle: null,
      alertText: null,
      showAlertButton: true,
      sharedState: {
        post: this.post,
        // alert: this.alert,
        hasErrors: false,
        errorSet: [],
        errors: []
      }
    }
  },
  provide() {
    return { sharedState: this.sharedState }
  },
  watch: {
    'sharedState.errorSet': {
      deep: true,
      handler(errorObject) {
        const arr = errorObject && Object.values(errorObject)
        this.sharedState.errors = arr
        this.sharedState.hasErrors = arr.length > 0
      }
    }
  },
  computed: {
    errors() {
      return this.sharedState.errors
    },
    hasErrors() {
      return this.sharedState.hasErrors
    }
  },
  methods: {
    /**
     * @typedef { Object} ErrorItem
     * @property {number} code - Error code.
     * @property {string} text - Description of the error/
     *
     * @typedef { Object.<string, ErrorItem> } ErrorSet - Object of key and error message
     *
     * @param {ErrorSet} errors
     */
    handleErrors(err) {
      // eslint-disable-next-line
      console.error(err.response)
      if (err.response && err.response.status === 409) {
        this.sharedState.errorSet = err.response.data.errors
      } else this.sharedState.errorSet = [err.message]
    },
    async post(url, payload) {
      this.sharedState.errorSet = []
      let data = null
      try {
        const response = await this.$axios.post(url, payload)
        data = response
        return data.response || data
      } catch (err) {
        this.handleErrors(err)
      }
      return data
    }
  }
}
