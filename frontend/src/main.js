import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import store from './store';

import './axios';
import './style.scss';
import App from './App.vue';



const pinia = createPinia();
const app = createApp(App);

app.use(store);
app.use(pinia);
app.use(router);
app.mount('#app');
