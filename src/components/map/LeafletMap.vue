<template>
  <div class="map">
    <h1>World Map</h1>
    <div id="mapContainer">
      <l-map
        style="height: 80%; width: 100%"
        :zoom="zoom"
        :center="[latitude, longitude]"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated"
      >
        <div v-for="country in countriesList" :key="country.countryInfo._id">
          <l-circle
            :lat-lng="[country.countryInfo.lat, country.countryInfo.long]"
            :radius="Math.sqrt(country.result.active / 10) * multiplier"
          />
        </div>

        <l-tile-layer :url="url"></l-tile-layer>
      </l-map>
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LCircle } from "vue2-leaflet";
import { mapGetters } from "vuex";

export default {
  name: "LeafletMap",
  components: {
    LMap,
    LTileLayer,
    LCircle
  },
  props: {
    latitude: {
      type: Number,
      default: 0
    },
    longitude: {
      type: Number,
      default: 0
    }
    // activeCases: {
    //   type: Number,
    //   default: 0
    // }
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 4,
      bounds: null,
      multiplier: 800
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.currentCenter = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  },
  computed: {
    ...mapGetters(["countriesList"])
  }
};
</script>

<style src="./LeafletMap.css" scoped />
