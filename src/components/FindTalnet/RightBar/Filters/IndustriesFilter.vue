<template>
    <div class="industries">
        <div class="main">
            <p>Categories</p>
            <svg class="svg" v-if="!industriesOpen" @click="industriesOpenToggle()" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.4707 10.7383L12.0007 14.2583L15.5307 10.7383" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg class="svg" v-if="industriesOpen" @click="industriesOpenToggle()" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.4707 13.2617L12.0007 9.74172L15.5307 13.2617" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="fields-main" v-if="industriesOpen">
          <div class="fields-list-main" v-for="cate of categoriesshow" :key="cate.id">
              <div class="main-item">
                <!--
                <input class="input" type="checkbox" v-model="selected.categories" :value="cate.id" @change="check('categories',cate.id)">
                -->
                <div class="checkbox-main add" @click="addCategory(cate.id)" v-if="!selected.categories.includes(cate.id)"></div>
                <div class="checkbox-main delete" @click="deleteCategory(cate.id)" v-if="selected.categories.includes(cate.id)">&#10004;</div>
                <span class="label">{{cate.name}}</span>
                <span class="count">({{cate.count}})</span>
              </div>
              <div class="child-main">
                  <div class="child-item" v-for="child of cate.sub_categories" :key="child.id">
                      <input class="input" type="checkbox" v-model="selected.sub_categories" :value="child.id" @change="check('sub_categories' , cate.sub_categories)">
                      <span class="label">{{child.name}}</span>
                      <span class="count">({{child.count}})</span>
                  </div>
              </div>
          </div>
          <div class="more" @click="showAllCategories" v-if="categoriesshow.length == 3">+{{categories.length - 3}} more</div>
          <div class="more" @click="showthree" v-if="categoriesshow.length > 3">Show Less</div>
        </div>
    </div>
</template>
<script setup>
import { ref , onBeforeMount , watch} from 'vue'
import axiosClient from '../../../Axios/axiosClient'
import { useRoute , useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
onBeforeMount(async() => {
  try{
    const response = await axiosClient.get('/freelancers/categories-count')
    categories.value = response.data.data
    categoriesshow.value = categories.value.slice(0,3)
  }
  catch(error){
    console.log('error')
  }
})

const selected = ref({
  categories : [],
  sub_categories : []
})
const industriesOpen = ref(true)
const categories = ref([])
const categoriesshow = ref([])

function updateQueryParam(key, value) {
  let query = { ...route.query }

  if (value && value.length > 0) {
    query[key] = value
  } else {
    delete query[key]
  }

  return query
}

function check(type , id) {
  if(type === 'categories'){
    selected.value.categories[+id] = +id
    console.log(selected.value.categories)
    console.log(selected.value.categories.join(','))
    const query = updateQueryParam(type, selected.value.categories.filter(e => e !== '').join(','))
    router.push({ name: 'talents', query })
    console.log(query)
  }else{
    const query = updateQueryParam(type, selected.value.sub_categories.filter(e => e !== '').join(','))
    router.push({ name: 'talents', query })
    console.log(query)
  }

}

const addCategory = (id) => {
  selected.value.categories[+id] = +id
  const query = updateQueryParam('categories', selected.value.categories.filter(e => e !== '').join(','))
  router.push({ name: 'talents', query })
}

const deleteCategory = (id) => {
  selected.value.categories[+id] = ''
  const query = updateQueryParam('categories', selected.value.categories.filter(e => e !== '').join(','))
  router.push({ name: 'talents', query })
}

const showAllCategories = () =>{
  categoriesshow.value = categories.value
}
const showthree = () =>{
  categoriesshow.value = categories.value.slice(0,3)
}

watch(
    () => route.query,
    (newQuery , oldQuery) =>{
        if(newQuery["categories"]){
          selected.value.categories = []
          const query = [...new Set(newQuery["categories"].split(','))].filter(e => e !== '')
          for(let i = 0 ; i < query.length ; i++){
            +query[i] ? selected.value.categories[+query[i]] = +query[i] : false
          }
        }
    }
)
</script>

<style scoped>
.industries{
  border-top: 1px solid #D9D9D9;
}
.main{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:15px;
}
.fields-list-main{
  margin-bottom:10px;
}
.fields-main{
  margin-top:15px;
  padding-bottom: 15px;
}
.main-item , .child-item{
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-top:10px;
} 
.child-main{
  padding-left:15px;
  margin-top:15px;
}
.input{
  width:24px;
  height:24px;
}
.label{
  font-size:12px;
}
.count {
  color: #64748b;
  font-size: 14px;
  margin-left: auto;
}
.svg{
  cursor:pointer;
}
.more{
  width: fit-content;
  padding: 5px;
  cursor: pointer;
  font-size: 12px;
}
.more:hover{
  background-color:#eee;
  border-radius:8px;
}
.checkbox-main{
  width: 24px;
  height: 24px;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
}
.checkbox-main.delete{
  background-color: #00599F;
  border: none;
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
}
</style>