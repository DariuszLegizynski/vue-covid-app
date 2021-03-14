<template>
	<section class="cardInfoBox">
		<h4>{{ title }}</h4>
		<p>today: {{ value1 }}</p>
		<p v-if="value2">All: {{ value2 }}</p>
	</section>
</template>

<script>
export default {
	name: "CardInfoBox",
	props: ["title", "value1", "value2"],
};
</script>

<style src="./CardInfoBox.css" />
