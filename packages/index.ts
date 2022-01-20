import type { App } from 'vue'

/* 基础组件 start */
import EasySwiper from './vue3-easy-swiper'
/* 基础组件 end */

// 所有组件
const components: any[] = [EasySwiper]

/**
 * 组件注册
 */
const install = (app: App) => {
  components.forEach(component => app.component(component.name, component))
}

export { EasySwiper }

// 全部导出
export default {
  install,
  ...components
}