<template>
	<div class="home">
		<WorldStats />
		<LeafletMap />
		<AllCountriesList />
		<CountryStats />
		<CountryGraph />
	</div>
</template>

<script>
import AllCountriesList from "../allCountriesList/AllCountriesList";
import WorldStats from "../worldStats/WorldStats";
import CountryStats from "../countryStats/CountryStats";
import CountryGraph from "../countryGraph/CountryGraph";
import LeafletMap from "../map/LeafletMap";

export default {
	name: "Home",

	components: {
		AllCountriesList,
		WorldStats,
		CountryStats,
		CountryGraph,
		LeafletMap,
	},
};
</script>

<style src="./Home.css" />
