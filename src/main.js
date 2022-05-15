import { createApp } from 'vue'
import App from './App.vue'
import 'material-symbols/outlined.css';
import './styles/index.css';
import router from '@/router'
import {clickOutside} from '@/directives'

const app = createApp(App)
app.directive("click-outside",clickOutside)
app.use(router)
app.mount('#app')
