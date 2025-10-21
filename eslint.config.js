import js from '@eslint/js';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
	{
		files: ['**/*.{js,mjs,cjs}'],
		...js.configs.recommended,
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
		},
		rules: {
			// 添加缩进规则配置
			'indent`': ['error', 'tab'], // 使用 tab 缩进
			// 或者使用空格：
			// 'indent': ['error', 2] // 使用 2 个空格
		},
	},
	{
		files: ['**/*.vue'],
		...pluginVue.configs['flat/essential'],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
		},
		rules: {
			'vue/multi-word-component-names': 'off',
		},
	},
	eslintPluginPrettierRecommended,
];
