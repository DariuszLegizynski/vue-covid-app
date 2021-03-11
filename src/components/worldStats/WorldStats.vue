<template>
	<section class="worldStats">
		World:
		<div>
			<p>Confirmed: {{ worldStats.confirmed }}</p>
			<p>Recovered: {{ worldStats.recovered }}</p>
			<p>Deceased: {{ worldStats.deceased }}</p>
			<p>Updated: {{ worldStats.lastUpdated }}</p>
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
