<template>
  <div class="map">
    <h1>World Map</h1>
    <p>latitude: {{ latitude }}</p>
    <p>longitude: {{ longitude }}</p>
    <div id="mapContainer">
      <l-map
        style="height: 80%; width: 100%"
        :zoom="zoom"
        :center="[latitude, longitude]"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated"
      >
        <l-tile-layer :url="url"></l-tile-layer>
      </l-map>
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "vue2-leaflet";

export default {
  name: "LeafletMap",
  components: {
    LMap,
    LTileLayer
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
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 4,
      bounds: null
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
  }
};
</script>

<style src="./LeafletMap.css" scoped />
