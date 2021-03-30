<template>
  <div class="home">
    <WorldStats />
    <AllCountriesList />
    <LeafletMap
      :latitude="
        this.countryStats.countryInfo && this.countryStats.countryInfo.lat
          ? this.countryStats.countryInfo.lat
          : 0
      "
      :longitude="
        this.countryStats.countryInfo && this.countryStats.countryInfo.long
          ? this.countryStats.countryInfo.long
          : 0
      "
      :activeCases="
        this.countryStats.result && this.countryStats.result.active
          ? this.countryStats.result.active
          : 0
      "
    />
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

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",

  components: {
    AllCountriesList,
    WorldStats,
    CountryStats,
    CountryGraph,
    LeafletMap
  },

  methods: {
    ...mapActions(["selectCountryStats"])
  },
  computed: {
    ...mapGetters(["countryStats"])
  }
};
</script>

<style src="./Home.css" />
