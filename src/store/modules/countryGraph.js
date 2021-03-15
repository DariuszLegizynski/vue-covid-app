const state = {
	countryGraph: [],
};

const getters = {
	countryGraph: (state) => state.countryGraph,
};

const actions = {
	async selectCountryGraph({ commit }, countryName) {
		console.log(countryName);
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
		(state.countryGraph = fetchCountryGraph.data.country),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
