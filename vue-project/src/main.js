import './assets/style.css';
import 'primeicons/primeicons.css';
import 'vue-toastification/dist/index.css';
import router from './router';
import Toast from 'vue-toastification';

import { createApp } from 'vue'
import App from './components/App.vue'

const app=createApp(App);
app.use(router);
app.use(Toast);
app.mount('#app');
