<template>
    <div class="add-education">
        <div class="main">
            <TopBar :nestedIndex = "8" :title="formValues.universityName ? 'Edit Education' : 'Add Education'"/>
            <form class="add-div">
                <div class="form-div">
                    <p>University</p>
                    <input type="text" name="name" placeholder="Example" v-model="form.universityName">
                </div>
                <div class="form-div">
                    <p>Degree</p>
                    <input type="text" name="degree" placeholder="Choose your highest academic degree or certification" v-model="form.degree">
                </div>
                <div class="form-div">
                    <p>Field of Study</p>
                    <input type="text" name="field" placeholder="Example" v-model="form.field">
                </div>
                <div class="form-div">
                    <p>academic Grade <span>(Optional)</span></p>
                    <input type="text" name="field" placeholder="Example" v-model="form.grade">
                </div>
                <div class="form-div">
                    <p>Start Date</p>
                    <input type="text" name="s-date" placeholder="Select Date" v-model="form.startDate">
                </div>
                <div class="form-div" v-if="!form.still">
                    <p>End Date</p>
                    <input type="text" name="e-date" placeholder="Select Date" v-model="form.endDate">
                </div>
                <div class="form-div checkbox">
                    <input type="checkbox" name="e-date" placeholder="Select Date" v-model="form.still">
                    <p>I'm still studying</p>
                </div>
            </form>
            <!-- Action Buttons -->
            <div class="buttons">
                <button @click="cancle" class="cancle">Cancle</button>
                <button
                    @click="save"
                    class="save"
                >
                    Save
                </button>
            </div>
        </div>
        <teleport to="body" v-if="showDiscardStatus && badgesStore.getNestedShow[8].status">
            <DiscardChanges :nestedIndex = "8"/>
        </teleport>
    </div>
</template>
<script setup>
import { ref , computed , defineAsyncComponent} from 'vue'
import TopBar from '../BopUpTopBar/TopBar.vue'
import { useRoundStore } from '../../Store/IdentityVerification/Round'
import { useBadgesStore } from '../../Store/Badges/BadgesStore'

const props = defineProps({
    formValues : {
        type:Object ,
    }
})
const roundStore = useRoundStore()
const showDiscardStatus = computed(() => roundStore.getDiscradStatus)
const DiscardChanges = defineAsyncComponent(() => 
    import('../../Auth/IdentityVerification/DiscardChanges.vue')
)
const badgesStore = useBadgesStore()
const discardStore = useRoundStore()
const form = ref({
    universityName : props.formValues.universityName || null,
    degree : props.formValues.degree || null,
    field : props.formValues.field || null,
    grade : props.formValues.grade || null,
    startDate : props.formValues.startDate || null,
    endDate : props.formValues.endDate || null,
    still : props.formValues.still || false,
})

const cancle = () => {
    badgesStore.updateNestedStatus(8,false)
    form.value = {
        universityName : null,
        degree : null,
        field : null,
        grade : null,
        startDate : null,
        endDate : null,
        still : false,
    }
}
const save = () => {
    badgesStore.updateNestedStatus(8,false)
    form.value = {
        universityName : null,
        degree : null,
        field : null,
        grade : null,
        startDate : null,
        endDate : null,
        still : false,
    }
}
</script>
<style scoped>
.add-education{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:1000;
}
.main{
    position: fixed;
    background-color: #fff;
    border-radius: 8px;
    width: 70%;
    max-width: 700px;
    max-height: 850px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    padding: 20px;
}
form{
    overflow: auto;
    height: 85%;
    margin:15px 0;
}
.form-div{
    display:flex;
    flex-direction:column;
}
.form-div p{
    font-size:14px;
    font-weight:600;
}
.form-div input{
    border: 1px solid #D9D9D9;
    padding: 12px 16px;
    border-radius: 8px;
    outline: none;
    margin: 10px 0;
}
.checkbox{
    flex-direction: row !important;
    align-items: center;
    gap: 10px;
}
.checkbox input{
    width:24px;
    height:24px;
    cursor:pointer;
}
.buttons{
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
    position: absolute;
    right: 3%;
    bottom: 20px;
}
.buttons button{
    width: 100px;
    border: 1px solid #D9D9D9;
    outline: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
}
.buttons .cancle{
    background-color:#fff;
    color:black;
}
.buttons .cancle:hover{
    color: #006fbc;
    border-color: #006fbc;
    background: #ffffff;
}
.buttons .save{
    background-color:var(--main-color);
    color:#fff;
}
.buttons .save:hover{
    background: #006fbc;
    color: #fff;
}
</style>