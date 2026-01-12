<template>
    <div class="overview-main">
        <div class="inside">
            <!-- Progress Bar -->
            <div class="prog-main">
                <div class="progress">
                    <div class="prog-details">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0-4891-5182)">
                            <circle cx="12" cy="12" r="11.5" fill="#E6F2FA" stroke="#007BD1"/>
                            </g>
                            <defs>
                            <clipPath id="clip0-4891-5182">
                            <rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 0 24)"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <p>Overview</p>
                    </div>
                    <div class="line">
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                    </div>
                    <div class="prog-details">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="11.5" fill="white" stroke="#D9D9D9"/>
                        </svg>
                        <p>Pricing</p>
                    </div>
                    <div class="line">
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                    </div>
                    <div class="prog-details">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="11.5" fill="white" stroke="#D9D9D9"/>
                        </svg>
                        <p>Gallery</p>
                    </div>
                    <div class="line">
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                    </div>
                    <div class="prog-details">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="11.5" fill="white" stroke="#D9D9D9"/>
                        </svg>
                        <p>Process</p>
                    </div>
                    <div class="line">
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                    </div>
                    <div class="prog-details">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="11.5" fill="white" stroke="#D9D9D9"/>
                        </svg>
                        <p>Description</p>
                    </div>
                    <div class="line">
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                        <div>-</div>
                    </div>
                    <div class="prog-details">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="11.5" fill="white" stroke="#D9D9D9"/>
                        </svg>
                        <p>Review</p>
                    </div>
                </div>
            </div>
            <div class="overview">
                <h5>Service Overview</h5>
                <form>
                    <div class="form-div">
                        <label>Service name or short description</label>
                        <input type="text" name="name" placeholder="Service name or short description" v-model="form.name">
                    </div>
                    <div class="form-div">
                        <label>Industry</label>
                        <div class="industry-select">
                            <input type="text" name="industry" v-model="form.industry" placeholder="Design,Development,Writing" disabled>
                            <div class="options">
                                <div class="option" @click="form.industry = 'Development And It' ">
                                    Development And It
                                </div>
                                <div class="option">
                                    Web Development
                                </div>
                                <div class="option">
                                    Design
                                </div>
                                <div class="option">
                                    Writing
                                </div>
                                <div class="option">
                                    Translation
                                </div>
                                <div class="option">
                                    Web Development
                                </div>
                                <div class="option">
                                    Design
                                </div>
                                <div class="option">
                                    Writing
                                </div>
                                <div class="option">
                                    Translation
                                </div>
                            </div>
                            <svg class="svg" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.57764 10.7402L12.1517 14.2602L15.7258 10.7402" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div class="form-div">
                        <label>Specialty</label>
                        <div class="specialty-select">
                            <input type="text" name="industry" v-model="form.specialty" placeholder="Select Specialty" disabled>
                            <div class="options">
                                <div class="option" @click="form.specialty = 'Development And It' ">
                                    Development And It
                                </div>
                                <div class="option">
                                    Web Development
                                </div>
                                <div class="option">
                                    Design
                                </div>
                                <div class="option">
                                    Writing
                                </div>
                                <div class="option">
                                    Translation
                                </div>
                                <div class="option">
                                    Web Development
                                </div>
                                <div class="option">
                                    Design
                                </div>
                                <div class="option">
                                    Writing
                                </div>
                                <div class="option">
                                    Translation
                                </div>
                            </div>
                            <svg class="svg" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.57764 10.7402L12.1517 14.2602L15.7258 10.7402" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div class="form-div">
                        <label>Skills</label>
                        <!-- Skills (Tags) -->
                        <div class="field">
                            <div class="tags-input">
                                <div class="tags">
                                    <span v-for="tag in skills" :key="tag" class="tag">
                                    {{ tag }} <span class="remove" @click="removeSkill(tag)">×</span>
                                    </span>
                                    <input
                                        type="text"
                                        :placeholder="skills.length > 0? '' : 'Help clients find your project'"
                                        v-model="skillInput"
                                        @input = "searchChoise"
                                        @click="inputClick"
                                        class="skills-input"
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
                    </div>
                </form>
            </div>
        </div>
    </div>
    <BottomButtons/>
</template>

<script setup>
import { ref , computed } from 'vue'
import BottomButtons from './BottomButtons.vue'
const form = ref({
    name : null,
    industry : null,
    specialty : null,
    skills : [],
})
const allSkillsChoise = ref(["Front End Development" , "Full Stack" , "Web Design" , "Figma", "MultiMedia" , "UIUX" , "Graphic Design" , "Front End Development" , "Full Stack" , "Web Design" , "Figma", "MultiMedia" , "UIUX" , "Graphic Design"])
const skillsChoiseSearch = ref()
const skills = ref(['Web Design', 'Figma'])
const skillInput = ref('')
const choiseShow = ref(false)

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
const searchChoise = () => {
    skillsChoiseSearch.value = allSkillsChoise.value.filter(e => {
        return e.includes(skillInput.value)
    })
}
const inputClick = () => {
    if(skillInput.value == ''){
        skillsChoiseSearch.value  = allSkillsChoise.value
    }
    choiseShow.value = !choiseShow.value
}
</script>

<style scoped>
.overview-main{
    overflow:auto;
    height:85%;
    max-height:85%;
}
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
    gap:10px;
    flex-wrap:wrap;
}
.prog-details{
    display: flex;
    align-items: center;
    gap: 5px;
}
.prog-details p{
    font-size:12px;
    color:var(--text-color);
    font-weight:400;
    text-align:center;
}
.prog-details:first-child p{
    color:black;
    font-weight:bold;
}
.line{
    display: flex;
    gap: 3px;
    align-items: center;
    color: var(--text-color);
}
.overview h5{
    font-size:24px;
    margin:15px 0;
}
form{
    display:flex;
    flex-direction:column;
    gap:20px;
}
form .form-div{
    display:flex;
    flex-direction:column;
    gap:15px;
}
form .form-div input{
    width:100%;
    border:1px solid #D9D9D9;
    border-radius:8px;
    padding:15px;
    min-height:50px;
    outline:none;
}
.industry-select , .specialty-select{
    display:flex;
    position:relative;
}
.industry-select .options , .specialty-select .options{
    display:none;
    position:absolute;
    width: 100%;
    background-color: #fff;
    margin: 70px 0;
    overflow:auto;
    box-shadow: 0 0 20px 0 #0F0C2B1A;
    padding: 15px;
    border-radius:8px;
}
.industry-select .options .option , .specialty-select .options .option{
    margin: 15px 0;
    background-color: #eee;
    padding: 15px;
    cursor: pointer;
}
.svg{
    position: absolute;
    right: 10px;
    top: 25%;
    cursor: pointer;
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
.skills-input{
    border:none !important;
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