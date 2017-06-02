import React from 'react'
import {connect} from 'react-redux'

import {fetchCountries} from '../actions'
// import * as api from '../api'

class TravelForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleChange(e, dispatch) {
    dispatch(fetchCountries(e.target.value))
  }

  render() {
    console.log(this.props.countries);
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Select Country</label>
          <p>
            <select className="drop-menu" name="" value={this.props.country} onChange={(e =>this.handleChange(e, this.props.dispatch))}>
              {this.props.countries.map((country, key) => {
                return (
                <option>{country}</option>
              )})}
            </select>
          </p>
          <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    countries: state.countries
  }
}

export default connect(mapStateToProps)(TravelForm)
