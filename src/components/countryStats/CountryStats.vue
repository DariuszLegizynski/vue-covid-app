<template>
	<section class="countryStats">
		Country:
		<div class="countryStats__wrapper">
			<div class="countryStats__container">
				<p>Confirmed:</p>
				<p>today: {{ countryStats.todayCases }}</p>
				<p>All: {{ countryStats.cases }}</p>
			</div>
			<div class="countryStats__container">
				<p>Recovered:</p>
				<p>today: {{ countryStats.todayRecovered }}</p>
				<p>All: {{ countryStats.recovered }}</p>
			</div>
			<div class="countryStats__container">
				<p>Deceased:</p>
				<p>today: {{ countryStats.todayDeaths }}</p>
				<p>All: {{ countryStats.deaths }}</p>
			</div>
			<div class="countryStats__container">
				<p>Updated:</p>
				<p>{{ countryStats.updated }}</p>
			</div>
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
