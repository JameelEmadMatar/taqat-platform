<template>
    <div class="gallery-show">
        <div class="upload-container" @click="trigerFileInput">
            <!-- الأيقونة في الوسط -->
            <div class="icon">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2466 12.5C12.6273 12.5 13.7466 11.3807 13.7466 10C13.7466 8.61929 12.6273 7.5 11.2466 7.5C9.86587 7.5 8.74658 8.61929 8.74658 10C8.74658 11.3807 9.86587 12.5 11.2466 12.5Z" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.2534 2.50098H11.2534C5.00342 2.50098 2.50342 5.00098 2.50342 11.251V18.751C2.50342 25.001 5.00342 27.501 11.2534 27.501H18.7534C25.0034 27.501 27.5034 25.001 27.5034 18.751V12.501" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.6875 6.25098H26.5625" stroke="#191919" stroke-width="2" stroke-linecap="round"/>
                    <path d="M23.1284 9.6875V2.8125" stroke="#191919" stroke-width="2" stroke-linecap="round"/>
                    <path d="M3.33789 23.6882L9.50039 19.5507C10.4879 18.8882 11.9129 18.9632 12.8004 19.7257L13.2129 20.0882C14.1879 20.9257 15.7629 20.9257 16.7379 20.0882L21.9379 15.6257C22.9129 14.7882 24.4879 14.7882 25.4629 15.6257L27.5004 17.3757" stroke="#191919" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

            <!-- النص -->
            <p class="text">Drag image here or</p>
            <button type="button" class="add-btn" @click="trigerFileInput">
            Add Images
            </button>

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
        <div class="photo" v-for="photo of images" :key="photo.index">
            <img :src="photo.url" alt="gallery">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const fileInput = ref(null)
const images = ref([])

const trigerFileInput = () =>{
    fileInput.value?.click()
}

const handleFiles = (event) =>{
    /*
       - check file type 
       - check file size
    */
    const files = event.target.files || event.dataTransfer?.files
    if(!files || files.length == 0) return

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
}
</script>

<style scoped>
.gallery-show{
    display:flex;
    flex-wrap:wrap;
    gap:20px;
}
.upload-container{
    border: 1px dotted #D9D9D9;
    width: calc((100% - 50px) / 3);
    border-radius: 8px;
    padding: 15px;
    display: flex;
    height: 287px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    cursor: pointer;
}
.add-btn{
    color:#007BD1;
    border:none;
    outline:none;
    background:none;
    cursor:pointer;
    font-weight:bold;
}
.hidden-input{
    display:none;
}
.photo{
    width: calc((100% - 50px) / 3);
    cursor:pointer;
}
.photo img{
    width:100%;
    height: 287px;
    border-radius: 8px;
}
</style>

