<template>
	<section class="countryGraph">
		<p>Country Graph</p>
	</section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	name: "CountryGraph",

	methods: {
		...mapActions(["selectCountryGraph"]),
	},
	computed: {
		...mapGetters(["countryGraph"]),
	},
};
</script>

<style></style>
