const state = {
  countryStats: {}
};

const getters = {
  countryStats: state => state.countryStats
};

const actions = {
  async selectCountryStats({ commit }, countryName) {
    const response = await fetch("https://covid19-graphql.netlify.app/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
				{
				country(name: "${countryName}") {
          countryInfo {
            _id
            lat
            long
          }
					country
						result {
							updated
							todayCases
							cases
							todayDeaths
							deaths
							todayRecovered
							recovered
							active
						}
					}
				}
      `
      })
    }).catch(err => alert(err.message));
    const fetchCountry = await response.json().catch(err => alert(err.message));
    commit("selectCountry", fetchCountry);
  }
};

const mutations = {
  selectCountry: (state, fetchCountry) =>
    (state.countryStats = fetchCountry.data.country)
};

export default {
  state,
  getters,
  actions,
  mutations
};
