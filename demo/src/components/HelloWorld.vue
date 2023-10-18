<script setup>
import { reactive, getCurrentInstance } from 'vue'

defineProps({
  msg: {
    type: String,
    required: true
  }
})

const { proxy } = getCurrentInstance()
const toast = proxy.$gaToast

const toastOption = reactive({
  round: false,
  useTitle: true,
  useIcon: true,
  closeButton: true,
  theme: '', // 'light' | 'icon' | 'icon-bg' | 'line'
  position: 'top-right', // 'TL'|'TC'|'TR'|'BL'|'BC'|'BR'|'TFW'|'BFW'
  displayOnTop: true,
  snackbar: false,
  freeze: false,
  timeout: 5000
})

const showToast = type => {
  toast.show(type, {title: "Test Title", description: 'This is test Toast'}, toastOption)
}
const clearToast = () => {
  toast.clearToast()
}

</script>

<template>
  <div class="greetings">
    <h1 class="header">{{ msg }}</h1>
    <button class="ga-button primary" @click="showToast('success')">show toast</button>
    <button class="ga-button secondary" @click="clearToast">clear</button>
  </div>
</template>

<style scoped>
/* h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
} */

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
