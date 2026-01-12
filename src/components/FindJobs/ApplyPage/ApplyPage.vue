<template>
    <NavBar/>
    <div class="main container">
        <div class="title-one">
            <div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M10 15v-2.5M8.391 2.35 2.616 6.975c-.65.516-1.067 1.608-.925 2.425l1.108 6.633c.2 1.183 1.334 2.141 2.534 2.141h9.333c1.192 0 2.333-.966 2.533-2.141L18.308 9.4c.133-.817-.284-1.909-.925-2.425l-5.775-4.617c-.892-.717-2.334-.717-3.217-.008" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span @click="router.push({name : 'jobs'})">Find Jobs</span>
            </div>
            <svg class="svg-title" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="#696A70"><path d="M8.47 13.262 12 9.742l3.53 3.52" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <p @click="router.push({name : 'jobPage' , params :{id : jobId},})">{{job.title}}</p>
            <svg class="svg-title" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="#696A70"><path d="M8.47 13.262 12 9.742l3.53 3.52" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <p>Apply Now</p>
        </div>
        <div class="content">
            <h4 class="title">Apply Now</h4>
            <div class="job-title">
                <p>{{job.title}}</p>
                <div class="fast-job" v-if="job.type.name == 'Fast Job'">
                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m9.646 1-8.164 9.797c-.32.384-.48.576-.482.738-.002.14.06.275.17.363.126.102.376.102.875.102H8.73l-.917 7.333 8.164-9.797c.32-.384.48-.575.482-.737a.46.46 0 0 0-.17-.364c-.126-.102-.376-.102-.875-.102H8.73z" fill="#fff" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <p>Fast Job</p>
                </div>
            </div>
            <p class="category">{{job.sub_category.name}} , {{job.category.name}}</p>
            <h4>What is the rate you'd like to bid for this job?</h4>
            <div class="client">
                <div class="img">
                    <img src='https://api.taqatgaza.com/storage/uploads/freelancers/225/4MTIgOmTZt6i6IqlsfY6.jpg' :alt="job.client.name">
                    <div class="img-on">
                        <div>
                            <p class="name">Abd Qaddora</p>
                            <svg v-if="job.client.payment_verified" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 15" fill="none"><g clip-path="url(#clip0_17584_19397)"><path d="M13.5739 6.46531L12.6009 5.4739C12.533 5.40713 12.4794 5.32719 12.4433 5.23895C12.4072 5.15071 12.3894 5.05601 12.3909 4.96062V3.55437C12.3899 3.36172 12.3511 3.17114 12.2767 2.99359C12.2022 2.81604 12.0936 2.65502 11.957 2.51977C11.8204 2.38453 11.6586 2.27772 11.4807 2.2055C11.3029 2.13327 11.1127 2.09705 10.9209 2.0989H9.52087C9.42586 2.1004 9.33161 2.08248 9.24376 2.04621C9.15592 2.00994 9.07633 1.9561 9.00986 1.88797L8.02986 0.896556C7.75685 0.622621 7.38675 0.46875 7.00086 0.46875C6.61497 0.46875 6.24486 0.622621 5.97186 0.896556L4.98486 1.8739C4.91838 1.94204 4.8388 1.99588 4.75095 2.03215C4.6631 2.06842 4.56883 2.08634 4.47386 2.08484H3.07386C2.88206 2.08576 2.69233 2.12473 2.51557 2.19952C2.33881 2.27431 2.17851 2.38343 2.04386 2.52065C1.90922 2.65785 1.80289 2.82042 1.73098 2.99903C1.65908 3.17764 1.62301 3.36876 1.62486 3.5614V4.96765C1.62635 5.06304 1.60851 5.15774 1.5724 5.24598C1.5363 5.33422 1.4827 5.41416 1.41486 5.48093L0.427859 6.46531C0.15514 6.73954 0.00195312 7.11129 0.00195312 7.4989C0.00195312 7.88651 0.15514 8.25827 0.427859 8.5325L1.40086 9.52391C1.4687 9.59066 1.5223 9.67063 1.5584 9.75885C1.59451 9.84707 1.61235 9.94176 1.61086 10.0372V11.4434C1.61178 11.6361 1.65057 11.8267 1.72503 12.0042C1.79949 12.1817 1.90813 12.3428 2.04473 12.4781C2.18132 12.6133 2.34317 12.72 2.52099 12.7923C2.6988 12.8645 2.88907 12.9008 3.08086 12.8989H4.48086C4.57583 12.8974 4.6701 12.9153 4.75795 12.9516C4.8458 12.9879 4.92539 13.0417 4.99186 13.1098L5.97886 14.1013C6.25186 14.3752 6.62197 14.529 7.00786 14.529C7.39375 14.529 7.76385 14.3752 8.03686 14.1013L9.01686 13.1239C9.08333 13.0558 9.16291 13.0019 9.25076 12.9657C9.33859 12.9294 9.43286 12.9115 9.52787 12.913H10.9279C11.314 12.913 11.6843 12.7588 11.9574 12.4846C12.2304 12.2103 12.3839 11.8383 12.3839 11.4505V10.0442C12.3824 9.94879 12.4002 9.8541 12.4363 9.76588C12.4724 9.67766 12.526 9.59769 12.5939 9.53094L13.5809 8.53953C13.7165 8.40315 13.8239 8.24119 13.897 8.06295C13.9702 7.88471 14.0074 7.69371 14.0068 7.50096C14.0061 7.30819 13.9675 7.11745 13.8933 6.93972C13.819 6.76198 13.7104 6.60076 13.5739 6.46531ZM9.92687 6.23328L6.48986 9.60829C6.44138 9.6576 6.3836 9.69669 6.31989 9.72322C6.25618 9.74975 6.18783 9.76326 6.11886 9.76297C6.04945 9.76194 5.98091 9.74722 5.91723 9.71938C5.85355 9.69163 5.79598 9.65151 5.74786 9.60126L4.08886 7.91375C4.03784 7.86495 3.99711 7.80635 3.96911 7.74141C3.94111 7.67648 3.92641 7.60656 3.92587 7.53579C3.92534 7.46504 3.93899 7.3949 3.96601 7.32954C3.99303 7.2642 4.03286 7.20498 4.08315 7.15542C4.13343 7.10585 4.19312 7.06697 4.25868 7.04106C4.32424 7.01516 4.39431 7.00278 4.46473 7.00464C4.53515 7.00652 4.60448 7.02261 4.66858 7.05195C4.73268 7.08129 4.79025 7.1233 4.83786 7.17546L6.12586 8.49031L9.19186 5.48093C9.2903 5.38218 9.42371 5.32671 9.56287 5.32671C9.70194 5.32671 9.8354 5.38218 9.93387 5.48093C9.98315 5.53048 10.0221 5.58939 10.0485 5.65423C10.0748 5.71907 10.0881 5.78854 10.0874 5.85858C10.0868 5.92862 10.0723 5.99782 10.0447 6.06216C10.0171 6.12649 9.97708 6.18466 9.92687 6.23328Z" fill="#1379F0"></path></g><defs><clipPath id="clip0_17584_19397"><rect width="14" height="15" fill="white"></rect></clipPath></defs></svg>
                        </div>
                        <p>Hourly rate: 15 /hour</p>
                    </div>
                </div>
                <div class="price">
                    <div class="price-type">
                        <div class="one">
                            <p>Fixed price</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" class="cursor-pointer"><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10m0-14v5" stroke="#696a70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.994 16h.01" stroke="#696a70" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                        <div class="two">
                            Client's budget: $50 - $100
                        </div>
                    </div>
                    <div class="input">
                        <input type="number" name="price">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M8.672 14.33c0 1.29.99 2.33 2.22 2.33h2.51c1.07 0 1.94-.91 1.94-2.03 0-1.22-.53-1.65-1.32-1.93l-4.03-1.4c-.79-.28-1.32-.71-1.32-1.93 0-1.12.87-2.03 1.94-2.03h2.51c1.23 0 2.22 1.04 2.22 2.33M12 6v12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </div>
                    <p>Total amount the client will see</p>
                </div>
                <div class="cover">
                    <p class="fw-500">Cover Letter</p>
                    <textarea placeholder="Briefly introduce yourself and explain why you're a great fit for this job. Mention any relevant experience or similar projects."></textarea>
                    <p class="numbers">0 / 4000</p>
                </div>
                <div class="attachments">
                    <p class="fw-500">Attachments</p>
                    <p class="fw-500 p-2">Add samples of your work to strengthen your proposal. Contact details are not allowed before a contract.</p>
                    <p class="up">Up to 10 files (max 25 MB each)</p>
                    <div class="attach-div" @click="triggerFileInput">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="#191919"><path d="m12.2 11.798-1.41 1.41c-.78.78-.78 2.05 0 2.83s2.05.78 2.83 0l2.22-2.22a4.01 4.01 0 0 0 0-5.66 4.01 4.01 0 0 0-5.66 0l-2.42 2.42a3.43 3.43 0 0 0 0 4.85" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <p class="up">PDF, JPG, PNG, DOCX</p>
                        <input
                            ref="fileInput"
                            type="file"
                            @change="handleFileSelect"
                            :accept="acceptedFileTypes"
                            multiple
                            style="display: none"
                        />
                        <button>Attach files</button>
                    </div>
                    <p>{{errorMessage}}</p>
                    <div class="files">
                        <div class="file" v-for="(file , index) of files" :key="file.id">
                            <div class="file-details">
                                <svg v-if="file.type == 'image'" width="24" height="24" viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg"><path d="M853.333 960H170.667V64H640l213.333 213.333z" fill="#90CAF9"></path><path d="M821.333 298.667H618.667V96z" fill="#E1F5FE"></path><path d="M448 490.667 298.667 704h298.666z" fill="#1565C0"></path><path d="M597.333 563.2 490.667 704H704zM640 522.667a32 32 0 1 0 64 0 32 32 0 1 0-64 0" fill="#1976D2"></path></svg>
                                <svg v-if="file.type == 'application/pdf'" height="24px" width="24px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><path d="M128,0c-17.6,0-32,14.4-32,32v448c0,17.6,14.4,32,32,32h320c17.6,0,32-14.4,32-32V128L352,0H128z" style="fill: rgb(226, 229, 231);"></path><path d="M384,128h96L352,0v96C352,113.6,366.4,128,384,128z" style="fill: rgb(176, 183, 189);"></path><polygon points="480,224 384,128 480,128 " style="fill: rgb(202, 209, 216);"></polygon><path d="M416,416c0,8.8-7.2,16-16,16H48c-8.8,0-16-7.2-16-16V256c0-8.8,7.2-16,16-16h352c8.8,0,16,7.2,16,16 V416z" style="fill: rgb(241, 86, 66);"></path><g><path d="M101.744,303.152c0-4.224,3.328-8.832,8.688-8.832h29.552c16.64,0,31.616,11.136,31.616,32.48 c0,20.224-14.976,31.488-31.616,31.488h-21.36v16.896c0,5.632-3.584,8.816-8.192,8.816c-4.224,0-8.688-3.184-8.688-8.816V303.152z  M118.624,310.432v31.872h21.36c8.576,0,15.36-7.568,15.36-15.504c0-8.944-6.784-16.368-15.36-16.368H118.624z" style="fill: rgb(255, 255, 255);"></path><path d="M196.656,384c-4.224,0-8.832-2.304-8.832-7.92v-72.672c0-4.592,4.608-7.936,8.832-7.936h29.296 c58.464,0,57.184,88.528,1.152,88.528H196.656z M204.72,311.088V368.4h21.232c34.544,0,36.08-57.312,0-57.312H204.72z" style="fill: rgb(255, 255, 255);"></path><path d="M303.872,312.112v20.336h32.624c4.608,0,9.216,4.608,9.216,9.072c0,4.224-4.608,7.68-9.216,7.68 h-32.624v26.864c0,4.48-3.184,7.92-7.664,7.92c-5.632,0-9.072-3.44-9.072-7.92v-72.672c0-4.592,3.456-7.936,9.072-7.936h44.912 c5.632,0,8.96,3.344,8.96,7.936c0,4.096-3.328,8.704-8.96,8.704h-37.248V312.112z" style="fill: rgb(255, 255, 255);"></path></g><path d="M400,432H96v16h304c8.8,0,16-7.2,16-16v-16C416,424.8,408.8,432,400,432z" style="fill: rgb(202, 209, 216);"></path></svg>
                                <p>{{file.name}}</p>
                            </div>
                            <div class="remove" @click="removeFile(file.name)">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><path d="M21 5.98047C17.67 5.65047 14.32 5.48047 10.98 5.48047C9 5.48047 7.02 5.58047 5.04 5.78047L3 5.98047" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.8504 9.14062L18.2004 19.2106C18.0904 20.7806 18.0004 22.0006 15.2104 22.0006H8.79039C6.00039 22.0006 5.91039 20.7806 5.80039 19.2106L5.15039 9.14062" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.3301 16.5H13.6601" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.5 12.5H14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <p>Remove</p>
                            </div>
                        </div>
                    </div>
                    <div class="btns">
                        <button class="back" @click="router.push({name : 'jobPage' , params :{id : jobId},})">Back</button>
                        <button class="submit" @click="submit()">Submit Proposal</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <LandingFooter/>
</template>

<script setup>
import { ref , onBeforeMount } from 'vue'
import { useRoute , useRouter } from 'vue-router'
import NavBar from '../../LandingPage/NavBar.vue'
import LandingFooter from '../../LandingPage/LandingFooter.vue'

const jobId = ref('')
const job = ref([])
const route = useRoute() 
const router = useRouter() 
const fileInput = ref('')
const files = ref([])
const errorMessage = ref('')
const isUploading = ref(false)
const acceptedFileTypes = ref([
  'application/pdf',,
  'image/jpg',
  'image/png',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
])

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
}})
const triggerFileInput = () => {
  fileInput.value.click()
}
const handleFileSelect = (event) => {
  const selectedFiles = Array.from(event.target.files)
  validateAndAddFiles(selectedFiles)
  event.target.value = '' 
  console.log(files.value)
}

// التحقق من الملفات وإضافتها
const validateAndAddFiles = (fileList) => {
  errorMessage.value = ''
  
  fileList.forEach(file => {
    // التحقق من النوع
    if (!acceptedFileTypes.value.includes(file.type)) {
      errorMessage.value = `نوع الملف غير مسموح به: ${file.name}. المسموح به: PDF, JPG, PNG, DOCX فقط`
      return;
    }
    
    // التحقق من الحجم (مثال: 10MB كحد أقصى)
    const maxSize = 10 * 1024 * 1024 // 10MB
    if (file.size > maxSize) {
      errorMessage.value = `الملف ${file.name} كبير جداً. الحد الأقصى 10MB`
      return;
    }
    
    // التحقق من عدم تكرار الملف
    const isDuplicate = files.value.some(f => f.name === file.name && f.size === file.size)
    if (!isDuplicate) {
      files.value.push(file)
    }
  })
}

const removeFile = (name) => {
    console.log(name)
    files.value = files.value.filter(e => e.name !== name)
    console.log(files.value)

}

const uploadFiles = async () => {
  if (files.value.length === 0) return;
  
  isUploading.value = true;
  errorMessage.value = '';
  
  try {
    const formData = new FormData();
    
    files.value.forEach((file, index) => {
      formData.append(`files[${index}]`, file);
    });
    
    // هنا ضع كود الاتصال بالـ API
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
      // إذا كنت تستخدم token للتحقق
      // headers: {
      //   'Authorization': `Bearer ${yourToken}`
      // }
    });
    
    if (!response.ok) {
      throw new Error('فشل رفع الملفات');
    }
    
    const result = await response.json();
    console.log('تم رفع الملفات بنجاح:', result);
    
    // إعادة تعيين بعد الرفع الناجح
    files.value = [];
    alert('تم رفع الملفات بنجاح!');
    
  } catch (error) {
    errorMessage.value = error.message || 'حدث خطأ أثناء رفع الملفات';
    console.error('خطأ في رفع الملفات:', error);
  } finally {
    isUploading.value = false;
  }
}

const submit = () => {
    // check files and upload and cover letter , price 
}
</script>

<style scoped>
.main{
    margin:30px 0;
}
h4{
    font-size:24px;
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
    color:var(--text-color);
    cursor:pointer;
}
.title-one p:last-child{
    color:black;
}
.content .title{
    color:var(--main-color);
    margin:30px 0;
    font-size:24px;
}
.job-title{
    display: flex;
    align-items: center;
    gap: 15px;
    font-size:24px;
    font-weight:bold;
}
.fast-job{
    display: flex;
    align-items: center;
    border-radius: 16px;
    background-color: #FFB400;
    width: fit-content;
    padding: 5px;
    font-size:14px;
    color: #fff;
    gap:5px;
    font-weight:bold;
}
.category{
    font-size:14px;
    color:var(--text-color);
    margin:20px 0;
}
.client{
    margin: 30px 0;
}
.client .img{
    display: flex;
    align-items: center;
    gap: 10px;
}
.client .img img{
    width:60px;
    height:60px;
    border-radius:50%;
}
.client .img p{
    font-weight:bold;
}
.client .img-on div{
    display:flex;
    align-items:center;
    gap:10px;
    margin-bottom:10px;
}
.client .img-on p:last-child{
    color:var(--text-color);
}
.price-type{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin: 30px 0;
}
.price-type .one{
    display:flex;
    align-items:center;
    gap:15px;
    font-weight:500;
}
.price-type .two{
    color:var(--text-color);
    font-weight:500;
}
.input{
    position:relative;
    border-radius:8px;
    border:1px solid #D9D9D9;
    padding:10px;
}
.input input{
    border:none;
    outline:none;
    width:100%;
}
.input svg{
    position:absolute;
    right:30px;
}
.fw-500{
    font-weight:500
}
.price p:last-child{
    color:var(--text-color);
    margin:15px 0;
}
.cover{
    position:relative
}
textarea{
    width: 100%;
    margin: 15px 0;
    border-radius: 8px;
    min-height: 300px;
    border: 1px solid #D9D9D9;
    outline: none;
    padding: 20px;
    max-width:100%;
    max-height:400px;
}
.numbers{
    color: var(--text-color);
    position: absolute;
    right: 20px;
    bottom:25px;
}
.attachments .p-2{
    margin:30px 0 ;
}
.up{
    color:var(--text-color);
}
.attach-div{
    display: flex;
    flex-direction: column;
    width: fit-content;
    padding: 40px;
    border: 1px dotted #D9D9D9;
    border-radius: 8px;
    margin: 30px 0;
    align-items: center;
    gap: 20px;
    cursor:pointer;
}
.attach-div button{
    border: none;
    background-color: transparent;
    color: var(--main-color);
    font-weight: bold;
}
.file{
    margin: 25px 0;
    display: flex;
    align-items: center;
    max-width: 500px;
    justify-content: space-between;
}
.file-details{
    display:flex;
    align-items:center;
    gap:10px;
    font-size:12px;
}
.remove{
    display:flex;
    align-items:center;
    gap:10px;
    cursor:pointer;
    font-size:14px;
}
.remove svg{
    width:16px;
    height:16px;
}
.btns{
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    align-items: center;
}
.btns button{
    border: 1px solid #D9D9D9;
    padding: 15px 30px;
    border-radius: 8px;
    cursor: pointer;
    font-weight:500;
}
.btns .back{
    background-color:#fff;
    color:black;
}
.btns .back:hover{
    border:1px solid var(--main-color);
    color:var(--main-color);
}
.btns .submit{
    background-color:var(--main-color);
    color:#fff;
}
.btns .submit:hover{
    opacity:0.7;
}
</style>