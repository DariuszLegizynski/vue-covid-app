const state = {
	countriesList: [],
};

const getters = {
	countriesList: (state) => state.countriesList,
};

const actions = {
	async fetchCountries({ commit }) {
		const response = await fetch(
			"https://covid19-graphql.netlify.app/",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					query: `
                {
                    countries {
                      country
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
		(state.countriesList = fetchCountries.data.countries),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
