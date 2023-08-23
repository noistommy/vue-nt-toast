import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import NtToast from '../../src/index'
import '../../src/toast.scss'

const app = createApp(App)

app.use(NtToast).mount('#app')
