
import './setup-dom'
import test from 'ava'
import React from 'react'
import { shallow, mount } from 'enzyme'

import App from '../../client/components/App'
import TravelForm from '../../client/components/TravelForm'

App.prototype.componentDidMount = () =>

test('Container class exists', t => {
  const wrapper = mount(<App />)
  t.is(wrapper.find('.container').exists(), true)
})

test('The home page shows our header', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.find('h1').text(),'We Be Trippin')
})

test('TravelForm renders on homepage', t => {
  const wrapper = mount(<TravelForm />)
  t.is(wrapper.find('label').exists(),true)
})

test('TravelForm label shows correct text', t => {
  const wrapper = mount(<TravelForm />)
  t.is(wrapper.find('label').text(),'Select Country')
})

test('TravelForm options render correctly on homepage', t => {
  const wrapper = mount(<TravelForm />)
  t.is(wrapper.find('option').exists(), true)
})
