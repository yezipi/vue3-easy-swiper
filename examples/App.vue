<script lang="ts" setup>
import { ref } from 'vue'
import Vue3EasySwiper from '../lib/index.vue'
// import { vueEasySwiperGlobal } from 'vue3-easy-swiper'

const currIndex = ref(0)
const currItem = ref<any>({})

const list = ref([
  {
    url: 'https://www.xrhhg.com/upfile/2015/03/31/20150331093017_583.jpg',
    title: '广西防城港簕山古渔村',
    color: 'darkorange'
  },
  {
    url: 'https://www.xrhhg.com/upfile/2015/04/28/20150428113410_176.png',
    title: '桂林城市风景',
    color: 'darkgreen'
  },
  {
    url: 'https://yezipi.oss-cn-beijing.aliyuncs.com/blog/cover/yezipi_1661998071775.jpg?x-oss-process=image/resize,w_150',
    title: '南京城市风景',
    color: 'darkred'
  },
  {
    url: 'https://yezipi.oss-cn-beijing.aliyuncs.com/blog/cover/yezipi_1661961859446.jpg?x-oss-process=image/resize,w_150',
    title: '凤凰古城旅游风景',
    color: 'darkgoldenrod',
  },
])

function changeList() {
  list.value = [
    {
      url: 'https://www.xrhhg.com/upfile/2015/04/28/20150428115437_337.png',
      title: 'test',
      color: 'purple',
    },
    {
      url: 'https://www.xrhhg.com/upfile/2017/07/20170721110509_901.jpg',
      title: 'test',
      color: 'orange',
    }
  ]
}

function add() {
  list.value.push({
    url: 'https://yezipi.oss-cn-beijing.aliyuncs.com/blog/cover/yezipi_1661864496848.jpg?x-oss-process=image/resize,w_150',
    title: 'test',
    color: 'red',
  })
}

function remove() {
  list.value.splice(0, 1)
}

function onSwiperChange(index: number)  {
  console.log('currentIndex:', index)
  currIndex.value = index
}

function onItemClick(item: any) {
  alert(item.title)
}

</script>

<template>
  <div class="easy-swiper-demo">

    <h2>Use default slot, it is img element</h2>
    <vue3-easy-swiper 
      :list="list"
      style="width: 500px;height:300px"
      showDots
      @change="onSwiperChange"
      @click="onItemClick"
    >
    </vue3-easy-swiper>

    <h2>Use custom slot</h2>
    <vue3-easy-swiper 
      :list="list"
      style="width: 500px;height:300px"
      @change="onSwiperChange"
      @click="onItemClick"
    >
      <template #swiperItem="{ item }">
        <div :style="{ background: item.color, height: '100%' }">{{ item.title }}</div>
      </template>
      <template #swiperCustom>
        <div class="custom-box">this is custom mask</div>
      </template>
    </vue3-easy-swiper>
    
    <div style="margin-top: 10px;">
      <div>index: {{ currIndex }}</div>
      <div>item: {{ currItem.title }}</div>
    </div>

    <div class="demo-btn">
      <button @click="changeList">change</button>
      <button @click="add">add one</button>
      <button @click="remove">remove one</button>
    </div>

  </div>
</template>

<style>
.easy-swiper-demo {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.demo-btn {
  display: flex; justify-content: center;margin-top: 20px;
}
.demo-btn button { margin: 0 30px; }
.custom-box {
  width: 300px;
  height: 50px;
  background: #fff;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
