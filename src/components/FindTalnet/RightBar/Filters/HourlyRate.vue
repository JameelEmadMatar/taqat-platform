<template>
  <div class="rate">
    <p class="title">Hourly Rate</p>
    <Slider
      v-model="hourlyRate"
      :min="0"
      :max="500"
      :step="1"
      :tooltips="true"  
      :merge-tooltips="true" 
      :tooltip-formatter="(value) => `${value}$`"
      
    />
    <div class="buttons">
      <input type="number" name="min" placeholder="Min Value" v-model="hourlyRate[0]">
      <input type="number" name="Max" placeholder="Max Value" v-model="hourlyRate[1]">
    </div>
  </div>
</template>

<script setup>
import { ref , watch} from 'vue'
import Slider from '@vueform/slider'
import '@vueform/slider/themes/default.css'
import { useRoute , useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const hourlyRate = ref(['', ''])

watch(
    () => hourlyRate.value,
    (newValue , oldValue) => {
        if(newValue){
            changeRoute(newValue.join(','))
        }
    }
)
const updateQueryParam = (key, value) => {
  const query = { ...route.query }
  if (value && value.length > 0) {
    query[key] = value
  } else {
    delete query[key]
  }
  
  return query;
}
const changeRoute = (value) =>{
    const query = updateQueryParam("hourlyRange" , value)
    console.log(query)
    router.push({
      name : 'talents',
      query
    })
    console.log(query)
}
</script>

<style scoped>
.rate{
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.title{
    margin-bottom: 40px;
    margin-top: 15px;
}
.buttons{
    display:flex;
    align-items:center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 15px;
}
.buttons input{
    border: 1px solid #D9D9D9;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 10px;
    width: calc((100% - 15px) / 2);
    height: 36px;
    outline:none;
}
:deep(.slider-horizontal .slider-tooltip-top) , :deep(.slider-connect){
    background-color:black;
    border:none;
}
</style>