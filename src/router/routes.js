import Home from '../pages/home.vue';
import NotFound from '../pages/notFound.vue';
import knowledge from '../pages/knowledge.vue';
import Info from '../pages/info.vue';

export const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/knowledge',
		name: 'knowledge',
		component: knowledge,
	},
	{
		path: '/info',
		name: 'info',
		component: Info,
	},
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		component: NotFound,
	},
];
