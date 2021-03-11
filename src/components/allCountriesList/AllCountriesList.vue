<template>
	<section class="allCountriesList">
		Select Country:
		<select
			@change="selectCountryStats($event.target.value)"
		>
			<option
				v-for="country in everyCountry"
				:key="country.name"
				:value="country.code"
			>
				{{ country.name }}
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
		...mapGetters(["everyCountry"]),
	},
	created() {
		this.fetchCountries();
	},
};
</script>

<style src="./AllCountriesList.css" />
