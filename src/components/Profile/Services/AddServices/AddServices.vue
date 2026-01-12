<template>
    <div class="add-services" v-if="showSection">
        <div class="container main">
            <TopBar title="Add Services" v-if="servicesStore.getRound <= 5"/>
            <Overview v-if="servicesStore.getRound == 0"/>
            <Pricing v-if="servicesStore.getRound == 1"/>
            <Gallery v-if="servicesStore.getRound == 2" />
            <Process v-if="servicesStore.getRound == 3" />
            <Description v-if="servicesStore.getRound == 4" />
            <Review v-if="servicesStore.getRound == 5" />
            <!--
            <DiscardChanges :addService='true'/>
            -->
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
//import DiscardChanges from '../../../Auth/IdentityVerification/DiscardChanges.vue'
import TopBar from '../../BopUpTopBar/TopBar.vue'
import Overview from './Overview.vue'
import Pricing from './Pricing.vue'
import Gallery from './Gallery.vue'
import Process from './Process.vue'
import Description from './Description.vue'
import Review from './Review.vue'
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