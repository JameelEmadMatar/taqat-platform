<template>
    <div class="top-bar">
        <h5>{{title}}</h5>
        <div @click="Close">
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4891_5609)">
                <path d="M19.2266 26.7732L26.7732 19.2266" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M26.7732 26.7732L19.2266 19.2266" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_4891_5609">
                <rect width="46" height="46" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    </div>
</template>

<script setup>
import { useRoundStore } from '../../Store/IdentityVerification/Round'
const roundStore = useRoundStore()
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
const Close = () => {
    roundStore.updateDiscardBoxStatus(true)
}
</script>

<style scoped>
.top-bar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #D9D9D9;
}
h5{
    font-size:18px;
}
svg{
    cursor : pointer;
}
</style>