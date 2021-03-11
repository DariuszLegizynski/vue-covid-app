<template>
	<section class="countryStats">
		Country:
		<div class="countryStats__wrapper">
			<div class="countryStats__container">
				<p>Confirmed:</p>
				<p>{{ countryStats.confirmed }}</p>
			</div>
			<div class="countryStats__container">
				<p>Recovered:</p>
				<p>{{ countryStats.recovered }}</p>
			</div>
			<div class="countryStats__container">
				<p>Deceased:</p>
				<p>{{ countryStats.deceased }}</p>
			</div>
			<div class="countryStats__container">
				<p>Updated:</p>
				<p>{{ countryStats.lastUpdated }}</p>
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
