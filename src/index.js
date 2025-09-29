import ToastBoard from './toastBoard'
import './toast.scss'
// import '@fortawesome/fontawesome-free/js/all.js'

const defaultOptions = {
  useTitle: true,
  useIcon: true,
  closeButton: true,
  round: false,
  theme: '',
  timeout: 5000,
  clickToClose: true,
  displayOnTop: false,
  snackbar: false,
  freeze: true,
  transition: 'swing'
}

let extendOptions = {}
const setOption = option => {
  return { ...defaultOptions, ...option }
}

export default {
  install(app, options = {}) {
    extendOptions = setOption(options)
    app.config.globalProperties.$ntToast = new ToastBoard(extendOptions)

    app.provide('$ntToast', new ToastBoard(extendOptions))
  }
}
