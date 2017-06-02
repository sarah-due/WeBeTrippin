

export const fetchCities = (country) => {
  return {
    type: 'FETCH_CITIES',
    country
  }
}

export const fetchCountries = (data) => {
  return {
    type: 'FETCH_COUNTRIES',
    data
  }
}
