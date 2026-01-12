<template>
    <div class="main all" :style="{width: filtersShow ? '' : '100%'}">
        <div class="result-box" v-for="job of jobs" :key="job.id" @click="goToJobPage(job.id)">
            <div class="one">
                <div class="title">
                    <h3>{{job.title}}</h3>
                    <div class="fast-job" v-if="job.type.label == 'Fast Job'">
                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m9.646 1-8.164 9.797c-.32.384-.48.576-.482.738-.002.14.06.275.17.363.126.102.376.102.875.102H8.73l-.917 7.333 8.164-9.797c.32-.384.48-.575.482-.737a.46.46 0 0 0-.17-.364c-.126-.102-.376-.102-.875-.102H8.73z" fill="#fff" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <p>Fast Job</p>
                    </div>
                </div>
                <div class="save-icon" v-if="user">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="information">
                <div v-if="job.client.payment_verified">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 15" fill="none"><g clip-path="url(#clip0_17584_19397)"><path d="M13.5739 6.46531L12.6009 5.4739C12.533 5.40713 12.4794 5.32719 12.4433 5.23895C12.4072 5.15071 12.3894 5.05601 12.3909 4.96062V3.55437C12.3899 3.36172 12.3511 3.17114 12.2767 2.99359C12.2022 2.81604 12.0936 2.65502 11.957 2.51977C11.8204 2.38453 11.6586 2.27772 11.4807 2.2055C11.3029 2.13327 11.1127 2.09705 10.9209 2.0989H9.52087C9.42586 2.1004 9.33161 2.08248 9.24376 2.04621C9.15592 2.00994 9.07633 1.9561 9.00986 1.88797L8.02986 0.896556C7.75685 0.622621 7.38675 0.46875 7.00086 0.46875C6.61497 0.46875 6.24486 0.622621 5.97186 0.896556L4.98486 1.8739C4.91838 1.94204 4.8388 1.99588 4.75095 2.03215C4.6631 2.06842 4.56883 2.08634 4.47386 2.08484H3.07386C2.88206 2.08576 2.69233 2.12473 2.51557 2.19952C2.33881 2.27431 2.17851 2.38343 2.04386 2.52065C1.90922 2.65785 1.80289 2.82042 1.73098 2.99903C1.65908 3.17764 1.62301 3.36876 1.62486 3.5614V4.96765C1.62635 5.06304 1.60851 5.15774 1.5724 5.24598C1.5363 5.33422 1.4827 5.41416 1.41486 5.48093L0.427859 6.46531C0.15514 6.73954 0.00195312 7.11129 0.00195312 7.4989C0.00195312 7.88651 0.15514 8.25827 0.427859 8.5325L1.40086 9.52391C1.4687 9.59066 1.5223 9.67063 1.5584 9.75885C1.59451 9.84707 1.61235 9.94176 1.61086 10.0372V11.4434C1.61178 11.6361 1.65057 11.8267 1.72503 12.0042C1.79949 12.1817 1.90813 12.3428 2.04473 12.4781C2.18132 12.6133 2.34317 12.72 2.52099 12.7923C2.6988 12.8645 2.88907 12.9008 3.08086 12.8989H4.48086C4.57583 12.8974 4.6701 12.9153 4.75795 12.9516C4.8458 12.9879 4.92539 13.0417 4.99186 13.1098L5.97886 14.1013C6.25186 14.3752 6.62197 14.529 7.00786 14.529C7.39375 14.529 7.76385 14.3752 8.03686 14.1013L9.01686 13.1239C9.08333 13.0558 9.16291 13.0019 9.25076 12.9657C9.33859 12.9294 9.43286 12.9115 9.52787 12.913H10.9279C11.314 12.913 11.6843 12.7588 11.9574 12.4846C12.2304 12.2103 12.3839 11.8383 12.3839 11.4505V10.0442C12.3824 9.94879 12.4002 9.8541 12.4363 9.76588C12.4724 9.67766 12.526 9.59769 12.5939 9.53094L13.5809 8.53953C13.7165 8.40315 13.8239 8.24119 13.897 8.06295C13.9702 7.88471 14.0074 7.69371 14.0068 7.50096C14.0061 7.30819 13.9675 7.11745 13.8933 6.93972C13.819 6.76198 13.7104 6.60076 13.5739 6.46531ZM9.92687 6.23328L6.48986 9.60829C6.44138 9.6576 6.3836 9.69669 6.31989 9.72322C6.25618 9.74975 6.18783 9.76326 6.11886 9.76297C6.04945 9.76194 5.98091 9.74722 5.91723 9.71938C5.85355 9.69163 5.79598 9.65151 5.74786 9.60126L4.08886 7.91375C4.03784 7.86495 3.99711 7.80635 3.96911 7.74141C3.94111 7.67648 3.92641 7.60656 3.92587 7.53579C3.92534 7.46504 3.93899 7.3949 3.96601 7.32954C3.99303 7.2642 4.03286 7.20498 4.08315 7.15542C4.13343 7.10585 4.19312 7.06697 4.25868 7.04106C4.32424 7.01516 4.39431 7.00278 4.46473 7.00464C4.53515 7.00652 4.60448 7.02261 4.66858 7.05195C4.73268 7.08129 4.79025 7.1233 4.83786 7.17546L6.12586 8.49031L9.19186 5.48093C9.2903 5.38218 9.42371 5.32671 9.56287 5.32671C9.70194 5.32671 9.8354 5.38218 9.93387 5.48093C9.98315 5.53048 10.0221 5.58939 10.0485 5.65423C10.0748 5.71907 10.0881 5.78854 10.0874 5.85858C10.0868 5.92862 10.0723 5.99782 10.0447 6.06216C10.0171 6.12649 9.97708 6.18466 9.92687 6.23328Z" fill="#1379F0"></path></g><defs><clipPath id="clip0_17584_19397"><rect width="14" height="15" fill="white"></rect></clipPath></defs></svg>
                    <p>Payment Verified</p>
                </div>
                <div v-if="job.client.location">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black-300 dark:text-white" color="#191919"><path d="M9 10.073a2.34 2.34 0 1 0 0-4.68 2.34 2.34 0 0 0 0 4.68Z" stroke="#191919" stroke-width="1.5"></path><path d="M2.715 6.368c1.477-6.495 11.1-6.488 12.57.007.862 3.81-1.508 7.035-3.585 9.03a3.895 3.895 0 0 1-5.408 0c-2.07-1.995-4.44-5.227-3.577-9.037Z" stroke="#191919" stroke-width="1.5"></path></svg>
                    <p>{{job.client.location.alpha-2}}</p>
                </div>
                <div v-if="job.allow_countries">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black-300 dark:text-white" color="#191919"><path d="M9 10.073a2.34 2.34 0 1 0 0-4.68 2.34 2.34 0 0 0 0 4.68Z" stroke="#191919" stroke-width="1.5"></path><path d="M2.715 6.368c1.477-6.495 11.1-6.488 12.57.007.862 3.81-1.508 7.035-3.585 9.03a3.895 3.895 0 0 1-5.408 0c-2.07-1.995-4.44-5.227-3.577-9.037Z" stroke="#191919" stroke-width="1.5"></path></svg>
                    <p>Available in : World Wide</p>
                </div>
                <div>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" color="#191919"><path d="M16.5 9c0 4.14-3.36 7.5-7.5 7.5S1.5 13.14 1.5 9 4.86 1.5 9 1.5s7.5 3.36 7.5 7.5" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.785 11.385 9.46 9.998c-.405-.24-.735-.818-.735-1.29V5.633" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <p>{{getTimeAgo(job.created_at)}}</p>
                </div>
            </div>
            <div class="description" v-html="job.description">
            </div>
            <div class="fields" v-if="job.skills">
                <div class="field" v-for="skill of job.skills" :key="skill.id">
                    <p>{{skill.name}}</p>
                </div>
            </div>
            <div class="details">
                <p>{{job.budget_from == job.budget_to ? 'Fixed Price : ' : ''}}Est. Budget: <span>{{job.budget_from == job.budget_to ? `$${job.budget_from }`: `$${job.budget_from } - $${job.budget_to }`}}</span></p>
                <p v-if="job.budget_from == job.budget_to">Contract Type : <span>Fixed Price</span></p>
                <p v-if="experience_level == 1">Experience Level : <span>Expert</span></p>
                <p>Duration : {{job.duration}}</p>
                <p>Proposals : <span>{{job.proposals ? job.proposals : 0}}</span></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../Store/User/UserStore'

const userStore = useUserStore()
const user = computed(() => userStore.getUserData)
const router = useRouter()
const props = defineProps({
    filtersShow:{
        type:Object,
    },
    jobs : {
        type : Array,
    },
    duration:{
        type:Array,
    }
})
function getTimeAgo(dateString, lang = 'en') {
    if (!dateString) return lang === 'ar' ? 'تاريخ غير معروف' : 'Unknown date';
    
    const now = new Date();
    const pastDate = new Date(dateString);
    
    // تحقق من صحة التاريخ
    if (isNaN(pastDate.getTime())) {
        return lang === 'ar' ? 'تاريخ غير صالح' : 'Invalid date';
    }
    
    const seconds = Math.floor((now - pastDate) / 1000);
    
    // الجداول للوحدات الزمنية
    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };
    
    // النصوص العربية والإنجليزية
    const texts = {
        ar: {
            year: ['سنة', 'سنتين', 'سنوات'],
            month: ['شهر', 'شهرين', 'أشهر'],
            week: ['أسبوع', 'أسبوعين', 'أسابيع'],
            day: ['يوم', 'يومين', 'أيام'],
            hour: ['ساعة', 'ساعتين', 'ساعات'],
            minute: ['دقيقة', 'دقيقتين', 'دقائق'],
            second: ['ثانية', 'ثانيتين', 'ثواني'],
            suffix: 'منذ',
            justNow: 'الآن'
        },
        en: {
            year: ['year', 'years', 'years'],
            month: ['month', 'months', 'months'],
            week: ['week', 'weeks', 'weeks'],
            day: ['day', 'days', 'days'],
            hour: ['hour', 'hours', 'hours'],
            minute: ['minute', 'minutes', 'minutes'],
            second: ['second', 'seconds', 'seconds'],
            suffix: 'ago',
            justNow: 'Just now'
        }
    };
    
    // إذا أقل من دقيقة
    if (seconds < 60) {
        return texts[lang].justNow;
    }
    
    // حساب الوحدة الزمنية المناسبة
    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / secondsInUnit);
        
        if (interval >= 1) {
            const unitTexts = texts[lang][unit];
            let unitText;
            
            // تحويل للعربية (قواعد العدد)
            if (lang === 'ar') {
                if (interval === 1) {
                    unitText = unitTexts[0]; // مفرد
                } else if (interval === 2) {
                    unitText = unitTexts[1]; // مثنى
                } else if (interval <= 10) {
                    unitText = `${interval} ${unitTexts[2]}`; // جمع
                } else {
                    unitText = `${interval} ${unitTexts[0]}`; // بعد 10 يعود للمفرد
                }
            } else {
                // الإنجليزية بسيطة
                unitText = interval === 1 ? `${interval} ${unitTexts[0]}` : `${interval} ${unitTexts[1]}`;
            }
            
            return lang === 'ar' 
                ? `${unitText} ${texts[lang].suffix}`
                : `${unitText} ${texts[lang].suffix}`;
        }
    }
    
    return texts[lang].justNow;
}

const goToJobPage = (id) => {
    router.push({name : 'jobPage' , params : {id : id}})
}
</script>

<style scoped>
.main{
    display: flex;
    flex-direction:column;
    gap: 20px;
    width:75%;
    margin-bottom:10px;
}
.result-box{
    border: 1px solid #D9D9D9;
    border-radius: 8px;
    padding: 20px;
    cursor:pointer;
}
.one{
    display:flex;
    align-items:center;
    justify-content:space-between;
}
.title{
    display:flex;
    align-items:center;
    gap:10px;
}
.title h3{
    color:Var(--main-color);
    font-size:18px;
}
.title .fast-job{
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
.save-icon{
    cursor:pointer;
    width:20px;
    height:20px;
}
.information{
    display:flex;
    align-items:center;
    gap:10px;
    margin:15px 0;
    flex-wrap:wrap;
}
.information div{
    display:flex;
    align-items:center;
    gap:5px;
    padding-right:10px;
    border-right : 1px solid #D9D9D9
}
.information div:last-child{
    border:none;
}
.description{
    margin:15px 0;
}
.description *{
    font-size:14px;
    font-weight:normal;
    margin:8px 0
}
.fields{
    display:flex;
    align-items:center;
    gap:10px;
    flex-wrap:wrap;
    margin:15px 0;
}
.field{
    padding:5px 10px;
    width:fit-content;
    background-color:#eee;
    border-radius:8px;
    cursor:pointer;
}
.details{
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    font-size:14px;
}
.details p{
    color:var(--text-color);
    padding-right:10px;
    border-right:1px solid #D9D9D9;
}
.details p:last-child{
    border:none;
}
.details span{
    color:black;
}
@media screen and (max-width:992px){
    .all{
        width:100%;
    }
}
</style>