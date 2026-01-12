<template>
    <div class="first">
        <div class="title">Tell us more about your project</div>
        <input class="input" type="text" name="project-name" placeholder="Project name or short description" v-model="form.projectName">
        <div class="drop-div" v-if="images.length == 0" @click="trigerFileInput">
            <div class="title">Drop Your Files Here</div>
            <p>Minimum 1600px width recommended. Max 10MB each</p>
            <button>Upload Media</button>
            <div class="bottom">
                <p>• High resolution images (png, jpg, gif)</p>
                <p>• Only upload media you own the rights to</p>
            </div>
            <!-- الإنبوت المخفي لاختيار الملفات -->
            <input
                type="file"
                ref="fileInput"
                multiple
                accept="image/*"
                class="hidden-input"
                @change="handleFiles"
            />
        </div>
        <div class="uploaded" v-if="images.length > 0">
            <img :src="images[0].url" alt="project-cover"/>
            <img :src="img.url" alt="image" v-for="img of images.slice(1)"/>
            <div class="texts" v-if="addButtonsShow">
                <div class="text" v-for="text of form.texts" :key="text.index" :id="text.index" :style="{borderBottom : form.texts.length > 0 ? '1px solid #D9D9D9' : 'none'}">
                    <p>{{text}}</p>
                    <svg @click="deleteText(text)" viewBox="64 64 896 896" focusable="false" data-icon="delete" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg>
                </div>
            </div>
            <div class="add-text" v-if="addTextStatus == true">
                <textarea
                    name="text"
                    placeholder="Write your paragraph..."
                    v-model="addTextInput"
                    maxlength="4000"
                    required
                    row = '4'
                ></textarea>
                <div class="btns">
                    <button class="cancle" @click="cancle">Cancle</button>
                    <button class="save" @click="save">Save</button>
                </div>
            </div>
            <div class="add-buttons" v-if="addButtonsShow">
                <div @click="addImageFun">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image text-black-300 dark:text-white" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                    <p>Add Image</p>
                </div>
                <div @click="addTextFun">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-type text-black-300 dark:text-white" aria-hidden="true"><path d="M12 4v16"></path><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path></svg>
                    <p>Add Text</p>
                </div>
            </div>
            <div class="add-images drop-div" @click="trigerFileInputUpdate" v-if="addImageStatus == true">
                <p class="title">Drop your files here</p>
                <button>Upload Media</button>
                <input
                    type="file"
                    ref="fileInput"
                    multiple
                    accept="image/*"
                    class="hidden-input"
                    @change="handleFilestwo"
                />
                <div class="delete-btn" @click.stop @click="closeAddImage">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2 lucide-trash-2 text-white! dark:text-black-300!" aria-hidden="true"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </div>
            </div>
        </div>
    </div>
    <BottomButtons :files = "images" :form="form"/>
</template>

<script setup>
import { ref } from 'vue'
import BottomButtons from './BottomButtons.vue'
const form = ref({
    projectName : null,
    texts : [],
})

const fileInput = ref(null)
const images = ref([])
const addTextInput = ref('')
const addTextStatus = ref(false)
const addImageStatus = ref(false)


const trigerFileInput = () =>{
    fileInput.value?.click()
}
const trigerFileInputUpdate = () => {
    trigerFileInput()

}
const handleFiles = (event) => {

    const files = event.target.files || event.dataTransfer?.files

    Array.from(files).forEach(file => {
        if(file.type.startsWith('image/')){
            const url = URL.createObjectURL(file)
            images.value.push(
                {
                    id : Date.now() + Math.random(),
                    url ,
                    file,
                }
            )
        }
    })
    // show alert upload success
    alert('upload success')
}
const handleFilestwo = (event) => {
    const files = event.target.files || event.dataTransfer?.files

    Array.from(files).forEach(file => {
        if(file.type.startsWith('image/')){
            const url = URL.createObjectURL(file)
            images.value.push(
                {
                    id : Date.now() + Math.random(),
                    url ,
                    file,
                }
            )
        }
    })
    // show alert upload success
    alert('upload success')
    addImageStatus.value = false
    addButtonsShow.value = true
}
const addButtonsShow = ref(true)
const deleteText = (text) => {
    form.value.texts = form.value.texts.filter(e => e !== text)
}
const cancle = () => {
    addTextStatus.value = false
    addTextInput.value = ''
}
const save = () => {
    if(addTextInput.value !== ''){
        form.value.texts.push(addTextInput.value)
    }
    cancle()
}
const addImageFun = () => {
    addImageStatus.value = true
    addButtonsShow.value = false
}
const addTextFun = () => {
    addTextInput.value = true
    addButtonsShow.value = false
}
const closeAddImage = () => {
    addImageStatus.value = false
    addButtonsShow.value = true
}
</script>

<style scoped>
.first{
    overflow: auto;
    height: 85%;
    max-height: 85%;
}
.title{
    font-size:24px;
    font-weight:bold;
    margin: 30px 0;
    text-align: center;
}
.input{
    width: 100%;
    border: 1px solid #D9D9D9;
    padding: 15px;
    border-radius: 8px;
    outline:none;
}
.input:hover{
    border-color:var(--main-color);
}
.drop-div{
    border: 1px dotted #D9D9D9;
    margin: 30px 0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap:40px;
    padding:20px;
    cursor:pointer;
}
.drop-div:hover{
    border-color:var(--main-color)
}
.drop-div p{
    font-size:18px;
    font-weight:400;
    color:var(--text-color)
}
.drop-div button{
    width: 280px;
    padding: 16px;
    border: none;
    outline: none;
    border-radius: 8px;
    background-color: #006FBC;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    cursor:pointer;
}
.bottom {
    display:flex;
    align-items:center;
    gap:80px;
}
.bottom p{
    font-size:14px;
}
.hidden-input{
    display:none;
}
.uploaded img{
    margin: 20px 0;
    width: 100%;
    border-bottom: 1px solid #D9D9D9;
    padding-bottom: 20px;
}
.add-buttons{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    margin:20px 0;
}
.add-buttons div{
    display:flex;
    align-items:center;
    gap:25px;
    font-weight:bold;
    cursor:pointer;
}
.texts{
    padding-bottom:10px;
}
.texts .text{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    border: 1px solid #D9D9D9;
    padding: 16px;
    margin: 15px 0;
}
.texts svg{
    cursor:pointer;
    color:red;
}
.texts svg:hover{
    background-color:#eee
}
textarea{
    width:100%;
    border-radius: 8px;
    border: 1px solid #D9D9D9;
    padding: 16px;
    margin: 15px 0;
    outline:none;
}
.btns{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:20px;
}
.btns button{
    border-radius: 8px;
    padding: 12px 20px;
    margin: 15px 0;
    outline: none;
    cursor:pointer;
    width:100px;
}
.btns button:hover{
    opacity:0.7;
}
.btns .cancle{
    border:1px solid #ff4d4f;
    color:#ff4d4f;
    background-color:#fff;
}
.btns .save{
    background-color:#007bd1;
    color:#fff;
    border:none;
}
.add-images {
    gap: 0;
    height: 400px;
    justify-content: center;
    position:relative;
}
.add-images .title{
    font-weight:bold;
    color:black;
}
.add-images button{
    background-color:black;
}
.delete-btn{
    background-color: black;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
}
.delete-btn svg{
    color:#fff;
}
</style>