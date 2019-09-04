<template>
	<div>
    	<h1>The User Page</h1>
		<button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
		<br />
		<br />
		<p>Loaded ID: {{ id }}</p>
	</div>

</template>
<script>
	export default {
		data() {
			return {
				id: this.$route.params.id
			}
		},
		watch: {
			'$route'(to, from) {
				// to IS a route
				this.id = to.params.id;
			}
		},
		methods: {
			navigateToHome() {
				this.$router.push('/');
			}
		}
	}
</script>
