<template>
    <div class="location">
        <div class="main">
            <p>Location</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.4707 13.2617L12.0007 9.74172L15.5307 13.2617" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="select">
            <div class="selected-container">
                <!-- العناصر المختارة (chips/tags) -->
                <div class="selected" v-for="item in optionSelected" :key="item.id">
                    <p>{{ item.name }}</p>
                    <span>({{ item.count }})</span>
                    <button type="button" @click="deleteLocationFromSelected(item)">X</button>
                </div>
                
                <!-- الـ input دائماً موجود بعد الـ tags -->
                <input 
                    type="text" 
                    class="search-input" 
                    v-model="inputValue" 
                    :placeholder="optionSelected.length === 0 ? 'Search locations...' : ''"
                    @input="optionsShow = true"
                    @click="optionsShowToogle"
                />
            </div>
            
            <!-- قائمة الخيارات -->
            <div class="options" v-if="optionsShow && filteredLocations.length > 0">
                <div class="option" v-for="location in filteredLocations" :key="location.id">
                    <input 
                        type="checkbox" 
                        class="input" 
                        v-model="optionSelected" 
                        :value="location"
                        @click="changeRoute"
                    />
                    <p>{{ location.name }}</p>
                    <span>({{ location.count }})</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref  , watchEffect , computed} from 'vue'
import { useRoute , useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const allLocations = ref([])
const props = defineProps({
    locationCount: {
        type: Array,
        default: () => []
    }
})

const inputValue = ref('')
const optionSelected = ref([])
const optionsShow = ref(false)

watchEffect(() => {
    if (props.locationCount && props.locationCount.length > 0) {
        allLocations.value = [...props.locationCount]
    }
})

const filteredLocations = computed(() => {
    if (!inputValue.value.trim()) {
        return allLocations.value
    }
    optionsShow.value = true
    const searchTerm = inputValue.value.toLowerCase().trim()
    return allLocations.value.filter(location => 
        location.name.toLowerCase().includes(searchTerm)
    )
})

const  optionsShowToogle = () => {
    if(inputValue.value){
        optionsShow.value = true
    }else{
        optionsShow.value = !optionsShow.value
    }
}

const deleteLocationFromSelected = (location) => {
    optionSelected.value = optionSelected.value.filter((e) => e.id !== location.id)
    changeRoute()
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
const changeRoute = () =>{
    setTimeout(() => {
        inputValue.value = ''
        const ids = optionSelected.value.map(e => e.id)
        const query = updateQueryParam("location" , ids.join(','))
        router.push({
            name : 'jobs',
            query
        })
    } , 200)
}
</script>

<style scoped>
.location{
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
.select {
    position: relative;
}

.selected-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    min-height: 40px;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: white;
    cursor: pointer;
}

.selected {
    display: flex;
    align-items: center;
    gap: 4px;
    background: #e0e0e0;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
}

.selected button {
    background: none;
    border: none;
    cursor: pointer;
    font-weight: bold;
}

.search-input {
    flex: 1;
    min-width: 120px;
    border: none;
    outline: none;
    font-size: 14px;
    background-color: transparent;
}

.options {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-top: none;
    max-height: 200px;
    overflow-y: auto;
    z-index: 10;
}

.option {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px 12px;
    cursor: pointer;
    font-size:12px;
}

.option:hover {
    background-color: #f0f0f0;
}
.option span{
    color:var(--text-color)
}
.input{
    width:24px;
    height:24px;
}
</style>