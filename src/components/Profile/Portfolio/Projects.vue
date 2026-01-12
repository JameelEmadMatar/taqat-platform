<template>
    <div class="projects">
        <div class="project" v-for="project of projects" :key="project.index">
            <img :src="project.src" alt="project">
            <p :title="project.title">{{project.title}}</p>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="white"/>
                <path d="M16.0559 12.1111C16.8229 12.1111 17.4448 11.4893 17.4448 10.7223C17.4448 9.9552 16.8229 9.33337 16.0559 9.33337C15.2888 9.33337 14.667 9.9552 14.667 10.7223C14.667 11.4893 15.2888 12.1111 16.0559 12.1111Z" fill="#191919"/>
                <path d="M16.0559 17.3888C16.8229 17.3888 17.4448 16.767 17.4448 16C17.4448 15.2329 16.8229 14.6111 16.0559 14.6111C15.2888 14.6111 14.667 15.2329 14.667 16C14.667 16.767 15.2888 17.3888 16.0559 17.3888Z" fill="#191919"/>
                <path d="M16.0559 22.6667C16.8229 22.6667 17.4448 22.0449 17.4448 21.2778C17.4448 20.5107 16.8229 19.8889 16.0559 19.8889C15.2888 19.8889 14.667 20.5107 14.667 21.2778C14.667 22.0449 15.2888 22.6667 16.0559 22.6667Z" fill="#191919"/>
            </svg>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    projects: {
        type: Object,
        required: true
    },
})
</script>

<style scoped>
.projects{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}
.project{
    width: calc((100% - 40px) / 3);
    border-radius:8px;
    border:1px solid #D9D9D9;
    margin-bottom:30px;
    position: relative;
    cursor:pointer;
}
img{
    width: 100%;
    border-radius: 8px 8px 0 0;
    max-width:100%;
    height:250px;
}
p{
    background-color:#fff;
    padding:15px;
    border-radius:8px;
    font-size:18px;
    font-weight:600;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
svg{
    position:absolute;
    top:15px;
    right:15px;
}
@media screen and (min-width:575px) and (max-width:768px){
    .project{
        width: calc((100% - 20px) / 2);
    }
}
@media screen and (max-width:575px){
    .project{
        width:100%;
    }
}
</style>