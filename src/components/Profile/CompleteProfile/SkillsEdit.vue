<template>
    <div class="edit-main" v-if="showSkillsStatus" @click.stop>
        <div class="edit">
            <div class="edit-skills">
                <TopBar :nestedIndex = "1" title = "Skills"/>
                <p class="title">Skills</p>
                <!-- Skills (Tags) -->
                <div class="field">
                    <div class="tags-input">
                        <div class="tags">
                            <span v-for="tag in skills" :key="tag" class="tag">
                            {{ tag }} <span class="remove" @click="removeSkill(tag)">×</span>
                            </span>
                            <input
                                type="text"
                                placeholder="Type skill and press Enter"
                                v-model="skillInput"
                                @input = "searchChoise"
                                @click="inputClick"
                            />
                        </div>
                        <span class="counter">{{ skills.length }}/16</span>
                    </div>
                    <div>
                        <div class="choise-div" v-if="choiseShow">
                            <div v-for="skill of skillsChoiseSearch" class="option" :key="skill.index" :class="{ 'selected' : skills.includes(skill) }" @click="addSkillFromOptions(skill)">
                                <p class="name">{{skill}}</p>
                                <svg v-if="skills.includes(skill)" viewBox="64 64 896 896" focusable="false" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Action Buttons -->
                <div class="buttons">
                    <button @click="cancle" class="cancle">Cancle</button>
                    <button
                        @click="save"
                        class="save"
                    >
                        Save
                    </button>
                </div>
                <DiscardChanges :nestedIndex = "1"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref , computed , onUnmounted , watch} from 'vue'
import DiscardChanges from '../../Auth/IdentityVerification/DiscardChanges.vue'
import TopBar from '../BopUpTopBar/TopBar.vue'
import { useRoundStore } from '../../Store/IdentityVerification/Round'
import { useBadgesStore } from '../../Store/Badges/BadgesStore'
const allSkillsChoise = ref(["Front End Development" , "Full Stack" , "Web Design" , "Figma", "MultiMedia" , "UIUX" , "Graphic Design" , "Front End Development" , "Full Stack" , "Web Design" , "Figma", "MultiMedia" , "UIUX" , "Graphic Design"])
const skillsChoiseSearch = ref()
const skills = ref(['Web Design', 'Figma'])
const skillInput = ref('')
const choiseShow = ref(false)
const badgesStore = useBadgesStore()
const showSkillsStatus = computed(() => {
    const skillsSection = badgesStore.nestedShowStatus.find(item => item.name === 'Skills')
    return skillsSection ? skillsSection.status : false
})


const addSkillFromOptions = (skill) =>{
    if(skills.value.length < 16 && !skills.value.includes(skill)){
        skills.value.push(skill)
    }
    choiseShow.value = false
    skillInput.value = ''
}
const removeSkill = (tag) => {
  skills.value = skills.value.filter(s => s !== tag)
}
const cancle = () => {
    useRoundStore().updateDiscardBoxStatus(true)
}
const searchChoise = () => {
    skillsChoiseSearch.value = allSkillsChoise.value.filter(e => {
        return e.includes(skillInput.value)
    })
}
const inputClick = () => {
    if(skillInput.value == ''){
        skillsChoiseSearch.value  = allSkillsChoise.value
    }
    choiseShow.value = true
}

watch(showSkillsStatus, (newValue, oldValue) => {
    if (oldValue === true && newValue === false) {
        // إعادة تعيين جميع المتغيرات عند الإغلاق
        resetComponent()
    }
})

// دالة لإعادة تعيين المكون
const resetComponent = () => {
    skills.value = ['Web Design', 'Figma'] // إعادة للقيم الافتراضية
    skillInput.value = ''
    choiseShow.value = false
    skillsChoiseSearch.value = null
}

onUnmounted(() => resetComponent())
</script>

<style scoped>
.edit-main{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:1000;
}
.edit{
    position: fixed;
    background-color: #fff;
    border-radius: 8px;
    width: 50%;
    max-width: 500px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    height: 50%;
    max-height: 500px;
    padding: 20px;
}
.title{
    font-weight:600;
    font-size:14px;
    margin:20px 0;
}
.field{
    position:relative;
}
.tags-input {
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    border: 1px solid #D9D9D9;
    border-radius: 8px;
    height:fit-content;
}
.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    min-height: 56px;
}

.tag {
    padding: 6px 12px;
    border:1px solid #D9D9D9;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 6px;
}

.remove {
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
}

.tags input {
    border: none;
    outline: none;
    padding: 8px 0;
    flex: 1;
    min-width: 180px;
    font-size: 16px;
}
.counter{
    text-align:end
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
.buttons .cancle{
    background-color:#fff;
    color:black;
}
.buttons .cancle:hover{
    color: #006fbc;
    border-color: #006fbc;
    background: #ffffff;
}
.buttons .save{
    background-color:var(--main-color);
    color:#fff;
}
.buttons .save:hover{
    background: #006fbc;
    color: #fff;
}
.choise-div{
    overflow:auto;
    max-height:250px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    position: absolute;
    background-color: #fff;
    width: 100%;
    margin-top: 10px;
    border-radius: 8px;
    z-index:1;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
.option{
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor:pointer;
    margin-bottom: 15px;
    padding:5px;
}
.selected{
    background-color: var(--main-color);
    font-weight: bold;
    color: #fff;
}
:deep(.discard-main){
    width: 40%;
    max-width: 350px;
}
@media screen and (min-width:576px) and (max-width:991px){
    .edit{
        min-height:70%;
        min-width:70%;
    }
}
@media screen and (max-width:575px){
    .edit{
        min-height:90%;
        min-width:90%;
    }
}
</style>