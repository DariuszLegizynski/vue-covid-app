<template>
	<section class="worldStats">
		World:
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
			<CardInfoBox
				title="Updated"
				:value1="worldStats.updated"
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
