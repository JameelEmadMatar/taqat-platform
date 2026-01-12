<template>
    <ExpertRatingFilter/>
    <FreelancerRating :ratingCount="ratingCount"/>
    <HourlyRate/>
    <LocationFilter :locationCount="locationCount"/>
    <SkillsFilter :skillsCount="skillsCount"/>
    <LangFilter :languagesArr="languagesArr"/>
    <IndustriesFilter/>
</template>
<script setup>
import ExpertRatingFilter from './Filters/ExpertRatingFilter.vue'
import IndustriesFilter from './Filters/IndustriesFilter.vue'
import FreelancerRating from './Filters/FreelancerRating.vue'
import HourlyRate from './Filters/HourlyRate.vue'
import LocationFilter from './Filters/LocationFilter.vue'
import SkillsFilter from './Filters/SkillsFilter.vue'
import LangFilter from './Filters/LangFilter.vue'

const props = defineProps({
    languagesArr : {
        type : Array,
    },
    ratingCount : {
        type : Array,
    },
    locationCount : {
        type : Array
    },
    skillsCount : {
        type : Array,
    }
})
</script>