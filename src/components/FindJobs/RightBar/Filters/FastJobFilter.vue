<template>
    <div class="fast">
        <input type="checkbox" class="input" v-model="fast" @click="changeRoute">
        <div class="svg">
          <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m9.646 1-8.164 9.797c-.32.384-.48.576-.482.738-.002.14.06.275.17.363.126.102.376.102.875.102H8.73l-.917 7.333 8.164-9.797c.32-.384.48-.575.482-.737a.46.46 0 0 0-.17-.364c-.126-.102-.376-.102-.875-.102H8.73z" fill="#fff" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
        <p>Fast Job</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute , useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const fast = ref(false)

const updateQueryParam = (key, value) => {
  const query = { ...route.query };
  
  if (value) {
    query[key] = value;
  } else {
    delete query[key];
  }
  
  return query;
}
const changeRoute = () =>{
  setTimeout(() => {
    const query = updateQueryParam("job_type" , fast.value ? 'fast' : '')
    router.push({
      name : 'jobs',
      query
    })
  },500)
}
</script>

<style scoped>
.fast{
  border-bottom: 1px solid #D9D9D9;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.input{
  width:24px;
  height:24px;
  cursor:pointer;
}
.svg{
  background-color: #FFB400;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>