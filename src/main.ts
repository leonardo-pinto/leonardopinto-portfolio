import { createApp } from 'vue'
import App from './App.vue'
import 'primevue/resources/themes/saga-blue/theme.css';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';

const app = createApp(App)
app.use(PrimeVue)
app.component('Button', Button)
app.mount('#app')


