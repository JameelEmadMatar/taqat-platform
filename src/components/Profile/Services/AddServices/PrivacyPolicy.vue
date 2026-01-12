<template>
    <div class="privacy-policy" v-if="showSection">
        <div class="main">
            <TopBar title="Privacy Policy"/>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import TopBar from '../../BopUpTopBar/TopBar.vue'
import { useServicesStore } from '../../../Store/Services/ServicesStore'
const servicesStore = useServicesStore()
const showSection = computed(() => {
    return servicesStore.getPrivacyShow
})

</script>


<style scoped>
.privacy-policy{
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
    width: 50%;
    max-width:600px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    height:70%;
    max-height:500px;
}
</style>