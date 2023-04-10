<script lang="ts" setup>
import { ref } from 'vue'
import Vue3EasySwiper from '../lib/index.vue'
// import { vueEasySwiperGlobal } from 'vue3-easy-swiper'

const list = ref([
  {
    url: 'https://api.yezipi.net/public/poster/46.jpg?x-oss-process=image/resize,w_150',
    title: '广西防城港簕山古渔村'
  },
  {
    url: 'https://api.yezipi.net/public/poster/9.jpg?x-oss-process=image/resize,w_150',
    title: '桂林城市风景'
  },
  {
    url: 'https://yezipi.oss-cn-beijing.aliyuncs.com/blog/cover/yezipi_1661998071775.jpg?x-oss-process=image/resize,w_150',
    title: '南京城市风景'
  },
  {
    url: 'https://yezipi.oss-cn-beijing.aliyuncs.com/blog/cover/yezipi_1661961859446.jpg?x-oss-process=image/resize,w_150',
    title: '凤凰古城旅游风景'
  },
])

const changeList = () => {
  list.value = [
    {
      url: 'https://api.yezipi.net/public/poster/15.jpg?x-oss-process=image/resize,w_150',
      title: 'test'
    },
    {
      url: 'https://api.yezipi.net/public/poster/2.jpg?x-oss-process=image/resize,w_150',
      title: 'test'
    }
  ]
}

const add = () => {
  list.value.push({
    url: 'https://yezipi.oss-cn-beijing.aliyuncs.com/blog/cover/yezipi_1661864496848.jpg?x-oss-process=image/resize,w_150',
    title: 'test'
  })
}

const remove = () => {
  list.value.splice(0, 1)
}

</script>

<template>
  <div class="easy-swiper-demo">
    <vue3-easy-swiper :list="list" style="width: 500px;height:300px">
      <template #swiperItem="{ item }">
        <img :src="item.url" style="width: 100%;height: 100%;" />
      </template>
    </vue3-easy-swiper>

    <div class="demo-btn">
      <button @click="changeList">change</button>
      <button @click="add">add one</button>
      <button @click="remove">remove one</button>
    </div>

  </div>
</template>

<style>
#app {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.demo-btn {
  display: flex; justify-content: center;margin-top: 20px;
}
.demo-btn button { margin: 0 20px; }
</style>
