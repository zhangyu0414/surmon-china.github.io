import { mount } from '@vue/test-utils'
import { BadgeStyle } from '../constants'
import Version from '../version.vue'

describe('Version.vue', () => {
  test('renders component', () => {
    const name = 'vuniversal'
    const wrapper = mount<any>(Version, {
      props: { name }
    })
    expect(wrapper.props().name).toMatch(name)
    expect(wrapper.props().size).toMatch(BadgeStyle.Normal)
    expect(wrapper.find('a').attributes('href')).toContain(name)
    expect(wrapper.find('a').attributes('class')).toContain('version')
  })
})
