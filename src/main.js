import { createApp } from 'vue'
import App from './App.vue'

import primeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'

import router from './router.js';

const app = createApp(App);

app.use(primeVue);
app.use(router);

app.mount('#app')
