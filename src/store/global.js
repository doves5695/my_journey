import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGlobalStore = defineStore('globalStore', () => {
	const fotGal = ref(1111);

	return {
		fotGal,
	};
});
