<script setup>
import { footerImg } from '../image';
</script>

<template>
	<footer class="flex flex-col text-white">
		<section class="mainMenu bg-footer_menu">
			<div class="max-w-desktop mx-auto flex gap-28 px-2.5 py-8">
				<div class="relative aspect-[45/46] h-full w-[90px]">
					<img class="absolute object-cover" :src="footerImg.logo" alt="" />
				</div>
				<div class="grid grid-cols-6 gap-20">
					<div class="col-span-2">itc</div>
					<div class="col-span-2">字由</div>
					<div class="col-span-2">社交软件</div>
				</div>
			</div>
		</section>
		<div class="bottomMenu bg-footer-gradient flex w-full items-center justify-start py-1.5 pl-10">
			<p class="text-xs">© 2002.03.29, 荆瑞_Conner - 计算机科学与技术 - 哈尔滨信息工程学院</p>
		</div>
	</footer>
</template>

<style scoped>
.bg-footer-gradient {
	background-image: linear-gradient(90deg, #003d38, #2f54f5 30%, #f5f558 53.5%, #058282 74%, #003d38 96.5%);
}
</style>
