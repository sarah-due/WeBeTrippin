import {combineReducers} from 'redux'

import countries from './countries'
import cities from './cities'
import attraction from './attraction'

export default combineReducers({
  countries,
  cities,
  attraction
})
