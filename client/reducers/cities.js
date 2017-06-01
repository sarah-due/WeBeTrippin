const cities = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CITIES':
      return [
        ...state,
        {
          cities: action.cities
        }
      ]

    default:
      return state
  }
}

export default cities
