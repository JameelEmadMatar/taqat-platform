<template>
    <section>
        <div class="container">
            <NavBar/>
            <div class="main-page">
                <!-- H1 And Fields -->
                <div class="find">
                    <h1>Find a Talent</h1>
                    <div class="categories-swiper">
                        <swiper
                        :modules="modules"
                        :slides-per-view="'auto'"
                        :space-between="16"
                        :free-mode="true"
                        :grab-cursor="true"
                        navigation
                        class="fields"
                        >
                            <swiper-slide v-for="category in categories" :key="category.id" class="category-slide">
                                <button
                                :class="{ active: selectedCategory[category.id]}"
                                @click="selectCategory(category.id)"
                                >
                                {{ category.name }} 
                                </button>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
                <!-- Search Input -->
                <div class="search">
                    <input type="text" name="search" placeholder="Search for Talents" v-model="searchInput" @input="changeRoute('search')">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 22L20 20" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <!-- Categories Filter Active -->
                <div class="Categories-active" v-if="selectedCategory.length > 0">
                    <div class="cate-active" v-for="category in categories" :key="category.id" :style="{display : selectedCategory[category.id] ? 'flex' : 'none' }">
                        <p>{{category.name}}</p>
                        <div @click="deleteCateFromSelected(category.id)">X</div>
                    </div>
                </div>
                <!-- Filters -->
                <div class="result-filters">
                    <p class="result">{{resultCount}}+ results</p>
                    <div class="filters">
                        <div class="saved" v-if="user">
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
                                <div class="option" @click="selectOption('recommended' , 'sort')">
                                    <p>Recommended</p>
                                </div>
                                <div class="option" @click="selectOption('newest' , 'sort')">
                                    <p>Newest</p>
                                </div>
                                <div class="option" @click="selectOption('top_rated' , 'sort')">
                                    <p>Top Rated</p>
                                </div>
                            </div>
                        </div>
                        <div class="filter" @click="filtersShow = !filtersShow">
                            <svg v-if="filtersShow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.32282 2.69531C3.66727 2.69531 3.94727 2.97531 3.94727 3.32087V20.8986C3.94727 21.0644 3.88142 21.2234 3.76421 21.3406C3.647 21.4578 3.48803 21.5236 3.32227 21.5236C3.15651 21.5236 2.99753 21.4578 2.88032 21.3406C2.76311 21.2234 2.69727 21.0644 2.69727 20.8986V3.32087C2.69727 2.97531 2.97727 2.69531 3.32282 2.69531ZM10.2095 8.73753C10.4539 8.98198 10.4539 9.37754 10.2095 9.62198L8.34727 11.4842H20.9006C21.0618 11.491 21.2141 11.5598 21.3258 11.6763C21.4375 11.7928 21.4998 11.9479 21.4998 12.1092C21.4998 12.2705 21.4375 12.4257 21.3258 12.5421C21.2141 12.6586 21.0618 12.7274 20.9006 12.7342H8.34727L10.2095 14.5975C10.2675 14.6555 10.3135 14.7244 10.3449 14.8002C10.3763 14.876 10.3924 14.9572 10.3924 15.0392C10.3924 15.1212 10.3763 15.2024 10.3449 15.2782C10.3135 15.354 10.2675 15.4229 10.2095 15.4809C10.1515 15.5389 10.0826 15.5849 10.0068 15.6163C9.93107 15.6477 9.84985 15.6638 9.76782 15.6638C9.6858 15.6638 9.60457 15.6477 9.52879 15.6163C9.45301 15.5849 9.38416 15.5389 9.32615 15.4809L6.39615 12.552C6.33797 12.494 6.2918 12.425 6.2603 12.3492C6.2288 12.2733 6.21258 12.1919 6.21258 12.1098C6.21258 12.0276 6.2288 11.9462 6.2603 11.8704C6.2918 11.7945 6.33797 11.7255 6.39615 11.6675L9.32615 8.73753C9.5706 8.49309 9.96616 8.49309 10.2095 8.73753Z" fill="#696A70"/>
                            </svg>
                            <svg v-if="!filtersShow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#191919"><path d="M22 6.5h-6m-10 0H2m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m12 7.5h-4m-10 0H2M14 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" stroke="#191919" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <p>Filters</p>
                        </div>
                    </div>
                </div>
                <!-- Main Div Results -->
                <div class="main">
                    <ResultsBar :filtersShow="filtersShow" :freelancers="freelancers"/>
                    <!-- Filter -- Right Side -->
                    <div class="right-side" v-if="filtersShow">
                        <RightSide :languagesArr="languagesArr" :ratingCount="ratingCount" :locationCount="locationCount" :skillsCount="skillsCount"/>
                    </div>
                </div>
            </div>
        </div>
        <LandingFooter/>
    </section>
</template>
<script setup>
import { ref , onBeforeMount , computed , watch} from 'vue'
import NavBar from '../LandingPage/NavBar.vue'
import LandingFooter from '../LandingPage/LandingFooter.vue'
import ResultsBar from './LeftSide/ResultsBar.vue'
import RightSide from './RightBar/RightSide.vue'
import axiosClient from '../Axios/axiosClient'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, FreeMode } from 'swiper/modules'
import { useUserStore } from '../Store/User/UserStore'
import { useRoute, useRouter } from 'vue-router'

onBeforeMount(() => {
    getCategories()
    getFreelancer(route.query)
    getLanguages()
    getRatingCount()
    getLocationCount()
    getSkillsCount()
    
})
const route = useRoute()
const router = useRouter()
const selectedCategory = ref([])

const getCategories = async() => {
    try{
        const response = await axiosClient.get('/freelancers/categories-count')
        categories.value = response.data.data
    }
    catch(error){
        console.log(error.response.data)
    }
}

const getFreelancer = async(query) => {
    // check if query found and then send query data to api request
    const hourly_from = query['hourlyRange'] ? query['hourlyRange'].split(',')[0] : ''
    const hourly_to = query['hourlyRange'] ? query['hourlyRange'].split(',')[1] : ''
    const form = {
        search : query.search || '',
        category_id : query.categories || '',
        sub_category_id : query.sub_categories || '',
        rating : query.rating || '',
        skills : query.rating || '',
        hourly_from : hourly_from || '',
        hourly_to : hourly_to || '',
        lang : query.lang  || '',
        location : query.location || '',
        sort_by : query.sort_by || 'recommended',
        per_page : query.per_page || 10,
        page : query.page || 1,
        expert_rating : query.expert_rating || 0
    }
    const test = query['hourlyRange'] ? query['hourlyRange'].split(',') : ''
    try{
        const response = await axiosClient.get(`/freelancers?
            search=${form.search}&
            category_id=${form.category_id}&
            sub_category_id=${form.sub_category_id}&
            rating=${form.rating}&
            skills=${form.skills}&
            hourly_from=${form.hourly_from}&
            hourly_to=${form.hourly_to}&
            lang=${form.lang}&
            location=${form.location}&
            sort_by=${form.sort_by}&
            per_page=${form.per_page}&
            page=${form.page}&
            expert_rating=${form.expert_rating}&`
        )

        freelancers.value = response.data.data.freelancers
        resultCount.value = response.data.data.pagination.total
    }
    catch(error){
        console.log(error.response.data)
    }
}
const getLanguages = async() => {
    try{
        const response = await axiosClient.get('/freelancers/lang-count')
        languagesArr.value = response.data.data
    }
    catch(error){
        console.log(error.response.data)
    }
}
const getRatingCount = async() => {
    try{
        const response = await axiosClient.get('/freelancers/rating-count')
        ratingCount.value = response.data.data
    }
    catch(error) {
        console.log(error.response)
    }
}
const getLocationCount = async() => {
    try{
        const response = await axiosClient.get('/freelancers/location-count')
        locationCount.value = response.data.data
    }
    catch(error) {
        console.log(error.response)
    }
}
const getSkillsCount = async() => {
    try{
        const response = await axiosClient.get('/freelancers/skills-count')
        skillsCount.value = response.data.data
    }
    catch(error) {
        console.log(error.response)
    }
}
const searchInput = ref('')
const freelancers = ref([])
const languagesArr = ref([])
const ratingCount = ref([])
const locationCount = ref([])
const skillsCount = ref([])
const filtersShow = ref(true)
const resultCount = ref(0)
// استورد الموديولز المطلوبة
const modules = [Navigation, FreeMode]
const userStore = useUserStore()
const user = computed(() => userStore.getUserData)
const categories = ref([])
const sortSellected = ref('Recommended')
const showOptions = ref(false)
function optionsBoxToggle(){
    showOptions.value = !showOptions.value
}
function selectOption(option , type){
    sortSellected.value = option
    optionsBoxToggle()
    changeRoute(type)
}

const selectCategory = (id) => {
    selectedCategory.value[id] = +id
    changeRoute('categories')
}

const updateQueryParam = (key, value) => {
  const query = { ...route.query }
  
  if (value && value.length > 0) {
    query[key] = value
  } else {
    delete query[key]
  }
  
  return query;
}
const changeRoute = (type) =>{
    if(type == "sort"){
        setTimeout(() => {
            const query = updateQueryParam("sort_by" , sortSellected.value)
            router.push({
            name : 'talents',
            query
            })
        },500)
    }else if(type == "search"){
        setTimeout(() => {
            const query = updateQueryParam("search" , searchInput.value)
            router.push({
            name : 'talents',
            query
            })
        },500)
    }else if(type == "categories"){
        const query = updateQueryParam('categories', selectedCategory.value.filter(e => e !== '').join(','))
        router.push({
            name : 'talents',
            query
        })
    }
}

const deleteCateFromSelected = (id) =>{
    // delete from array
    selectedCategory.value[id] = ''
    // delete from route
    changeRoute('categories')
}

watch(
    () => route.query,
    (newQuery , oldQuery) =>{
        if(newQuery["categories"]){
            selectedCategory.value = []
            const query = [...new Set(newQuery["categories"].split(','))]
            for(let i = 0 ; i < query.length ; i++){
                +query[i] ? selectedCategory.value[+query[i]] = +query[i] : false
            }
        }
        // send post api and change results freelancers
        getFreelancer(newQuery)
    }, 
)
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
.fields button {
    cursor:pointer;
    font-size: 14px;
    border: none;
    outline:none;
    background-color: transparent;
}
.fields button:hover{
    color:var(--main-color);
}
.fields button.active {
    color:var(--main-color);
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
    width: 20px;
    height: 20px;
    top: 7px;
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
    cursor:pointer;
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
    width:fit-content;
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
    height:fit-content;
}
.Categories-active{
    margin: 20px 0;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    align-items: center;
}
.cate-active{
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #eee;
    border-radius: 8px;
    padding: 10px;
    font-size:14px;
}
.cate-active div{
    cursor:pointer;
}
:deep(.swiper-button-prev) , :deep(.swiper-button-next){
    display:none;
}
:deep(.swiper-slide){
    width:auto;
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