<template>
	<section class="countryGraph">
		<Graph
			v-if="this.countryGraph.length"
			:chartdata="chartData"
			:options="chartOptions"
		/>
	</section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Graph from "../graph/Graph";

export default {
	name: "CountryGraph",
	components: { Graph },

	data: () => ({
		loaded: false,
		chartOptions: {
			responsive: true,
			maintainAspectRatio: false,
		},
	}),

	methods: {
		...mapActions(["selectCountryGraph"]),
	},
	computed: {
		...mapGetters(["countryGraph"]),

		chartData() {
			return {
				labels: this.countryGraph.map((el) => el.date),
				datasets: [
					{
						label: "Confirmed",
						backgroundColor: "#f87979",
						data: this.countryGraph.map(
							(el) => el.confirmed
						),
					},
				],
			};
		},
	},
};
</script>

<style />
