<script setup>
import TheWelcome from './components/TheWelcome.vue'
import { ref, getCurrentInstance, inject } from 'vue'

// const { proxy } = getCurrentInstance()
// const toast = proxy.$ntToast

const toast = inject('$ntToast')
const type = ref('success')
let toastOption = {
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
}
const setOption = (value) => toastOption = value
const setType = value => type.value = value
const showToast = () => {
  toast.show(type.value, {title: "Test Title", description: 'This is test Toast'}, toastOption)
}
const clearToast = () => {
  toast.clearToast()
}

</script>

<template>
  <header>
    <div class="wrapper">
      <div class="greetings">
        <h1 class="header">Nt Toast</h1>
        <button class="ga-button" :class="type" @click="showToast">show toast</button>
        <button class="ga-button secondary" @click="clearToast">clear</button>
      </div>
    </div>
  </header>

  <main>
    <TheWelcome v-model="type" @setting="setOption" @update="setType"/>
  </main>
</template>








<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
