## vue3-easy-swiper

*   基于 Vue3.0 + ts 开发
*   轻量、简易，支持无缝轮播

## Usage
You can view more from examples/App.vue

## Install

```javascript
npm i vue3-easy-swiper --save
```

## demo
![with dots](https://yezipi.oss-cn-beijing.aliyuncs.com/2022-01-23_11-20-06.gif)
![with title](https://yezipi.oss-cn-beijing.aliyuncs.com/2022-01-23_11-20-46.gif)

## [github](https://github.com/yezipi/vue3-easy-swiper)
## [my blog](https://yezipi.net)
## components

```javascript
import { Vue3EasySwiper } from 'vue3-easy-swiper'

// if in nuxt3 this style should be imported in the style section
import 'vue3-easy-swiper/dist/style'

// the url filed is useing on img src of default slot
const list = [
  {
    url: 'http://pic1.win4000.com/wallpaper/3/57ac4130c083a_270_185.jpg',
    title: 'this is some title',
    color: 'red',
  },
  {
    url: 'http://pic1.win4000.com/wallpaper/5/577e17894c4c7_270_185.jpg',
    title: 'this is title2',
    color: 'green',
  },
]

// if use default slot, the url field is required, default show img tag
<vue3-easy-swiper :list="list" style="width: 500px;height:300px"></vue3-easy-swiper>

// if use slot, you should set width and height of the container
<vue3-easy-swiper :list="list" style="width: 500px;height:300px">
  <template #swiperItem="{ item }">
    <img :src="item.url" style="width: 100%;height: 100%;" />
  </template>
</vue3-easy-swiper>
```

## main.ts

```javascript
import { createApp } from 'vue'
import App from '../examples/App.vue'
import Vue3EasySwiper from 'vue3-easy-swiper'
import 'vue3-easy-swiper/dist/style.css'

const app = createApp(App)
app.use(Vue3EasySwiper)
app.mount('#app')
```

## props

| 属性          | 说明                     | 默认 |
| ------------- | ------------------------ | ---- |
| list      | 数组，格式: [{ url: 'xxx', title: 'xxx' }]             | [] |
| autoplay      | 是否自动轮播             | true |
| interval      | 每两次隔多久滚动一次     | 3000 |
| duration      | 每次滚动一页需要多久时间 | 300  |
| showDots | 是否显示轮播的那个点     | false |
| showTitle | 是否显示底部标题     | true |
| showArrow | 是否显示轮播左右箭头     | true |
| direction | 滚动方向, prev：往右滚动，next：往左滚动    | next |

## enevts
| 事件名称          | 说明                     | 返回值 |
| ------------- | ------------------------ | ---- |
| change      | 滚动完成后的回调 | 当前索引index |
| click      | 每个轮播图上的点击事件 | 当前点击项 |

## slot
| 插槽名称          | 说明                     | 返回值 |
| ------------- | ------------------------ | ---- |
| swiperItem      | 在每一项里面的内容 | 返回item |
| swiperCustom      | 自定义覆盖内容 | 无 |
| swiperLeftButton      | 左边自定义按钮 | 无 |
| swiperRightButton      |右边自定义按钮 | 无 |

