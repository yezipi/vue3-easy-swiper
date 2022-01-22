import { createApp } from 'vue'
import App from '../examples/App.vue'
import Vue3EasySwiper from '../lib'
import 'vue3-easy-swiper/dist/style.css'

const app = createApp(App)
app.use(Vue3EasySwiper)
app.mount('#app')