<template>
  <div id="sec2" class="py-16 max-w-[1200px] mx-auto md:px-2 px-6">
    <div class="text-center py-16 service">
      <h2 class="text-[1.25rem] text-[#3052c3]">خدماتنا</h2>
      <p class="xs:text-[2.5rem] text-2xl text-[#593118] mb-4">
        نقوم بتقديم أفضل الخدمات التقنية
      </p>
    </div>
    <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pb-6">
      <div v-for="(service, i) in services" :key="i" class="text-right service">
        <div class="rounded-[10px] bg-[#F0F6FF] p-6 hover:-mt-[15px] hover:shadow-[0_0.5rem_1.5rem_rgba(0,0,0,0.08)] duration-500 mb-4">
          <div class="w-[60px] h-[60px] flex items-center justify-center border border-[#593118] bg-white rounded-full mb-6 ml-auto">
            <ClientOnly>
              <Icon :name="service.icon" size="48" color="#593118" class="p-1" />
            </ClientOnly>
          </div>
          

          <h3 class="mb-5 font-semibold text-[#593118]">
            {{ service.title }}
          </h3>

          <p class="text-[#593118] service-desc">
            {{ service.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  {
    icon: 'arcticons:infinite-painter',
    title: 'تصميم مواقع الويب وتطبيقات الموبايل',
    desc: 'تصمم واجهات المستخدم ذات طابع جذاب وملفت والذي يتوافق مع مختلف الشاشات'
  },
  {
    icon: 'arcticons:wordpress',
    title: 'بناء مواقع الوردبريس',
    desc: 'بناء مواقع الوردبريس بتصميم سلس وجذاب وأداء عالي وسرعة خيالية'
  },
  {
    icon: 'arcticons:learn-javascript',
    title: 'بناء مواقع الويب',
    desc: 'بناء مواقع الويب و APIs وتجهيز لوحة تحكم سهلة الاستخدام'
  },
  {
    icon: 'arcticons:huawei-findmyphone',
    title: 'بناء تطبيقات الموبايل',
    desc: 'تصميم وبناء تطبيقات الموبايل بإستخدام Cross Platform و Native'
  },
])

const orderAnimate = () => {
  return new Promise(resolve => setTimeout(resolve, 250))
}
async function animate () {
  var Services = document.querySelectorAll(".service");
  for (var i = 0; i < Services.length; i++) {
    if (process.client) {
      var windowHeight = window.innerHeight;
    }
    var elementTop = Services[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      Services[i].classList.add("active");
      await orderAnimate()
    }
  }
}

if (process.client) {
  window.addEventListener("scroll", animate);
}
</script>

<style lang="scss" scoped>
.service.active{
  transform: translateY(0) !important;
  opacity: 1 !important;
}

.service{
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;

  .service-desc {
    unicode-bidi: plaintext;
  }
}
</style>