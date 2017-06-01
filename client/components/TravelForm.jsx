import React from 'react'
import {connect} from 'react-redux'

import {fetchCities} from '../actions'
// import * as api from '../api'

class TravelForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleChange(e, dispatch) {
    dispatch(fetchCities(e.target.value))
  }

  render() {
    console.log(this.props.cities)
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Select Country</label>
          <p>
            <select className="drop-menu" name="country_name" value={this.state.country_name} onChange={(e =>this.handleChange(e, this.props.dispatch))}>
              <option value="New Zealand">New Zealand</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
            </select>
          </p>
          <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  }
}

export default connect(mapStateToProps)(TravelForm)
