import React from 'react'
import {connect} from 'react-redux'
import Attraction from './Attraction'

import {fetchAttraction} from '../actions'

function handleChange(e, dispatch) {
  dispatch(fetchAttraction(e.target.value))
}


let CityForm = (props) => {
  console.log('the cities,ey', props.cities);
  console.log(props.attraction)
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Select City</label>
        <p>
          <select className="drop-menu" name="city" onChange={(e => handleChange(e, props.dispatch))}>
            <option selected disabled >Pick a City!</option>
            {props.cities.map((city, key) => {
              return <option value={city}>{city}</option>
            })}
          </select>
        </p>
        <input type='submit' value='submit' />
      </form>
      {props.attraction && <Attraction />}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    cities: state.cities,
    attraction: state.attraction
  }
}

export default connect(mapStateToProps)(CityForm)
