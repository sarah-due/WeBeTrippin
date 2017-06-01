import React from 'react'

import * as api from '../api'

export default class TravelForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
      render() {
        return (
          <div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <label>Select Country</label>
              <p>
                <select className="drop-menu" name="country_name" value={this.state.country_name} onChange={(e =>this.handleChange(e))}>
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
