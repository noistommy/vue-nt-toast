<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { reactive, getCurrentInstance } from 'vue'

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
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" 
    @click="showToast('attention')" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
    <button @click="clearToast">Clear</button>
  </header>

  <main>
    <TheWelcome />
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

@media (min-width: 1024px) {
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
}
</style>
