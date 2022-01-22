import Vue3EasySwiper from './index.vue'
import { EasySwiperGlobal } from './typings/index'
// type SFCWithInstall<T> = T & { install(app: App): void }

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  (window as any).Vue.createApp({}).component('vue3-easy-swiper', Vue3EasySwiper);
}

// 安装
const install = (app: any) => {
  app.component('vue3-easy-swiper', Vue3EasySwiper)
}

export const globalEasySwiper: EasySwiperGlobal = {
  install,
  Vue3EasySwiper,
}

export {
  Vue3EasySwiper,
}

// const V3EasySwiper: SFCWithInstall<typeof EasySwiper> = EasySwiper
export default globalEasySwiper