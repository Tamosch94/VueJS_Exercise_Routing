<template lang="html">
	<ul class="nav nav-pills">
      <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
      <router-link to="/user/10" tag="li" active-class="active"><a>User 10</a></router-link>
      <router-link to="/user/4" tag="li" active-class="active"><a>User 4</a></router-link>
  </ul>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
