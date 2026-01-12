<template>
    <NavBar/>
    <div class="main container">
        <div class="title-one">
            <div @click="router.push('/jobs')">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M10 15v-2.5M8.391 2.35 2.616 6.975c-.65.516-1.067 1.608-.925 2.425l1.108 6.633c.2 1.183 1.334 2.141 2.534 2.141h9.333c1.192 0 2.333-.966 2.533-2.141L18.308 9.4c.133-.817-.284-1.909-.925-2.425l-5.775-4.617c-.892-.717-2.334-.717-3.217-.008" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span>Find Jobs</span>
            </div>
            <svg class="svg-title" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="#696A70"><path d="M8.47 13.262 12 9.742l3.53 3.52" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <p>{{job.title}}</p>
        </div>
        <div class="content">
            <LeftSide :job="job"/>
            <RightSide :job="job"/>
        </div>
    </div>
    <LandingFooter/>
</template>

<script setup>
import { ref , onBeforeMount } from 'vue'
import { useRoute  , useRouter} from 'vue-router'
import axiosClient from '../../Axios/axiosClient'
import NavBar from '../../LandingPage/NavBar.vue'
import LandingFooter from '../../LandingPage/LandingFooter.vue'
import LeftSide from './LeftSide.vue'
import RightSide from './RightSide.vue'


const route = useRoute()
const router = useRouter()
const jobId = ref('')
const job = ref([])
onBeforeMount(async() => {
    /*
    jobId.value = route.params.id 
    try{
        const response = await axiosClient(`/jobs/view/${jobId.value}`)

        job.value = response.data.data
        console.log(job.value)

    }
    catch(error){
        console.log(error.response.data)
    }
    */
   jobId.value = 1
   job.value = {
    "id": 1,
    "title": "Internship Opportunity: Junior React.js Developer",
    "description": "<p><strong>Location:</strong> Remote</p><p> <strong>Duration:</strong> Internship (3–6 months)</p><p> <strong>Type:</strong> Internship </p><p><strong>About the Opportunity:</strong></p><p> We are offering an exciting internship opportunity for a <strong>Junior React.js Developer</strong> who is eager to gain hands-on experience in building real-world web applications. This role is ideal for recent graduates or junior developers looking to strengthen their frontend development skills in a collaborative and supportive environment.</p><p><strong>Responsibilities:</strong></p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Assist in developing and maintaining web applications using <strong>React.js</strong>.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Work closely with UI/UX designers to implement responsive and user-friendly interfaces.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Write clean, reusable, and maintainable code.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Participate in code reviews and team meetings.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Debug and fix frontend issues.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Learn and apply best practices in frontend development.</li></ol><p><strong>Requirements:</strong></p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Basic knowledge of <strong>JavaScript (ES6+)</strong>, <strong>HTML</strong>, and <strong>CSS</strong>.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Familiarity with <strong>React.js</strong> and component-based architecture.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Understanding of REST APIs is a plus.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Willingness to learn and improve coding skills.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Ability to work well in a team environment.</li></ol><p><strong>What You Will Gain:</strong></p><ol><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Hands-on experience working on real projects.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Mentorship from experienced developers.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Opportunity to improve React.js and frontend development skills.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Certificate of internship upon completion.</li><li data-list=\"bullet\"><span class=\"ql-ui\" contenteditable=\"false\"></span>Potential opportunity for future employment based on performance.</li></ol><p><br></p>",
    "category": {
        "id": 1,
        "name": "Development & IT",
        "image": "https://api.taqatgaza.com/storage/uploads/categories/1174/lrwaNOV9OIpOrrQh24G0.jpg",
        "sub_categories": [
            {
                "id": 1,
                "name": "Web Development"
            },
            {
                "id": 2,
                "name": "Mobile Apps"
            },
            {
                "id": 3,
                "name": "Desktop Apps"
            }
        ]
    },
    "sub_category": {
        "id": 1,
        "name": "Web Development"
    },
    "skills": [
        {
            "id": 1,
            "name": "Front-end Development"
        },
        {
            "id": 4,
            "name": "Web Apps"
        }
    ],
    "status": {
        "value": 1,
        "name": "Open",
        "reject_details": []
    },
    "type": {
        "value": "1",
        "label": "Fast Job"
    },
    "budget_from": "50.00",
    "budget_to": "100.00",
    "contract_time_type": null,
    "weekly_hours": "",
    "experience_level": null,
    "duration": null,
    "created_at": "2025-12-13 13:30",
    "proposals": null,
    "proposal_count": 9,
    "last_proposal_time": "2026-01-08 11:05",
    "client": {
        "rating": 0,
        "rating_count": null,
        "location": {
            "id": 183,
            "name": "Palestine, State of",
            "alpha-2": "PS",
            "alpha-3": "PSE",
            "numeric": 275
        },
        "payment_verified": true
    },
    "allow_countries": null,
    "number_of_open_positions": 1,
    "is_editable": false,
    "is_cancellable": true,
    "is_open": true
}
})

</script>

<style scoped>
.main{
    margin:30px 0;
}
.title-one{
    display: flex;
    align-items: center;
    gap: 15px;
    font-size:14px;
    margin:15px 0;
}
.title-one .svg-title{
    rotate:90deg;
}
.title-one div{
    display:flex;
    align-items:center;
    gap:10px;
    color:var(--text-color);
    cursor:pointer;
}
.title-one p{
    font-weight:500;
    cursor:pointer;
}
.content{
    display: flex;
    margin: 30px 0;
    flex-wrap: wrap;
}
</style>