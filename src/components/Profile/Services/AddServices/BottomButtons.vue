<template>
    <div class="buttons" v-if="round < 6">
        <button @click="back" class="back">{{round == 0 ? 'Cancle' : 'Back'}}</button>
        <button
            @click="ContinueFun"
            class="continue"
        >
            {{ round == 5 ? "Submit for Review": 'Continue'}}
        </button>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoundStore } from '../../../Store/IdentityVerification/Round'
import { useServicesStore } from '../../../Store/Services/ServicesStore'

const servicesStore = useServicesStore()
const discardStore = useRoundStore()
const round = computed(() => servicesStore.getRound)
const back = () => {
    round.value == 0 ? discardStore.updateDiscardBoxStatus(true) : servicesStore.updateRound(round.value - 1)
}
const ContinueFun = () => {
    if(round.value <= 4){
        servicesStore.updateRound(round.value + 1)
    }else{
        // اظهر اشعار انه تمت العملية 
        
        // close add services
        servicesStore.updateShowStatus(false)
        // set round to zero
        servicesStore.updateRound(0)
    }
}
</script>

<style scoped>
.buttons{
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
    position:absolute;
    bottom: 20px;
    right: 30px;
}
.buttons button{
    width:fit-content;
    border: 1px solid #D9D9D9;
    outline: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
}
.buttons .back{
    background-color:#fff;
    color:black;
}
.buttons .back:hover{
    color: #006fbc;
    border-color: #006fbc;
    background: #ffffff;
}
.buttons .continue{
    background-color:var(--main-color);
    color:#fff;
}
.buttons .continue:hover{
    background: #006fbc;
    color: #fff;
}
</style>