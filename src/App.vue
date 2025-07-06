<script setup>
import { computed, ref } from 'vue';
import { clsx } from 'clsx';
import { useGlobalStore } from './store/global';
import { RouterView } from 'vue-router';

const test = ref(false);
const globalStore = useGlobalStore();

const fotGal = computed(() => globalStore.fotGal);
</script>

<template>
	<section class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
		<h1 :class="clsx('text-4xl', test ? 'text-red-500' : 'text-blue-500')">Hello World</h1>
		<RouterView />
	</section>
</template>

<style scoped></style>
