<template>
	<section class="worldStats">
		World:
		<div class="worldStats__wrapper">
			<div class="worldStats__container">
				<p>Confirmed:</p>
				<p>today: {{ worldStats.todayCases }}</p>
				<p>All: {{ worldStats.cases }}</p>
			</div>
			<div class="worldStats__container">
				<p>Recovered:</p>
				<p>today: {{ worldStats.todayRecovered }}</p>
				<p>All: {{ worldStats.recovered }}</p>
			</div>

			<div class="worldStats__container">
				<p>Deceased:</p>
				<p>today: {{ worldStats.todayDeaths }}</p>
				<p>All: {{ worldStats.deaths }}</p>
			</div>
			<div class="worldStats__container">
				<p>Updated:</p>
				<p>{{ worldStats.updated }}</p>
			</div>
		</div>
	</section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	name: "WorldStats",

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
