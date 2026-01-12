<template>
    <div class="edit-education">
        <div class="main">
            <TopBar :nestedIndex = "9" title="Edit Education"/>
            <div class="educations">
                <div class="education" v-for="(edu , index) of education" :key="edu.id">
                    <p>{{ edu.universityName}}</p>
                    <p>{{ edu.degree}} of {{ edu.field}}</p>
                    <p>Grade: {{edu.grade}}</p>
                    <p>{{edu.startDate}} - {{edu.endDate}}</p>
                    <svg class="pop-svg" @click="showButtons(edu.id)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                    <div class="buttons" v-if="buttonsBoxShowActive === edu.id">
                        <div @click="edit(edu)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
                            <button>Edit</button>
                        </div>
                        <div @click="deleteFun(edu.id)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            <button @click="addNewEducation" class="add-new">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" color="#007BD1"><path stroke="#007BD1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12.06h8M12 16.06v-8M9 22.06h6c5 0 7-2 7-7v-6c0-5-2-7-7-7H9c-5 0-7 2-7 7v6c0 5 2 7 7 7Z"></path></svg>
                <p>Add Education</p>
            </button>
        </div>
    </div>
    <teleport to="body" v-if="badgesStore.getNestedShow[8].status">
        <AddEducation :formValues="editValues"/>
    </teleport>
    <teleport to="body" v-if="showDiscardStatus && !badgesStore.getNestedShow[8].status">
        <DiscardChanges :nestedIndex = "9"/>
    </teleport>
</template>

<script setup>
import { ref , computed , defineAsyncComponent , nextTick} from 'vue'
import TopBar from '../BopUpTopBar/TopBar.vue'
import { useRoundStore } from '../../Store/IdentityVerification/Round'
import { useBadgesStore } from '../../Store/Badges/BadgesStore'

const AddEducation = defineAsyncComponent(() => 
  import('./AddEducation.vue')
)
const DiscardChanges = defineAsyncComponent(() =>
    import('../../Auth/IdentityVerification/DiscardChanges.vue')
)
const roundStore = useRoundStore()
const showDiscardStatus = computed(() => roundStore.getDiscradStatus)
const editValues = ref({})
const education = ref([
    {
        id : 0 ,
        universityName : "جامعة الأزهر",
        degree : "Bachelor Degree",
        field : "Computer System Engineeing",
        grade : "good",
        startDate : "2017",
        endDate : "2022",
        still : false,
    },
    {
        id : 1 ,
        universityName : "جامعة الأزهر",
        degree : "Bachelor Degree",
        field : "Computer System Engineeing",
        grade : "good",
        startDate : "2017",
        endDate : "2022",
        still : false,
    }
])
const buttonsBoxShowActive = ref(-1)
const badgesStore = useBadgesStore()
const discardStore = useRoundStore()
const showButtons = (id) => {
    // تأكد من أن العنصر ما زال موجوداً قبل فتح القائمة
    const eduExists = education.value.some(e => e.id === id)
    if (!eduExists) return
    
    buttonsBoxShowActive.value = buttonsBoxShowActive.value === id ? -1 : id
}
const edit = (edu) =>{
    editValues.value = edu
    badgesStore.updateNestedStatus(8 , true)
    buttonsBoxShowActive.value = -1
}
const deleteFun = async (id) => {
    // أغلق القائمة أولاً
    if (buttonsBoxShowActive.value === id) {
        buttonsBoxShowActive.value = -1
    }
    
    // انتظر تحديث الـ DOM
    await nextTick()
    
    // احذف العنصر
    education.value = education.value.filter(e => e.id !== id)
}
const addNewEducation = () => {
    badgesStore.updateNestedStatus(8 , true)
}
</script>

<style scoped>
.edit-education{
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
    max-width:700px;
    max-height: 850px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    padding: 20px;
}
.educations{
    margin:20px 0;
}
.education{
    background-color:#eee;
    border-radius:8px;
    position:relative;
    padding:25px 10px;
    margin-bottom:20px;
}
.education p{
    margin:15px 0;
    font-size : 14px;
    font-weight:bold
}
.education p:last-of-type{
    font-weight:normal
}
.education .pop-svg{
    position: absolute;
    top: 10px;
    right: 10px;
    cursor:pointer;
    width:24px;
    height:24px;
    background-color: #fff;
    border-radius: 50%;
}
.education .pop-svg:hover{
    background-color:#ddd;
}
.buttons{
    background-color: #fff;
    position: absolute;
    top: 40px;
    right: 20px;
    width: 150px;
    border-radius: 8px;
}
.buttons div{
    cursor:pointer;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 10px 0;
}
.buttons div:hover{
    background-color:#ddd;
}
button{
    font-size:14px;
    font-weight:bold;
    border:none;
    outline:none;
    cursor:pointer;
    background-color: transparent;
}
.add-new{
    display:flex;
    align-items:center;
    gap:5px;
    cursor:pointer;
    background:none;
    border:none;
}
.add-new p{
    font-size:14px;
    font-weight:bold;
    color:var(--main-color)
}
</style>