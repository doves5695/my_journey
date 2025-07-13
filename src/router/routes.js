import Home from '../pages/home.vue';
import NotFound from '../pages/notFound.vue';
import Login from '../pages/login.vue';

export const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
	},
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		component: NotFound,
	},
];
