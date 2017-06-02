import React from 'react'
import {connect} from 'react-redux'

import {fetchAttraction} from '../actions'

class CityForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      country_name: null,
      cities: []
    }
  }

  handleChange(e, dispatch) {
    dispatch(fetchAttraction(e.target.value))
  }

  handleSubmit(e, dispatch) {
    dispatch()
  }


  render() {
    console.log(this.props.attraction)
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Select City</label>
          <p>
            <select className="drop-menu" name="country_name" value={this.state.city_name} onChange={(e =>this.handleChange(e, this.props.dispatch))}>
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
}

function mapStateToProps(state) {
  return {
    attraction: state.attraction
  }
}

export default connect(mapStateToProps)(CityForm)
