<template>
	<section class="worldStats">
		World:
		<div class="worldStats__wrapper">
			<div class="worldStats__container">
				<p>Confirmed:</p>
				<p>{{ worldStats.confirmed }}</p>
			</div>
			<div class="worldStats__container">
				<p>Recovered:</p>
				<p>{{ worldStats.recovered }}</p>
			</div>

			<div class="worldStats__container">
				<p>Deceased:</p>
				<p>{{ worldStats.deceased }}</p>
			</div>
			<div class="worldStats__container">
				<p>Updated:</p>
				<p>{{ worldStats.lastUpdated }}</p>
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
