import EasySwiper from './index.vue'
import { vueEasySwiperGlobal } from './typings/index'
// type SFCWithInstall<T> = T & { install(app: App): void }

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  (window as any).Vue.createApp({}).component('easy-swiper', EasySwiper);
}

// 安装
const install = (app: any) => {
  app.component('asy-swiper', EasySwiper)
}

const globalEasySwiper: vueEasySwiperGlobal = {
  install,
  EasySwiper,
}

export {
  EasySwiper,
}

// const V3EasySwiper: SFCWithInstall<typeof EasySwiper> = EasySwiper
export default globalEasySwiper