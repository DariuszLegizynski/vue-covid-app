const state = {
	worldStats: {},
};

const getters = {
	worldStats: (state) => state.worldStats,
};

const actions = {
	async fetchStats({ commit }) {
		const response = await fetch(
			"https://covid19-graphql.herokuapp.com/",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					query: `
                    {
                        latest {
                          confirmed
                          recovered
                          deceased
                          lastUpdated
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
		(state.worldStats = fetchStats.data.latest),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
