<template>
	<section class="cardInfoBox">
		<p>{{ title }}</p>
		<h3>{{ value1 }}</h3>
		<p v-if="value2">Total: {{ value2 }}</p>
	</section>
</template>

<script>
export default {
	name: "CardInfoBox",
	props: ["title", "value1", "value2"],
};
</script>

<style src="./CardInfoBox.css" />
