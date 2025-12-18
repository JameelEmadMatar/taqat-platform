<template>
    <div class="location">
         <div class="main">
            <p>Loaction</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.4707 13.2617L12.0007 9.74172L15.5307 13.2617" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="select">
            <p class="selected">{{optionSelected}}</p>
            <div class="options" v-if="optionsShow">
                <p @click="selectOption('Palestine')">Palestine</p>
                <p @click="selectOption('Italia')">Italia</p>
            </div>
            <svg v-if="!optionsShow" @click="optionsShowToogle()" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.4707 10.7383L12.0007 14.2583L15.5307 10.7383" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-if="optionsShow" @click="optionsShowToogle()" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.4707 13.2617L12.0007 9.74172L15.5307 13.2617" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
</template>
<script setup> 
import { ref } from 'vue'
const optionSelected = ref("" || "Location")
const optionsShow = ref(false)
function optionsShowToogle(){
    optionsShow.value = !optionsShow.value
}
function selectOption(option){
    optionSelected.value = option
    optionsShowToogle()
}

</script>
<style scoped>
.location{
    border-bottom: 1px solid #D9D9D9;
}
.main{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:15px;
}
.select{
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #D9D9D9;
    outline:none;
    position:relative;
    appearance:none;
}
.options{
    position: absolute;
    width: 100%;
    left: 0;
    top: 40px;
    padding: 15px;
    border-radius: 8px;
    font-size: 12px;
    background-color: #fff;
    border: 1px solid #D9D9D9;
}
.options p{
    margin-bottom:5px;
}
.select svg{
    width: 24px;
    height: 24px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
}
.selected{
    font-size:12px;
}
</style>