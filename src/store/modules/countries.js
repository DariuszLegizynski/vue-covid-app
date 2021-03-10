const state = {
	everyCountry: [],
};

const getters = {
	everyCountry: (state) => state.everyCountry,
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
                    countries (count: 253) {
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
		const fetchCountries = await response
			.json()
			.catch((err) => alert(err.message));
		commit("setCountries", fetchCountries);
	},
};

const mutations = {
	setCountries: (state, fetchCountries) =>
		(state.everyCountry =
			fetchCountries.data.countries.results),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
