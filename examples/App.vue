<script lang="ts" setup>
import Vue3EasySwiper from '../lib/index.vue'
// import { vueEasySwiperGlobal } from 'vue3-easy-swiper'

const list = [
  {
    url: 'http://pic1.win4000.com/wallpaper/3/57ac4130c083a_270_185.jpg',
    title: '广西防城港簕山古渔村'
  },
  {
    url: 'http://pic1.win4000.com/wallpaper/5/577e17894c4c7_270_185.jpg',
    title: '桂林城市风景'
  },
  {
    url: 'http://pic1.win4000.com/wallpaper/7/57a96e6a4fdb9_270_185.jpg',
    title: '南京城市风景'
  },
  {
    url: 'http://pic1.win4000.com/wallpaper/7/57a972bf6304d_270_185.jpg',
    title: '凤凰古城旅游风景'
  },
]
</script>

<template>
  <div class="easy-swiper-demo">
    <vue3-easy-swiper :list="list" style="width: 500px;height:300px">
      <template #swiperItem="{ item }">
        <img :src="item.url" style="width: 100%;height: 100%;" />
      </template>
    </vue3-easy-swiper>
  </div>
</template>

<style>
#app {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
