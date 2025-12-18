<template>
    <div class="left">
        <About/>
        <Skills/>
        <Languages/>
        <Community/>
        <Education/>
        <Socials/>
    </div>
</template>
<script setup>
import About from './About.vue'
import Skills from './Skills.vue'
import Languages from './Languages.vue'
import Community from './Community.vue'
import Education from './Education.vue'
import Socials from './Socials.vue'
</script>
<style scoped>
.left{
    width:30%;
}
@media screen and (max-width:992px){
    .left{
        width:100%
    }
}
</style>