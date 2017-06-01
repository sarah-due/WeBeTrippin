/// Temp hard-coded data ///

module.exports = {
  getCountries
}

var countries = {
  NZ: ['Auckland', 'Wellington', 'Christchurch', 'Dunedin', 'Queenstown'],
  UK: ['London', 'Manchester', 'Liverpool', 'Cambridge' ],
  US: ['Washington D.C.', 'New York', 'Chicago', 'San Francisco', 'Miami']
}

function getCountries() {
  return countries
}
