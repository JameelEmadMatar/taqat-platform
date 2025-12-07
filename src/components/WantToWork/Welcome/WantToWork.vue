<template>
    <WelcomePage v-if="round == 0"/>
    <PersonalDetails v-if="round == 1"/>
    <ProfessionalDetails v-if="round == 2"/>
</template>
<script setup>
import { ref , computed} from 'vue'
import { useStageStore } from '../../Store/WantToWork/Stage'
import WelcomePage from './WelcomePage.vue'
import PersonalDetails from './PersonalDetails.vue'
import ProfessionalDetails from './ProfessionalDetails.vue'
const round = computed(() => useStageStore().getRound)
</script>
<style scoped>
@media screen and (max-width:992px){
    :deep(.mode) , :deep(.lang){
        display:none
    }
    :deep(nav){
        display:flex;
    }
    :deep(.navbar-content){
        padding:0;
        display: flex;
        flex-direction: column;
        height: fit-content;
    }
    :deep(.navbar-content .logo){
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
        margin-left:10px;
    }
    :deep(.navbar-content .logo-inside){
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
    }
    :deep(.navbar-content .logo .logo-inside .hamburger-svg){
        display:flex;
    }
    :deep(.navbar-content .navbar-list){
        padding-bottom: 0;
        border-bottom: 2px solid #D9D9D9;
        width: 95%;
        display:none
    }
    :deep(.navbar-content .navbar-list ul){
        flex-direction: column;
        align-items: flex-start !important;
        gap:30px !important;
    }
    :deep(.navbar-content .navbar-list ul li){
        font-size:16px;
    }
    :deep(.navbar-content .left-side){
        gap: 20px;
        margin-top: 20px;
        display:none
    }
    .left-side{
        width:100%;
    }
    .change{
        justify-content:flex-end;
        width:100%;
    }
    .right-side , .lang , .mode , .change .back{
        display:none
    }
    :deep(nav){
        display:flex;
        width:100%;
    }
    :deep(.logo-inside){
        width: 100%;
    }
    :deep(.navbar-list){
        display:none
    }
    :deep(.hamburger-svg){
        display:flex;
    }
}
</style>