vue-nt-toast
================
`vue-nt-toast` is a JavaScript notification system library. It is made available through the installation of the plugin in the Vue project.

It is designed to operate outside the application (the top layer) so as not to affect the application's layer system as much as possible, and provides status indications of "success", "risk", "information", "attention", and "important" depending on the type of content.

You can set multiple options across the system, including theme, location, and snack bar mode, to reflect them in the entire system, and you can also apply options that can be changed every time the user runs it.

`vue-nt-toast`는 자바스크립트 알림 시스템 라이브러리 입니다. Vue 프로젝트  내 plugin 설치를 통해서 사용 가능하도록 제작 되었습니다. 
어플리케이션 외부(최상단 레이어)에서 동작하여 내부 레이어 시스템에 영향을 받지 않게 설계 되었으며 컨텐츠의 종류에 따라 “성공”, “위험”, “정보”, “주의”, “중요” 의 상태 표시를 제공하고있습니다. 

테마, 위치, 스낵바 모드 등 여러 옵션을 전역에서 설정 하여 전체 시스템에 반영 하도록 할수있고, 사용자가 실행 할때 마다 변경 가능한 옵션을 적용 할수도 있습니다. 

---
## Installation

```sh
 $ npm install vue-nt-toast —-save
```
---
## Plugin Install

```javascript
// import module
import NtToast from ‘vue-nt-toast’
// import style
import ‘vue-nt-toast/toasr.css’

// vue 3 plugin install 
const app = createApp(App)

app.use(NtToast, {
	… // setting for default options
}) 
```
---

## Usage

* show(type, contents, options)
* contents.title (Toast title)
* contents.description (Toast description)

### Set for use global function

```javascript
// get Proxy in current instance 
import { getCurrentInctance } from 'vue';

// composition api or setup
const { proxy } = getCurrentInstance();
```
### Call toast func (Show toast)
```javascript
// show success toast
proxy.$ntToast.show('success', ..., ...)

// show another type
proxy.$ntToast.show('info', ..., ...)
proxy.$ntToast.show('danger', ..., ...)
```
---

## Parameters

| Name | Description | Required |
| --- | --- | --- |
| `type` | Status or Colors | `true` |
| `contnts.type` | Title Text | |
| `contents.description` | Description Text | `true` |
| `options` | User Custom Options | |
---

## Properties

* **useTitle**: _boolean_ ▶︎ `true`    
Setting for show/hide toast title.

* **useIcon**: _boolean_ ▶︎`true`   
Setting for show/hide toast status icon.

* **round**: _boolean_ ▶︎`false`   
Setting for enable/disable round border.

* **closeButton**: _boolean_ ▶︎`true`   
Setting for show/hide close button.

* **displayOnTop**: _boolean_ ▶︎`false`   
Setting for order type when toast create.

* **snackbar**: _boolean_ ▶︎`false`   
Setting for snackbar mode.

* **freeze**: _boolean_ ▶︎`false`   
Setting for auto close off.

* **timeout**: _number_ ▶︎`5000`   
Setting for delay time.

* **theme**: _string_ ▶︎``   
Setting for toast style.
`light` `icon` `icon-bg` `line` 

* **position**: _string_ ▶︎`top-right`   
Setting for create position.   
v-align(`top`, `bottom`) and h-align(`left`, `center`, `right`)
---
