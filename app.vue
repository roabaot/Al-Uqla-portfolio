<template>
  <div v-if="loading" class="fixed left-0 top-0 w-full z-[1000] bg-white h-screen flex items-center justify-center">
    <div class="text-center">
      <Icon name="svg-spinners:blocks-wave" size="48" color="#593118" class="mb-3" />
      <h2 class="text-[#593118] text-[24px]">جاري تحميل الصفحة</h2>
    </div>
  </div>
  <div v-else class="fixed z-[-1] bg-[#fff] w-full h-screen" />
  <NuxtPage />
</template>

<script setup>
const nuxtApp = useNuxtApp();
const loading = ref(true);
// nuxtApp.hook("page:start", () => {
//   loading.value = true;
// });
// function loadingPage() {
  nuxtApp.hook("page:finish", () => {
    loading.value = false;
  });
// }

// loadingPage()

// function reloadLoading () {
//   if (!loading.value) {
//     setTimeout(() => {
//       loading.value = false;
//     }, 10000);
//   }
// }

// onMounted(() => {
//   reloadLoading()
// })
</script>
