const state = {
	countryGraph: [],
	confirmed: [],
	date: [],
};

const getters = {
	countryGraph: (state) => state.countryGraph,
};

const actions = {
	async selectCountryGraph({ commit }, countryName) {
		const response = await fetch(
			"https://covid19-graphql.now.sh/",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					query: `
                    {
						country(name: "${countryName}") {
                            results {
                              confirmed
							  deaths
      						  recovered
      						  growthRate
                              date
                            }
                          }
					  }
                `,
				}),
			}
		).catch((err) => alert(err.message));
		const fetchCountryGraph = await response
			.json()
			.catch((err) => alert(err.message));
		commit("selectCountryGraph", fetchCountryGraph);
	},
};

const mutations = {
	selectCountryGraph: (state, fetchCountryGraph) =>
		(state.countryGraph =
			fetchCountryGraph.data.country.results),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
