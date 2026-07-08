// toastIcons.js - SVG 아이콘 모음
export const statusIcon = {
  success: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M8 12.5L10.5 15L16 9.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  
  info: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 16V12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <circle cx="12" cy="8" r="1" fill="currentColor"/>
    </svg>
  `,
  
  danger: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 8V12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <circle cx="12" cy="16" r="1" fill="currentColor"/>
    </svg>
  `,
  
  attention: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 20H22L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="none"/>
      <path d="M12 9V13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <circle cx="12" cy="17" r="1" fill="currentColor"/>
    </svg>
  `,
  
  importance: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="none"/>
    </svg>
  `
}

export const statusIcons = {
  success: `
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0ZM16.6484 6.35156C16.1798 5.88292 15.4198 5.88292 14.9512 6.35156L9.2002 12.1035L7.04883 9.95117C6.58027 9.48261 5.82022 9.48277 5.35156 9.95117C4.88293 10.4198 4.88293 11.1798 5.35156 11.6484L8.35156 14.6484C8.8202 15.1171 9.58019 15.1171 10.0488 14.6484L16.6484 8.04883C17.1171 7.58019 17.1171 6.8202 16.6484 6.35156Z" fill="currentColor"/>
    </svg>
  `,
  info: `
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0ZM11 9C10.1716 9 9.5 9.67157 9.5 10.5V16.5C9.5 17.3284 10.1716 18 11 18C11.8284 18 12.5 17.3284 12.5 16.5V10.5C12.5 9.67157 11.8284 9 11 9ZM11 4C10.1716 4 9.5 4.67157 9.5 5.5C9.5 6.32843 10.1716 7 11 7C11.8284 7 12.5 6.32843 12.5 5.5C12.5 4.67157 11.8284 4 11 4Z" fill="currentColor"/>
    </svg>

  `,
  danger: `
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0ZM11 15C10.1716 15 9.5 15.6716 9.5 16.5C9.5 17.3284 10.1716 18 11 18C11.8284 18 12.5 17.3284 12.5 16.5C12.5 15.6716 11.8284 15 11 15ZM11 4C10.1716 4 9.5 4.67157 9.5 5.5V11.5C9.5 12.3284 10.1716 13 11 13C11.8284 13 12.5 12.3284 12.5 11.5V5.5C12.5 4.67157 11.8284 4 11 4Z" fill="currentColor"/>
    </svg>
  `,
  attention: `
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 0C11.3631 1.65756e-05 11.6977 0.197197 11.874 0.514648L21.874 18.5146C22.0459 18.8242 22.0417 19.2016 21.8623 19.5068C21.6826 19.8122 21.3543 20 21 20H1C0.645688 20 0.317383 19.8122 0.137695 19.5068C-0.0417231 19.2016 -0.0459261 18.8242 0.125977 18.5146L10.126 0.514648L10.1992 0.401367C10.3864 0.150939 10.6822 0 11 0ZM11.0713 14.8574C10.4796 14.8575 10 15.337 10 15.9287C10.0001 16.5203 10.4797 16.9999 11.0713 17C11.663 17 12.1425 16.5204 12.1426 15.9287C12.1426 15.337 11.663 14.8574 11.0713 14.8574ZM11.0713 7C10.4797 7.00008 10.0001 7.47967 10 8.07129V12.3574C10.0002 12.949 10.4797 13.4286 11.0713 13.4287C11.6629 13.4287 12.1424 12.949 12.1426 12.3574V8.07129C12.1425 7.47962 11.663 7 11.0713 7Z" fill="currentColor"/>
    </svg>
  `,
  importance: `
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0ZM11.4414 3.83105C11.2533 3.47757 10.7467 3.47757 10.5586 3.83105L8.66016 7.40625C8.58787 7.54223 8.45637 7.63739 8.30469 7.66406L4.31836 8.36523C3.92395 8.43492 3.76746 8.91701 4.0459 9.20508L6.8584 12.1152C6.96547 12.226 7.01565 12.3797 6.99414 12.5322L6.42871 16.54C6.37288 16.9368 6.78346 17.2344 7.14355 17.0586L10.7803 15.2832C10.9187 15.2156 11.0813 15.2156 11.2197 15.2832L14.8564 17.0586C15.2165 17.2344 15.6271 16.9368 15.5713 16.54L15.0059 12.5322C14.9843 12.3797 15.0345 12.226 15.1416 12.1152L17.9541 9.20508C18.2325 8.91701 18.076 8.43492 17.6816 8.36523L13.6953 7.66406C13.5436 7.63739 13.4121 7.54223 13.3398 7.40625L11.4414 3.83105Z" fill="currentColor"/>
    </svg>
  `
}