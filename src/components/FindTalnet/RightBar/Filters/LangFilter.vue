<template>
    <div class="lang">
        <div class="main">
            <p>Languages</p>
            <svg v-if="!langOpen" @click="langOpenToggle()" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.4707 10.7383L12.0007 14.2583L15.5307 10.7383" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-if="langOpen" @click="langOpenToggle()" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.4707 13.2617L12.0007 9.74172L15.5307 13.2617" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="fields-main" v-if="langOpen">
            <div class="fields-list-main" v-for="lang of languagesArr" :key="lang.id">
              <div class="main-item">
                <input class="input" type="checkbox" v-model="selected" :value="lang.id" @click="changeRoute">
                <span class="label">{{lang.name}}</span>
                <span class="count">({{lang.count}})</span>
              </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRoute , useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const langOpen = ref(true)
const selected = ref([])
const props = defineProps({
    languagesArr : {
      type : Object,
    }
})
const langOpenToggle = () =>{
  langOpen.value = !langOpen.value
}
const updateQueryParam = (key, value) => {
  const query = { ...route.query };
  
  if (value && value.length > 0) {
    query[key] = value;
  } else {
    delete query[key];
  }
  
  return query;
}
const changeRoute = () =>{
  setTimeout(() => {
    const query = updateQueryParam("lang" , selected.value.join(','))
    router.push({
      name : 'talents',
      query
    })
  },500)
}
</script>
<style scoped>
.lang{
    margin-top:15px
}
.main{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.fields-list-main{
  margin-bottom:10px;
}
.fields-main{
  margin-top:15px;
}
.main-item{
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
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
</style>