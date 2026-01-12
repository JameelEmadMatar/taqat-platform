<template>
    <section>
        <div class="container">
            <div class="left-side">
                <div class="change">
                    <div class="back">
                        <router-link to="/">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="#B8B8B8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.4999 12H3.66992" stroke="#B8B8B8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Back</p>
                        </router-link>
                    </div>
                    <ChangeLang/>
                    <ChangeMode/>
                </div>
                <div class="reset">
                    <h1>Reset Password</h1>
                    <p>Enter your email address and we'll send you a link to reset your<br> password</p>
                    <form @submit.prevent="sendOtp">
                        <div class="form-div">
                            <label>Email address</label>
                            <input type="email" name="email" placeholder="jameelmatar1@example.com" v-model="form.email" @input="validateForm()" @focusout="validateForm()">
                            <span v-if="errors.email" class="error">{{ errors.email }}</span>
                        </div>
                        <button>Send Reset Password</button>
                        <div class="last">
                            <p>Remember your password? </p><router-link to="/login">Login</router-link>
                        </div>
                    </form>
                </div>
            </div>
            <div class="right-side">
                <img src="../../assets/login.jpg" alt="person">
            </div>
        </div>
    </section>
</template>
<script setup>
import { reactive } from 'vue'
import ChangeLang from '../Change/Language/ChangeLang.vue'
import ChangeMode from '../Change/Mode/ChangeMode.vue'
import { useRouter , useRoute } from 'vue-router'
import axiosClient from '../Axios/axiosClient'
import * as yup from 'yup'
import { 
  successAlert, 
  errorAlert, 
  warningAlert, 
  loadingAlert,
  confirmAlert 
} from '../Utils/swal'

const route = useRoute()
const router = useRouter()
const form = reactive({
    email : ''
})
const errors = reactive({
    email : ''
})
const schema = yup.object({
    email : yup
     .string()
     .required('This field cannot be empty')
     .email('Invalid email format')
})

const validateForm = () => {
  errors.email = ''
    
  try {
    schema.validateSync({ email: form.email }, { abortEarly: false })
    return true
  } catch (error) {
    errors.email = error.errors[0] || error.message
    return false
  }
}

const sendOtp = async() => {
    if(validateForm){
        // send otp        
        try{
            const response = await axiosClient.post('/auth/verify-otp',{
                email : form.email,
            })
            router.push({name : 'resetPassword' , query : {email : form.email}})
        }
        catch(error){
            if (!error.response) {
                errorAlert('Network Error', 'Please check your internet connection')
                return
            }
            if(error.response){
                errorAlert('Error' , error.response.data.message)
            }
        }
    }
}
</script>
<style scoped>
section{
    height:100vh
}
.container{
    display:flex;
    gap:20px;
    height:100vh;
    padding-top: 20px;
    padding-bottom: 20px;
    overflow:hidden;
}
.change{
    display: flex;
    align-items: center;
    gap:20px;
}
.change .back a{
    display: flex;
    align-items: center;
    gap: 3px;
    text-decoration:none
}
.change .back p{
    font-size:14px;
    color: #B8B8B8;
}
.left-side , .right-side{
    width:50%;
}
.right-side{
    border-radius:8px
}
.right-side img{
    max-width:100%;
    height:100%;
    border-radius:30px;
    width:100%;
}
.reset{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: -webkit-fill-available;
    justify-content: center;
}
.reset svg{
    width: 200px;
    height: 40px;
}
.reset h1{
    font-size:24px;
    margin-top:30px;
    line-height:40px;
}
.reset p{
    color:var(--text-color);
    font-size:14px;
    text-align:center;
}
form .form-div{
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 20px 0;
}
form .form-div.pass{
    margin-bottom:0;
    position:relative;
}
form .form-div.pass svg{
    position: absolute;
    right: 12px;
    bottom: 12px;
    width: 24px;
    height: 24px;
    cursor: pointer;
}
form .form-div label{
    color:var(--text-color);
    margin-bottom:20px;
}
form .form-div input{
    border: 1px solid #D9D9D9;
    border-radius: 8px;
    padding: 15px;
    outline:none;
}
form .forget{
    color:#87888C;
    font-size:14px;
    font-weight:400;
    border-bottom:2px solid #87888C;
    width:fit-content;
    cursor:pointer;
}
form button{
    width: 400px;
    margin: 20px 0;
    padding: 5px 0;
    text-align: center;
    background-color: var(--main-color);
    border: none;
    outline: none;
    color: #fff;
    font-weight: 600;
    border-radius: 8px;
    line-height: 33px;
    cursor:pointer;
}
form .last{
    display:flex;
    justify-content:center;
}
form .last p{
    color:#87888C;
    line-height:25.4px;
    font-weight:400;
}
form .last a{
    font-weight:700;
    line-height:26px;
    cursor:pointer;
    margin-left:5px;
    text-decoration:none;
    color:black;
}
.error{
    color: #FF4D4F;
    margin-top: 5px;
}
@media screen and (max-width:992px){
    .reset{
        justify-content:center;
    }
    .left-side{
        width:100%;
    }
    .right-side{
        display:none
    }
}

@media screen and (max-width:575px){
    form{
        width: -webkit-fill-available;
    }
    form .form-div{
        width:100%;
    }
    form button{
        width:100%;
    }
}
</style>