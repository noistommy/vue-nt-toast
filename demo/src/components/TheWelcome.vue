<script setup>
import WelcomeItem from './WelcomeItem.vue'
import { reactive, defineEmits, watch, defineProps } from 'vue';

const themeList = ['default', 'light', 'icon', 'icon-bg', 'line']
const colorList = ['success', 'danger', 'importance', 'attention', 'info']
const colorList2 = ['red', 'sunset', 'orange', 'amber', 'yellow', 'citron', 'lime', 'green', 'mint',
'teal', 'cyan', 'blue', 'indigo', 'purple', 'pink', 'rose']
const toastColor = {
  red: '#D93B3B',
  sunset: '#D44D32',
  orange: '#D95B2C',
  amber: '#D3873F',
  yellow: '#F5B54D',
  citron: '#CAC747',
  lime: '#85AB39',
  green: '#48992F',
  mint: '#3A874F',
  teal: '#449698',
  cyan: '#4D9BCC',
  blue: '#4E7AF8',
  indigo: '#5642ED',
  purple: '#8756F3',
  pink: '#BF3DA0',
  rose: '#BB3A62',
}

const positionList = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right', 'top-full-width', 'bottom-full-width']
const emit = defineEmits(['setting','update:modelValue'])

const props = defineProps({
  modelValue: String
})
const toastOption = reactive({
  round: false,
  useTitle: true,
  useIcon: true,
  closeButton: true,
  theme: 'default', // 'light' | 'icon' | 'icon-bg' | 'line'
  position: 'top-right', // 'TL'|'TC'|'TR'|'BL'|'BC'|'BR'|'TFW'|'BFW'
  displayOnTop: true,
  snackbar: false,
  freeze: false,
  timeout: 5000
})

watch(toastOption, () => emit('setting', toastOption))

const setType = type => emit('update:modelValue', type)
const setColorType = () => {
  const color = colorList2[parseInt(Math.random() * 100) % colorList2.length]

  emit('update:modelValue', color)
}
</script>

<template>
  <h1 class="header">Setting</h1>
  <WelcomeItem>
    <template #icon>
      <i class="fa fa-cog"></i>
    </template>
    <template #heading>Basic setting</template>
    <div class="ga-grid divide-2">
      <div class="column">
        <div class="ga-list list">
          <div class="item ga-message">
            use title: 제목 사용 여부
            <div class="btn-set">
              <label class="ga-switch slide inside">
                <input type="checkbox" v-model="toastOption.useTitle" :checked="toastOption.useTitle">
                <span class="switch round"></span>
              </label>
            </div>
          </div>
          <div class="item ga-message">
            use icon: 아이콘 사용 여부
            <div class="btn-set">
              <label class="ga-switch slide inside">
                <input type="checkbox" v-model="toastOption.useIcon" :checked="toastOption.useIcon">
                <span class="switch round"></span>
              </label>
            </div>
          </div>
          <div class="item ga-message">
            use round: 라운드 형태 사용 여부
            <div class="btn-set">
              <label class="ga-switch slide inside">
                <input type="checkbox" v-model="toastOption.round"  :checked="toastOption.round">
                <span class="switch round"></span>
              </label>
            </div>
          </div>
          <div class="item ga-message">
            use close button: 닫기 버튼 사용 여부
            <div class="btn-set">
              <label class="ga-switch slide inside">
                <input type="checkbox" v-model="toastOption.closeButton" :checked="toastOption.closeButton">
                <span class="switch round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="ga-list list">
          <div class="item ga-message">
            create from top: 신규 토스트 생성 위치
            <div class="btn-set">
              <label class="ga-switch slide inside">
                <input type="checkbox" v-model="toastOption.displayOnTop" :checked="toastOption.displayOnTop">
                <span class="switch round"></span>
              </label>
            </div>
          </div>
          <div class="item ga-message">
            use snackbar mode: 스넥바 모드 
            <div class="btn-set">
              <label class="ga-switch slide inside">
                <input type="checkbox" v-model="toastOption.snackbar" :checked="toastOption.snackbar">
                <span class="switch round"></span>
              </label>
            </div>
          </div>
          <div class="item ga-message">
            use auto delete: 자동 삭제 사용 여부
            <div class="btn-set">
              <label class="ga-switch slide inside">
                <input type="checkbox" v-model="toastOption.freeze" :checked="toastOption.freeze">
                <span class="switch round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <i class="fa fa-eye"></i>
    </template>
    <template #heading>Theme</template>
    <template v-for="theme in themeList" :key="theme">
      <button 
        class="ga-button" 
        :class="{deepblue: theme === toastOption.theme}" 
        @click="toastOption.theme = theme">
        {{ theme }}
      </button>
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <i class="fa fa-palette"></i>
    </template>
    <template #heading>Status / Colors</template>
    <template v-for="color in colorList" :key="color">
      <button class="ga-button" :class="props.modelValue === color ? color : ''" @click="setType(color)">{{ color }}</button>
    </template>|
    <button 
    class="ga-button"
    :style="{backgroundColor: toastColor[modelValue] || none}"
    @click="setColorType">Select Random Color type</button>
    <!-- <template v-for="color in colorList2" :key="color">
      <button class="ga-button" :class="props.modelValue === color ? `ga-${color}` : ''" @click="setType(color)">{{ color }}</button>
    </template> -->
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <i class="fa fa-arrows"></i>
    </template>
    <template #heading>Position</template>
    <template v-for="pos in positionList" :key="pos">
      <button 
        class="ga-button" 
        :class="{deeppurple: pos === toastOption.position}" 
         @click="toastOption.position = pos">
         {{ pos }}
      </button>
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <i class="fa fa-hourglass-half"></i>
    </template>
    <template #heading>Delay time</template>
    <div class="ga-input">
      <input type="number" v-model="toastOption.timeout" />
    </div>
  </WelcomeItem>
</template>
