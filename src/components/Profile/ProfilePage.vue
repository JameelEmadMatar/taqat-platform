<template>
    <section class="profile-section container">
        <ProfileInside/>
        
        <teleport to="body" v-if="aboutEditShow">
          <EditAbout/>
        </teleport>
        <teleport to="body" v-if="idShow">
            <IdentityVerification/>
        </teleport>
        <teleport to="body" v-if="skillsEditShow">
            <SkillsEdit/>
        </teleport>
        <teleport to="body" v-if="EditLangShow">
            <AddEditLanguage/>
        </teleport>
        <teleport to="body" v-if="completeProfileShow">
            <CompleteProfile/>
        </teleport>
        <teleport to="body" v-if="editEducationShow">
            <EditEducation/>
        </teleport>
    </section>
</template>

<script setup>
import { computed  , defineAsyncComponent } from 'vue'
import ProfileInside from './ProfileInside/ProfileInside.vue'
import { useRoundStore } from '../Store/IdentityVerification/Round'
import { useBadgesStore } from '../Store/Badges/BadgesStore'


const idStore = useRoundStore()
const badgesStore = useBadgesStore()

const idShow = computed(() => idStore.getShowStatus)
const completeProfileShow = computed(() => badgesStore.getShowStatus)
const skillsEditShow = computed(() => {
    const Section = badgesStore.nestedShowStatus.find(item => item.name === 'Skills')
    return Section ? Section.status : false
})
const EditLangShow = computed(() => {
    const Section = badgesStore.nestedShowStatus.find(item => item.name === 'Languages')
    return Section ? Section.status : false
})
const editEducationShow = computed(() => {
    const Section = badgesStore.nestedShowStatus.find(item => item.name === 'Edit Education')
    return Section ? Section.status : false
})
const aboutEditShow = computed(() => {
    const Section = badgesStore.nestedShowStatus.find(item => item.name === 'About')
    return Section ? Section.status : false
})


const IdentityVerification = defineAsyncComponent(() => 
  import('../Auth/IdentityVerification/IdentityVerification.vue')
)
const SkillsEdit = defineAsyncComponent(() => 
  import('./CompleteProfile/SkillsEdit.vue')
)
const AddEditLanguage = defineAsyncComponent(() => 
  import('./CompleteProfile/AddEditLanguage.vue')
)
const CompleteProfile = defineAsyncComponent(() => 
  import('./CompleteProfile/CompleteProfile.vue')
)
const EditEducation = defineAsyncComponent(() =>
  import('./CompleteProfile/EditEducation.vue')
)
const EditAbout = defineAsyncComponent(() =>
  import('./CompleteProfile/EditAbout.vue')
)
</script>