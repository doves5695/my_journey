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
	<header class="sticky flex items-center justify-center h-14 top-0 bg-[rgb(245,245,245)] lg:px-4 lg:py-1 text-white py-3 z-50">
		<nav class="flex items-center max-w-desktop w-full">
			<div class="logo flex items-center">
				<i class="iconfont icon-blog-copy text-gray-800" style="font-size: 64px;" />
				<span class="text-gray-800 text-xl ml-6">FrontEnd Journey</span>
			</div>
		</nav>
	</header>
</template>

<style scoped></style>
