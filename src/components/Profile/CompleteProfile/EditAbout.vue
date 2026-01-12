<template>
    <div class="edit-about">
        <div class="main">
            <TopBar :nestedIndex = "10" title="About"/>
            <form>
                <div class="ready">
                    <p>Ready To Work?</p>
                    <div class="ready-inside" @click="values.ready = !values.ready">
                        <p>Available To Hire</p>
                        <div class="custom-switch" :class="{ 'checked': values.ready }">
                            <div class="switch-handle"></div>
                        </div>
                    </div>
                </div>
                <div class="form-div">
                    <p>Hourly Rate</p>
                    <div class="number">
                        <input type="number" name="rate" v-model="values.hourlyRate">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
                    </div>
                </div>
                <div class="form-div">
                    <p>Industry</p>
                    <input type="text" name="industry" @input="changeIndustryShow(0)" v-model="values.industry" placeholder="Search for industry">
                    <svg class="open-icon" @click="optionBoxActiveId == 0 ? optionBoxActiveId = -1 : optionBoxActiveId = 0" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.70465 4L6.23465 7.52L9.76465 4" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <!-- options box-->
                    <div class="options" v-if="optionBoxActiveId == 0">
                        <div class="option" v-for="(ind , index) of industryShow" :key="index" @click="choseIndustry(ind)">
                            {{ind}}
                        </div>
                    </div>
                </div>
                <div class="form-div">
                    <p>Specialty</p>
                    <input type="input" name="specialty" @input="changeSpecialty(1)" v-model="values.specialty" placeholder="Search for specialty">
                    <svg class="open-icon" @click="optionBoxActiveId == 1 ? optionBoxActiveId = -1 : optionBoxActiveId = 1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.70465 4L6.23465 7.52L9.76465 4" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <!-- options box-->
                    <div class="options" v-if="optionBoxActiveId == 1">
                        <div class="option" v-for="(specialty , index) of specialtyShow" :key="index" @click="choseSpecialty(specialty)">
                            {{specialty}}
                        </div>
                    </div>
                </div>
                <div class="form-div">
                    <p>Country</p>
                    <input type="input" name="country" @input="changeCountry(2)" v-model="values.country" placeholder="Search for country">
                    <svg @click="optionBoxActiveId == 2 ? optionBoxActiveId = -1 : optionBoxActiveId = 2" class="open-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.70465 4L6.23465 7.52L9.76465 4" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <!-- options box-->
                    <div class="options" v-if="optionBoxActiveId == 2">
                        <div class="option" v-for="(country , index) of countryShow" :key="index" @click="choseCountry(country)">
                            {{country}}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import TopBar from '../BopUpTopBar/TopBar.vue'


const values = ref({
    ready : true,
    hourlyRate : 10,
    industry : 'Development & It',
    specialty : "Graphic Designer",
    country : "Palestine"
})

const industryArr = ref(["Development & It" , "Design & Creative" , "Writing & Translation"])
const industryShow = ref(["Development & It" , "Design & Creative" , "Writing & Translation"])

const specialtyArr = ref(["Mobile Apps" , "Web Apps" , "Social Media"])
const specialtyShow = ref(["Mobile Apps" , "Web Apps" , "Social Media"])

const countryArr = ref(["Palestine" , "Egypt" , "Qatar"])
const countryShow = ref(["Palestine" , "Egypt" , "Qatar"])

const optionBoxActiveId = ref(-1)

const changeIndustryShow = (id) => {
    optionBoxActiveId.value = id
    if(values.value.industry == ''){
        industryShow.value = industryArr.value
    }else{
        industryShow.value = industryArr.value.filter(e => e.toLowerCase().includes(values.value.industry.toLowerCase()))
    }
}
const choseIndustry = (option) =>{
    values.value.industry = option
    optionBoxActiveId.value = -1
}
const changeSpecialty = (id) => {
    optionBoxActiveId.value = id
    if(values.value.specialty == ''){
        specialtyShow.value = specialtyArr.value
    }else{
        specialtyShow.value = specialtyArr.value.filter(e => e.toLowerCase().includes(values.value.specialty.toLowerCase()))
    }
}
const choseSpecialty = (option) =>{
    values.value.specialty = option
    optionBoxActiveId.value = -1
}
const changeCountry = (id) => {
    optionBoxActiveId.value = id
    if(values.value.country == ''){
        countryShow.value = countryArr.value
    }else{
        countryShow.value = countryArr.value.filter(e => e.toLowerCase().includes(values.value.country.toLowerCase()))
    }
}
const choseCountry = (option) =>{
    values.value.country = option
    optionBoxActiveId.value = -1
}

</script>

<style scoped>
.edit-about{
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
.main{
    position: fixed;
    background-color: #fff;
    border-radius: 8px;
    width: 70%;
    max-width: 700px;
    height: 77%;
    max-height: 700px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    padding: 20px;
}

form{
    margin:20px 0
}
.ready{
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-size:14px;
    font-weight:600;
    margin-bottom:30px;
}
.ready-inside{
    display: flex;
    gap: 15px;
    align-items: center;
    cursor: pointer;
    margin:10px 0;
}

.number{
    position:relative;
}
.number input{
    padding-right:35px;
}
input{
    width: 100%;
    padding: 12px 16px;
    margin: 10px 0;
    border: 1px solid #D9D9D9;
    border-radius: 8px;
    outline: none;
}
.number svg{
    position:absolute;
    right:10px;
    top:20px;
}
.form-div{
    position:relative;
}
.form-div .open-icon{
    position: absolute;
    top: 45px;
    right: 15px;
    cursor:pointer;
}
.options{
    background-color: #eee;
    position: absolute;
    z-index: 100;
    width: 100%;
    border: 1px solid #D9D9D9;
    border-radius: 8px;
    overflow:auto;
}
.option{
    padding: 10px;
    cursor: pointer;
}
.custom-switch {
  width: 50px;
  height: 26px;
  background-color: #eee;  /* أحمر لما off */
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  transition: backgroundColor 0.3s;
}

.custom-switch.checked {
  background-color: var(--main-color);  /* أزرق لما on */
}

.switch-handle {
  width: 22px;
  height: 22px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: left 0.3s;
}

.custom-switch.checked .switch-handle {
  left: 26px;
}
</style>