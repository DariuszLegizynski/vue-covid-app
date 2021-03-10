<template>
	<div class="home">
		Select Country:
		<select>
			<option
				v-for="country in everyCountry"
				:key="country.name"
				value="country.name"
			>
				{{ country.name }}
			</option>
		</select>
		allStats
		<div>
			<p>Confirmed: {{ worldStats.confirmed }}</p>
			<p>Recovered: {{ worldStats.recovered }}</p>
			<p>Deceased: {{ worldStats.deceased }}</p>
			<p>Updated: {{ worldStats.lastUpdated }}</p>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	name: "Home",

	methods: {
		...mapActions(["fetchCountries", "fetchStats"]),
	},
	computed: { ...mapGetters(["worldStats", "everyCountry"]) },
	created() {
		this.fetchCountries();
		this.fetchStats();
	},
};
</script>

<style src="./Home.css" />
