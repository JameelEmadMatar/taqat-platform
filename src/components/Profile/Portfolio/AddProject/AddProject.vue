<template>
    <div class="add-project" v-if="showSection">
        <div class="main">
            <TopBar :title="projectsStore.getRound == 0? 'Add Project' : 'Final Touches'" v-if="projectsStore.getRound <= 1"/>
            <FirstRound v-if="projectsStore.getRound == 0" />
            <FinalRound v-if="projectsStore.getRound == 1" />
            <!-- 
            <DiscardChanges :addProjects='true'/>
            -->
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import TopBar from '../../BopUpTopBar/TopBar.vue'
import FirstRound from './FirstRound.vue'
import FinalRound from './FinalRound.vue'
//import DiscardChanges from '../../../Auth/IdentityVerification/DiscardChanges.vue'
import { portfolioStore } from '../../../Store/Portfolio/PortfolioStore'
const projectsStore = portfolioStore()
const showSection = computed(() => {
    return projectsStore.getShowStatus
})
</script>

<style scoped>
.add-project{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
.main{
    position:relative;
    background-color: #fff;
    border-radius: 8px;
    padding: 40px 30px;
    width: 95%;
    max-width:1100px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    height:90%;
    max-height:700px;
}
</style>