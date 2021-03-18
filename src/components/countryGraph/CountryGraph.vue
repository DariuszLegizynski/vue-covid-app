<template>
	<section class="countryGraph">
		<Graph
			v-if="this.countryGraph.length"
			:chartData="chartDataConfirmed"
			:options="chartOptions"
		/>
		<Graph
			v-if="this.countryGraph.length"
			:chartData="chartDataRecovered"
			:options="chartOptions"
		/>
		<Graph
			v-if="this.countryGraph.length"
			:chartData="chartDataDeaths"
			:options="chartOptions"
		/>
		<Graph
			v-if="this.countryGraph.length"
			:chartData="chartDataGrow"
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
		chartDataConfirmed() {
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
		chartDataRecovered() {
			return {
				labels: this.countryGraph.map((el) => el.date),
				datasets: [
					{
						label: "Recovered",
						backgroundColor: "#eea",
						data: this.countryGraph.map(
							(el) => el.recovered
						),
					},
				],
			};
		},
		chartDataDeaths() {
			return {
				labels: this.countryGraph.map((el) => el.date),
				datasets: [
					{
						label: "Deaths",
						backgroundColor: "#ccc204",
						data: this.countryGraph.map(
							(el) => el.deaths
						),
					},
				],
			};
		},
		chartDataGrow() {
			return {
				labels: this.countryGraph.map((el) => el.date),
				datasets: [
					{
						label: "Growth Rate",
						backgroundColor: "#fae",
						data: this.countryGraph.map(
							(el) => el.growthRate
						),
					},
				],
			};
		},
	},
};
</script>

<style />
