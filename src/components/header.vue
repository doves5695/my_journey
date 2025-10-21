<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<template>
	<header
		class="sticky flex items-center justify-center h-14 top-0 bg-[rgb(245,245,245)] px-4 lg:py-1 text-white z-50">
		<nav class="flex items-center justify-between max-w-desktop w-full mx-auto">
			<div class="logo flex flex-1 items-center">
				<i class="hidden lg:block iconfont icon-blog-copy text-gray-800" style="font-size: 60px;" />
				<span class="text-gray-800 text-lg lg:text-xl lg:ml-6">FrontEnd Journey</span>
			</div>
			<div class="nav_menu hidden lg:grid grid-cols-2 gap-8 text-gray-800">
				<router-link class="h-14 flex_center border-b-4 duration-300 transition-all" :class="[$route.path === '/' ? 'border-[#96cc80]' : 'border-transparent']" to="/">
					<i class="iconfont icon-shouye mr-2" />
					首页
				</router-link>
				<router-link class="h-14 flex_center border-b-4 duration-300  transition-all" :class="[$route.path === '/login' ? 'border-[#96cc80]' : 'border-transparent']"  to="/login">
					<i class="iconfont icon-zhishidian mr-2" />
					知识点
				</router-link>
			</div>
			<div class="flex flex-1 justify-end">
				<p class="text-gray-400 hover:text-black duration-300 lg:block hidden">登录</p>
			</div>
		</nav>
	</header>
</template>

<style scoped></style>
