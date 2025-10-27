<script setup>
import { h, reactive, ref } from 'vue';

const state = reactive({
	rootSubmenuKeys: ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'],
	openKeys: ['sub1'],
	selectedKeys: [],
});

const getItem = (label, key, icon, children, type) => (
	{
		key,
		icon,
		children,
		label,
		type,
	}
)

const items = reactive([
	getItem('导语', 'sub1', () => h(), [
		getItem('导语', '1'),
	]),
	getItem('JavaScript/ES6/TypeScript', 'sub2', () => h(), [
		getItem('JavaScript', '5'),
		getItem('ES6', '6'),
		getItem('TypeScript', '7'),
	]),
	getItem('HTML&CSS', 'sub3', () => h(), [
		getItem('HTML', '9'),
		getItem('CSS', '10'),
	]),
	getItem('计算机网络', 'sub4', () => h(), [
		getItem('HTTP协议', '11'),
		getItem('TCP/IP协议', '12'),
		getItem('网络安全', '13'),
		getItem('其他', '14'),
	]),
	getItem('前端框架', 'sub5', () => h(), [
		getItem('React', '15'),
		getItem('Vue', '16'),
	]),
]);

const handleClick = e => {
	console.log('click', e);
};

const renderTitle = ref('Default size card111')

</script>

<template>
	<section class="flex flex-grow overflow-hidden">
		<div class="bg-white w-[240px] overflow-auto">
			<a-menu v-model:selectedKeys="state.selectedKeys" style="width: 240px" mode="inline"
				:open-keys="state.openKeys" :items="items" @click="handleClick"></a-menu>
		</div>
		<div class="w-[calc(100%-240px)] overflow-auto">
			<a-card :title="renderTitle" style="height: 100%;">
				<p>card content</p>
				<p>card content</p>
				<p>card content</p>
			</a-card>
		</div>
	</section>
</template>

<style scoped></style>
