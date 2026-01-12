<template>
    <div class="add-lang">
        <div class="edit">
            <TopBar :nestedIndex = "3" title="Languages"/>
            <div class="languages">
                <div class="main" v-for="(lang, index) of languagesChoices" :key="lang.index">
                    <div class="lang">
                        <input type="text" name="lang" v-model="lang.name" placeholder="Search For Languages">
                        <svg @click="lang.nameOptionShowStatus = !lang.nameOptionShowStatus" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.46997 10.74L12 14.26L15.53 10.74" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div class="lang-options" v-if="lang.nameOptionShowStatus">
                            <div 
                                class="option"
                                v-for="op in availableLanguages" 
                                :key="op.id"
                                @click="selectLanguage(index, op)"
                            >
                                {{ op.name }}
                            </div>
                        </div>
                    </div>
                    <div class="lang">
                        <input type="text" name="level" v-model="lang.level" placeholder="Search For Levels">
                        <svg @click="lang.levelOptionShowStatus = !lang.levelOptionShowStatus" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.46997 10.74L12 14.26L15.53 10.74" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div class="lang-options" v-if="lang.levelOptionShowStatus">
                            <div 
                                class="option"
                                v-for="op in levels" 
                                :key="op.id"
                                @click="selectLevel(index, lang , op)"
                            >
                                {{ op }}
                            </div>
                        </div>
                    </div>
                    <svg @click="deleteLang(lang)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="delete-lang" aria-hidden="true"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </div>
            </div>
            <button @click="addNewLanguageBox" class="add-new">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" color="#007BD1"><path stroke="#007BD1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12.06h8M12 16.06v-8M9 22.06h6c5 0 7-2 7-7v-6c0-5-2-7-7-7H9c-5 0-7 2-7 7v6c0 5 2 7 7 7Z"></path></svg>
                <p>Add Language</p>
            </button>
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
        </div>
        <teleport to="body" v-if="showDiscardStatus && badgesStore.getNestedShow[3].status">
            <DiscardChanges :nestedIndex = "3"/>
        </teleport>
    </div>
</template>

<script setup>
import { ref , computed , onMounted  , defineAsyncComponent} from 'vue'
import TopBar from '../BopUpTopBar/TopBar.vue'
import { useRoundStore } from '../../Store/IdentityVerification/Round'
import { useBadgesStore } from '../../Store/Badges/BadgesStore'

const languagesChoices = ref([
    /*
  {
    id: 0,
    name: "Arabic",
    nameOptionShowStatus: false,
    levelOptionShowStatus : false,
    level: null,
  }
  */
])

// جميع اللغات المتاحة
const allLanguagesOptions = ref([
  { id: 0, name: "Arabic" },
  { id: 1, name: "English" },
  { id: 2, name: "French" },
  { id: 3, name: "Spanish" },  // مصحح الإملاء
  { id: 4, name: "Hindi" },
  // أضف المزيد حسب الحاجة
])

const DiscardChanges = defineAsyncComponent(() => 
    import('../../Auth/IdentityVerification/DiscardChanges.vue')
)

// اللغات المتاحة للاختيار (غير المختارة مسبقًا)
const availableLanguages = computed(() => {
  const selectedIds = languagesChoices.value.map(l => l.id)
  return allLanguagesOptions.value.filter(lang => !selectedIds.includes(lang.id))
})
const languagesOptionsShow = computed(() => {
  return allLanguagesOptions.value.filter(
    lang => !languagesChoices.value.includes(lang)
  )
})
const levels = ref(["Beginner" , "Intermediate","Advanced" ,"Native"])
const langInput = ref('')
const langOptionsShow = ref(true)
const roundStore = useRoundStore()
const badgesStore = useBadgesStore()
const discardStore = useRoundStore()
const showDiscardStatus = computed(() => roundStore.getDiscradStatus)

// إضافة صندوق جديد للغة
const addNewLanguageBox = () => {
  languagesChoices.value.push({
    id: null,  // لم يُختار بعد
    name: "",
    nameOptionShowStatus: false,
    levelOptionShowStatus : false,
    level: null
  })
}
const selectLanguage = (index, option) => {
  languagesChoices.value[index] = {
    ...option,
    nameOptionShowStatus: false,
    levelOptionShowStatus : false,
    level: null  // يمكنك إضافة اختيار المستوى لاحقًا
  }
}

const selectLevel = (index, lang , level) => {
  languagesChoices.value[index] = {
    ...lang,
    nameOptionShowStatus: false,
    levelOptionShowStatus : false,
    level : level,
  }
}
const deleteLang = (lang) => {
    languagesChoices.value = languagesChoices.value.filter(e => e !== lang)
    
}
const cancle = () => {
    discardStore.updateDiscardBoxStatus(true)
}
const save = () => {
    badgesStore.updateNestedStatus(3,false)
}

onMounted(() => {
    languagesChoices.value.length > 0 ? false : addNewLanguageBox()
})
</script>

<style scoped>
.add-lang{
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
    width: 70%;
    max-width: 700px;
    height: 70%;
    max-height: 700px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    padding: 20px;
}
.languages{
    display:flex;
    flex-direction:column;
    margin: 20px 0;
    gap: 20px;
}
.main{
    display: flex;
    gap: 15px;
    align-items:center;
}
.lang{
    position: relative;
    width:45%;
}
.lang input{
    border: 1px solid #D9D9D9;
    border-radius: 8px;
    padding: 12px 16px;
    outline:none;
    width:100%;
}
.lang svg{
    position: absolute;
    right: 5px;
    top: 10px;
    cursor:pointer;
}
.lang-options{
    transition: backgroundColor 0.3s ease;
    background-color:#fff;
    position:absolute;
    width:100%;
    box-shadow: 3px 3px 5px 5px #D9D9D9;
    border-radius:8px;
    overflow:auto;
    z-index : 1;
}
.lang-options .option{
    margin:10px 0;
    padding: 5px;
    cursor:pointer;
}
.lang-options .option.selected{
    background-color: #eee;
}
.delete-lang{
    cursor:pointer;
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
</style>