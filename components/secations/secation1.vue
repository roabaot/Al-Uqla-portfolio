<template>
  <div id="sec1" class="background relative pt-20 pb-16 min-h-[100vh]">
    <div class="xs:h-full h-[calc(100vh-5rem)] max-w-[1200px] mx-auto md:px-2 px-6">
      <client-only>
        <SpeedDial :model="items" :radius="80" type="semi-circle" direction="left" :style="{ top: 'calc(50% - 2rem)', right: '24px' }" class="xs:visible invisible">
          <template #item="{ item }">
            <button class="flex items-center justify-center bg-white border border-[#593118] w-[32px] h-[32px] rounded-full" @click="item.command">
              <Icon :name="item.icon" size="32" color="#593118" class="p-1" />
            </button>
          </template>
          <template #button="{toggle}">
            <button class="flex items-center justify-center bg-white border border-[#593118] w-[48px] h-[48px] rounded-full" @click="toggle">
              <Icon name="arcticons:social" size="48" color="#593118" />
            </button>
          </template>
        </SpeedDial>
      </client-only>
      <div id="MainLayout" class="w-full absolute z-50 top-0 left-0">
        <div id="MainHeader" class="flex items-center w-full bg-transport">
          <div class="flex xs:justify-between justify-center gap-10 max-w-[1200px] w-full xs:px-3 py-5 mx-auto">
            <NuxtLink to="/" class="min-w-[170px] h-[55px] overflow-hidden xs:-mx-[58px]">
              <img src="/semwar.png" alt="semwar" class="-my-[55px] h-[150px] xs:w-[350px] w-full">
            </NuxtLink>

            <ul class="md:flex gap-2 hidden items-center justify-end text-xs text-black font-light px-2 h-10 max-w-[1200px]">
              <li class="px-3 py-1.5 text-xl rounded-md bg-[#3052c3] text-white cursor-pointer">
                <a href="#sec4">تواصل معنا</a>
              </li>
              <li class="px-3 py-1.5 text-xl rounded-md cursor-pointer">
                <a href="#sec3">معرض الاعمال</a>
              </li>
              <li class="px-3 py-1.5 text-xl rounded-md cursor-pointer" @click="intoSec2">
                <a href="#sec2">خدماتنا</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex xs:flex-row xs:justify-normal justify-around flex-col max-w-[1200px] h-full mx-auto items-center text-black">
        <div class="xs:w-[50%] w-[100%] xs:pt-0 pt-4 bg-lottie">
          <Lottie :options="lottieOption" class="w-[100%] rounded-full" />
        </div>

        <div class="text-right xs:w-[50%] w-[100%] xs:px-[72px] px-[42px]">
          <h1 class="xs:text-[30px] text-2xl">
            <span class="text-[#3052c3]">سيموار</span>
            للخدمات التقنية
          </h1>
          <h3 class="sm:text-lg mt-2">نقوم بتصميم المواقع الالكترونية وبناء مواقع الويب ومواقع الوردبريس وتطبيقات الموبايل</h3>
        </div>

        <div class="xs:hidden flex gap-3">
          <button v-for="(item, i) in items" :key="i" class="relative bg-white border border-[#593118] w-[36px] h-[36px] rounded-full" @click="item.command">
            <Icon :name="item.icon" size="32" color="#593118" class="p-1" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SpeedDial from 'primevue/speeddial';
import Lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '@/assets/img/lottie/design.json';

const items = ref([
  {
    label: 'instagram',
    icon: 'mdi:instagram',
    command: () => {
      alert('instagram')
    }
  },
  {
    label: 'facebook',
    icon: 'fa-brands:facebook-f',
    command: () => {
      alert('facebook')
    }
  },
  {
    label: 'twitter',
    icon: 'mdi:twitter',
    command: () => {
      alert('twitter')
    }
  },
  {
    label: 'whatsapp',
    icon: 'mdi:whatsapp',
    command: () => {
      alert('whatsapp')
    }
  }
])

const lottieOption = ref({
  animationData: animationData.default,
  style: {
    height: '400px'
  }
  // autoplay: false
})
const intoSec2 = () => {
  this.$refs['sec2'].scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="scss">
#sec1 {
  &.background {
    background-image: url(~/assets/img/bg-image.jpg);
    overflow: hidden;
  }

  &.bg-lottie svg {
    max-height: 400px !important;
  }
}
</style>