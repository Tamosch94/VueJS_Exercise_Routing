// import your components you want to route
import Home from './components/Home.vue';
import User from './components/user/User.vue';
export const routes = [
	{ path: '', component: Home },
	{ path: '/user/:id', component: User }
];
