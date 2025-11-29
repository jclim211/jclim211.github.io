import { createApp } from 'vue'
import router from './router/routes.js'
import App from './App.vue'

// Import Bootstrap CSS (npm install bootstrap)
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JS (npm install bootstrap)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App)

app.use(router)

app.mount('#app')
