import { mount } from '@vue/test-utils'
import Toggle from '@/components/controls/RenderlessToggle.vue'

describe('Toggle', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Toggle)
    wrapper.setProps({ on: true })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
