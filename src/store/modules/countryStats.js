const state = {
	countryStats: {},
};

const getters = {
	countryStats: (state) => state.countryStats,
};

const actions = {
	async selectCountryStats({ commit }, countryCode) {
		const response = await fetch(
			"https://covid19-graphql.herokuapp.com/",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					query: `
                    {
                        country(code: "${countryCode}") {
                          code
                          name
                          latest {
                            confirmed
                            deceased
                            recovered
                            lastUpdated
                          }
                        }
                      }
                `,
				}),
			}
		).catch((err) => alert(err.message));
		const fetchCountry = await response
			.json()
			.catch((err) => alert(err.message));
		commit("selectCountry", fetchCountry);
	},
};

const mutations = {
	selectCountry: (state, fetchCountry) =>
		(state.countryStats = fetchCountry.data.country.latest),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
