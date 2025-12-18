<template>
    <div class="stage-1">
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
        <h5>Let’s set up your Mobile!</h5>
        <p>What Mobile number would you like to use for verification?</p>
        <div class="mobile-div">
            <span class="title">Mobile Number</span>
            <div class="mobile-input">
                <div class="country">
                    <div class="select">
                        <div class="selected">
                            <img :src="selected.src" alt="flag">
                            <p>+{{selected.firstNumber}}</p>
                        </div>
                        <svg @click="optionsOpenToggle()" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.70465 4L6.23465 7.52L9.76465 4" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div class="options" v-if="optionsOpen">
                            <div class="option" @click="changeSelected('src/assets/pal.jpg' , 972 )">
                                <img src="../../../assets/pal.jpg" alt="flag">
                                <p>+<span>972</span></p>
                            </div>
                            <div class="option" @click="changeSelected('src/assets/pal.jpg' , 972 )">
                                <img src="../../../assets/pal.jpg" alt="flag">
                                <p>+<span>972</span></p>
                            </div>
                            <div class="option" @click="changeSelected('src/assets/pal.jpg' , 972 )">
                                <img src="../../../assets/pal.jpg" alt="flag">
                                <p>+<span>972</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="tel" name="phone" placeholder= "Enter Mobile Number" inputmode="numeric" maxlength="9" minlength="9">
            </div>
        </div>
        <div class="buttons">
            <button @click="cancle()">Cancle</button>
            <button @click="useRoundStore().updateRound(2)">Continue</button>
        </div>
    </div>
</template>

<script setup>
import { ref , computed} from 'vue'
import { useRoundStore } from '../../Store/IdentityVerification/Round'
const showStatus = computed(() => useRoundStore().getDiscradStatus)
const selected = ref(
    {
        src : 'src/assets/pal.jpg',
        firstNumber : 970,
    }
)
const optionsOpen = ref(false)
function optionsOpenToggle(){
    optionsOpen.value = !optionsOpen.value
}
function changeSelected(src , firstNumber){
    selected.value.src = src
    selected.value.firstNumber = firstNumber
    optionsOpenToggle()
}
function cancle(){
    useRoundStore().updateDiscardBoxStatus(true)
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
}
p{
    font-size:14px;
    color:var(--text-color);
    font-weight:400;
    text-align:center;
    margin:20px 0;
}
.title{
    font-weight:600;
    font-size:12px;
}
.mobile-div{
    width:100%;
}
.mobile-input{
    border: 1px solid #D9D9D9;
    margin: 15px 0;
    border-radius: 8px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    height:50px;
}
.select{
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
}
.select svg{
    cursor:pointer;
}
.selected{
    display: flex;
    align-items: center;
    gap: 10px;
}
.mobile-input img{
    width: 32px;
    height: 20px;
}
.options{
    position: absolute;
    top: 100%;
    background-color: #fff;
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #D9D9D9;
}
.option{
    display: flex;
    align-items: center;
    gap: 10px;
    cursor:pointer;
}
input{
    border: none;
    outline: none;
    margin-left: 15px;
}
.buttons{
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
    position: absolute;
    right: 5%;
    bottom: 20px;
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
.buttons button:first-child{
    background-color:#fff;
    color:black;
}
.buttons button:first-child:hover{
    color: #006fbc;
    border-color: #006fbc;
    background: #ffffff;
}
.buttons button:last-child{
    background-color:var(--main-color);
    color:#fff;
}
.buttons button:last-child:hover{
    background: #006fbc;
    color: #fff;
}
</style>