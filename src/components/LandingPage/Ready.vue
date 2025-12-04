<template>
    <section>
        <div class="container">
            <div class="inside">
                <div class="question">
                    <h1>Ready to get started with Taqat Gaza?</h1>
                    <p>Start hiring exceptional talent or build your freelance career today. It's free to create an account.</p>
                </div>
                <div class="buttons">
                    <button>Hire Talent</button>
                    <button>Find Work</button>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
section{
    padding:25px 0
}
.container{
    background-color:#00375E;
    padding:30px;
    border-radius:8px;
}
.inside{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
}
.question {
    color:#fff;
}
.question h1{
    font-size:32px;
    margin-bottom:20px;
}
.question p{
    font-size:14px;
}
.buttons{
    display:flex;
}
.buttons button{
    border-radius: 8px;
    font-size: 14px;
    width: 200px;
    height: 46px;
    font-weight: 600;
    cursor: pointer;
    border:none;
}
.buttons button:first-child{
    background-color:var(--main-color);
    color:#fff;
    margin-right:15px;
}
.buttons button:last-child{
    border:1px solid #D9D9D9;
    color:black;
    background-color:#fff;
}
@media screen and (min-width:991px) and (max-width:1199px){
    .container{
        width:97%;
    }
}
@media screen and (max-width:991px){
    .inside{
        flex-direction:column;
        gap:20px;
        padding:15px;
        text-align:center;
    }
    .question h1{
        font-size:24px;
        line-height:40px;
    }
    .question p{
        font-size:12px;
        margin-bottom: 25px;
        line-height: 25px;
    }
    .buttons button{
        width:150px;
    }
}
@media screen and (max-width:450px){
    .container{
        width:95%
    }
}
</style>