<template>
    <section class="profile-section container">
        <ProfileInside/>
        <IdentityVerification/>
        <CompleteProfile/>
    </section>
</template>

<script setup>
import ProfileInside from './ProfileInside/ProfileInside.vue'
import IdentityVerification from '../Auth/IdentityVerification/IdentityVerification.vue'
import CompleteProfile from './CompleteProfile/CompleteProfile.vue'
</script>