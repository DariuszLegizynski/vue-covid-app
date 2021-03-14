<template>
	<div id="app">
		<Header />
		<Home />
		<Footer />
	</div>
</template>

<script>
import Home from "../home/Home";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default {
	name: "App",
	components: {
		Header,
		Home,
		Footer,
	},
};
</script>

<style src="./App.css" />
