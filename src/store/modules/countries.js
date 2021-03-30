const state = {
  countriesList: [
    // commented out till I find a way to show "--" without any errors in the country list
    // {
    //   country: "--",
    //   countryInfo: {
    //     _id: 999999
    //   }
    // }
  ]
};

const getters = {
  countriesList: state => state.countriesList
};

const actions = {
  async fetchCountries({ commit }) {
    const response = await fetch("https://covid19-graphql.netlify.app/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
                {
                    countries {
                      country
                      countryInfo {
                        _id
                        lat
                        long
                      }
                      result {
                        active
                      }
                    }
                  }
                `
      })
    }).catch(err => alert(err.message));
    const fetchCountries = await response
      .json()
      .catch(err => alert(err.message));
    commit("setCountries", fetchCountries);
  }
};

const mutations = {
  setCountries: (state, fetchCountries) =>
    (state.countriesList = [
      ...state.countriesList,
      ...fetchCountries.data.countries
    ])
};

export default {
  state,
  getters,
  actions,
  mutations
};
