const state = {
	worldStats: {},
};

const getters = {
	worldStats: (state) => state.worldStats,
};

const actions = {
	async fetchStats({ commit }) {
		const response = await fetch(
			"https://covid19-graphql.netlify.app/",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					query: `
                    {
                        globalTotal {
                          cases
						  todayCases
                          recovered
						  todayRecovered
                          deaths
						  todayDeaths
                          updated
                        }
                    }
                `,
				}),
			}
		).catch((err) => alert(err.message));
		const fetchStats = await response
			.json()
			.catch((err) => alert(err.message));
		commit("setAllStats", fetchStats);
	},
};

const mutations = {
	setAllStats: (state, fetchStats) =>
		(state.worldStats = fetchStats.data.globalTotal),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
