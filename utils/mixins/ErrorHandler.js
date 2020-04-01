export default {
  data() {
    return {
      errorSet: []
    }
  },
  computed: {
    errors() {
      return Object.values(this.errorSet)
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
      console.error(err)
      if (err.response && err.response.status === 409) {
        this.errorSet = err.response.data.errors
      } else this.errorSet = [err.message]
    }
  }
}
