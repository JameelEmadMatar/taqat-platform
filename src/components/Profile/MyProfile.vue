<template>
    <section class="my-profile">
        <NavBar/>
        <MyProfileInfo/>
        <router-view/>
        <LandingFooter/>
    </section>
</template>
<script setup>
import NavBar from '../LandingPage/NavBar.vue'
import MyProfileInfo from './MyProfileInfo.vue'
import LandingFooter from '../LandingPage/LandingFooter.vue' 
</script>