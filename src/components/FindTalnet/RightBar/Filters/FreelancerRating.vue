<template>
    <div class="rating">
        <div class="main">
            <p>Freelancer Rating</p>
            <svg v-if="!ratingOpen" @click="ratingOpenToggle()" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.4707 10.7383L12.0007 14.2583L15.5307 10.7383" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-if="ratingOpen" @click="ratingOpenToggle()" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.4707 13.2617L12.0007 9.74172L15.5307 13.2617" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="radio-list" v-if="ratingOpen">
            <div class="list-item">
                <input type="radio" v-model="selected" value="5 star" />
                <!-- Star Icon -->
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2928 2.63297L11.6128 5.27297C11.7928 5.64047 12.2728 5.99297 12.6778 6.06047L15.0703 6.45797C16.6003 6.71297 16.9603 7.82297 15.8578 8.91797L13.9978 10.778C13.6828 11.093 13.5103 11.7005 13.6078 12.1355L14.1403 14.438C14.5603 16.2605 13.5928 16.9655 11.9803 16.013L9.73779 14.6855C9.33279 14.4455 8.66529 14.4455 8.25279 14.6855L6.01029 16.013C4.40529 16.9655 3.43029 16.253 3.85029 14.438L4.38279 12.1355C4.48029 11.7005 4.30779 11.093 3.99279 10.778L2.13279 8.91797C1.03779 7.82297 1.39029 6.71297 2.92029 6.45797L5.31279 6.06047C5.71029 5.99297 6.19029 5.64047 6.37029 5.27297L7.69029 2.63297C8.41029 1.20047 9.58029 1.20047 10.2928 2.63297Z" fill="#FFB400"/>
                </svg>
                <p><span>5</span> stars </p>
                <p class="count">(122)</p>
            </div>
            <div class="list-item">
                <input type="radio" v-model="selected" value="4 star" />
                <!-- Star Icon -->
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2928 2.63297L11.6128 5.27297C11.7928 5.64047 12.2728 5.99297 12.6778 6.06047L15.0703 6.45797C16.6003 6.71297 16.9603 7.82297 15.8578 8.91797L13.9978 10.778C13.6828 11.093 13.5103 11.7005 13.6078 12.1355L14.1403 14.438C14.5603 16.2605 13.5928 16.9655 11.9803 16.013L9.73779 14.6855C9.33279 14.4455 8.66529 14.4455 8.25279 14.6855L6.01029 16.013C4.40529 16.9655 3.43029 16.253 3.85029 14.438L4.38279 12.1355C4.48029 11.7005 4.30779 11.093 3.99279 10.778L2.13279 8.91797C1.03779 7.82297 1.39029 6.71297 2.92029 6.45797L5.31279 6.06047C5.71029 5.99297 6.19029 5.64047 6.37029 5.27297L7.69029 2.63297C8.41029 1.20047 9.58029 1.20047 10.2928 2.63297Z" fill="#FFB400"/>
                </svg>
                <p><span>4+</span> stars </p>
                <p class="count">(90)</p>
            </div>
            <div class="list-item">
                <input type="radio" v-model="selected" value="3 star" />
                <!-- Star Icon -->
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2928 2.63297L11.6128 5.27297C11.7928 5.64047 12.2728 5.99297 12.6778 6.06047L15.0703 6.45797C16.6003 6.71297 16.9603 7.82297 15.8578 8.91797L13.9978 10.778C13.6828 11.093 13.5103 11.7005 13.6078 12.1355L14.1403 14.438C14.5603 16.2605 13.5928 16.9655 11.9803 16.013L9.73779 14.6855C9.33279 14.4455 8.66529 14.4455 8.25279 14.6855L6.01029 16.013C4.40529 16.9655 3.43029 16.253 3.85029 14.438L4.38279 12.1355C4.48029 11.7005 4.30779 11.093 3.99279 10.778L2.13279 8.91797C1.03779 7.82297 1.39029 6.71297 2.92029 6.45797L5.31279 6.06047C5.71029 5.99297 6.19029 5.64047 6.37029 5.27297L7.69029 2.63297C8.41029 1.20047 9.58029 1.20047 10.2928 2.63297Z" fill="#FFB400"/>
                </svg>
                <p><span>3+</span> stars </p>
                <p class="count">(95)</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const ratingOpen = ref(true)
const selected = ref('5 star')
function ratingOpenToggle(){
    ratingOpen.value = !ratingOpen.value
}
</script>
<style scoped>
.rating{
    border-bottom: 1px solid #D9D9D9;
}
.main{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:15px;
}
.radio-list{
    margin:10px 0;
}
.list-item{
    display: flex;
    align-items: center;
    gap: 10px;
    margin:10px 0;
    font-size:12px;
}
input{
    width:24px;
    height:24px;
}
.count{
    color:var(--text-color)
}
</style>