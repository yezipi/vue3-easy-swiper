import EasySwiper from '../index.vue'
import { globalEasySwiper } from '../index'

export interface vueEasySwiperGlobal {
  install: (app: any, ...options: any[]) => any,
  EasySwiper: typeof EasySwiper
}

declare global {
  interface Window { 
    Vue: any
  }
}

export {
  EasySwiper
}

export default globalEasySwiper