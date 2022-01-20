## vue3-easy-swiper

*   基于 Vue3.0 开发
*   目前支持 无缝衔接自动轮播、无限轮播。
*   没有引入第三方库，原生 js 封装。

## Install

```javascript
npm i vue3-easy-swiper --save
```

## [github地址](https://github.com/yezipi/vue3-easy-swiper)

## demo

![效果](http://yangpin.shop/file20220139e6bd4047bf7200.png)

## Usage

```javascript
const list = [
  {
    url: 'http://pic1.win4000.com/wallpaper/3/57ac4130c083a_270_185.jpg',
    title: '标题1'
  },
  {
    url: 'http://pic1.win4000.com/wallpaper/5/577e17894c4c7_270_185.jpg',
    title: '标题2'
  },
]
<easy-swiper :list="list"></easy-swiper>
```

## API

| 属性          | 说明                     | 默认 |
| ------------- | ------------------------ | ---- |
| list      | 数组，格式: [{ url: 'xxx', title: 'xxx' }]             | [] |
| autoplay      | 是否自动轮播             | true |
| interval      | 每两次隔多久滚动一次     | 3000 |
| duration      | 每次滚动一页需要多久时间 | 300  |
| showDots | 是否显示轮播的那个点     | true |
| showTitle | 是否显示底部标题     | true |
| showArrow | 是否显示轮播左右箭头     | true |
| direction | 滚动方向, prev：往右滚动，next：往左滚动    | next |

## 事件

```
change 事件 滚动完成后的回调，返回索引
click  事件 每个轮播图上的事件
```

## 插槽

*   swiperItem  在每一项里面的内容
*   swiperCustomButton 自定义按钮，会覆盖默认按钮，也可以说是循环内容之外的额外内容
*   swiperLeftButton 左边自定义按钮
*   swiperRightButton 右边自定义按钮
