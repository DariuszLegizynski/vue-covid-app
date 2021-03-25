<template>
	<section class="countryStats">
		<div class="countryStats__title">
			<h3>Country: {{ countryStats.country }}</h3>
			<p>
				Updated:
				{{
					countryStats.result.updated
						? countryStats.result.updated.split("T")[0]
						: null
				}}
			</p>
		</div>
		<div class="countryStats__wrapper">
			<CardInfoBox
				title="Confirmed"
				:value1="countryStats.result.todayCases"
				:value2="countryStats.result.cases"
			/>
			<CardInfoBox
				title="Recovered"
				:value1="countryStats.result.todayRecovered"
				:value2="countryStats.result.recovered"
			/>
			<CardInfoBox
				title="Deceased"
				:value1="countryStats.result.todayDeaths"
				:value2="countryStats.result.deaths"
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
