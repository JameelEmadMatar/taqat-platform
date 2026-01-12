<template>
    <div class="skills" :style="{ borderStyle : Skills ? 'solid' : 'dotted'}">
        <div class="skills-inside">
            <div class="main" :style="{ borderBottomStyle : Skills ? 'solid' : 'dotted'}">
                <div class="title">
                    <p>Skills</p>
                </div>
                <div class="edit" v-if="skills" @click="showEdit">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2633 5.43908L5.05327 14.1291C4.74327 14.4591 4.44327 15.1091 4.38327 15.5591L4.01327 18.7991C3.88327 19.9691 4.72327 20.7691 5.88327 20.5691L9.10327 20.0191C9.55327 19.9391 10.1833 19.6091 10.4933 19.2691L18.7033 10.5791C20.1233 9.07908 20.7633 7.36908 18.5533 5.27908C16.3533 3.20908 14.6833 3.93908 13.2633 5.43908Z" stroke="#191919" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.8936 6.88916C12.3236 9.64916 14.5636 11.7592 17.3436 12.0392" stroke="#191919" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>Edit</p>
                </div>
            </div>
            <div class="all-skills" v-if="skills">
                <div class="skill">Web Design</div>
                <div class="skill">icons</div>
                <div class="skill">landing</div>
                <div class="skill">webdesign</div>
                <div class="skill">Home Page</div>
                <div class="skill">Web</div>
            </div>
            <div class="empty" v-if="!skills">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6665 26H27.9998" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.6665 16.6667H27.9998" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.6665 7.33325H27.9998" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 7.33341L5.33333 8.66675L9.33333 4.66675" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 16.6667L5.33333 18L9.33333 14" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 25.9999L5.33333 27.3333L9.33333 23.3333" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Add key skills that reflect your strengths and expertise.</p>
                <div class="add-skills" @click="showEdit">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12H16" stroke="#007BD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 16V8" stroke="#007BD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#007BD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>Add Skills</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useBadgesStore } from '../../../Store/Badges/BadgesStore'
const badgesStore = useBadgesStore()
const showEdit = () => {
    badgesStore.updateNestedStatus(1,true)
}
const skills = ref(true)
</script>

<style scoped>
.skills{
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
.all-skills{
    padding:15px;
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    margin-bottom:50px;
}
.skill{
    background-color:#F7F7F7;
    padding:6px 14px;
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
.add-skills{
    display: flex;
    gap: 10px;
    align-items: center;
    cursor:pointer;
}
.add-skills p{
    font-weight:600;
    color:#007BD1;
}
</style>