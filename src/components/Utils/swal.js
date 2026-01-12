import Swal from 'sweetalert2'

// إعدادات افتراضية
const defaultSettings = {
  confirmButtonColor: '#007BD1',
  cancelButtonColor: '#d33',
  buttonsStyling: true,
  customClass: {
    confirmButton: 'swal-confirm-btn',
    cancelButton: 'swal-cancel-btn'
  }
}

// دالة النجاح
export const successAlert = (title, text = '', timer = 2000) => {
  return Swal.fire({
    ...defaultSettings,
    icon: 'success',
    title,
    text,
    timer,
    showConfirmButton: false,
    timerProgressBar: true
  })
}

// دالة الخطأ
export const errorAlert = (title, text = '') => {
  return Swal.fire({
    ...defaultSettings,
    icon: 'error',
    title,
    text,
    showConfirmButton: true,
    confirmButtonText: 'OK'
  })
}

// دالة التحذير
export const warningAlert = (title, text = '') => {
  return Swal.fire({
    ...defaultSettings,
    icon: 'warning',
    title,
    text,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No'
  })
}

// دالة المعلومات
export const infoAlert = (title, text = '') => {
  return Swal.fire({
    ...defaultSettings,
    icon: 'info',
    title,
    text,
    showConfirmButton: true
  })
}

// دالة التساؤل (Confirmation)
export const confirmAlert = (title, text = '') => {
  return Swal.fire({
    ...defaultSettings,
    icon: 'question',
    title,
    text,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'Cancel'
  })
}

// دالة التحميل
export const loadingAlert = (title = 'Loading...', text = '') => {
  return Swal.fire({
    title,
    text,
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading()
    }
  })
}

export default Swal