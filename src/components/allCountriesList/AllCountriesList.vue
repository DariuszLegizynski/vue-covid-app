<template>
	<section class="allCountriesList">
		Select Country:
		<select
			@change="selectCountryStats($event.target.value)"
		>
			<option
				v-for="country in countriesList"
				:key="country.country"
				:value="country.country"
			>
				{{ country.country }}
			</option>
		</select>
	</section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	name: "AllCountriesList",

	methods: {
		...mapActions(["fetchCountries", "selectCountryStats"]),
	},
	computed: {
		...mapGetters(["countriesList"]),
	},
	created() {
		this.fetchCountries();
	},
};
</script>

<style src="./AllCountriesList.css" />
