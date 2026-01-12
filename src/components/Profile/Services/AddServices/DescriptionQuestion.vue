<template>
    <div class="questions">
        <div class="question" v-for="q of questions" :key="q.index" :style="{borderBottom : q.id == questions.length - 1 ? 'none' : '1px solid #D9D9D9'}">
            <div class="title-div">
                <p class="title">Question {{q.id + 1}}</p>
                <svg @click="deleteQuestion(q.id)" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.8499 9.14014L18.1999 19.2101C18.0899 20.7801 17.9999 22.0001 15.2099 22.0001H8.7899C5.9999 22.0001 5.9099 20.7801 5.7999 19.2101L5.1499 9.14014" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.3301 16.5H13.6601" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.5 12.5H14.5" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>      
            <input class="input" type="text" name="question" placeholder="Question" v-model="q.content">
            <div class="area">
                <textarea
                    v-model="q.answer"
                    placeholder="Answer"
                    name="Answer" 
                    maxlength="250" 
                    required="" 
                    class="input"
                >
                </textarea>
                <p>{{q.answer.length}} / 250</p>
            </div>
        </div>
        <div class="add" @click="addQuestion">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H16" stroke="#007BD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 16V8" stroke="#007BD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#007BD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>Add question</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const questions = ref([
    {
        id : 0,
        content : "",
        answer : ''
    }
])
const addQuestion = () => {
    questions.value.push(
        {
            id : questions.value.length,
            content : '',
            answer : ''
        }
    )
}
const deleteQuestion = (id) => {
    questions.value = questions.value.filter(e => e.id !== id)
    for(let i = 0 ; i < questions.value.length ; i++){
        questions.value[i].id = i
    }
}
</script>

<style scoped>
.question{
    margin-bottom:20px;
}
.title-div{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin:30px 0;
}
.title-div .title{
    font-size : 18px;
    color: var(--text-color);
    font-weight:bold;
}
.title-div svg{
    cursor : pointer;
}
.input{
    width: 100%;
    max-width:100%;
    border: 1px solid #D9D9D9;
    outline: none;
    border-radius: 8px;
    padding: 16px;
}
.input:hover{
    border-color:var(--main-color)
}
.area{
    position:relative;
    margin:30px 0;
}
.area textarea{
    min-height:100px;
}
.area p{
    position:absolute;
    right: 15px;
    bottom: 15px;
    color: var(--text-color);
}
.add{
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--main-color);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
}
</style>