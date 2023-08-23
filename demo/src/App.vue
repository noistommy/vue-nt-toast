<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { getCurrentInstance } from 'vue'

const app = getCurrentInstance()
const toast = app.appContext.config.globalProperties.$gaToast

const toastOption = {
  round: false,
  useTitle: true,
  useIcon: true,
  closeButton: true,
  theme: '',
  position: 'top-right',
  displayOnTop: true,
  snackbar: false,
  freeze: true,
  timeout: 5000
}

const showToast = type => {
  console.log(type)
  toast.show(type, {title: "Test Title", description: 'This is test Toast'}, toastOption)
}

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" @click="showToast('info')" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
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
