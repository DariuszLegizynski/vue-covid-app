<template>
	<div class="home">
		<WorldStats />
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

export default {
	name: "Home",

	components: {
		AllCountriesList,
		WorldStats,
		CountryStats,
		CountryGraph,
	},
};
</script>

<style src="./Home.css" />
