<template>
    <FastJobFilter/>
    <PaymentVerified/>
    <LocationFilter :locationCount="locationCount"/>
    <JobTypesFilter/>
    <BudgetRate/>
    <Rating :ratingCount="ratingCount"/>
    <ClientHistory/>
    <ProjectLength/>
    <Proposals/>
    <IndustriesFilter/>
</template>
<script setup>
import FastJobFilter from './Filters/FastJobFilter.vue'
import PaymentVerified from './Filters/PaymentVerified.vue'
import JobTypesFilter from './Filters/JobTypesFilter.vue'
import ClientHistory from './Filters/ClientHistory.vue'
import ProjectLength from './Filters/ProjectLength.vue'
import Proposals from './Filters/Proposals.vue'
import IndustriesFilter from './Filters/IndustriesFilter.vue'
import Rating from './Filters/Rating.vue'
import BudgetRate from './Filters/BudgetRate.vue'
import LocationFilter from './Filters/LocationFilter.vue'
const props = defineProps({
    ratingCount : {
        type : Array,
    },
    locationCount : {
        type : Array
    },
})
</script>