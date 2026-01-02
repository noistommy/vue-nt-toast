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
const emit = defineEmits(['setting','update'])

const props = defineProps({
  modelValue: String
})
const toastOption = reactive({
  round: false,
  useTitle: true,
  useIcon: true,
  closeButton: true,
  theme: 'default', // 'light' | 'icon' | 'icon-bg' | 'line'
  position: 'bottom-right', // 'TL'|'TC'|'TR'|'BL'|'BC'|'BR'|'TFW'|'BFW'
  displayOnTop: true,
  snackbar: false,
  freeze: false,
  timeout: 5000
})

watch(toastOption, () => emit('setting', toastOption))

const setType = type => emit('update', type)
const setColorType = () => {
  const color = colorList2[parseInt(Math.random() * 100) % colorList2.length]

  emit('update', color)
}
const showToast = () => emit('setting', toastOption)
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <i class="xi-cog"></i>
    </template>
    <template #heading>Basic setting</template>
    <div class="ga-grid divide-2 divide-xs-1">
      <div class="column">
        <div class="ga-list list">
          <div class="item ga-message">
            use title: 제목 사용 여부
            <div class="btn-set">
              <label class="ga-switch slide inside round">
                <input type="checkbox" v-model="toastOption.useTitle" :checked="toastOption.useTitle">
                <span class="switch round"></span>
              </label>
            </div>
          </div>
          <div class="item ga-message">
            use icon: 아이콘 사용 여부
            <div class="btn-set">
              <label class="ga-switch slide inside round">
                <input type="checkbox" v-model="toastOption.useIcon" :checked="toastOption.useIcon">
                <span class="switch"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="ga-list list">
          <div class="item ga-message">
            use round: 라운드 형태 사용 여부
            <div class="btn-set">
              <label class="ga-switch slide inside round">
                <input type="checkbox" v-model="toastOption.round"  :checked="toastOption.round">
                <span class="switch round"></span>
              </label>
            </div>
          </div>
          <div class="item ga-message">
            use close button: 닫기 버튼 사용 여부
            <div class="btn-set">
              <label class="ga-switch slide inside round">
                <input type="checkbox" v-model="toastOption.closeButton" :checked="toastOption.closeButton">
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
      <i class="icon xi-arrow-top"></i>
    </template>
    <template #heading>
      Display Ordering
      <p>새로 생성된 토스트가 리스트에서 나타나는 위치를 설정합니다. <span class="ga-tag label green">True</span> 일 경우, 신규 토스트가 항상 리스트 첫번째 아이템으로 나타납니다.</p>
    </template>
    <div class="ga-segment border">
      <div class="check-set">
        <div class="ga-checkbox" :class="{checked: toastOption.displayOnTop}">
          <input id="displayOnTop" type="checkbox" v-model="toastOption.displayOnTop" :checked="toastOption.displayOnTop">
          <label for="displayOnTop">create from top: 신규 토스트 생성 위치</label>
        </div>
      </div>
      <div class="contents">
        <button 
          class="ga-button" 
          :class="{deepblue: toastOption.displayOnTop}" 
          @click="showToast">
          Display from {{ toastOption.displayOnTop ? 'Top' : 'Bottom' }}
        </button>
      </div>
    </div>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <i class="icon xi-log"></i>
    </template>
    <template #heading>
      Snackbar
      <p>Snackbar란? 화면 (보통 하단)에 표시되는 간단한 알림. 사용자 환경을 방해하지 않고 작업 또는 활동에 관한 의견을 제공합니다.</p>
      <p><span class="bold">toast vs snackbar</span> toast와 다른 것은 신규 컨턴츠 생성 시 단일 텍스트 액션을 통해 사용자와 상호작용합니다.</p>
    </template>
    <div class="ga-segment border">
       
      <div class="check-set" :style="{marginBottom: '10px'}">
        <div class="ga-checkbox" :class="{checked: toastOption.snackbar}">
          <input id="snackbar" type="checkbox" v-model="toastOption.snackbar" :checked="toastOption.snackbar">
          <label for="snackbar">use snackbar mode: 스넥바 모드</label>
        </div>
      </div>
      <div class="contents">
        <button 
          class="ga-button" 
          :class="{deepblue: toastOption.snackbar}" 
          @click="showToast">
          Snackbar {{ toastOption.snackbar ? 'On' : 'Off' }}
        </button>
      </div>
    </div>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <i class="icon xi-snow-crystal"></i>
    </template>
    <template #heading>
      Freeze
      <p>기본적으로 toast는 생성 후 자동으로 삭제되는데 이 설정을 통해 수동으로 삭제하도록 할 수 있습니다. true 시 사라지지 않고 화면에 남아있게 됩니다. </p>
    </template>
    <div class="ga-segment border">   
      <div class="check-set" :style="{marginBottom: '10px'}">
        <div class="ga-checkbox" :class="{checked: toastOption.freeze}">
          <input id="freeze" type="checkbox" v-model="toastOption.freeze" :checked="toastOption.freeze">
          <label for="freeze">use freeze</label>
        </div>
      </div>
      <div class="contents">
        <button 
          class="ga-button" 
          :class="{deepblue: toastOption.freeze}" 
          @click="showToast">
          Freeze {{ toastOption.freeze ? 'On' : 'Off' }}
        </button>
      </div>
    </div>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <i class="xi-eye"></i>
    </template>
    <template #heading>
      Theme
      <p>총 5가지 스타일의 테마를 제공합니다. 프로젝트 내에서 토스트의 역할에 따라 다른 스타일을 지정하여 사용자가 직관적으로 1차 역활을 확인 가능하도록 할 수 있습니다.</p>
    </template>
    <div class="ga-segment border">
      <div class="contents flex">
        <template v-for="theme in themeList" :key="theme">
          <button 
            class="ga-button" 
            :class="{deepblue: theme === toastOption.theme}" 
            @click="toastOption.theme = theme">
            {{ theme }}
          </button>
        </template>
      </div>
    </div>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <i class="xi-palette"></i>
    </template>
    <template #heading>Status / Colors
      <p>알림 시스템에서 상태 표시는 중요한 역활을 합니다. 5개의 상태 표시를 통해 직관적인 상태를 표시합니다. 또한 지정된 상태 외 추가적인 상태 분류를 위해 지정된 생상으로 표시 가능합니다.

      </p>
    </template>
    <div class="ga-segment border">
      <div class="contents flex">
        <template v-for="color in colorList" :key="color">
          <button class="ga-button" :class="props.modelValue === color ? color : ''" @click="setType(color)">{{ color }}</button>
        </template>|
        <button 
        class="ga-button"
        :style="{backgroundColor: toastColor[modelValue] || none}"
        @click="setColorType">Select Random Color type</button>
      </div>
    </div>
    <!-- <template v-for="color in colorList2" :key="color">
      <button class="ga-button" :class="props.modelValue === color ? `ga-${color}` : ''" @click="setType(color)">{{ color }}</button>
    </template> -->
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <i class="xi-arrows"></i>
    </template>
    <template #heading>Position
      <p>토스트가 화면에 표시 되는 위치를 설정합니다. </p>
    </template>
    <div class="ga-segment border">
      <div class="contents flex">
        <template v-for="pos in positionList" :key="pos">
          <button 
            class="ga-button" 
            :class="{deeppurple: pos === toastOption.position}" 
             @click="toastOption.position = pos">
             {{ pos }}
          </button>
        </template>
      </div>
    </div>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <i class="xi-spinner-4"></i>
    </template>
    <template #heading>Delay time
      <p>Toast가 화면에 보여지는 시간을 설정합니다. 컨텐츠가 사용자에게 전달될수 있도록 고려하고 너무 오랜 시간 남아있지 않도록 조정합니다.</p>
    </template>
    <div class="ga-input unit " data-unit="ms">
      <input type="number" class="align-right" v-model="toastOption.timeout" :step="1000" :min="1000"  />
    </div>
  </WelcomeItem>
</template>

<style scoped>
  .flex {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
</style>
