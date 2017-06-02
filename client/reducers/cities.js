const initialState = require('../../data/data.js').data
const initialCities = citiesFor(initialState)

const cities = (state = initialCities, action) => {
  switch (action.type) {
    case 'FETCH_CITIES':
    console.log(action)
      return [
        citiesFor(initialState.filter(record => record.country == action.country))
      ]

    default:
      return state
  }
}

function citiesFor (data) {
  return data.map(record => record.city)
}

export default cities
