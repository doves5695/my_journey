<script setup>
import { h, onMounted, reactive, ref } from 'vue';


const items = ref([]);
const isLoading = ref(true);
const error = ref(null);

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

// 递归转换菜单数据
const transformMenuData = (menuData) => {
  return menuData.map(item => {
    const children = item.children ? transformMenuData(item.children) : undefined;
    return getItem(item.label, item.key, () => h(), children);
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

		items.value = transformMenuData(data.menus);

		state.rootSubmenuKeys = data.menus.map(menu => menu.key);

	} catch (err) {
		error.value = `加载菜单数据失败: ${err.message}`;
	} finally {
		isLoading.value = false;
	}
}


const handleClick = e => {
	console.log('click', e);
};

const renderTitle = ref('Default size card111')

onMounted(async () => {
	await fetchMenuData();
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
					<span class="font-bold bg-gradient-to-r bg-clip-text from-blue-400 to-orange-400 text-transparent">{{ renderTitle }}</span>
				</template>
				<p>card content</p>
				<p>card content</p>
				<p>card content</p>
			</a-card>
		</div>
	</section>
</template>

<style scoped></style>
