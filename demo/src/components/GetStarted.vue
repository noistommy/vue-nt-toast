<script setup>
import WelcomeItem from './WelcomeItem.vue'
import { createHighlighter } from 'shiki'

import {ref, watch} from 'vue'

const props = defineProps({
  themeMode: {
    type: String,
    default: 'system'
  }
})

const codeInstall = '$ npm install vue-nt-toast'

const codeRegist = `// main.js
import { createApp } from “vue”;
import NtToast from “vue-nt-toast”;
import “vue-nt-toast/toast.css”;
 
const app = createApp(App)
// You can set your initial options here
const defaultOptions = {};
app.use(NtToast, defaultOptions)
`
const codeUsage = `
  <!-- get Proxy in current instance -->
  <!-- import { getCurrentInctance } from 'vue' -->
  import { inject } from 'vue'
  <!-- composition api or setup -->
  <!-- const { proxy } = getCurrentInstance(); -->

  const toast = inject('$ntToast')
  <!-- show toast -->
  toast.show('success', ..., ...)
  toast.show('info', ..., ...)
  toast.show('danger', ..., ...)
`
const installCode = ref(null)
const registCode = ref(null)
const usageCode = ref(null)

const mode = ref(props.themeMode)
const highlight = async () => {
  if (props.themeMode === 'system') {
    mode.value = window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light'
  } else {
    mode.value = props.themeMode
  }
  
  // console.log(props.themeMode, mode.value)
  const highlighter = await createHighlighter({
    langs: ['bash', 'js', 'vue'],
    themes: ['vitesse-light', 'rose-pine-dawn', 'github-light', 'github-dark'],
  })

  await highlighter.loadTheme('github-light')
  await highlighter.loadTheme('github-dark')
  await highlighter.loadLanguage('bash')
  await highlighter.loadLanguage('js')
  await highlighter.loadLanguage('vue')

  installCode.value = highlighter.codeToHtml(codeInstall, {
    lang: 'bash',
    theme: `github-${mode.value}`,
  })
  registCode.value = highlighter.codeToHtml(codeRegist, {
    lang: 'js',
    theme: `github-${mode.value}`,
  })
  usageCode.value = highlighter.codeToHtml(codeUsage, {
    lang: 'vue',
    theme: `github-${mode.value}`,
  })
}
// onMounted(() => highlight())

watch(() => props.themeMode, highlight, {immediate:true})

</script>

<template>
  <WelcomeItem>
    <template #icon>
      <div class="xi-desktop"></div>
    </template>
    <template #heading>Installation</template>
    <div class="code-wrapper border">
      <span class="lang">bash</span>
      <div v-html="installCode"></div>
    </div>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <div class="xi-plug"></div>
    </template>
    <template #heading>Registration</template>
    <div class="code-wrapper border">
      <span class="lang">js</span>
      <div v-html="registCode"></div>
    </div>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <div class="xi-user"></div>
    </template>
    <template #heading>Usage</template>
    <div class="code-wrapper border">
      <span class="lang">vue</span>
      <div v-html="usageCode"></div>
    </div>
  </WelcomeItem>
</template>

<style lang="scss"> 

.code-wrapper {
  position: relative;
  background-color: var(--suf);
  margin-bottom: 5px;
  border-radius: 4px;
  &.border {
    border: 1px solid var(--brd);
  }
  > span.lang {
    position: absolute;
    right: 0.75rem;
    top: 0.5rem;
    font-family: monospace;
    font-size: 0.75rem;
    letter-spacing: -0.05em;
    color: rgba(107, 114, 128, 0.85);
  }
  pre.shiki {
    overflow: auto;
    border-radius: 0.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    background-color: transparent !important;
    code {
      font-family: monospacer;
    }
  }
}

</style>