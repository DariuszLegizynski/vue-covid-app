<template>
  <section class="allCountriesList">
    <p>Select Country:</p>
    <select
      @change="
        selectCountryStats($event.target.value);
        selectCountryGraph($event.target.value);
      "
    >
      <option
        v-for="country in countriesList"
        :key="country.countryInfo._id"
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
    ...mapActions([
      "fetchCountries",
      "selectCountryStats",
      "selectCountryGraph"
    ])
  },
  computed: {
    ...mapGetters(["countriesList"])
  },
  created() {
    this.fetchCountries();
  }
};
</script>

<style src="./AllCountriesList.css" />
