import js from '@eslint/js';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs,vue}'],
		plugins: { js },
		extends: ['js/recommended'],
	},
	{
		files: ['**/*.{js,mjs,cjs,vue}'],
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
	},
	// { rules: { 'no-console': 'warn' } },
	pluginVue.configs['flat/essential'],
	eslintPluginPrettierRecommended,
]);
