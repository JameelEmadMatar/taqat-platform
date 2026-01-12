<template>
    <div class="buttons" v-if="round <= 1">
        <button @click="cancle" class="cancle">cancle</button>
        <button
            @click="ContinueFun"
            class="continue"
        >
            {{ round == 1 ? "Publish Now": 'Continue'}}
        </button>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoundStore } from '../../../Store/IdentityVerification/Round'
import { portfolioStore } from '../../../Store/Portfolio/PortfolioStore'
const props = defineProps({
    files : {
        type : Object , 
        required : true,
    },
    form : {
        type : Object,
        required : true,
    },
    final : {
        type : Object,
        required : true,
    }
})
const projectsStore = portfolioStore()
const discardStore = useRoundStore()
const round = computed(() => projectsStore.getRound)
const cancle = () => {
    discardStore.updateDiscardBoxStatus(true)
}
const ContinueFun = () => {
    if(round.value < 1){
        if(props.files.length == 0 || props.form.projectName == null){
            alert('complete requirements ')
        }else{
            projectsStore.updateRound(round.value + 1)
            // send images files to projectStore 
            projectsStore.updateFiles(props.files)
            projectsStore.updateFormValues(props.form)
        }
    }else{
        projectsStore.updateProjectName = props.final.projectName
        if(props.final.projectName == null || props.final.projectName == ''){
            alert('Enter Project Name')
        }
        else if(props.final.skills.length == 0){
            alert('Add Skills')
        }
        else{
            alert('Success')
            projectsStore.updateRound(0)
            projectsStore.updateShowStatus(false)
        }
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
.buttons .cancle{
    background-color:#fff;
    color:black;
}
.buttons .cancle:hover{
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