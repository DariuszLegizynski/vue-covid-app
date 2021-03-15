<template>
	<section class="worldStats">
		<h3>World:</h3>
		<p>
			Updated:
			{{
				worldStats.updated
					? worldStats.updated.split("T")[0]
					: null
			}}
		</p>
		<div class="worldStats__wrapper">
			<CardInfoBox
				title="Confirmed"
				:value1="worldStats.todayCases"
				:value2="worldStats.cases"
			/>
			<CardInfoBox
				title="Recovered"
				:value1="worldStats.todayRecovered"
				:value2="worldStats.recovered"
			/>
			<CardInfoBox
				title="Deceased"
				:value1="worldStats.todayDeaths"
				:value2="worldStats.deaths"
			/>
		</div>
	</section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CardInfoBox from "../cardInfoBox/CardInfoBox";

export default {
	name: "WorldStats",
	components: { CardInfoBox },

	methods: {
		...mapActions(["fetchStats"]),
	},
	computed: {
		...mapGetters(["worldStats"]),
	},
	created() {
		this.fetchStats();
	},
};
</script>

<style src="./WorldStats.css" />
