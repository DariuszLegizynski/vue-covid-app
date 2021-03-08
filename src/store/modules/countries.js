const state = {
	listedCountries: [],
};

const getters = {
	allCountries: (state) => state.listedCountries,
};

const actions = {
	async fetchCountries({ commit }) {
		const response = await fetch(
			"https://covid19-graphql.herokuapp.com/",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					query: `
                {
                    countries {
                      results {
                        code
                        name
                      }
                    }
                  }
                `,
				}),
			}
		).catch((err) => alert(err.message));
		const fetchedCountries = await response
			.json()
			.catch((err) => alert(err.message));
		commit("setCountries", fetchedCountries);
	},
};

const mutations = {
	setCountries: (state, fetchedCountries) =>
		(state.listedCountries =
			fetchedCountries.data.countries.results),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
