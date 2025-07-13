<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleLogin = () => {
	router.push('/login');
};

const handleHome = () => {
	router.push('/');
};
</script>

<template>
	<header class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
		<div class="flex items-center justify-between">
			<h1 @click="handleHome">Header</h1>
			<div @click="handleLogin">login</div>
		</div>
	</header>
</template>

<style scoped></style>
