<template>
    <div class="work">
        <div>
            <slot name="icon"></slot>
        </div>
        <h2>{{title}}</h2>
        <p>{{p}}</p>
        <slot name="number"></slot>
    </div>
</template>
<script setup>
defineProps({
  title: String,
  p: String
})
</script>
<style scoped>
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
.works .work .number{
    position: absolute;
    right: 5%;
    top: 10%;
}
@media screen and (max-width:991px){
    .works .work{
        margin-bottom:30px;
    }
    .works .work h2{
        margin:15px 0;
    }
    .works .work .number{
        
    }
}
</style>