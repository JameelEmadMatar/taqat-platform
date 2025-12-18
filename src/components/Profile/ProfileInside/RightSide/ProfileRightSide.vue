<template>
    <section class="profile-right">
        <VerifyBox/>
        <Badge/>
        <Summary/>
    </section>
</template>

<script setup>
import VerifyBox from './VerifyBox.vue'
import Badge from './Badge.vue'
import Summary from './Summary.vue'
</script>

<style scoped>
.profile-right{
    width:70%;
}
@media screen and (max-width:992px){
    .profile-right{
        width:100%
    }
}
</style>