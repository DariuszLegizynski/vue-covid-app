<template>
	<section class="countryGraph">
		<LineChart
			:chartdata="chartData"
			:options="chartOptions"
		/>
	</section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import LineChart from "../graph/Graph";

export default {
	name: "CountryGraph",
	components: { LineChart },

	data: () => ({
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

<style></style>
