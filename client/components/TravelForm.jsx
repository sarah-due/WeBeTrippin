import React from 'react'
import {connect} from 'react-redux'
import CityForm from './CityForm'
import {fetchCities} from '../actions'
// import * as api from '../api'
function handleChange(e, dispatch) {
  dispatch(fetchCities(e.target.value))
}

let TravelForm = (props) => {
    console.log(props.countries);
    return (
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Select Country</label>
          <p>
            <select className="drop-menu" value={props.country} onChange={(e =>handleChange(e, props.dispatch))}>
              <option selected disabled>Pick a country</option>
              {props.countries.map((country, key) => {
                return (
                <option value={country}>{country}</option>
              )})}
            </select>
          </p>
          <input type='submit' value='submit' />
        </form>
        {props.cities.length != 0 && <CityForm />}
      </div>
    )
  }


function mapStateToProps(state) {
  console.log(state);
  return {
    countries: state.countries,
    cities: state.cities
  }
}

export default connect(mapStateToProps)(TravelForm)
