import { mount } from '@vue/test-utils'
import Download from '../download.vue'

describe('Download.vue', () => {
  test('renders component', () => {
    const name = 'vuniversal'
    const wrapper = mount<any>(Download, {
      props: { name }
    })
    expect(wrapper.props().name).toMatch(name)
    expect(wrapper.props().size).toMatch(Download.props.size.default)
    expect(wrapper.find('a').attributes('href')).toContain(name)
    expect(wrapper.find('a').attributes('href')).toMatch(`https://www.npmjs.com/package/${name}`)
  })
})
