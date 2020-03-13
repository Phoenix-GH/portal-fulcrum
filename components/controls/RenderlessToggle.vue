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
  render() {
    return (
      this.$scopedSlots.default &&
      this.$scopedSlots.default({
        on: this.state,
        toggle() {
          this.state = !this.state
          this.$emit('input', this.state)
          this.$emit('change')
        }
      })
    )
  }
}
</script>
