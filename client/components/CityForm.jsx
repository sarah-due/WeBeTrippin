import React from 'react'
import {connect} from 'react-redux'

import {fetchAttraction} from '../actions'

function handleChange(e, dispatch) {
  dispatch(fetchAttraction(e.target.value))
}

function handleSubmit(e, dispatch) {
  dispatch()
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
            <option value="Wellington">Wellington</option>
            <option value="Melbourne">Melbourne</option>
            <option value="Rarotonga">Rarotonga</option>
          </select>
        </p>
        <input type='submit' value='submit' />
      </form>
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
