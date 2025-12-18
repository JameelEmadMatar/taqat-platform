<template>
    <div class="stage-2">
        <!-- Progress Bar -->
        <div class="prog-main">
            <div class="progress">
                <div class="prog-details">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4891_5182)">
                        <circle cx="12" cy="12" r="11.5" fill="#E6F2FA" stroke="#007BD1"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_4891_5182">
                        <rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 0 24)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <p>Mobile Number</p>
                </div>
                <svg class="line" width="70" height="1" viewBox="0 0 70 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line opacity="0.5" x1="0.5" y1="0.5" x2="69.5" y2="0.5" stroke="#87888C" stroke-linecap="round" stroke-dasharray="5 5"/>
                </svg>
                <div class="prog-details">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11.5" fill="white" stroke="#D9D9D9"/>
                    </svg>
                    <p>Personal Data</p>
                </div>
                <svg class="line" width="70" height="1" viewBox="0 0 70 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line opacity="0.5" x1="0.5" y1="0.5" x2="69.5" y2="0.5" stroke="#87888C" stroke-linecap="round" stroke-dasharray="5 5"/>
                </svg>
                <div class="prog-details">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11.5" fill="white" stroke="#D9D9D9"/>
                    </svg>
                    <p>Upload ID photo</p>
                </div>
            </div>
        </div>
        <h5>Enter the verification code</h5>
        <p class="p-1">We’ve sent a 6-digit verification code to +972597803774.</p>
        <p>Please enter it below to verify your phone number.</p>
        <!-- OTP Inputs -->
        <div class="otp-inputs">
            <input
                v-for="(digit, index) in otpDigits"
                :key="index"
                type="text"
                maxlength="1"
                v-model="otpDigits[index]"
                @input="handleInput($event, index)"
                @keydown="handleKeyDown($event, index)"
                @paste="handlePaste"
                class="otp-digit"
                :ref="el => (inputs[index] = el)"
            />
        </div>
        <!-- Resend Code -->
        <div class="resend">
            <span>Didn't receive the code?</span>
            <button @click="resendCode" :disabled="timer > 0" class="resend-link">
                {{ timer > 0 ? `${formattedTimer}s` : '' }}  Resend Code
            </button>
        </div>

        <!-- Action Buttons -->
        <div class="buttons">
            <button @click="goBack" class="back">Back</button>
            <button
                @click="verifyCode"
                class="verify"
            >
                Verify
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted , onUnmounted} from 'vue'
import { useRoundStore } from '../../Store/IdentityVerification/Round'

const otpDigits = ref(['','','','','',''])
const inputs = ref([])

const otpCode = ref('')

const timer = ref(82)
let interval = null

const formattedTimer = ref('1:22')

const updateTimerDisplay = () => {
  const minutes = Math.floor(timer.value / 60)
  const seconds = timer.value % 60
  formattedTimer.value = `${minutes}:${seconds.toString().padStart(2, '0')}`
}

onMounted(() => {
  updateTimerDisplay() // عرض أولي

  interval = setInterval(() => {
    if (timer.value > 0) {
      timer.value--
      updateTimerDisplay()
    } else {
      clearInterval(interval)
    }
  }, 1000)

  if (inputs.value[0]) inputs.value[0].focus()
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})

watch(otpDigits, (newVal) => {
  otpCode.value = newVal.join('')
}, { deep: true })

const handleInput = (e, index) => {
  const value = e.target.value
  if (!/^\d?$/.test(value)) {
    otpDigits.value[index] = ''
    return
  }

  if (value && index < 5) {
    inputs.value[index + 1].focus()
  }
}


const handleKeyDown = (e, index) => {
    console.log(e.key)
  if (e.key === 'ArrowLeft') {
    if (!otpDigits.value[index] && index > 0) {
      // إذا كانت الخانة الحالية فارغة، انتقل للخانة السابقة
      inputs.value[index - 1].focus()
    } 
    else if (otpDigits.value[index]) {
      // إذا كانت الخانة الحالية تحتوي على قيمة، امسحها أولاً
      otpDigits.value[index] = ''
    }
  }
}

const handlePaste = (e) => {
  e.preventDefault()
  const pasted = e.clipboardData.getData('text').trim().replace(/\D/g, '').slice(0, 6)
  
  if (pasted.length > 0) {
    // تحديث جميع الأرقام
    for (let i = 0; i < 6; i++) {
      otpDigits.value[i] = pasted[i] || ''
    }
    
    // تركيز أول خانة فارغة أو الأخيرة
    const focusIndex = Math.min(pasted.length, 5)
    inputs.value[focusIndex].focus()
    
    // إذا كان الرقم كاملاً، يمكن تنفيذ action (اختياري)
    if (pasted.length === 6) {
      // handleSubmit() أو أي دالة أخرى
    }
  }
}

// دوال الأزرار
const goBack = () => {
    useRoundStore().updateRound(1)
}

const verifyCode = () => {
  if (otpCode.value.length === 6) {
    console.log('تم التحقق من الكود:', otpCode.value)
    useRoundStore().updateRound(3)
  }
}

const resendCode = () => {
  timer.value = 82 // إعادة تشغيل التايمر
}
</script>

<style scoped>
.prog-main{
    display: flex;
    justify-content: center;
    align-items: center;
    margin:15px 0;
    padding-bottom: 20px;
}
.progress{
    width:90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:20px;
}
.prog-details{
    display: flex;
    align-items: center;
    gap: 5px;
}
.prog-details:last-child p{
    color:var(--text-color)
}
h5{
    font-size:18px;
    text-align: center;
    margin-bottom:8px;
}
p{
    font-size:14px;
    color:var(--text-color);
    font-weight:400;
    text-align:center;
    margin:20px 0;
}
p.p-1{
    font-size:16px;
    color:black;   
}
.otp-container {
  text-align: center;
  padding: 20px;
  font-family: system-ui, sans-serif;
}

.title {
  font-size: 24px;
  font-weight: 600;
  margin: 20px 0 10px;
  color: #333;
}

.message {
  color: #555;
  margin-bottom: 8px;
}

.sub-message {
  color: #777;
  font-size: 15px;
  margin-bottom: 30px;
}

.otp-inputs {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 30px;
}

.otp-digit {
  color: #87888C;
  width: 50px;
  height: 60px;
  font-size: 14px;
  text-align: center;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: border 0.3s;
}

.otp-digit:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15);
}

.resend {
  margin: 30px 0;
  color: #666;
  font-size: 15px;
  text-align:center;
}

.resend-link {
  background: none;
  border: none;
  color:var(--main-color);
  cursor: pointer;
  text-decoration: underline;
  font-size: 15px;
  margin-left:5px;
}

.resend-link:disabled {
  color: #696A70;
  cursor: not-allowed;
  text-decoration: none;
}

.buttons{
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
    position: absolute;
    right: 5%;
    bottom: 40px;
}
.buttons button{
    width: 100px;
    border: 1px solid #D9D9D9;
    outline: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
}
.buttons .back{
    background-color:#fff;
    color:black;
}
.buttons .back:hover{
    color: #006fbc;
    border-color: #006fbc;
    background: #ffffff;
}
.buttons .verify{
    background-color:var(--main-color);
    color:#fff;
}
.buttons .verify:hover{
    background: #006fbc;
    color: #fff;
}
</style>