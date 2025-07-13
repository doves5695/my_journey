import Home from '../pages/home.vue';
import NotFound from '../pages/notFound.vue';

export const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		component: NotFound,
	},
];
