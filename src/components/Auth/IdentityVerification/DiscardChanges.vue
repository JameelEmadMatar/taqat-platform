<template>
    <div class="discard" v-if="showStatus">
        <div class="discard-main">
            <div class="top">
                <div class="one">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="#191919"><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10m0-14v5" stroke="#696a70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.994 16h.01" stroke="#696a70" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <p>Discard Changes?</p>
                </div>
                <div class="two">
                    <svg @click="cancle()" fill-rule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path></svg>
                </div>
            </div>
            <div class="buttons">
                <button @click="cancle()">Cancle</button>
                <button @click="close()">Close</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue'
import { useRoundStore } from '../../Store/IdentityVerification/Round'
import { useBadgesStore } from '../../Store/Badges/BadgesStore'
import { useServicesStore } from '../../Store/Services/ServicesStore'
const props = defineProps({
    nestedIndex: {
        type: Number,
        required: true
    },
    addService : {
        type : Object,
    }
})
const roundStore = useRoundStore()
const badgesStore = useBadgesStore()
const servicesStore = useServicesStore()
const round = computed(() => roundStore.getRound)
const showStatus = computed(() => roundStore.getDiscradStatus)

function cancle(){
    useRoundStore().updateDiscardBoxStatus(false)
}
function close(){
    useRoundStore().updateDiscardBoxStatus(false)
    useRoundStore().updateRound(0)
    useRoundStore().updateShowStatus(false)
    if(props.nestedIndex){
        badgesStore.updateNestedStatus(props.nestedIndex , false)
    }else if(props.addService){
        servicesStore.updateRound(0)
        servicesStore.updateShowStatus(false)
    }

}
</script>
<style scoped>
.discard{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.discard-main{
    position: relative;
    background-color: #fff;
    border-radius: 12px;
    padding: 40px 30px;
    width: 90%;
    height: fit-content;
    max-width: 600px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
.top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:30px;
}
.one{
    display: flex;
    gap: 10px;
    align-items: center;
}
.two{
    display:flex
}
.two svg{
    cursor: pointer;
    color: var(--text-color);
}
.two svg:hover{
    background-color:#eee;
    border-radius:2px;
    color:black;
}
.buttons{
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
}
.buttons button{
    width: 100px;
    border: 1px solid #D9D9D9;
    outline: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
}
.buttons button:first-child{
    background-color:#fff;
    color:black;
}
.buttons button:first-child:hover{
    color: #006fbc;
    border-color: #006fbc;
    background: #ffffff;
}
.buttons button:last-child{
    background-color:var(--main-color);
    color:#fff;
}
.buttons button:last-child:hover{
    background: #006fbc;
    color: #fff;
}
</style>