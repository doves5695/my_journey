<script setup>
import { computed, ref } from 'vue';
import { clsx } from 'clsx';
import { useGlobalStore } from './store/global';
import { RouterView } from 'vue-router';
import Header from './components/header.vue';
import Footer from './components/footer.vue';

const test = ref(false);
const globalStore = useGlobalStore();

const fotGal = computed(() => globalStore.fotGal);
</script>

<template>
	<Header />
	<RouterView />
	<Footer />
</template>

<style scoped></style>
