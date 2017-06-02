const initialState = require('../../data/data.js').data
const initialAttraction = attractionFor(initialState)

const attraction = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_ATTRACTION':
    return attractionFor(initialState.filter(record => record.city == action.city))[0]


    default:
      return state
  }
}

function attractionFor (data) {
  return data.map(record => record.attraction)
}

export default attraction
