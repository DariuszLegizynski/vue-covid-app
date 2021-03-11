import Vue from "vue";
import Vuex from "vuex";
import countries from "./modules/countries";
import allStats from "./modules/allStats";
import countryStats from "./modules/countryStats";

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
	modules: {
		countries,
		countryStats,
		allStats,
	},
});
