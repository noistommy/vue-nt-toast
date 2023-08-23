import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import NtToast from '../dist/nt-toast.es'
import '../dist/style.css'

const app = createApp(App)

app.use(NtToast).mount('#app')
