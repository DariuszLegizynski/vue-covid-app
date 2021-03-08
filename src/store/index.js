import Vue from "vue";
import Vuex from "vuex";
import countries from "./modules/countries";

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
	modules: {
		countries,
	},
});
