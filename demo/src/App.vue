<script setup>
import GetStarted from './components/GetStarted.vue'
import TheWelcome from './components/TheWelcome.vue'
import { ref, inject } from 'vue'

// const { proxy } = getCurrentInstance()
// const toast = proxy.$ntToast

const toast = inject('$ntToast')
const type = ref('default')

const theme = ref('system');
// const message = ref('This is test Toast')
let toastOption = {
  round: false,
  useTitle: true,
  useIcon: false,
  closeButton: true,
  theme: '', // 'light' | 'icon' | 'icon-bg' | 'line'
  position: 'bottom-right', // 'TL'|'TC'|'TR'|'BL'|'BC'|'BR'|'TFW'|'BFW'
  displayOnTop: true,
  snackbar: false,
  freeze: false,
  timeout: 5000
}
const setOption = (value) =>{
  toastOption = value
  showToast()
}
const setType = value => {
  type.value = value
   console.log(value)
  showToast()
}
const showToast = () => {
  toast.show(type.value, {title: type.value, description: 'This is test Toast'}, toastOption)
}
const clearToast = () => {
  toast.clearToast()
}

const selectTheme = (mode) => {
  const html = document.documentElement;
  theme.value = mode
  
  html.className = ''
  html.classList.add(`${mode}-mode`);
  
  sessionStorage.setItem('theme-mode', mode)
}

</script>

<template>
  <header>
    <div class="menu-wrapper">
      <nav>
        <!-- <li><div class="ga-button">A</div></li> -->
        <li>
          <div class="ga-buttons round">
            <div class="ga-button icon" :class="{selected: theme === 'light'}" @click="selectTheme('light')"><i class="xi-sun" /></div>
            <div class="ga-button icon" :class="{selected: theme === 'dark'}" @click="selectTheme('dark')"><i class="xi-moon" /></div>
            <div class="ga-button icon" :class="{selected: theme === 'system'}" @click="selectTheme('system')"><i class="xi-desktop" /></div>
          </div>
        </li>
        <li>
          <div class="ga-button icon">
            <i class="xi-github"></i>
            <a href="https://github.com/noistommy/vue-nt-toast.git" class="link" target="_blank"></a>
          </div>
        </li>
      </nav>
    </div>
    <div class="wrapper">
      <div class="greetings">
        <div class="main-title">Nt Toast</div>
        <!-- <div class="sub-title">Nt Toast</div> -->
        <button class="ga-button" :class="type" @click="showToast">show toast</button>
        <button class="ga-button secondary" @click="clearToast">clear</button>
      </div>
    </div>
  </header>

  <main>
    <GetStarted :theme-mode="theme" />
    <TheWelcome v-model="type" @setting="setOption" @update="setType"/>
  </main>
</template>

<style scoped>
  .menu-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    nav {
      display: flex;
      gap: 10px;
      li {
        list-style: none;
      }
    }
  }
.greetings {
  text-align:center;
}
main {
  margin-top: 100px;
}
.main-title {
  text-align: center;
  font-size: 3em;
  font-weight: 700;
}
.sub-title {
  margin-bottom: 10px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
/* 
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
}  */
</style>
