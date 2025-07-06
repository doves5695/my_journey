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
