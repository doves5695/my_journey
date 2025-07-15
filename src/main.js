import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import router from './router';
import App from './App.vue';
import ElementPlus from 'element-plus';

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(ElementPlus).mount('#app');
