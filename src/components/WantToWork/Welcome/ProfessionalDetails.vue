<template>
    <section>
        <div class="container main">
            <Header/>
            <div class="main-box">
                <div class="prog-main">
                    <div class="progress">
                        <div class="prog-details">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_4891_5178)">
                                <circle cx="12" cy="12" r="11.5" fill="#007BD1" stroke="#007BD1"/>
                                <path d="M7.00061 12L10.0006 15L16.0112 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_4891_5178">
                                <rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 0 24)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <p>Find Job</p>
                        </div>
                        <svg class="line" width="70" height="1" viewBox="0 0 70 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line opacity="0.5" x1="0.5" y1="0.5" x2="69.5" y2="0.5" stroke="#87888C" stroke-linecap="round" stroke-dasharray="5 5"/>
                        </svg>
                        <div class="prog-details">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_4891_5178)">
                                <circle cx="12" cy="12" r="11.5" fill="#007BD1" stroke="#007BD1"/>
                                <path d="M7.00061 12L10.0006 15L16.0112 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_4891_5178">
                                <rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 0 24)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <p>Personal Details</p>
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
                            <p>Professional Details</p>
                        </div>
                    </div>
                </div>
                <form>
                    <!-- Industry / Work Field -->
                    <div class="field">
                        <label>Industry</label>
                        <div class="select-wrapper">
                        <select v-model="industry">
                            <option disabled value="">Work Field : Design, Development, Writing</option>
                            <option>Design</option>
                            <option>Development</option>
                            <option>Writing</option>
                            <option>Marketing</option>
                        </select>
                        </div>
                    </div>

                    <!-- Specialty -->
                    <div class="field">
                        <label>Specialty</label>
                        <div class="select-wrapper">
                        <select v-model="specialty">
                            <option disabled value="">Select Specialty</option>
                            <option>UI/UX Design</option>
                            <option>Frontend Developer</option>
                            <option>Content Writer</option>
                        </select>
                        </div>
                    </div>

                    <!-- Skills (Tags) -->
                    <div class="field">
                        <label>Skills <span class="optional">(optional)</span></label>
                        <div class="tags-input">
                        <div class="tags">
                            <span v-for="tag in skills" :key="tag" class="tag">
                            {{ tag }} <span class="remove" @click="removeSkill(tag)">×</span>
                            </span>
                            <input
                            type="text"
                            placeholder="Type skill and press Enter"
                            @keydown.enter.prevent="addSkill"
                            v-model="skillInput"
                            />
                        </div>
                        <span class="counter">{{ skills.length }}/16</span>
                        </div>
                    </div>

                    <!-- Description / Bio -->
                    <div class="field">
                        <label>Description - bio <span class="optional">(optional)</span></label>
                        <div class="textarea-wrapper">
                        <textarea
                            v-model="bio"
                            placeholder="Pitch your experience in a few sentences"
                            maxlength="4000"
                        ></textarea>
                        <span class="counter">{{ bio.length }}/4000</span>
                        </div>
                    </div>

                    <!-- Hourly Rate -->
                    <div class="field">
                        <label>Hourly rate</label>
                        <div class="input-icon">
                        <input
                            type="text"
                            v-model="hourlyRate"
                            placeholder="Enter your hourly rate — e.g. 15"
                        />
                        <span class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 6V18" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        </div>
                    </div>

                    <!-- Ready To Work? -->
                    <div class="field last">
                        <label>Ready To Work?</label>
                        <label class="switch">
                            <span class="switch-text">Available to Work</span>
                            <input type="checkbox" v-model="readyToWork" />
                            <span class="slider"></span>
                        </label>
                    </div>
                </form>
                <div class="buttons">
                    <button class="two" @click="useStageStore().updateRound(1)">Back</button>
                    <button class="one" @click="useStageStore().updateRound(3)">Continue</button>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
import { useStageStore } from '../../Store/WantToWork/Stage'
import Header from './Header.vue'

const industry = ref('')
const specialty = ref('')
const skills = ref(['Web Design', 'Figma'])
const skillInput = ref('')
const bio = ref('')
const hourlyRate = ref('')
const readyToWork = ref(true)

const addSkill = () => {
  if (skillInput.value.trim() && skills.value.length < 16) {
    skills.value.push(skillInput.value.trim())
    skillInput.value = ''
  }
}

const removeSkill = (tag) => {
  skills.value = skills.value.filter(s => s !== tag)
}
</script>

<style scoped>
.container{
    min-height:100vh;
    padding-top: 40px;
    padding-bottom: 40px;
}
.main-box{
    margin: 20px 0;
    border: 1px solid #D9D9D9;
    border-radius: 8px;
    padding: 20px 0;
    height:95%;
    position:relative;
}
.prog-main{
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #D9D9D9;
    padding-bottom: 20px;
}
.progress{
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


.form {
  width: 100%;
  max-width: 560px;
}

.field {
  margin:30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.field.last{
    margin-bottom:100px;
}

.field label {
  margin-bottom: 10px;
}

.optional {
  color: #64748b;
  font-size: 13px;
}

/* Select & Input Style */
.select-wrapper,
.input-icon,
.tags-input,
.textarea-wrapper{
  position: relative;
  border-radius: 8px;
  border:1px solid #D9D9D9;
  width:80%;
}

select,
input,
textarea {
  width: 100%;
  padding: 18px 20px;
  border: none;
  outline: none;
  font-size: 16px;
  background: transparent;
  color: #1e293b;
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236b7280'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 20px center;
  background-size: 24px;
  padding-left: 20px;

}


.input-icon {
  position: relative;
}

.icon {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  color: #64748b;
  pointer-events: none;
  width:24px;
  height:24px;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

/* Tags Input */
.tags-input {
  padding: 12px 16px;
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

/* Counter */
.counter {
  position: absolute;
  bottom: 12px;
  right: 20px;
  font-size: 14px;
  color: #94a3b8;
}

/* Switch */
.switch {
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  padding: 16px 20px;
  border-radius: 8px;
  width:80%;
}

.switch input {
  display: none;
}

.slider {
  position: relative;
  width: 56px;
  height: 32px;
  background: #cbd5e1;
  border-radius: 50px;
  transition: 0.3s;
}

.slider::before {
  content: '';
  position: absolute;
  width: 26px;
  height: 26px;
  background: white;
  border-radius: 50%;
  top: 3px;
  left: 4px;
  transition: 0.3s;
}

input:checked + .slider {
  background: #3b82f6;
}

input:checked + .slider::before {
  transform: translateX(24px);
}

.switch-text {
  color: #1e293b;
  font-weight: 500;
}
.buttons{
    position:absolute;
    right: 30px;
    bottom: 30px;
    padding: 15px 0;
    display: flex;
    gap: 10px;
    align-items: center;
}
.buttons .one , .buttons .two{
    cursor:pointer;
    border: none;
    outline: none;
    background-color: var(--main-color);
    color: #fff;
    border-radius: 8px;
    width: 160px;
    font-weight:600;
    padding:15px;
}
.buttons .two{
    color:black;
    background-color:#fff;
    border: 1px solid #D9D9D9;
    width:100px;
}
:deep(nav){
    display:none
}
@media screen and (max-width:992px){
    .main{
        min-height:100vh;
        padding-top:15px;
    }
    .main-box{
        border:none;
        margin-top:0;
    }
    :deep(.change){
        width:100%;
    }
    .prog-main{
        border:none;
    }
    .progress{
        width:100%;
        margin:15px 0;
    }
    .progress .line{
        margin-top:-20px;
    }
    .prog-details{
        flex-direction:column;
        gap:10px;
        text-align:center;
    }
    .prog-details:nth-child(3) p{
        color:var(--text-color)
    }
    .prog-details p {
        font-size:12px;
    }
    form{
        padding:0
    }
    .select-wrapper,
    .input-icon,
    .tags-input,
    .textarea-wrapper{
        width:100%;
    }
    .field{
        margin:0;
        margin-bottom:30px;
        flex-direction:column;
        align-items:flex-start;
    }
    .field p{
        margin-bottom:15px;
    }
    .field input , .field select{
        width:100%;
    }
    .field.div-1{
        flex-direction:row;
        align-items:center;
    }
    .field.div-1 p:last-child{
        color:var(--text-color)
    }
    .switch{
        padding:0;
        padding-left:5px
    }
    .buttons{
        bottom: -10%;
        right: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }
    .buttons .one{
        width:100%;
    }
    .buttons .two{
        display:none;
    }
    :deep(.container.navbar-content){
        margin:0;
        padding:30px 0;
    }
}
</style>