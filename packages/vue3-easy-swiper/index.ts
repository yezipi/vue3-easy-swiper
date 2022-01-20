import type { App } from 'vue'
import EasySwiper from './index.vue'

type SFCWithInstall<T> = T & { install(app: App): void }

// 安装
EasySwiper.install = (app: App) => {
  app.component(EasySwiper.name, EasySwiper)
}

// const V3EasySwiper: SFCWithInstall<typeof EasySwiper> = EasySwiper
export default EasySwiper