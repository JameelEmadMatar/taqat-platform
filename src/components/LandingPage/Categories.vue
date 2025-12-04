<template>
    <section>
        <div class="container">
            <div class="title-div">
                <h1>Popular Categories on Taqat Gaza</h1>
                <p>Explore a curated selection of in-demand skills available on the platform.</p>
            </div>
            <div class="categories">
                <div class="categorie" v-for="(cate, index) in categories" :key="index">
                    <img :src="cate.src" :alt="cate.title" loading="lazy">
                    <div class="content">
                        <h2>{{ cate.title }}</h2>
                        <p>{{ cate.p }}</p>
                    </div>
                </div>
                <button>Show More</button>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from "vue"

const categories = ref([
    {
        src: new URL('../../assets/categorie-1.jpg', import.meta.url).href,
        title : "Design & Creative",
        p : "Logos, brand kits, social graphics"
    },
    {
        src: new URL('../../assets/categorie-2.jpg', import.meta.url).href,
        title : "Development & Tech",
        p : "Web apps, APls, mobile & more"
    },
    {
        src: new URL('../../assets/categorie-3.jpg', import.meta.url).href,
        title : "Writing & Translation",
        p : "Content, copy, and localization"
    },
    {
        src: new URL('../../assets/categorie-4.jpg', import.meta.url).href,
        title : "Marketing & Social Media",
        p : "Campaigns, ads, social strategy"
    }
])
</script>
<style scoped>
section{
    padding: 35px 0;
}
.title-div h1{
    font-size: 32px;
}
.title-div p{
    font-size: 14px;
    color: #696A70;
    margin: 20px 0;
}
.categories{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
}
.categories .categorie{
    width:24%
}
.categories .categorie img{
    max-width: 100%;
    border-radius: 8px;
    margin: 20px 0;
}
.categories .categorie p{
    font-size:12px;
    color:var(--text-color);
    margin:10px 0 ;
}
.categories button{
    width: 100%;
    padding: 15px 0;
    font-size: 14px;
    outline: none;
    font-weight: bold;
    text-align: center;
    background-color: transparent;
    border: 1px solid #D9D9D9;
    border-radius: 8px;
    display:none
}
@media screen and (min-width:575px) and (max-width:991px){
    .categories .categorie{
        width:49%;
    }
}
@media screen and (max-width:575px){
    .categories .categorie{
        width:100%;
    }
    .categories button{
        display:flex;
        justify-content:center;
    }
}

</style>