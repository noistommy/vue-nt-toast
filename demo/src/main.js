import './assets/main.css'
import './frogui.css'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// import NtToast from '../../dist/nt-toast.es'
// import '../../dist/toast.css'
import NtToast from '../../src/index'
import '../../src/toast.scss'
// import '../../node_modules/font-awesome/css/font-awesome.min.css'

app.use(NtToast).mount('#app')
