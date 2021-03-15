<template>
	<div class="home">
		<WorldStats />
		<AllCountriesList />
		<CountryStats />
	</div>
</template>

<script>
import AllCountriesList from "../allCountriesList/AllCountriesList";
import WorldStats from "../worldStats/WorldStats";
import CountryStats from "../countryStats/CountryStats";

export default {
	name: "Home",

	components: {
		AllCountriesList,
		WorldStats,
		CountryStats,
	},
};
</script>

<style src="./Home.css" />
