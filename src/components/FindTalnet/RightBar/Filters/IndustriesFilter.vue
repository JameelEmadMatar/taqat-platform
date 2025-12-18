<template>
    <div class="industries">
        <div class="main">
            <p>Industries</p>
            <svg v-if="!industriesOpen" @click="industriesOpenToggle()" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.4707 10.7383L12.0007 14.2583L15.5307 10.7383" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-if="industriesOpen" @click="industriesOpenToggle()" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.4707 13.2617L12.0007 9.74172L15.5307 13.2617" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="fields-main" v-if="industriesOpen">
            <div class="fields-list-main" v-for="ind of industriesArr" :key="ind.id">
              <div class="main-item">
                <input class="input" type="checkbox" v-model="selected" :value="ind.name" @click="check(ind.id , ind.name)">
                <span class="label">{{ind.name}}</span>
                <span class="count">({{ind.count}})</span>
                <svg  v-if="!ind.open" @click="fieldOpenToggle(ind.id)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.4707 10.7383L12.0007 14.2583L15.5307 10.7383" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg v-if="ind.open" @click="fieldOpenToggle(ind.id)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.4707 13.2617L12.0007 9.74172L15.5307 13.2617" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="child-main" v-if="ind.open">
                  <div class="child-item" v-for="child of ind.fields" :key="child.id">
                      <input class="input" type="checkbox" v-model="selected" :value="child.name">
                      <span class="label">{{child.name}}</span>
                      <span class="count">({{child.count}})</span>
                  </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const selected = ref([])
const industriesOpen = ref(true)
const industriesArr = ref([ 
  {
    id : 0,
    name : "Graphics & Design",
    count : 120,
    open:false,
    fields : [
      {
        id : 0,
        name : "Graphic Design",
        count : 120,
        fields : null
      },
      {
        id : 1,
        name : "UI UX Design",
        count : 120,
        fields : null
      }
    ]
  },
  {
    id : 1 ,
    name : 'Programming & Tech',
    count : 120,
    open:false,
    fields : [
      {
        id : 0,
        name : "Front End Development",
        count : 120,
        fields : null
      },
      {
        id : 1,
        name : "Back End Development",
        count : 120,
        fields : null,
      }
    ]
  },
  {
    id : 2,
    name : "Digital Marketing",
    count : 120,
    open:false,
    fields : [
      {
        id : 0,
        name : "Marketing",
        count : 120,
        fields : null
      }
    ]
  }
])

function check(id , name){
  setTimeout(() => {
    if(selected.value.includes(name)){
      for(let i = 0 ; i<industriesArr.value[id].fields.length ; i++){
        selected.value.includes(industriesArr.value[id].fields[i].name) ? false : selected.value.push(industriesArr.value[id].fields[i].name)
        industriesArr.value[id].fields[i].open = true
      }
    }else{
      for(let i = 0 ; i<industriesArr.value[id].fields.length ; i++){
        selected.value.includes(industriesArr.value[id].fields[i].name) ? selected.value = selected.value.filter(e => e !== industriesArr.value[id].fields[i].name) : false
        industriesArr.value[id].fields[i].open = false
      }
    }
  }, 100);
}

function fieldOpenToggle(id){
  industriesArr.value[id].open = !industriesArr.value[id].open
}
function industriesOpenToggle(){
  industriesOpen.value = !industriesOpen.value
}
</script>

<style scoped>
.industries{
  border-bottom: 1px solid #D9D9D9;
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

</style>