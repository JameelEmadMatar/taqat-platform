<template>
    <section class="taqat-works">
        <div class="container">
            <div class="title-div">
                <h1>How Taqat Gaza Works</h1>
                <p>A simple, secure flow that works for both clients and freelancers, from signup to final payment.</p>
            </div>
            <div class="works">
                <Work 
                    title = "Create your free account"
                    p = "Sign up as a client or freelancer in minutes and personalize your profile."
                >
                    <template #icon>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.2395 25.5648C24.0995 25.5448 23.9195 25.5448 23.7595 25.5648C20.2395 25.4448 17.4395 22.5648 17.4395 19.0248C17.4395 15.4048 20.3595 12.4648 23.9995 12.4648C27.6195 12.4648 30.5595 15.4048 30.5595 19.0248C30.5395 22.5648 27.7595 25.4448 24.2395 25.5648Z" stroke="#004A7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M37.4795 38.7572C33.9195 42.0172 29.1995 43.9972 23.9995 43.9972C18.7995 43.9972 14.0795 42.0172 10.5195 38.7572C10.7195 36.8772 11.9195 35.0372 14.0595 33.5972C19.5395 29.9572 28.4995 29.9572 33.9395 33.5972C36.0795 35.0372 37.2795 36.8772 37.4795 38.7572Z" fill="#007BD1" stroke="#004A7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#004A7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </template>
                    <template #number>
                        <svg class="number" width="43" height="96" viewBox="0 0 43 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.03" d="M42.8438 -2.86102e-06V96H22.5469V19.2656H21.9844L0 33.0469V15.0469L23.7656 -2.86102e-06H42.8438Z" fill="#191919"/>
                        </svg>
                    </template>
                </Work>
                <Work 
                    title = "Post jobs or services / Send proposals"
                    p = "Clients post jobs or browse services. Freelancers apply to jobs or list their own services."
                >
                    <template #icon>
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M48 24V34C48 44 44 48 34 48H22C12 48 8 44 8 34V22C8 12 12 8 22 8H32" stroke="#004A7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M48 24H40C34 24 32 22 32 16V8L48 24Z" fill="#007BD1" stroke="#004A7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18 30H30" stroke="#004A7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18 38H26" stroke="#004A7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </template>
                    <template #number>
                        <svg class="number" width="70" height="98" viewBox="0 0 70 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.03" d="M0.9375 97.3125V82.6875L35.1094 51.0469C38.0156 48.2344 40.4531 45.7031 42.4219 43.4531C44.4219 41.2031 45.9375 39 46.9688 36.8437C48 34.6562 48.5156 32.2969 48.5156 29.7656C48.5156 26.9531 47.875 24.5312 46.5938 22.5C45.3125 20.4375 43.5625 18.8594 41.3438 17.7656C39.125 16.6406 36.6094 16.0781 33.7969 16.0781C30.8594 16.0781 28.2969 16.6719 26.1094 17.8594C23.9219 19.0469 22.2344 20.75 21.0469 22.9687C19.8594 25.1875 19.2656 27.8281 19.2656 30.8906H3.57628e-07C3.57628e-07 24.6094 1.42188 19.1562 4.26563 14.5312C7.10938 9.90625 11.0938 6.32812 16.2188 3.79687C21.3438 1.26562 27.25 -3.57628e-06 33.9375 -3.57628e-06C40.8125 -3.57628e-06 46.7969 1.21875 51.8906 3.65625C57.0156 6.0625 61 9.40625 63.8438 13.6875C66.6875 17.9687 68.1094 22.875 68.1094 28.4062C68.1094 32.0312 67.3906 35.6094 65.9531 39.1406C64.5469 42.6719 62.0313 46.5937 58.4063 50.9062C54.7813 55.1875 49.6719 60.3281 43.0781 66.3281L29.0625 80.0625V80.7187H69.375V97.3125H0.9375Z" fill="#191919"/>
                        </svg>
                    </template>
                </Work>
                <Work 
                    title = "Collaborate & get paid securely"
                    p = "Work together on the platform, manage contracts, and track payments and reviews in one place."
                >
                    <template #icon>
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.25 40.75L27.25 48.25L28 9.25L27.25 8.5L25 9.25L22.75 10L19.75 11.5H18.25L16 13H13.75L12.25 15.25L11.5 17.5V22.75V34.75L15.25 40.75Z" fill="#007BD1"/>
                            <path d="M24.9784 8.45719L14.9984 12.2172C12.6984 13.0772 10.8184 15.7972 10.8184 18.2372V33.0972C10.8184 35.4572 12.3784 38.5572 14.2784 39.9772L22.8784 46.3972C25.6984 48.5172 30.3384 48.5172 33.1584 46.3972L41.7584 39.9772C43.6584 38.5572 45.2184 35.4572 45.2184 33.0972V18.2372C45.2184 15.7772 43.3384 13.0572 41.0384 12.1972L31.0584 8.45719C30.207 8.14669 29.0998 7.99169 27.998 7.99219C26.8998 7.99269 25.807 8.14769 24.9784 8.45719Z" stroke="#004A7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M28 7.75V47.5" stroke="#004A7D" stroke-width="2" stroke-linejoin="round"/>
                            </svg>
                    </template>
                    <template #number>
                        <svg class="number" width="74" height="99" viewBox="0 0 74 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.03" d="M36.4219 98.625C29.4219 98.625 23.1875 97.4219 17.7188 95.0156C12.2813 92.5781 7.98438 89.2344 4.82813 84.9844C1.70313 80.7031 0.0937503 75.7656 3.57628e-07 70.1719H20.4375C20.5625 72.5156 21.3281 74.5781 22.7344 76.3594C24.1719 78.1094 26.0781 79.4687 28.4531 80.4375C30.8281 81.4062 33.5 81.8906 36.4688 81.8906C39.5625 81.8906 42.2969 81.3437 44.6719 80.25C47.0469 79.1562 48.9063 77.6406 50.25 75.7031C51.5938 73.7656 52.2656 71.5312 52.2656 69C52.2656 66.4375 51.5469 64.1719 50.1094 62.2031C48.7031 60.2031 46.6719 58.6406 44.0156 57.5156C41.3906 56.3906 38.2656 55.8281 34.6406 55.8281H25.6875V40.9219H34.6406C37.7031 40.9219 40.4063 40.3906 42.75 39.3281C45.125 38.2656 46.9688 36.7969 48.2813 34.9219C49.5938 33.0156 50.25 30.7969 50.25 28.2656C50.25 25.8594 49.6719 23.75 48.5156 21.9375C47.3906 20.0937 45.7969 18.6562 43.7344 17.625C41.7031 16.5937 39.3281 16.0781 36.6094 16.0781C33.8594 16.0781 31.3438 16.5781 29.0625 17.5781C26.7813 18.5469 24.9531 19.9375 23.5781 21.75C22.2031 23.5625 21.4688 25.6875 21.375 28.125H1.92188C2.01563 22.5937 3.59375 17.7187 6.65625 13.5C9.71875 9.28125 13.8438 5.98437 19.0313 3.60937C24.25 1.20312 30.1406 -3.57628e-06 36.7031 -3.57628e-06C43.3281 -3.57628e-06 49.125 1.20312 54.0938 3.60937C59.0625 6.01562 62.9219 9.26562 65.6719 13.3594C68.4531 17.4219 69.8281 21.9844 69.7969 27.0469C69.8281 32.4219 68.1563 36.9062 64.7812 40.5C61.4375 44.0937 57.0781 46.375 51.7031 47.3437V48.0937C58.7656 49 64.1406 51.4531 67.8281 55.4531C71.5469 59.4219 73.3906 64.3906 73.3594 70.3594C73.3906 75.8281 71.8125 80.6875 68.625 84.9375C65.4688 89.1875 61.1094 92.5312 55.5469 94.9688C49.9844 97.4062 43.6094 98.625 36.4219 98.625Z" fill="#191919"/>
                        </svg>
                    </template>
                </Work>
            </div>
            <div class="works" >
            </div>
        </div>
    </section>
</template>
<script setup>
import Work from './WorkPage.vue'
</script>
<style scoped>
.taqat-works{
    padding: 25px 0;
}
.title-div h1{
    font-size: 32px;
}
.title-div p{
    font-size: 14px;
    color: #696A70;
    margin: 20px 0;
}
.works{
    display: flex;
    align-items: center;
    gap:20px;
    margin: 50px 0;
}
.works .work{
    position:relative;
}
.works .work h2{
    font-size: 18px;
    margin: 25px 0;
}
.works .work p{
    font-size: 14px;
    color: #696A70;
}
.works .work .number{
    position: absolute;
    right: 5%;
    top: 10%;
}
@media screen and (max-width:991px){
    .works{
        flex-direction:column;
        align-items: flex-start;
    }
}
</style>