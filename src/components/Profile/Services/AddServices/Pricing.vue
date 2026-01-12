<template>
    <div class="pricing-main">
        <!-- Progress Bar -->
        <div class="prog-main">
            <div class="progress">
                <div class="prog-details">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4891_7661)">
                        <circle cx="12" cy="12" r="11.5" fill="#007BD1" stroke="#007BD1"/>
                        <path d="M7.00049 12L10.0005 15L16.0111 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_4891_7661">
                        <rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 0 24)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <p>Overview</p>
                </div>
                <div class="line">
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                </div>
                <div class="prog-details">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0-4891-5182)">
                        <circle cx="12" cy="12" r="11.5" fill="#E6F2FA" stroke="#007BD1"/>
                        </g>
                        <defs>
                        <clipPath id="clip0-4891-5182">
                        <rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 0 24)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <p>Pricing</p>
                </div>
                <div class="line">
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                </div>
                <div class="prog-details">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11.5" fill="white" stroke="#D9D9D9"/>
                    </svg>
                    <p>Gallery</p>
                </div>
                <div class="line">
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                </div>
                <div class="prog-details">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11.5" fill="white" stroke="#D9D9D9"/>
                    </svg>
                    <p>Process</p>
                </div>
                <div class="line">
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                </div>
                <div class="prog-details">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11.5" fill="white" stroke="#D9D9D9"/>
                    </svg>
                    <p>Description</p>
                </div>
                <div class="line">
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                </div>
                <div class="prog-details">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11.5" fill="white" stroke="#D9D9D9"/>
                    </svg>
                    <p>Review</p>
                </div>
            </div>
        </div>
        <div class="pricing">
            <h5>Pricing & Scope</h5>
            <form @submit.prevent>
                <div class="info">
                    <div class="form-div">
                        <label>How many days to deliver the service?</label>
                        <input type="number" name="Delivery Days" placeholder="How many days to deliver the service?" v-model="form.deliveryDays">
                    </div>
                    <div class="form-div">
                        <label>Revisions</label>
                        <input type="number" name="Revisions" placeholder="Set included revisions (e.g. 1, 2, or unlimited)" v-model="form.revision">
                    </div>
                </div>
                <div class="form-div">
                    <label>Service Price</label>
                    <div class="input">
                        <input type="number" name="price" placeholder="Enter the service price" v-model="form.price">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 6V18" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="extra-services">
                    <div class="extra" v-for="extra of form.extras" :key="extra.index">
                        <div class="extra-checkbox">
                            <input type="checkbox" :name="extra.name" :for="extra.name" v-model="extra.checked" @click="removeDetails(extra.id)">
                            <label :id="extra.name">{{extra.name}}</label>
                        </div>
                        <div class="extra-price" v-if="extra.checked">
                            <label>For an extra</label>
                            <div class="etxra-input">
                                <input type="number" name="extra-price" min="1" v-model="extra.price">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 6V18" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div class="extra-days" v-if="extra.checked">
                            <label>Additional days</label>
                            <div class="etxra-input">
                                <input type="number" name="extra-days" min="1" v-model="extra.additionalDays">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 6V18" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="extra-services custome-extras" v-if="customeExtraShow">
                    <div class="extra-details" v-for="extra of form.customeExrtras" :key="extra.index">
                        <h5>Custom add-on {{extra.id + 1}}</h5>
                        <div class="extra">
                            <div class="extra-price">
                                <label>Title</label>
                                <div class="etxra-input">
                                    <input type="text" name="extra-title" v-model="extra.title" placeholder="e.g Responsive Design">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 6V18" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="extra-price">
                                <label>For an extra</label>
                                <div class="etxra-input">
                                    <input type="number" name="extra-price" min="1" v-model="extra.price">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 6V18" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="extra-days">
                                <label>Additional days</label>
                                <div class="etxra-input">
                                    <input type="number" name="extra-days" min="1" v-model="extra.additionalDays">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 6V18" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="#696A70" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <svg class="delete-custome" @click="deleteCustome(extra.id)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.8499 9.14014L18.1999 19.2101C18.0899 20.7801 17.9999 22.0001 15.2099 22.0001H8.7899C5.9999 22.0001 5.9099 20.7801 5.7999 19.2101L5.1499 9.14014" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.3301 16.5H13.6601" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.5 12.5H14.5" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <button @click="addCustomeExtra" class="create-custome">Create custome add-on</button>
            </form>
        </div>
    </div>
    <BottomButtons/>
</template>

<script setup>
import { ref } from 'vue'
import BottomButtons from './BottomButtons.vue'
const form = ref({
    deliveryDays : null,
    revision : null,
    price : null,
    extras : [
        {
            id : 0,
            name : "Content upload",
            checked : false,
            price : null,
            additionalDays : null
        },
        {
            id : 1,
            name : "Additional days",
            checked : false,
            price:null,
            additionalDays:null
        },
        {
            id : 1,
            name : "Responsive Design",
            checked : false,
            price : null,
            additionalDays:null,
        }
    ],
    customeExrtras : [],
})
const removeDetails = (id) => {
    if(form.value.extras[id].checked == false){
        form.value.extras[id].price = null
        form.value.extras[id].additionalDays = null
    } 
}
const customeExtraShow = ref(false)
const addCustomeExtra = () =>{
        form.value.customeExrtras.push(
            {
                id : form.value.customeExrtras.length , 
                name : "",
                checked : false,
                price : null,
                additionalDays : null,
            }
        )
    customeExtraShow.value = true
}
const deleteCustome = (id) => {
    form.value.customeExrtras = form.value.customeExrtras.filter(e => e.id !== id)
    for(let i = 0 ; i < form.value.customeExrtras.length ; i++){
        form.value.customeExrtras[i].id = i
    }
}
</script>

<style scoped>
.pricing-main{
    overflow: auto;
    height: 85%;
    max-height: 100%;
}
.prog-main{
    display: flex;
    justify-content: center;
    align-items: center;
    margin:15px 0;
    padding-bottom: 20px;
}
.progress{
    width:90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:10px;
    flex-wrap:wrap;
}
.prog-details{
    display: flex;
    align-items: center;
    gap: 5px;
}
.prog-details p{
    font-size:12px;
    color:var(--text-color);
    font-weight:400;
    text-align:center;
}
.prog-details:first-child p{
    color:black;
    font-weight:bold;
}
.line{
    display: flex;
    gap: 3px;
    align-items: center;
    color: var(--text-color);
}
.pricing h5{
    font-size:24px;
    margin:15px 0;
}
form{
    display:flex;
    flex-direction:column;
    gap:20px;
}
form .form-div{
    display:flex;
    flex-direction:column;
    gap:15px;
}
form .form-div input{
    width:100%;
    border:1px solid #D9D9D9;
    border-radius:8px;
    padding:15px;
    min-height:50px;
    outline:none;
}
form .info{
    display: flex;
    align-items: center;
    gap: 10px;
}
form .info .form-div{
    width:50%;
}
form .form-div .input{
    position:relative;
    border:1px solid #D9D9D9;
    border-radius:8px;
}
form .form-div .input input{
    border:none;
    width:98%;
}
form .form-div .input svg{
    position:absolute;
    right:10px;
    top:25%;
}
.extra-services{
    padding: 25px 0;
    border-bottom: 1px solid #D9D9D9;
}
.extra{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:40px;
}
.extra .extra-price , .extra .extra-days{
    display: flex;
    align-items: center;
    gap: 15px;
}
.extra .extra-checkbox{
    display:flex;
    align-items:center;
    gap:15px;
}
.extra .extra-checkbox input{
    width:24px;
    height:24px;
}
.extra .etxra-input{
    position:relative;
    border:1px solid #D9D9D9;
    border-radius:8px;
    padding:12px;
}
.extra .etxra-input input{
    border:none;
    outline:none;
    width:90%;
    background-color:none;
}
.extra .etxra-input svg{
    position:absolute;
    right:5px;
    top:25%;
}
.delete-custome{
    cursor:pointer;
}
.custome-extras{
    border:none;
    padding:0;
}
.create-custome{
    width: fit-content;
    padding: 15px;
    border: 1px solid #D9D9D9;
    outline: none;
    border-radius: 8px;
    cursor: pointer;
    background-color: var(--main-color);
    color: #fff;
    font-weight: bold;
}
</style>