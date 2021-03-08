<template>
	<div class="home">
		Home
		<div v-for="country in allCountries" :key="country.code">
			{{ country.name }}
		</div>
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

<style></style>
