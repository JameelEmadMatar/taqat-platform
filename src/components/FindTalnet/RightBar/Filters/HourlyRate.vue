<template>
    <div class="hourly">
        <div class="main">
            <p>Hourly rate</p>
            <svg v-if="!hourOpen" @click="hourOpenToggle()" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.4707 10.7383L12.0007 14.2583L15.5307 10.7383" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-if="hourOpen" @click="hourOpenToggle()" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.4707 13.2617L12.0007 9.74172L15.5307 13.2617" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="inside" v-if="hourOpen">
            <div class="numbers">
                <div>
                    <svg width="54" height="40" viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_4891_21505" fill="white">
                        <path d="M50 0C52.2091 4.50979e-07 54 1.79086 54 4V27C54 29.2091 52.2091 31 50 31H33.79L28.3193 38.8271C27.9213 39.3965 27.0787 39.3965 26.6807 38.8271L21.21 31H4C1.79086 31 0 29.2091 0 27V4C0 1.79086 1.79086 1.61064e-08 4 0H50Z"/>
                        </mask>
                        <path d="M50 0C52.2091 4.50979e-07 54 1.79086 54 4V27C54 29.2091 52.2091 31 50 31H33.79L28.3193 38.8271C27.9213 39.3965 27.0787 39.3965 26.6807 38.8271L21.21 31H4C1.79086 31 0 29.2091 0 27V4C0 1.79086 1.79086 1.61064e-08 4 0H50Z" fill="#FBFBFB"/>
                        <path d="M50 0V-1V0ZM50 31V32V31ZM33.79 31V30H33.2689L32.9704 30.4271L33.79 31ZM28.3193 38.8271L29.1389 39.4001L29.139 39.4L28.3193 38.8271ZM26.6807 38.8271L25.861 39.4L25.8611 39.4001L26.6807 38.8271ZM21.21 31L22.0296 30.4271L21.7311 30H21.21V31ZM4 31L4 32H4V31ZM4 0V-1V0ZM50 0V1C51.6569 1 53 2.34315 53 4H54H55C55 1.23858 52.7614 -0.999999 50 -1V0ZM54 4H53V27H54H55V4H54ZM54 27H53C53 28.6569 51.6569 30 50 30V31V32C52.7614 32 55 29.7614 55 27H54ZM50 31V30H33.79V31V32H50V31ZM33.79 31L32.9704 30.4271L27.4997 38.2543L28.3193 38.8271L29.139 39.4L34.6097 31.5729L33.79 31ZM28.3193 38.8271L27.4998 38.2542H27.5002L26.6807 38.8271L25.8611 39.4001C26.6572 40.5389 28.3428 40.5389 29.1389 39.4001L28.3193 38.8271ZM26.6807 38.8271L27.5003 38.2543L22.0296 30.4271L21.21 31L20.3903 31.5729L25.861 39.4L26.6807 38.8271ZM21.21 31V30H4V31V32H21.21V31ZM4 31V30C2.34315 30 1 28.6569 1 27H0H-1C-1 29.7614 1.23858 32 4 32L4 31ZM0 27H1V4H0H-1V27H0ZM0 4H1C1 2.34315 2.34315 1 4 1V0V-1C1.23858 -1 -1 1.23858 -1 4H0ZM4 0V1H50V0V-1H4V0Z" fill="#D9D9D9" mask="url(#path-1-inside-1_4891_21505)"/>
                    </svg>
                    <p>$<span>10</span></p>
                </div>
                <div>
                    <svg width="54" height="40" viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_4891_21505" fill="white">
                        <path d="M50 0C52.2091 4.50979e-07 54 1.79086 54 4V27C54 29.2091 52.2091 31 50 31H33.79L28.3193 38.8271C27.9213 39.3965 27.0787 39.3965 26.6807 38.8271L21.21 31H4C1.79086 31 0 29.2091 0 27V4C0 1.79086 1.79086 1.61064e-08 4 0H50Z"/>
                        </mask>
                        <path d="M50 0C52.2091 4.50979e-07 54 1.79086 54 4V27C54 29.2091 52.2091 31 50 31H33.79L28.3193 38.8271C27.9213 39.3965 27.0787 39.3965 26.6807 38.8271L21.21 31H4C1.79086 31 0 29.2091 0 27V4C0 1.79086 1.79086 1.61064e-08 4 0H50Z" fill="#FBFBFB"/>
                        <path d="M50 0V-1V0ZM50 31V32V31ZM33.79 31V30H33.2689L32.9704 30.4271L33.79 31ZM28.3193 38.8271L29.1389 39.4001L29.139 39.4L28.3193 38.8271ZM26.6807 38.8271L25.861 39.4L25.8611 39.4001L26.6807 38.8271ZM21.21 31L22.0296 30.4271L21.7311 30H21.21V31ZM4 31L4 32H4V31ZM4 0V-1V0ZM50 0V1C51.6569 1 53 2.34315 53 4H54H55C55 1.23858 52.7614 -0.999999 50 -1V0ZM54 4H53V27H54H55V4H54ZM54 27H53C53 28.6569 51.6569 30 50 30V31V32C52.7614 32 55 29.7614 55 27H54ZM50 31V30H33.79V31V32H50V31ZM33.79 31L32.9704 30.4271L27.4997 38.2543L28.3193 38.8271L29.139 39.4L34.6097 31.5729L33.79 31ZM28.3193 38.8271L27.4998 38.2542H27.5002L26.6807 38.8271L25.8611 39.4001C26.6572 40.5389 28.3428 40.5389 29.1389 39.4001L28.3193 38.8271ZM26.6807 38.8271L27.5003 38.2543L22.0296 30.4271L21.21 31L20.3903 31.5729L25.861 39.4L26.6807 38.8271ZM21.21 31V30H4V31V32H21.21V31ZM4 31V30C2.34315 30 1 28.6569 1 27H0H-1C-1 29.7614 1.23858 32 4 32L4 31ZM0 27H1V4H0H-1V27H0ZM0 4H1C1 2.34315 2.34315 1 4 1V0V-1C1.23858 -1 -1 1.23858 -1 4H0ZM4 0V1H50V0V-1H4V0Z" fill="#D9D9D9" mask="url(#path-1-inside-1_4891_21505)"/>
                    </svg>
                    <p>$<span>1000</span></p>
                </div>
            </div>
            <div class="range">
                <div class="line"></div>
                <div class="circle circle-1"></div>
                <div class="circle circle-2"></div>
            </div>
            <div class="buttons">
                <input type="number" name="min" placeholder="Min Value">
                <input type="number" name="Max" placeholder="Max Value">
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const hourOpen = ref(true)

function hourOpenToggle(){
    hourOpen.value = !hourOpen.value
}
</script>


<style scoped>
.hourly{
    border-bottom: 1px solid #D9D9D9;
}
.main{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:15px;
}
.numbers{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
}
.numbers div{
    position:relative;
}
.numbers div p{
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.range{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    position:relative;
}
.line{
    width: 100%;
    height: 2px;
    background: black;
}
.circle{
    width:18px;
    height:18px;
    border-radius: 50%;
    background-color: black;
    position: absolute;
}
.circle-1{
    left:0
}
.circle-2{
    right:0
}
.buttons{
    display:flex;
    align-items:center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
}
.buttons input{
    border: 1px solid #D9D9D9;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 10px;
    width: 135px;
    outline:none;
}
</style>