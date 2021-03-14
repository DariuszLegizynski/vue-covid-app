<template>
	<section class="countryStats">
		Country:
		<div class="countryStats__wrapper">
			<CardInfoBox
				title="Confirmed"
				:value1="countryStats.todayCases"
				:value2="countryStats.cases"
			/>
			<CardInfoBox
				title="Recovered"
				:value1="countryStats.todayRecovered"
				:value2="countryStats.recovered"
			/>
			<CardInfoBox
				title="Deceased"
				:value1="countryStats.todayDeaths"
				:value2="countryStats.deaths"
			/>
			<CardInfoBox
				title="Updated"
				:value1="countryStats.updated"
			/>
		</div>
	</section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CardInfoBox from "../cardInfoBox/CardInfoBox";

export default {
	name: "CountryStats",
	components: { CardInfoBox },

	methods: {
		...mapActions(["selectCountryStats"]),
	},
	computed: {
		...mapGetters(["countryStats"]),
	},
};
</script>

<style src="./CountryStats.css" />
