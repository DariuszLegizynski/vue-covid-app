<template>
	<section class="countryStats">
		Country:
		<div>
			<p>Confirmed: {{ countryStats.confirmed }}</p>
			<p>Recovered: {{ countryStats.recovered }}</p>
			<p>Deceased: {{ countryStats.deceased }}</p>
			<p>Updated: {{ countryStats.lastUpdated }}</p>
		</div>
	</section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	name: "CountryStats",

	methods: {
		...mapActions(["selectCountryStats"]),
	},
	computed: {
		...mapGetters(["countryStats"]),
	},
};
</script>

<style src="./CountryStats.css" />
