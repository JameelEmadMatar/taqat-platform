<template>
    <section>
        <div class="container">
            <NavBar/>
            <div class="main-page">
                <!-- H1 And Fields -->
                <div class="find">
                    <h1>Find a Talent</h1>
                    <div class="fields">
                        <p>Graphics & Design</p>
                        <p>Programming & Tech</p>
                        <p>Digital Marketing</p>
                        <p>Video & Animation</p>
                        <p>Writing & Translation</p>
                        <p>Music & Audio</p>
                        <p>Business</p>
                        <p>Finance</p>
                    </div>
                </div>
                <!-- Search Input -->
                <div class="search">
                    <input type="text" name="search" placeholder="Search for Talents">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 22L20 20" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <!-- Filters -->
                <div class="result-filters">
                    <p class="result">8,100+ results</p>
                    <div class="filters">
                        <div class="saved">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.0176 1.66602H5.98424C4.20924 1.66602 2.76758 3.11602 2.76758 4.88268V16.6243C2.76758 18.1243 3.84258 18.7577 5.15924 18.0327L9.22591 15.7743C9.65924 15.5327 10.3592 15.5327 10.7842 15.7743L14.8509 18.0327C16.1676 18.766 17.2426 18.1327 17.2426 16.6243V4.88268C17.2342 3.11602 15.7926 1.66602 14.0176 1.66602Z" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.0176 1.66602H5.98424C4.20924 1.66602 2.76758 3.11602 2.76758 4.88268V16.6243C2.76758 18.1243 3.84258 18.7577 5.15924 18.0327L9.22591 15.7743C9.65924 15.5327 10.3592 15.5327 10.7842 15.7743L14.8509 18.0327C16.1676 18.766 17.2426 18.1327 17.2426 16.6243V4.88268C17.2342 3.11602 15.7926 1.66602 14.0176 1.66602Z" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Saved Service <span>( 2 )</span></p>
                        </div>
                        <div class="sort">
                            <label>Sort by:</label>
                            <p>{{sortSellected}}</p>
                            <svg class="arrow" @click="optionsBoxToggle()" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.47461 10.7402L12.0046 14.2602L15.5346 10.7402" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div class="options-box" v-if="showOptions" :style="{ display: showOptions ? 'flex' : 'none' }">
                                <div class="option" @click="selectOption('Most Relevant')">
                                    <svg v-if="sortSellected='Most Relevant'" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.75 3.75L3.75 6.75L9.7606 0.75" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p>Most Relevant</p>
                                </div>
                                <div class="option" @click="selectOption('Most Experienced')">
                                    <svg v-if="sortSellected='Most Experienced'" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.75 3.75L3.75 6.75L9.7606 0.75" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p>Most Experienced</p>
                                </div>
                                <div class="option" @click="selectOption('Newest')">
                                    <svg v-if="sortSellected='Newest'" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.75 3.75L3.75 6.75L9.7606 0.75" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p>Newest</p>
                                </div>
                            </div>
                        </div>
                        <div class="filter">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.32282 2.69531C3.66727 2.69531 3.94727 2.97531 3.94727 3.32087V20.8986C3.94727 21.0644 3.88142 21.2234 3.76421 21.3406C3.647 21.4578 3.48803 21.5236 3.32227 21.5236C3.15651 21.5236 2.99753 21.4578 2.88032 21.3406C2.76311 21.2234 2.69727 21.0644 2.69727 20.8986V3.32087C2.69727 2.97531 2.97727 2.69531 3.32282 2.69531ZM10.2095 8.73753C10.4539 8.98198 10.4539 9.37754 10.2095 9.62198L8.34727 11.4842H20.9006C21.0618 11.491 21.2141 11.5598 21.3258 11.6763C21.4375 11.7928 21.4998 11.9479 21.4998 12.1092C21.4998 12.2705 21.4375 12.4257 21.3258 12.5421C21.2141 12.6586 21.0618 12.7274 20.9006 12.7342H8.34727L10.2095 14.5975C10.2675 14.6555 10.3135 14.7244 10.3449 14.8002C10.3763 14.876 10.3924 14.9572 10.3924 15.0392C10.3924 15.1212 10.3763 15.2024 10.3449 15.2782C10.3135 15.354 10.2675 15.4229 10.2095 15.4809C10.1515 15.5389 10.0826 15.5849 10.0068 15.6163C9.93107 15.6477 9.84985 15.6638 9.76782 15.6638C9.6858 15.6638 9.60457 15.6477 9.52879 15.6163C9.45301 15.5849 9.38416 15.5389 9.32615 15.4809L6.39615 12.552C6.33797 12.494 6.2918 12.425 6.2603 12.3492C6.2288 12.2733 6.21258 12.1919 6.21258 12.1098C6.21258 12.0276 6.2288 11.9462 6.2603 11.8704C6.2918 11.7945 6.33797 11.7255 6.39615 11.6675L9.32615 8.73753C9.5706 8.49309 9.96616 8.49309 10.2095 8.73753Z" fill="#696A70"/>
                            </svg>
                            <p>Filters</p>
                        </div>
                    </div>
                </div>
                <!-- Main Div Results -->
                <div class="main">
                    <ResultsBar/>
                    <!-- Filter -- Right Side -->
                    <div class="right-side">
                        <RightSide/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
import NavBar from '../LandingPage/NavBar.vue'
import ResultsBar from './LeftSide/ResultsBar.vue'
import RightSide from './RightBar/RightSide.vue'
const sortSellected = ref('Most Relevant')
const showOptions = ref(false)
function optionsBoxToggle(){
    showOptions.value = !showOptions.value
}
function selectOption(option){
    sortSellected.value = option
    optionsBoxToggle()
}
</script>

<style scoped>
.find h1{
    margin-bottom:20px;
}
.fields{
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:var(--text-color);
    margin-bottom:30px;
}
.search{
    position:relative;
    width: 100%;
    border-radius: 8px;
    padding: 8px 20px;
    border: 1px solid #D9D9D9;
    outline: none;
}
.search input{
    border: none;
    margin-left: 15px;
    outline: none;
    width: 100%;
}
.search svg{
    position: absolute;
    left: 5px;
    top: 5px;
    width: 24px;
    height: 24px;
    cursor: pointer;
}
.result-filters{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
}
.result{
    color:var(--text-color);
    font-size:12px;
}
.filters{
    display: flex;
    align-items: center;
    gap: 25px;
    font-size:12px;
}
.filters div{
    display: flex;
    gap: 10px;
    align-items: center;
}
.sort{
    position:relative;
}
.sort .options-box{
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 20px;
    gap: 20px;
    align-items: flex-start;
    border-radius: 8px;
    box-shadow: 0 0 20px 0 #0F0C2B1A;
    right: 0;
    top: 30px;
    width:180px;
    display:none;
}
.sort .options-box .option , .sort .arrow{
    cursor:pointer
}
.sort label{
    color:var(--text-color);
}
.main{
    display: flex;
    gap: 10px;
}

.right-side{
    width:25%;
    border: 1px solid #D9D9D9;
    border-radius: 8px;
    padding:20px;
    margin-bottom:15px;
}
@media screen and (max-width:992px){
    .main{
        flex-direction:column;
    }
    .fields{
        font-size : 12px;
    }
    .right-side{
        width:100%;
    }
}
@media screen and (max-width:767px){
    .fields{
        font-size:8px;
    }
}
</style>