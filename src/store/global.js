import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGlobalStore = defineStore('globalStore', () => {
	const nav_status = ref('home');
	return {
		nav_status,
	};
});
