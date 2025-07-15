<script setup>
import { reactive } from 'vue';

const loginform = reactive({
	username: '',
	password: '',
});
</script>

<template>
	<section class="flex w-full items-center justify-center">
		<el-form ref="form" :model="loginform" class="flex max-w-[600px] flex-col" label-width="auto">
			<el-form-item label="UserName" class="flex items-center gap-4">
				<el-input v-model="loginform.user" placeholder="UserName" />
			</el-form-item>
			<el-form-item label="Password" class="flex items-center gap-4">
				<el-input v-model="loginform.password" type="password" placeholder="password" />
			</el-form-item>
		</el-form>
	</section>
</template>

<style scoped></style>
