<template>
	<div class="home">
		Select Country:
		<select>
			<option
				v-for="country in allCountries"
				:key="country.code"
				value="country.name"
			>
				{{ country.name }}
			</option>
		</select>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	name: "Home",

	methods: {
		...mapActions(["fetchCountries"]),
	},
	computed: { ...mapGetters(["allCountries"]) },
	created() {
		this.fetchCountries();
	},
};
</script>

<style src="./Home.css" />
