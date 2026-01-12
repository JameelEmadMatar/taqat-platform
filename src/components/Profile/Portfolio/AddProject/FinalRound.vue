<template>
    <div class="final">
        <div class="left">
            <p class="title">Thumbnail preview</p>
            <img :src="coverImage.url" alt="cover">
            <p class="change" @click="trigerInput">Change the cover</p>
            <!-- الإنبوت المخفي لاختيار الملفات -->
            <input
                type="file"
                ref="fileInput"
                multiple
                accept="image/*"
                class="hidden-input"
                @change="handleFiles"
            />
        </div>
        <div class="right">
            <div class="title">
                <label>Title</label>
                <input type="text" name="projectName" v-model="projectName">
            </div>
            <div class="skills">
                <p class="skills-title">Skills <span class="counter">{{ skills.length }}/16</span></p>
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
            </div>
        </div>
    </div>
    <BottomButtons :final="{skills : skills , projectName : projectName}"/>
</template>

<script setup>
import { ref , computed } from 'vue'
import { portfolioStore } from '../../../Store/Portfolio/PortfolioStore'
import BottomButtons from './BottomButtons.vue'

const projectsStore = portfolioStore()
const coverImage = computed(() => projectsStore.getProjectCover)
const fileInput = ref(null)
const projectName = ref(projectsStore.getFormValues.projectName)

const allSkillsChoise = ref(["Front End Development" , "Full Stack" , "Web Design" , "Figma", "MultiMedia" , "UIUX" , "Graphic Design" , "Front End Development" , "Full Stack" , "Web Design" , "Figma", "MultiMedia" , "UIUX" , "Graphic Design"])
const skillsChoiseSearch = ref()
const skills = ref([])
const skillInput = ref('')
const choiseShow = ref(false)

const trigerInput = () =>{
    fileInput.value?.click()
}
const handleFiles = (event) => {

    const files = event.target.files || event.dataTransfer?.files
    
    Array.from(files).forEach(file => {
        if(file.type.startsWith('image/')){
            const url = URL.createObjectURL(file)
            // change cover of store
            projectsStore.updateProjectCover(
                {
                    id : Date.now() + Math.random(),
                    url ,
                    file,
                }
            )
        }
    })
    // show alert upload success
    alert('upload success')
}
const addSkillFromOptions = (skill) =>{
    if(skills.value.length < 16 ){
        if(!skills.value.includes(skill)){
            skills.value.push(skill)
        }else{
            skills.value = skills.value.filter(e => e !== skill)
        }
    }
    choiseShow.value = false
    skillInput.value = ''
}
const removeSkill = (tag) => {
  skills.value = skills.value.filter(s => s !== tag)
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
    choiseShow.value == true ? choiseShow.value = false : choiseShow.value = true
}

</script>

<style scoped>
.final {
    display:flex;
    gap:20px;
    margin:15px 0;
}
.left{
    width:40%;
}
.left .title{
    font-weight:bold;
    font-size:18px;
}
.left img{
    width: 100%;
    height: 350px;
    border-radius: 8px;
    margin: 10px 0;
}
.left .hidden-input{
    display:none;
}
.left .change{
    text-decoration:underline;
    cursor:pointer;
}
.right{
    display:flex;
    flex-direction:column;
    width:60%;
}
.right input{
    border: 1px solid #D9D9D9;
    outline:none;
    border-radius: 8px;
    padding: 16px;
    width: 100%;
    margin:15px 0;
}
.right input:hover{
    border:1px solid var(--main-color);
}
.right .title label{
    font-weight:bold;
    font-size:18px;
}
.skills-title{
    margin-bottom:15px;
    font-weight:bold;
    font-size:18px;
}
.counter{
    color:var(--text-color);
    font-size : 12px;
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

.tags input:hover{
    border:none
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
</style>