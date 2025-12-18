<template>
    <div class="services-boxs">
        <div class="service" v-for="ser of services" :key="ser.index">
            <div class="one">
                <!-- Service Image -->
                <img :src="ser.src" alt="service-img">
                <div class="details">
                    <div class="status">
                        <h5>{{ ser.title}}</h5>
                        <p :class="`p-${ser.status.toLowerCase()}`">{{ ser.status}}</p>
                    </div>
                    <div class="info">
                        <div>${{ser.price}}</div>
                        <div>{{ser.duration}}</div>
                        <div class="rate" v-if="ser.rate">
                            <div class="satrs">
                                <svg v-for="s of ser.rate" :key="s.index" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00496 2.04754L9.03163 4.10087C9.17163 4.38671 9.54496 4.66087 9.85996 4.71337L11.7208 5.02254C12.9108 5.22087 13.1908 6.08421 12.3333 6.93587L10.8866 8.38254C10.6416 8.62754 10.5075 9.10004 10.5833 9.43837L10.9975 11.2292C11.3241 12.6467 10.5716 13.195 9.31746 12.4542L7.5733 11.4217C7.2583 11.235 6.73913 11.235 6.4183 11.4217L4.67413 12.4542C3.4258 13.195 2.66746 12.6409 2.99413 11.2292L3.4083 9.43837C3.48413 9.10004 3.34996 8.62754 3.10496 8.38254L1.6583 6.93587C0.80663 6.08421 1.0808 5.22087 2.2708 5.02254L4.13163 4.71337C4.4408 4.66087 4.81413 4.38671 4.95413 4.10087L5.9808 2.04754C6.5408 0.933372 7.4508 0.933372 8.00496 2.04754Z" fill="#FFB400"/>
                                </svg>
                            </div>
                            <p>{{ser.rate}} <span>({{ser.ratePersonNumber}})</span></p>
                        </div>
                    </div>
                    <div class="rejected" v-if="ser.status == 'Rejected'">
                        <p>Your service was rejected. Please review the requirements and update before reposting</p>
                        <span>View Reason</span>
                    </div>
                </div>
            </div>
            <div class="two">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="16" fill="white"/>
                    <path d="M16.0559 12.1108C16.8229 12.1108 17.4448 11.4889 17.4448 10.7219C17.4448 9.95483 16.8229 9.33301 16.0559 9.33301C15.2888 9.33301 14.667 9.95483 14.667 10.7219C14.667 11.4889 15.2888 12.1108 16.0559 12.1108Z" fill="#191919"/>
                    <path d="M16.0559 17.3886C16.8229 17.3886 17.4448 16.7668 17.4448 15.9997C17.4448 15.2327 16.8229 14.6108 16.0559 14.6108C15.2888 14.6108 14.667 15.2327 14.667 15.9997C14.667 16.7668 15.2888 17.3886 16.0559 17.3886Z" fill="#191919"/>
                    <path d="M16.0559 22.6664C16.8229 22.6664 17.4448 22.0446 17.4448 21.2776C17.4448 20.5105 16.8229 19.8887 16.0559 19.8887C15.2888 19.8887 14.667 20.5105 14.667 21.2776C14.667 22.0446 15.2888 22.6664 16.0559 22.6664Z" fill="#191919"/>
                </svg>
                <button>View</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    services: {
        type: Object,
        required: true
    },
})
</script>

<style scoped>
.services-boxs{
    margin-bottom:100px;
}
.service{
    display: flex;
    justify-content: space-between;
    margin:20px 0;
    border: 1px solid #D9D9D9;
    border-radius: 8px;
    padding: 15px;
}
.one{
    display: flex;
    gap: 15px;
}
img{
    width:200px;
    height:150px;
    border-radius:8px;
}
.details{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.status{
    display: flex;
    gap: 25px;
    align-items: center;
}
.status p{
    width:110px;
    height:30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:8px;
    font-size:14px;
    cursor:pointer;
}
.status p.p-active{
    background-color:#E5F2FA;
    color:#007BD1;
}
.status p.p-review{
    color:#0F828C;
    background-color:#E7F2F3;
}
.status p.p-rejected{
    color:#D45248;
    background-color:#FAEBEA;
}
.status p.p-pause{
    color:var(--text-color);
    background-color:#F7F7F7;
}
.info{
    display:flex;
    align-items:center;
    gap:20px;
}
.rate{
    display:flex;
    align-items:center;
    gap:10px;
}
.rate span{
    color:var(--text-color)
}
.rejected{
    display:flex;
    background-color:#FFF5F5;
    font-size:14px;
    border-radius: 8px;
    padding: 10px;
    gap: 10px;
    font-weight:600;
}
.rejected span{
    text-decoration:underline;
    font-size:16px;
    cursor:pointer;
}
.two{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:end;
}
.two button{
    border: none;
    outline: none;
    height: 46px;
    display: flex;
    align-items: center;
    width: 124px;
    justify-content: center;
    border-radius: 8px;
    color: #fff;
    background-color: #191919;
    cursor:pointer;
    font-weight:600;
}
</style>