import { createApp } from 'vue'
import App from '../examples/App.vue'
import Vue3EasySwiper from 'vue3-easy-swiper'
import 'vue3-easy-swiper/dist/style.css'

const app = createApp(App)
app.use(Vue3EasySwiper)
app.mount('#app')