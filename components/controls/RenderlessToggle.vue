<script>
export default {
  model: { prop: 'on' },
  props: {
    on: { type: Boolean, default: true }
  },
  data() {
    return {
      state: this.on
    }
  },
  methods: {
    setState(state) {
      this.state = state
      this.$emit('input', this.state)
      this.$emit('change')
    }
  },
  render() {
    return (
      this.$scopedSlots.default &&
      this.$scopedSlots.default({
        on: this.state,
        toggle() {
          this.setState(!this.state)
        },
        activate() {
          this.setState(true)
        },
        deactivate() {
          this.setState(false)
        }
      })
    )
  }
}
</script>
