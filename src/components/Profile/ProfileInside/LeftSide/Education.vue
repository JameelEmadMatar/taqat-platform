<template>
    <div class="education" :style="{ borderStyle : education ? 'solid' : 'dotted'}">
        <div class="education-inside">
            <div class="main" :style="{ borderBottomStyle : education ? 'solid' : 'dotted'}">
                <div class="title">
                    <p>Education</p>
                </div>
                <div class="edit" v-if="education">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2633 5.43908L5.05327 14.1291C4.74327 14.4591 4.44327 15.1091 4.38327 15.5591L4.01327 18.7991C3.88327 19.9691 4.72327 20.7691 5.88327 20.5691L9.10327 20.0191C9.55327 19.9391 10.1833 19.6091 10.4933 19.2691L18.7033 10.5791C20.1233 9.07908 20.7633 7.36908 18.5533 5.27908C16.3533 3.20908 14.6833 3.93908 13.2633 5.43908Z" stroke="#191919" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.8936 6.88916C12.3236 9.64916 14.5636 11.7592 17.3436 12.0392" stroke="#191919" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>Edit</p>
                </div>
            </div>
            <div class="all-education" v-if="education">
                <div>
                    <p>Islamic University</p>
                    <span>Bachelor's degree</span>
                    <span>2016-2020</span>
                </div>
                <div>
                    <p>Islamic University</p>
                    <span>Bachelor's degree</span>
                    <span>2016-2020</span>
                </div>
            </div>
            <div class="empty" v-if="!education">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.402 3.37338L5.37531 8.61338C2.80198 10.2934 2.80198 14.0534 5.37531 15.7334L13.402 20.9734C14.842 21.92 17.2153 21.92 18.6553 20.9734L26.642 15.7334C29.202 14.0534 29.202 10.3067 26.642 8.62671L18.6553 3.38671C17.2153 2.42671 14.842 2.42671 13.402 3.37338Z" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.51089 17.4399L7.49756 23.6933C7.49756 25.3866 8.80423 27.1999 10.4042 27.7333L14.6576 29.1466C15.3909 29.3866 16.6042 29.3866 17.3509 29.1466L21.6042 27.7333C23.2042 27.1999 24.5109 25.3866 24.5109 23.6933V17.5066" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M28.5337 20V12" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Add your academic background to help clients understand your qualifications.</p>
                <div class="add-education">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12H16" stroke="#007BD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 16V8" stroke="#007BD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#007BD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>Add Education</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const education = ref(false)
</script>

<style scoped>
.education{
    border: 1px solid #D9D9D9;
    border-radius: 8px;
    margin-bottom:15px;
}
.main{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:15px;
    border-bottom: 1px solid #D9D9D9;
}
.edit{
    display:flex;
    align-items:center;
    gap:10px;
    cursor:pointer;
}
.all-education{
    padding:15px;
    display: flex;
    flex-direction:column;
    gap: 15px;
    flex-wrap: wrap;
}
.all-education div{
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size:14px;
}
.all-education div p{
    color:var(--text-color)
}
.empty{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    gap: 25px;
}
.empty p{
    font-size:14px;
    text-align:center;
}
.add-education{
    display: flex;
    gap: 10px;
    align-items: center;
    cursor:pointer;
}
.add-education p{
    font-weight:600;
    color:#007BD1;
}
</style>