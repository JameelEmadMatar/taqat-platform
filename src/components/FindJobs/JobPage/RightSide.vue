<template>
    <div class="right-side">
        <div class="btns">
            <div v-if="user">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="#191919"><path d="M14.017 1.666H5.983a3.224 3.224 0 0 0-3.216 3.217v11.741c0 1.5 1.075 2.134 2.391 1.409l4.067-2.259c.433-.241 1.133-.241 1.558 0l4.067 2.259c1.317.733 2.392.1 2.392-1.409V4.883a3.237 3.237 0 0 0-3.225-3.217" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.017 1.666H5.983a3.224 3.224 0 0 0-3.216 3.217v11.741c0 1.5 1.075 2.134 2.391 1.409l4.067-2.259c.433-.241 1.133-.241 1.558 0l4.067 2.259c1.317.733 2.392.1 2.392-1.409V4.883a3.237 3.237 0 0 0-3.225-3.217" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <p>Save</p>
            </div>
            <div>
                <!-- Share Models -->
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.33 7.175c2.7.233 3.802 1.62 3.802 4.657v.098c0 3.353-1.342 4.695-4.695 4.695H6.555c-3.353 0-4.695-1.342-4.695-4.695v-.098c0-3.014 1.087-4.402 3.742-4.65M9 11.75V3.215M11.512 4.888 9 2.375 6.487 4.888"></path></svg>
                <p>Share</p>
            </div>
        </div>
        <div class="details">
            <div class="main">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 48 48" fill="none" color="currentColor"><path d="m9.586 30.06 8.339 8.338c3.424 3.424 8.983 3.424 12.426 0l8.081-8.081c3.424-3.424 3.424-8.983 0-12.426l-8.357-8.32a8.74 8.74 0 0 0-6.627-2.56l-9.205.443a7.113 7.113 0 0 0-6.792 6.755l-.442 9.205a8.84 8.84 0 0 0 2.577 6.645" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.397 23.984a4.602 4.602 0 1 0 0-9.205 4.602 4.602 0 0 0 0 9.205Z" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"></path><path d="m25.836 33.188 7.364-7.364" stroke="currentColor" stroke-width="2.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <div>
                    <p>${{job.budget_from}} - ${{job.budget_to}}</p>
                    <p>Hourly Rate</p>
                </div>
            </div>
            <div class="main" v-if="job.duration">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor"><path d="M20.75 13.25c0 4.83-3.92 8.75-8.75 8.75s-8.75-3.92-8.75-8.75S7.17 4.5 12 4.5s8.75 3.92 8.75 8.75M12 8v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 2h6" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <div>
                    <p>1 to 3 months</p>
                    <p>Duration</p>
                </div>
            </div>
            <div class="main" v-if="job.weekly_hours">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-black-300 dark:text-black-50" color="currentColor"><path d="M8 2v3m8-3v3M3.5 9.09h17m.5-.59V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.694 13.7h.009m-.009 3h.009m-3.708-3h.009m-.009 3h.009m-3.709-3h.01m-.01 3h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <div>
                    <p>{{job.weekly_hours}} hrs/week</p>
                    <p>Hourly</p>
                </div>
            </div>
            <div class="main" v-if="job.experience_level">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor"><path d="M3 22h18M5.6 8.379H4c-.55 0-1 .45-1 1v8.62c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1v-8.62c0-.55-.45-1-1-1m7.2-3.188h-1.6c-.55 0-1 .45-1 1v11.81c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V6.191c0-.55-.45-1-1-1M20 2h-1.6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1H20c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <div>
                    <p>Entry</p>
                    <p>Expertise Level</p>
                </div>
            </div>
            <div class="main">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-black-300 dark:text-black-50" color="currentColor"><path d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.9704 14.4402C18.3404 14.6702 19.8504 14.4302 20.9104 13.7202C22.3204 12.7802 22.3204 11.2402 20.9104 10.3002C19.8404 9.59016 18.3104 9.35016 16.9404 9.59016" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.97047 7.16C6.03047 7.15 6.10047 7.15 6.16047 7.16C7.54047 7.11 8.64047 5.98 8.64047 4.58C8.64047 3.15 7.49047 2 6.06047 2C4.63047 2 3.48047 3.16 3.48047 4.58C3.49047 5.98 4.59047 7.11 5.97047 7.16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.00043 14.4402C5.63043 14.6702 4.12043 14.4302 3.06043 13.7202C1.65043 12.7802 1.65043 11.2402 3.06043 10.3002C4.13043 9.59016 5.66043 9.35016 7.03043 9.59016" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.0001 14.6288C11.9401 14.6188 11.8701 14.6188 11.8101 14.6288C10.4301 14.5788 9.33008 13.4488 9.33008 12.0488C9.33008 10.6188 10.4801 9.46875 11.9101 9.46875C13.3401 9.46875 14.4901 10.6288 14.4901 12.0488C14.4801 13.4488 13.3801 14.5888 12.0001 14.6288Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.08973 17.7794C7.67973 18.7194 7.67973 20.2594 9.08973 21.1994C10.6897 22.2694 13.3097 22.2694 14.9097 21.1994C16.3197 20.2594 16.3197 18.7194 14.9097 17.7794C13.3197 16.7194 10.6897 16.7194 9.08973 17.7794Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <div>
                    <p>10 Available</p>
                    <p>Open Positions</p>
                </div>
            </div>
            <div class="main" v-if="job.allow_countries">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 3h1a28.42 28.42 0 0 0 0 18H8m7-18a28.42 28.42 0 0 1 0 18" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 16v-1a28.42 28.42 0 0 0 18 0v1M3 9.002a28.42 28.42 0 0 1 18 0" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <div>
                    <p>Available in</p>
                    <p>{{job.allow_countries[0]}}</p>
                </div>
            </div>
            <button @click="Apply(job.id)">Apply Now</button>
        </div>
        <div class="client">
            <div class="img">
                <img src='https://api.taqatgaza.com/storage/uploads/freelancers/225/4MTIgOmTZt6i6IqlsfY6.jpg' :alt="job.client.name">
                <p class="name">Abd Qaddora</p>
                <svg v-if="job.client.payment_verified" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 15" fill="none"><g clip-path="url(#clip0_17584_19397)"><path d="M13.5739 6.46531L12.6009 5.4739C12.533 5.40713 12.4794 5.32719 12.4433 5.23895C12.4072 5.15071 12.3894 5.05601 12.3909 4.96062V3.55437C12.3899 3.36172 12.3511 3.17114 12.2767 2.99359C12.2022 2.81604 12.0936 2.65502 11.957 2.51977C11.8204 2.38453 11.6586 2.27772 11.4807 2.2055C11.3029 2.13327 11.1127 2.09705 10.9209 2.0989H9.52087C9.42586 2.1004 9.33161 2.08248 9.24376 2.04621C9.15592 2.00994 9.07633 1.9561 9.00986 1.88797L8.02986 0.896556C7.75685 0.622621 7.38675 0.46875 7.00086 0.46875C6.61497 0.46875 6.24486 0.622621 5.97186 0.896556L4.98486 1.8739C4.91838 1.94204 4.8388 1.99588 4.75095 2.03215C4.6631 2.06842 4.56883 2.08634 4.47386 2.08484H3.07386C2.88206 2.08576 2.69233 2.12473 2.51557 2.19952C2.33881 2.27431 2.17851 2.38343 2.04386 2.52065C1.90922 2.65785 1.80289 2.82042 1.73098 2.99903C1.65908 3.17764 1.62301 3.36876 1.62486 3.5614V4.96765C1.62635 5.06304 1.60851 5.15774 1.5724 5.24598C1.5363 5.33422 1.4827 5.41416 1.41486 5.48093L0.427859 6.46531C0.15514 6.73954 0.00195312 7.11129 0.00195312 7.4989C0.00195312 7.88651 0.15514 8.25827 0.427859 8.5325L1.40086 9.52391C1.4687 9.59066 1.5223 9.67063 1.5584 9.75885C1.59451 9.84707 1.61235 9.94176 1.61086 10.0372V11.4434C1.61178 11.6361 1.65057 11.8267 1.72503 12.0042C1.79949 12.1817 1.90813 12.3428 2.04473 12.4781C2.18132 12.6133 2.34317 12.72 2.52099 12.7923C2.6988 12.8645 2.88907 12.9008 3.08086 12.8989H4.48086C4.57583 12.8974 4.6701 12.9153 4.75795 12.9516C4.8458 12.9879 4.92539 13.0417 4.99186 13.1098L5.97886 14.1013C6.25186 14.3752 6.62197 14.529 7.00786 14.529C7.39375 14.529 7.76385 14.3752 8.03686 14.1013L9.01686 13.1239C9.08333 13.0558 9.16291 13.0019 9.25076 12.9657C9.33859 12.9294 9.43286 12.9115 9.52787 12.913H10.9279C11.314 12.913 11.6843 12.7588 11.9574 12.4846C12.2304 12.2103 12.3839 11.8383 12.3839 11.4505V10.0442C12.3824 9.94879 12.4002 9.8541 12.4363 9.76588C12.4724 9.67766 12.526 9.59769 12.5939 9.53094L13.5809 8.53953C13.7165 8.40315 13.8239 8.24119 13.897 8.06295C13.9702 7.88471 14.0074 7.69371 14.0068 7.50096C14.0061 7.30819 13.9675 7.11745 13.8933 6.93972C13.819 6.76198 13.7104 6.60076 13.5739 6.46531ZM9.92687 6.23328L6.48986 9.60829C6.44138 9.6576 6.3836 9.69669 6.31989 9.72322C6.25618 9.74975 6.18783 9.76326 6.11886 9.76297C6.04945 9.76194 5.98091 9.74722 5.91723 9.71938C5.85355 9.69163 5.79598 9.65151 5.74786 9.60126L4.08886 7.91375C4.03784 7.86495 3.99711 7.80635 3.96911 7.74141C3.94111 7.67648 3.92641 7.60656 3.92587 7.53579C3.92534 7.46504 3.93899 7.3949 3.96601 7.32954C3.99303 7.2642 4.03286 7.20498 4.08315 7.15542C4.13343 7.10585 4.19312 7.06697 4.25868 7.04106C4.32424 7.01516 4.39431 7.00278 4.46473 7.00464C4.53515 7.00652 4.60448 7.02261 4.66858 7.05195C4.73268 7.08129 4.79025 7.1233 4.83786 7.17546L6.12586 8.49031L9.19186 5.48093C9.2903 5.38218 9.42371 5.32671 9.56287 5.32671C9.70194 5.32671 9.8354 5.38218 9.93387 5.48093C9.98315 5.53048 10.0221 5.58939 10.0485 5.65423C10.0748 5.71907 10.0881 5.78854 10.0874 5.85858C10.0868 5.92862 10.0723 5.99782 10.0447 6.06216C10.0171 6.12649 9.97708 6.18466 9.92687 6.23328Z" fill="#1379F0"></path></g><defs><clipPath id="clip0_17584_19397"><rect width="14" height="15" fill="white"></rect></clipPath></defs></svg>
            </div>
            <div class="category">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M12 15.5v-12A1.5 1.5 0 0 0 10.5 2h-3A1.5 1.5 0 0 0 6 3.5v12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 5H3a1.5 1.5 0 0 0-1.5 1.5V14A1.5 1.5 0 0 0 3 15.5h12a1.5 1.5 0 0 0 1.5-1.5V6.5A1.5 1.5 0 0 0 15 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <p>Development & IT</p>
            </div>
            <p class="overview">Overview</p>
            <div class="end">
                <p><span>Open Projects: </span>1</p>
                <p><span>Underway Projects: </span>1</p>
                <p><span>Interviewing: </span>3</p>
                <p><span>Member since: </span>Dec 31, 2025</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUserStore } from '../../Store/User/UserStore'
import { useRouter } from 'vue-router'
import { errorAlert } from '../../Utils/swal'

const router = useRouter()
const userStore = useUserStore()
const user = computed(() => userStore.getUserData)
const props = defineProps({
    job : {
        type : Object,
    }
})
const Apply = (id) => {
    // user.value ?  router.push({name : 'applyPage' , params: {id},}) : errorAlert('Error', 'Please Login To Apply')
    router.push({name : 'applyPage' , params: {id},})
}
</script>

<style scoped>
.right-side{
    width:30%;
}
.btns{
    display:flex;
    align-items:center;
    gap:50px;
    justify-content:center;
}
.btns div{
    display:flex;
    align-items:center;
    gap:10px;
    cursor:pointer;
}
.btns div:hover{
    background-color:#eee;
    border-radius:8px;
    padding:5px 10px;
}
.details{
    border:1px solid #D9D9D9;
    padding:20px;
    margin:15px 0;
    margin-left:20px;
    border-radius:8px; 
}
.details .main{
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 20px 0;
}
.details .main div p:first-child{
    font-weight:bold;
}
.details .main div p:last-child{
    color:var(--text-color);
    margin-top:5px;
}
.details button{
    width: 100%;
    border: none;
    background-color: var(--main-color);
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    padding: 10px;
    cursor: pointer;
    font-weight:bold;
}
.client{
    border:1px solid #D9D9D9;
    padding:20px;
    margin:15px 0;
    margin-left:20px;
    border-radius:8px; 
    display:flex;
    flex-direction:column;
    gap:15px;
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
.client .category{
    display:flex;
    align-items: center;
    gap: 10px;
    font-size:14px;
}
.client .overview{
    font-weight:bold
}
.client .end{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 10px 0;
    font-size:14px;
}
.client .end span{
    color:var(--text-color)
}

@media screen and (max-width:991px){
    .right-side{
        width:100%;
        margin-top:50px;
    }
    .details , .client{
        margin-left:0;
    }
}
</style>