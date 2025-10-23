<script setup>
import { footerImg } from '../image';
</script>

<template>
	<footer class="flex flex-col text-white">
		<section class="mainMenu bg-footer_menu">
			<div
				class="lg:max-w-desktop lg:mx-auto flex lg:flex-row flex-col justify-center lg:justify-normal py-10 px-4 gap-6 lg:gap-28 lg:px-2.5 lg:py-8">
				<div class="left_info flex justify-between flex-col items-center gap-4 lg:gap-4">
					<div class="relative aspect-[45/46] h-full w-[120px] lg:w-[180px]">
						<img class="absolute object-cover" :src="footerImg.logo" alt="" />
					</div>
					<div class="flex flex-col gap-2.5">
						<div class="lg:flex flex-col gap-2.5 hidden">
							<p class="bg-orange-500 px-4 py-1 text-lg font-semibold tracking-[4px]">规范严谨</p>
							<p class="bg-yellow-400 px-4 py-1 text-lg font-semibold tracking-[4px]">精益求精</p>
						</div>
						<p class="bg-orange-500 lg:hidden block px-4 py-1 text-lg font-semibold tracking-[4px]">规范严谨, 精益求精</p>
					</div>
				</div>
				<div class="right_info grid lg:grid-cols-3 gap-4 lg:gap-24">
					<div class="col-span-1 flex flex-col gap-2">
						<h1 class="font-semibold text-xl">实习公司</h1>
						<p>上海梭捷信息技术有限公司</p>
						<p>绿盟科技集团有限公司</p>
						<p>朗高投资咨询(上海)有限公司</p>
					</div>
					<div class="col-span-1 flex flex-col gap-2">
						<h1 class="font-semibold text-xl">工作公司</h1>
						<p>朗高投资咨询(上海)有限公司</p>
					    <p>上海驿创信息技术有限公司</p>
					</div>
					<div class="col-span-1 flex flex-col gap-2">
						<h1 class="font-semibold text-xl">社交软件</h1>
						<p>github: <a class="hover:text-blue-400" target="_blank" href="https://github.com/doves5695">https://github.com/doves5695</a></p>
						<p>简历: <a class="hover:text-blue-400" href="/src/assets/CV.pdf" download="荆瑞的简历.pdf">  点击下载我的简历</a></p>
					</div>
				</div>
			</div>
		</section>
		<div
			class="bottomMenu bg-footer-gradient flex w-full items-center justify-center lg:justify-start py-1.5 lg:pl-10">
			<p class="text-xs">© 2002.03.29, 荆瑞_Conner - 计算机科学与技术 - 哈尔滨信息工程学院</p>
		</div>
	</footer>
</template>

<style scoped>
.bg-footer-gradient {
	background-image: linear-gradient(90deg, #003d38, #2f54f5 30%, #f5f558 53.5%, #058282 74%, #003d38 96.5%);
}
</style>
