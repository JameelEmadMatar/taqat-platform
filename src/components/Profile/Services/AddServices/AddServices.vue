<template>
    <div class="add-services" v-if="showSection">
        <div class="container main">
            <TopBar title="Add Services"/>
            <Overview/>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import TopBar from '../../BopUpTopBar/TopBar.vue'
import Overview from './Overview.vue'
import { useRoundStore } from '../../../Store/IdentityVerification/Round'
import { useServicesStore } from '../../../Store/Services/ServicesStore'
const servicesStore = useServicesStore()
const showSection = computed(() => {
    return servicesStore.getShowStatus
})
</script>

<style scoped>
.add-services{
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
    overflow:hidden;
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