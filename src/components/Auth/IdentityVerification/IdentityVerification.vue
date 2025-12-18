<template>
    <div class="verification" v-if="showStatus" @click="closeModal">
        <div class="container" @click.stop>
            <TopBarVerification/>
            <IdentityStarted v-if="round == 0"/>
            <VerificationStageOne v-if="round == 1" />
            <OtpVerification v-if="round == 2"/>
            <PersonalInformationOne v-if="round == 3"/>
            <PersonalInformationTwo v-if="round == 4"/>
            <PersonalInformationThree v-if="round == 5"/>
            <DiscardChanges/>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import TopBarVerification from './TopBarVerification.vue'
import IdentityStarted from './IdentityStarted.vue'
import VerificationStageOne from './VerificationStageOne.vue'
import OtpVerification from './OtpVerification.vue'
import PersonalInformationOne from './PersonalInformationOne.vue'
import PersonalInformationTwo from './PersonalInformationTwo.vue'
import PersonalInformationThree from './PersonalInformationThree.vue'
import DiscardChanges from './DiscardChanges.vue'
import { useRoundStore } from '../../Store/IdentityVerification/Round'
const round = computed(() => useRoundStore().getRound)
const showStatus = computed(() => useRoundStore().getShowStatus)
function closeModal(){
    if(round.value == 0){
        useRoundStore().updateShowStatus(false)
        useRoundStore().updateDiscardBoxStatus(false)
    }else{
        useRoundStore().updateDiscardBoxStatus(true)
    }
}
</script>  

<style scoped>
.verification{
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
.container{
    position:relative;
    overflow:auto;
    background-color: #fff;
    border-radius: 8px;
    padding: 40px 30px;
    width: 90%;
    max-width:700px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    height:90%;
    max-height:700px;
}
</style>