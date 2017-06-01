import './setup-dom'
import test from 'ava'
import React from 'react'
import { shallow, mount } from 'enzyme'

import App from '../../client/components/App'

App.prototype.componentDidMount = () => {}

test('The home page shows our header', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.find('.container').text(),'We Be Trippin')
})
//
// test.cb('mount <App />', t => {
//   const wrapper = mount(<App />)
//   t.is(wrapper.find('.widget-list').exists(),true)
//   t.end()
// })
