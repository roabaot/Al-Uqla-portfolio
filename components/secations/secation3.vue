<template>
  <div id="sec3" class="mt-16 max-w-[1200px] mx-auto md:px-2 px-6">
    <div id="title" class="text-center py-16">
      <h2 class="text-[1.25rem] text-[#3052c3]">اعمالنا</h2>
      <p class="xs:text-[2.5rem] text-2xl text-[#593118] mb-4">
        ستجد هنا  أبرز الاعمال التي تم تقديمها
      </p>
    </div>

    <div>
      <div class="md:flex block border rounded-[10px] bg-[#F0F6FF] overflow-hidden mb-16 md:h-[550px] w-full">
        <div class="h-full">
          <img src="~/assets/img/vcvv-min.jpg" alt="" class="h-full w-full">
        </div>
        <div class="relative p-6 pb-[5rem]">
          <h2 class="xs:text-[36px] text-2xl text-center mb-3">وكالة مرجان</h2>
          <p class="mb-3 text-lg text-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, voluptate aspernatur molestias reiciendis dolorem consequatur ab sunt eligendi illum accusamus quod earum ullam sit id aliquid ipsam sequi molestiae sapiente?</p>

          <div class="border-b mb-3" />

          <div class="flex flex-wrap items-center md:justify-center justify-end gap-2 relative -top-1 mb-3">
            <span class="bg-[#3052c3] border text-white xs:text-[12px] text-[9px] font-semibold px-1.5 py-0.5 rounded-md">تصميم الواجهات</span>
            <span class="bg-[#F5F5F5] border text-[#C08562] xs:text-[12px] text-[9px] font-semibold px-1.5 py-0.5 rounded-md">بناء موقع الويب</span>
            <span class="bg-[#F5F5F5] border text-[#be198d] xs:text-[12px] text-[9px] font-semibold px-1.5 py-0.5 rounded-md">بناء لوحة التحكم</span>
            <!-- <span class="bg-[#FD374F] text-white text-[9px] font-semibold px-1.5 py-0.5 rounded-md">بناء لوحة التحكم</span> -->
          </div>

          <div class="absolute bottom-[2rem] right-[2rem]">
            <a href="#sec4" class="bg-[#593118] rounded-md text-white xs:text-lg px-6 py-1">
              طلب مشروع جديد
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
async function animate () {
  var title = document.getElementById('title');
  if (process.client) {
    var windowHeight = window.innerHeight;
  }
  var elementTop = title.getBoundingClientRect().top;
  var elementVisible = 0;

  if (elementTop < windowHeight - elementVisible) {
    title.classList.add("active");
  }
}

if (process.client) {
  window.addEventListener("scroll", animate);
}
</script>

<style lang="scss" scoped>
#title.active{
  transform: translateY(0) !important;
  opacity: 1 !important;
}

#title{
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;
}
</style>