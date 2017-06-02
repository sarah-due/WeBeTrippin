import React from 'react'
import {connect} from 'react-redux'
import Attraction from './Attraction'

import {fetchAttraction} from '../actions'

function handleChange(e, dispatch) {
  dispatch(fetchAttraction(e.target.value))
}


let CityForm = (props) => {
  console.log(props)
  return (
    <div>
      <form>
        <label>Select City</label>
        <p>
          <select className="drop-menu" name="city" onChange={(e => handleChange(e, props.dispatch))}>
            <option selected disabled >Pick a City!</option>
            {props.cities.map((city, key) => {
              return <option value={city}>{city}</option>
            })}
          </select>
        </p>
      </form>
      <Attraction />
    </div>
  )
}

function mapStateToProps(state) {
  console.log(state);
  return {
    cities: state.cities,
    attraction: state.attraction
  }
}

export default connect(mapStateToProps)(CityForm)
