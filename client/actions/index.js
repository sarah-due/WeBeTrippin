

export const fetchCities = (country) => {
  return {
    type: 'FETCH_CITIES',
    country
  }
}

export const fetchAttraction = (city) => {
  return {
    type: 'FETCH_ATTRACTION',
    city
  }
}
