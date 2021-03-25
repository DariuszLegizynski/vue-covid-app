<template>
	<div id="mapContainer">
		<l-map
			style="height: 80%; width: 100%"
			:zoom="zoom"
			:center="center"
			@update:zoom="zoomUpdated"
			@update:center="centerUpdated"
			@update:bounds="boundsUpdated"
		>
			<l-tile-layer :url="url"></l-tile-layer>
		</l-map>
	</div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "vue2-leaflet";

export default {
	name: "LeafletMap",
	components: {
		LMap,
		LTileLayer,
	},
	data() {
		return {
			url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			zoom: 3,
			center: [0, 0],
			bounds: null,
		};
	},
	methods: {
		zoomUpdated(zoom) {
			this.zoom = zoom;
		},
		centerUpdated(center) {
			this.center = center;
		},
		boundsUpdated(bounds) {
			this.bounds = bounds;
		},
	},
};
</script>

<style scoped>
#mapContainer {
	width: 80vw;
	height: 100vh;
}
</style>
