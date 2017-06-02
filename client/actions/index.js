let nextWordId = 0

export const addWord = (word) => {
  return {
    type: 'ADD_WORD',
    id: nextWordId++,
    word
  }
}

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
