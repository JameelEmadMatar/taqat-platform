<template>
    <div class="stage-3">
        <!-- Progress Bar -->
        <div class="prog-main">
            <div class="progress">
                <div class="prog-details">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4891_5714)">
                        <circle cx="12" cy="12" r="11.5" fill="#007BD1" stroke="#007BD1"/>
                        <path d="M7.00049 12L10.0005 15L16.0111 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_4891_5714">
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
                        <g clip-path="url(#clip0_4891_5182)">
                        <circle cx="12" cy="12" r="11.5" fill="#E6F2FA" stroke="#007BD1"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_4891_5182">
                        <rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 0 24)"/>
                        </clipPath>
                        </defs>
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
        <h5>Personal Information</h5>
        <p>Please enter your full legal name exactly as written on your official ID.</p>
        <form>
            <div class="name-div">
                <div>
                    <label>First Name</label>
                    <input type="text" name="first-name" placeholder="Enter your first name">
                </div>
                <div>
                    <label>Father’s Name</label>
                    <input type="text" name="father-name" placeholder="Enter your father’s name">
                </div>
                <div>
                    <label>Grandfather’s Name</label>
                    <input type="text" name="grandfather-name" placeholder="Enter your grandfather’s name">
                </div>
                <div>
                    <label>Family Name</label>
                    <input type="text" name="family-name" placeholder="Enter your family name">
                </div>
            </div>
            <div class="form-div">
                <label>ID number</label>
                <input type="text" name="id" placeholder="Enter your ID number">
            </div>
            <div class="form-div">
                <label>Full address</label>
                <input type="address" name="address" placeholder="Enter your Full address">
            </div>
        </form>
        <div class="buttons">
            <button @click="goBack" class="back">Back</button>
            <button
                @click="continueButton"
                class="continue"
            >
                Continue
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoundStore } from '../../Store/IdentityVerification/Round'

const goBack = () => {
    useRoundStore().updateRound(2)
}
const continueButton = () => {
    useRoundStore().updateRound(4)
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
    font-size:16px;
    color:var(--text-color);
    font-weight:400;
    text-align:center;
    margin:20px 0;
}
form{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
form .name-div{
    display: flex;
    align-items: center;
    flex-wrap:wrap;
    gap: 10px;
}
form .name-div div{
    width: 49%;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
input{
    border: 1px solid #D9D9D9;
    outline: none;
    border-radius: 8px;
    padding: 10px 15px;
}
.form-div input{
    width:100%;
    margin:15px 0;
}
.buttons{
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
    margin-top:50px;
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
.buttons .continue{
    background-color:var(--main-color);
    color:#fff;
}
.buttons .continue:hover{
    background: #006fbc;
    color: #fff;
}
</style>