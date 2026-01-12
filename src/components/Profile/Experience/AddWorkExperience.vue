<template>
    <div class="add-experience" v-if="showStatus" @click="closeModal">
        <div class="container main" @click.stop>
            <TopBar title="Add Work Experience"/>
            <div class="content">
                <form>
                    <div class="form-div">
                        <label>Job Title</label>
                        <input class="input" type="text" name="title" placeholder="Enter Job Title" v-model="form.name">
                    </div>
                    <div class="form-div company-form">
                        <label>Company Name</label>
                        <input class="input" type="text" name="company" placeholder="e.g ABC Tech" v-model="form.companyName" @input="SearchCompany" @focus="SearchCompany">
                        <div class="company-search" v-if="companySearchOpen">
                            <div class="company" @click="selectCompany(c.name)" v-for="c of companyFilter || Companies" :key="c.index" :class="{ selected: c.selected }">
                                <p>{{c.name}}</p>
                            </div>
                            <p v-if="companyFilter.length == 0">No Companies Found</p>
                        </div>
                        <div class="arrow" @click="companyFilterStatusToggle">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.46875 10.7402L11.9987 14.2602L15.5287 10.7402" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div class="form-div">
                        <label>Location</label>
                        <input class="input" type="address" name="location" placeholder="e.g Jodran Palestine" v-model="form.location">
                    </div>
                    <div class="form-div">
                        <label id="Workplace">Workplace Type</label>
                        <select class="input" for="Workplace">
                            <option>
                                On-Site
                            </option>
                            <option>
                                Remote
                            </option>
                        </select>
                    </div>
                    <div class="form-div">
                        <label>Start Date</label>
                        <div class="date-wrapper input">
                            <flat-pickr
                                v-model="form.startDate"
                                :config="config"
                                placeholder="Select Start Date"
                                class="date-input"
                            />
                            <div class="calendar-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 2V5" stroke="#191919" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 2V5" stroke="#191919" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M3.5 9.08984H20.5" stroke="#191919" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#191919" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15.6947 13.7002H15.7037" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15.6947 16.7002H15.7037" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.9955 13.7002H12.0045" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.9955 16.7002H12.0045" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.29431 13.7002H8.30329" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.29431 16.7002H8.30329" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="form-div" v-if="!form.workingHere">
                        <label>End Date</label>
                        <div class="date-wrapper input">
                            <flat-pickr
                                v-model="form.endDate"
                                :config="config"
                                placeholder="Select End Date"
                                class="date-input"
                            />
                            <div class="calendar-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 2V5" stroke="#191919" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 2V5" stroke="#191919" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M3.5 9.08984H20.5" stroke="#191919" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#191919" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15.6947 13.7002H15.7037" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15.6947 16.7002H15.7037" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.9955 13.7002H12.0045" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.9955 16.7002H12.0045" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.29431 13.7002H8.30329" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.29431 16.7002H8.30329" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="form-div working-here">
                        <input type="checkbox" name="workingHere" id="workingHere" v-model="form.workingHere">
                        <label for="workingHere">I'm currently working here</label>
                    </div>
                    <div class="form-div">
                        <label>Description</label>
                        <textarea v-model="form.description" placeholder="Decribe Your project in detail (e.g goals , tools useds,challenges)"></textarea>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!--
    <DiscardChanges :nestedIndex = "2"/>
    -->
</template>

<script setup>
import { ref , computed} from 'vue'
import { useRoundStore } from '../../Store/IdentityVerification/Round'
import { useBadgesStore } from '../../Store/Badges/BadgesStore'
import FlatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'  
import TopBar from '../BopUpTopBar/TopBar.vue'
//import DiscardChanges from '../../Auth/IdentityVerification/DiscardChanges.vue'
const badgesStore = useBadgesStore()
const roundStore = useRoundStore()
const showStatus = computed(() => {
    const section = badgesStore.nestedShowStatus.find(item => item.name === 'Employment History')
    return section ? section.status : false
})
const closeModal = () => {
    roundStore.updateDiscardBoxStatus(true)
}
const config = {
  altInput: true,
  altFormat: 'j F Y',
  dateFormat: 'Y-m-d',
  maxDate: 'today',
  allowInput: true,
  clickOpens: true,
}
const form = ref({
    name : null,
    companyName : null,
    location : null,
    startDate : null,
    endDate : null,
    workingHere : false,
    description : '',
})
const Companies = ref([
    {
        id : 0 ,
        name : "Taqat",
        selected : true,
    },
    {
        id : 1 ,
        name : "ABC",
    },
    {
        id : 2 ,
        name : "ExCode",
    },
    {
        id : 3 ,
        name : "Comma"
    },
    {
        id : 4 ,
        name : 'BTI'
    }
])
const companyFilter = ref(null)
const companySearchOpen = ref(false)
const SearchCompany = () => {
    companySearchOpen.value = true
    companyFilter.value = Companies.value.filter(e => e.name.includes(form.value.companyName))
}
const selectCompany = (name) => {
    form.value.companyName = name
    companySearchOpen.value = false
}
const companyFilterStatusToggle = () => {
    companySearchOpen.value = !companySearchOpen.value
}
</script>

<style scoped>
.add-experience{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
.main{
    position:relative;
    overflow:auto;
    background-color: #fff;
    border-radius: 8px;
    padding: 40px 30px;
    width: 90%;
    max-width:700px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    height:90%;
    max-height:700px;
}
form{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 10px 0;
}
.form-div{
    display:flex;
    flex-direction:column;
    gap:10px;
}
.form-div .input{
    border:1px solid #D9D9D9;
    border-radius:8px;
    outline:none;
    padding:6px 14px;
    height:40px;
    width:100%;
}
.company-form{
    position:relative;
}
.company-search{
    position: absolute;
    top: 75px;
    background-color: #fff;
    width: 100%;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    overflow:auto;
}
.company{
    margin:15px 0;
    border-radius: 8px;
    cursor: pointer;
}
.company.selected{
    background-color:#eee;
    padding:15px;
}
.arrow{
    position: absolute;
    top: 35px;
    right: 10px;
    cursor: pointer;
}
:deep(.date-input){
    width:100%;
    cursor:pointer;
    border:none;
    outline:none;
}
.date-wrapper{
    display: flex;
    justify-content: space-between;
    position: relative;
    width:85%;
}
.calendar-icon {
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 21px;
  color: #64748b;
  width:24px;
  height:24px;
}
.working-here{
    flex-direction: row;
    cursor: pointer;
    align-items:center
}
.working-here input{
    width:24px;
    height:24px;
}
.working-here label{
    cursor: pointer;
    font-size:14px;
}
textarea{
    height:150px;
    border : 1px solid #D9D9D9;
    outline:none;
    border-radius:8px;
    padding:10px;
}
</style>