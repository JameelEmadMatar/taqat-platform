<template>
    <section class="profile-inside">
        <ProfileLeftSide/>
        <ProfileRightSide/>
    </section>
</template>
<script setup>
import ProfileLeftSide from './LeftSide/ProfileLeftSide.vue'
import ProfileRightSide from './RightSide/ProfileRightSide.vue'
</script>
<style scoped>
.profile-inside{
    padding:30px 0;
    display:flex;
    gap:20px;
}
@media screen and (max-width:992px){
    .profile-inside{
        flex-direction:column;
    }
}
</style>