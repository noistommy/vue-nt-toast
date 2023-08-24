import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import NtToast from '../../src/index'
import '../../src/toast.scss'

app.use(NtToast).mount('#app')
