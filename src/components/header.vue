<script setup>
import { tr } from 'element-plus/es/locales.mjs';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const showMenu = ref(false);

</script>

<template>
	<header
		class="sticky flex items-center justify-center h-14 top-0 bg-[rgb(245,245,245)] px-4 lg:py-1 text-white z-50 shadow-md">
		<nav class="flex items-center justify-between max-w-desktop w-full mx-auto">
			<div class="logo flex flex-1 items-center">
				<i class="hidden lg:block iconfont icon-blog-copy text-gray-800" style="font-size: 60px;" />
				<span class="text-gray-800 text-lg lg:text-xl lg:ml-6">FrontEnd Journey</span>
			</div>
			<div class="nav_menu hidden lg:grid grid-cols-2 gap-8 text-gray-800">
				<router-link class="h-14 flex_center border-b-4 duration-300 transition-all"
					:class="[$route.path === '/' ? 'border-[#96cc80]' : 'border-transparent']" to="/">
					<i class="iconfont icon-shouye mr-2" />
					首页
				</router-link>
				<router-link class="h-14 flex_center border-b-4 duration-300  transition-all"
					:class="[$route.path === '/login' ? 'border-[#96cc80]' : 'border-transparent']" to="/login">
					<i class="iconfont icon-zhishidian mr-2" />
					知识点
				</router-link>
			</div>
			<div class="flex h-7 items-center flex-1 justify-end">
				<p class="text-gray-400 hover:text-black duration-300 lg:block hidden">登录</p>
				<div class="lg:hidden w-5 h-3.5 overflow-hidden flex flex-col gap-1" @click="showMenu = true">
					<span class="w-5 h-0.5 bg-gray-400" :class="{ '': showMenu }"></span>
					<span class="w-5 h-0.5 bg-gray-400"
						:class="{ '-translate-x-1 duration-300 transition-all': showMenu }"></span>
					<span class="w-5 h-0.5 bg-gray-400"
						:class="{ '-translate-x-2 duration-300 transition-all': showMenu }"></span>
				</div>
			</div>
			<div v-if="showMenu" class="w-full h-full bg-white fixed top-0 left_fade_in z-50">
				<div class="text-black" @click="showMenu = false">111</div>
			</div>
		</nav>
	</header>
</template>

<style scoped>
.left_fade_in {
	animation: left_fade_in 0.4s ease-in-out forwards;
}
@keyframes left_fade_in {
	0% {
		left: -100%;
		opacity: 0;
	}
	100% {
		left: 0;
		opacity: 1;
	}
}

</style>
