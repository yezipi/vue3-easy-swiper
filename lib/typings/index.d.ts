import Vue3EasySwiper from '../index.vue'
import { globalEasySwiper } from '../index'

export interface EasySwiperGlobal {
  install: (app: any, ...options: any[]) => any,
  Vue3EasySwiper: typeof Vue3EasySwiper
}

declare global {
  interface Window { 
    Vue: any
  }
}

export {
  Vue3EasySwiper
}

export default globalEasySwiper