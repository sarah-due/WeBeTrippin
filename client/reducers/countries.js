
const initialState = require('../../data/data.js').data
const initialCountries = countriesFor(initialState)

const countries = (state = initialCountries, action) => {
  switch (action.type) {
    case 'FETCH_COUNTRIES':
    console.log(action)
      return [
        countriesFor(initialState.filter(item => item.country == action.country))
      ]

    default:
      return state
  }
}

function countriesFor(data) {
  return data.map(item => item.country)
}

export default countries
