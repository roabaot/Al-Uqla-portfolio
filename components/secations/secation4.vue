<template>
  <div
    id="sec4"
    class="mt-16 md:px-2 px-6 py-16 bg-[linear-gradient(to_right_bottom,rgb(48,82,195,0.8),rgba(16,71,52,0.8)),url('~/assets/img/vcvv-min.jpg')]">
    <div class="flex flex-col items-center max-w-[1200px] mx-auto">
      <div class="text-center md:w-[480px] w-full">
        <h2 class="text-lg mb-2 text-white">تواصل معنا</h2>
        <h3 class="text-2xl mb-12 text-white">
          يمكنك ارسال طلبك هنا
        </h3>

        <form @submit.prevent="onSubmit" class="flex flex-col gap-2">
          <div class="">
            <InputText id="email" v-model="email" type="text" class="text-right w-full" :class="{ 'p-invalid': emailErrMsg }"
              aria-describedby="text-error" placeholder="البريد الإلكتروني" />
            <div class="p-error" id="text-error">{{ emailErrMsg || '&nbsp;' }}</div>
          </div>
          <div class="">
            <InputText id="title" v-model="title" type="text" class="text-right w-full" :class="{ 'p-invalid': titleErrMsg }"
              aria-describedby="text-error" placeholder="العنوان" />
            <div class="p-error" id="text-error">{{ titleErrMsg || '&nbsp;' }}</div>
          </div>
          <div class="">
            <Textarea id="desc" v-model="desc" type="text" class="text-right w-full" :class="{ 'p-invalid': descErrMsg }"
              aria-describedby="text-error" placeholder="الوصف" />
            <div class="p-error -mt-1" id="text-error">{{ descErrMsg || '&nbsp;' }}</div>
          </div>

          <Button type="submit" label="إرسال" class="mt-3" />
        </form>

        <!-- <Divider align="center">
          <b>أو</b>
        </Divider> -->
        <div class="divider flex items-center mt-8">
          <p class="px-4 text-white">أو</p>
        </div>
        <h3 class="text-lg mb-6 text-white">
          التواصل معنا عبر
        </h3>

        <div class="flex gap-3 justify-center">
          <button v-for="(item, i) in items" :key="i" class="relative border border-white w-[36px] h-[36px] rounded-full" @click="item.command">
            <Icon :name="item.icon" size="32" color="#FFF" class="p-1" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';

const email = ref('')
const title = ref('')
const desc = ref('')
const isVaildEmail = ref(false)
const isVaildTitle = ref(false)
const isVaildDesc = ref(false)
const emailErrMsg = ref('')
const titleErrMsg = ref('')
const descErrMsg = ref('')

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


const onSubmit = () => {
  emailErrMsg.value = ''
  titleErrMsg.value = ''
  descErrMsg.value = ''
  isVaildEmail.value = false
  isVaildTitle.value = false
  isVaildDesc.value = false

  if (email.value == '') {
    isVaildEmail.value = true
    emailErrMsg.value = 'البريد الإلكتروني ضروري'
  } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
    isVaildEmail.value = true
    emailErrMsg.value = 'تأكد من صحة البريد الإلكتروني'
  }
  if (title.value == '') {
    isVaildTitle.value = true
    titleErrMsg.value = 'العنوان ضروري'
  } else if (title.value.length <= 3) {
    isVaildTitle.value = true
    titleErrMsg.value = 'يجب أن يكون العنوان أكثر من 3 حروف'
  }
  if (desc.value == '') {
    isVaildDesc.value = true
    descErrMsg.value = 'الزصف ضروري'
  } else if (desc.value.length <= 3) {
    isVaildDesc.value = true
    descErrMsg.value = 'يجب أن يكون الوصف أكثر من 3 حروف'
  }
  
  if (isVaildDesc.value == true || isVaildEmail.value == true || isVaildTitle.value == true) {
    return
  }
};
</script>

<style lang="scss" scoped>
.divider {
  &::before {
    content: '';
    height: 1px;
    display: flex;
    background-color: white;
    width: 100%;
  }
  &::after {
    content: '';
    height: 1px;
    display: flex;
    background-color: white;
    width: 100%;
  }
}
</style>