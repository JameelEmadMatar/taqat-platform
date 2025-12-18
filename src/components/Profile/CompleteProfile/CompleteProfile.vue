<template>
    <section class="complete" v-if="show" @click="closeModal">
        <div class="complete-main" @click.stop>
            <div class="top">
                <div class="one">
                    <div class="progress-circle-css">
                        <div class="progress-content">
                            <span class="percent">35%</span>
                        </div>
                    </div>
                    <div class="title">
                        <div class="verify">
                            <h5>Get verified badge</h5>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" fill="none"><g clip-path="url(#asdsddsd)"><path fill="#007BD1" d="M23.268 11.208 21.6 9.49a1.22 1.22 0 0 1-.36-.89V6.163a2.573 2.573 0 0 0-.196-.972 2.538 2.538 0 0 0-.548-.822 2.492 2.492 0 0 0-1.776-.73h-2.4a1.183 1.183 0 0 1-.876-.365l-1.68-1.718A2.477 2.477 0 0 0 12 .814c-.661 0-1.296.267-1.764.742L8.544 3.25a1.2 1.2 0 0 1-.876.366h-2.4a2.463 2.463 0 0 0-1.766.755 2.57 2.57 0 0 0-.718 1.804v2.437a1.235 1.235 0 0 1-.36.89L.732 11.208A2.555 2.555 0 0 0 .002 13c0 .672.263 1.316.73 1.791L2.4 16.51a1.22 1.22 0 0 1 .36.89v2.437a2.568 2.568 0 0 0 .744 1.794 2.462 2.462 0 0 0 1.776.73h2.4a1.183 1.183 0 0 1 .876.365l1.692 1.718a2.477 2.477 0 0 0 1.764.742c.662 0 1.296-.267 1.764-.742l1.68-1.694a1.199 1.199 0 0 1 .876-.366h2.4c.662 0 1.297-.267 1.765-.742.468-.476.731-1.12.731-1.793v-2.437a1.234 1.234 0 0 1 .36-.89l1.692-1.718a2.566 2.566 0 0 0-.012-3.595Zm-6.252-.402-5.892 5.85a.886.886 0 0 1-.636.268.889.889 0 0 1-.636-.28l-2.844-2.925a.915.915 0 0 1-.28-.655.926.926 0 0 1 .27-.66.898.898 0 0 1 .654-.26.889.889 0 0 1 .64.295l2.208 2.28 5.256-5.217a.893.893 0 0 1 1.469.3.929.929 0 0 1-.209 1.004Z"></path></g><defs><clipPath id="asdsddsd"><path fill="#fff" d="M0 0h24v26H0z"></path></clipPath></defs></svg>
                        </div>
                        <p>Present your experience to the world and showcase your real potential.</p>
                    </div>
                </div>
                <div class="two" @click="closeModal">
                    <svg fill-rule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path></svg>
                </div>

            </div>
            <p class="p-per">Complete profile (3/9) </p>
            <div class="badges">
                <div class="badge" v-for="b of badge" :key="b.index" @click="showNestedBox(b.id)">
                    <div class="left">
                        <svg v-if="!b.complete" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18.6667" cy="19.9999" r="16.1667" stroke="#696A70"/>
                        </svg>
                        <svg v-if="b.complete" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18.6667" cy="20.1668" r="16.1667" fill="#007BD1" stroke="#007BD1"/>
                            <path d="M13.9946 20.5L16.9946 23.5L23.0052 17.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <div class="left-inside">
                            <p class="name">{{b.name}}</p>
                            <p class="title">{{b.title}}</p>
                        </div>
                    </div>
                    <div class="right">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7402 15.53L14.2602 12L10.7402 8.46997" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <SkillsEdit/>
    </section>
</template>

<script setup>
import { ref , computed } from 'vue'
import { useBadgesStore } from '../../Store/Badges/BadgesStore'
import SkillsEdit from './SkillsEdit.vue'
const badgesStore = useBadgesStore()
const show = computed(() => badgesStore.getShowStatus)
const badge = ref([
    {
        id : 0,
        name : "Summary",
        complete : false,
        title : "Tell us more about your skills, work experience, and what makes you stand out.",
    },
    {
        id : 1,
        name : "Skills",
        complete : false,
        title : "Select key skills to help us recommend the right projects. (+10%)",
    },
    {
        id : 2,
        name : "Employment History",
        complete : true,
        title : "List your previous jobs, roles, or freelance projects. (+10%)",
    },
    {
        id : 3,
        name : "Languages",
        complete : false,
        title : "add the languages you speak and your level. (+10%)",
    },
    {
        id : 4,
        name : "Portfolio",
        complete : false,
        title : "Showcase work samples, case studies, or project links. (+10%)",
    },
    {
        id : 5,
        name : "Social",
        complete : false,
        title : "Connect your social profiles like LinkedIn, GitHub, or Behance.",
    },
    {
        id : 6,
        name : "Video Introduction",
        complete : false,
        title : "Upload a short video to introduce yourself and stand out.",
    },
    {
        id : 7,
        name : "Add a professional profile picture",
        complete : false,
        title : "Show your clients who they're working with.",
    },
    {
        id : 8,
        name : "Work Field",
        complete : false,
        title : "Choose your main work category and a relevant subcategory.",
    },
])
const closeModal = () => {
    badgesStore.updateShowStatus(false)
}
const showNestedBox = (index) => {
    badgesStore.updateNestedStatus(index, true)
}
</script>

<style scoped>
.complete{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
.complete-main{
    position:relative;
    overflow:auto;
    background-color: #fff;
    border-radius: 8px;
    padding: 40px 30px;
    width: 90%;
    max-width:700px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    height:90%;
    max-height:700px;
}
.top{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #D9D9D9;
    padding-bottom: 20px;
}
.one{
    display: flex;
    gap: 20px;
    align-items: center;
}
.two{
    cursor:pointer;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.two:hover{
    background-color: #eee;
    transition: backgroundColor 0.3s ease;
    border-radius: 8px;
}
.progress-circle-css {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: conic-gradient(#00803A 0% 35%, #eee 35% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.progress-circle-css::before {
  content: '';
  position: absolute;
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 50%;
}

.progress-content {
  position: relative;
  z-index: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.percent {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}
.title{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.title p {
    font-size:12px;
    color:var(--text-color)
}
.verify{
    display: flex;
    align-items: center;
    gap: 10px;
}
.verify h5{
    font-size:18px;
}
.p-per{
    font-weight:700;
    margin:20px 0;
}
.badges{
    overflow:auto;
    margin-top: 40px;
}
.badge{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    cursor:pointer;
}
.left{
    display: flex;
    align-items: center;
    gap: 15px;
}
.left .name{
    margin-bottom:10px;
    font-weight:600;
}
.left .title{
    color:var(--text-color);
    font-size:12px;
}
</style>