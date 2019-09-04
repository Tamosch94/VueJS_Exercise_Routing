import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routers.js';

Vue.use(VueRouter);

const router = new VueRouter({
	// Thanks to ES6 key/value mapping is created automatically
	routes,
	// setup url behaviour
	model: 'History'
});


new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
