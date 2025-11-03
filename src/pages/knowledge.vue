<script setup>
import { da } from 'element-plus/es/locales.mjs';
import { h, onMounted, reactive, ref } from 'vue';


const items = ref([]);
const isLoading = ref(true);
const error = ref(null);
const menuData = ref([]); 

const state = reactive({
	rootSubmenuKeys: ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'],
	openKeys: ['sub1'],
	selectedKeys: [],
});

const getItem = (label, key, children) => (
	{
		label,
		key,
		children,
	}
)
const renderTitle = ref('')


// 递归转换菜单数据
const transformMenuData = (menuData) => {
	return menuData.map(item => {
		const children = item.children ? transformMenuData(item.children) : undefined;
		return getItem(item.label, item.key, children);
	});
};


const fetchMenuData = async () => {
	try {
		isLoading.value = true;
		error.value = null;

		const response = await fetch('/public/data/menus.json');


		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();

		menuData.value = data.menus;

		renderTitle.value = getTitle(data.menus)

		items.value = transformMenuData(data.menus);

		state.rootSubmenuKeys = data.menus.map(menu => menu.key);

	} catch (err) {
		error.value = `加载菜单数据失败: ${err.message}`;
	} finally {
		isLoading.value = false;
	}
}


const getTitle = (data, key) => {
	for (const item of data) {
		if (item.key === key) {
			renderTitle.value =  item.title || item.label;
		}
		if (item.children) {
			const title = getTitle(item.children, key);
			if (title) {
				renderTitle.value = title;
			}
		}
	}
}

const handleClick = e => {
	getTitle(menuData.value, e.key)
};


onMounted(async () => {
	await fetchMenuData();
	getTitle(menuData.value, '1')
})

</script>

<template>
	<section class="flex flex-grow overflow-hidden">
		<div class="bg-white w-[240px] overflow-auto">
			<a-menu v-model:selectedKeys="state.selectedKeys" style="width: 240px" mode="inline"
				:open-keys="state.openKeys" :items="items" @click="handleClick"></a-menu>
		</div>
		<div class="w-[calc(100%-240px)] overflow-auto">
			<a-card style="height: 100%;">
				<template #title>
					<span
						class="font-bold bg-gradient-to-r bg-clip-text from-blue-400 to-orange-400 text-transparent">{{
							renderTitle }}</span>
				</template>
				<p>card content</p>
				<p>card content</p>
				<p>card content</p>
			</a-card>
		</div>
	</section>
</template>

<style scoped></style>
