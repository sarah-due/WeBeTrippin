const initialState = require('../../data/data.js').data
const initialAttraction = attractionFor(initialState)

const attraction = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_ATTRACTION':
    console.log(action)
      return [
        attractionFor(initialState.filter(record => record.city == action.city))
      ]

    default:
      return state
  }
}

function attractionFor (data) {
  return data.map(record => record.attraction)
}

export default attraction
