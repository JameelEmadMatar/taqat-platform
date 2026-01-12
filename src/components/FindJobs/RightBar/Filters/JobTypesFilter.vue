<template>
    <div class="types">
        <div class="main">
            <p>Job Types</p>
            <svg v-if="showStatus" @click="toggleShowStatus()" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.4707 13.2617L12.0007 9.74172L15.5307 13.2617" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-if="!showStatus" @click="toggleShowStatus()" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-7b48b9cd="" d="M8.4707 10.7383L12.0007 14.2583L15.5307 10.7383" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
        <div class="checkbox" v-if="showStatus">
            <input type="checkbox" name="verified" v-model="typesSellected" value="fast" @change="changeRoute()"/>
            <p>Fast Job</p>
            <p class="count">({{counts.fast_job_count}})</p>
        </div>
        <div class="checkbox" v-if="showStatus">
            <input type="checkbox" name="verified" v-model="typesSellected" value="fixed" @change="changeRoute()"/>
            <p>Fixed Price</p>
            <p class="count">({{counts.fix_price_count}})</p>
        </div>
        <div class="checkbox" v-if="showStatus">
            <input type="checkbox" name="verified" v-model="typesSellected" value="hourly" @change="changeRoute()"/>
            <p>Hourly</p>
            <p class="count">({{counts.hourly_count}})</p>
        </div>
    </div>
</template>

<script setup>
import { ref , onBeforeMount} from 'vue'
import axiosClient from '../../../Axios/axiosClient'
import { useRoute , useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const typesSellected = ref([])
const showStatus = ref(true)
const counts = ref([])

const toggleShowStatus = () =>{
    showStatus.value = !showStatus.value
}

const updateQueryParam = (key, value) => {
  const query = { ...route.query }
  
  if (value) {
    query[key] = value
  } else {
    delete query[key]
  }
  
  return query;
}
const changeRoute = () =>{
    const query = updateQueryParam("job_type" , typesSellected.value.join(','))
    router.push({
      name : 'jobs',
      query
    })
}

onBeforeMount(async() => {
    try{
        const response = await axiosClient.get('/jobs/type-count')
        counts.value = response.data.data
    }
    catch(error){
        console.log(error.response.data)
    }
})

</script>

<style scoped>
.types{
    border-bottom:1px solid #D9D9D9;
    padding-bottom:15px;
}
.main{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
    margin-bottom: 15px;
}
svg{
    cursor:pointer;
}
svg:hover{
    background-color:#eee;
    border-radius:8px;
}
.checkbox{
    display:flex;
    align-items:center;
    font-size:14px;
    gap:10px;
    cursor:pointer;
    margin-bottom:15px;
}
.checkbox input{
    width:24px;
    height:24px;
    cursor:pointer;
}
.count{
    color:var(--text-color);
}
</style>