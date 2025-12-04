<template>
    <section>
        <div class="container">
            <div class="first-div">
                <div class="content">
                    <h1>About Taqat Gaza</h1>
                    <p>
                        <span class="p-1">Taqat Gaza is a digital bridge connecting global businesses with talented professionals from Gaza and beyond.</span>
                        <br>
                        <span>We make remote collaboration simple, fair, and secure while creating real economic opportunities for communities that are often overlooked. By combining vetted talent, transparent workflows, and secure payments, Taqat Gaza aims to become the go-to platform for clients seeking quality and impact, and for freelancers building sustainable careers</span>
                    </p>
                </div>
                <div class="numbers">
                    <div class="number">
                        <p>12,500+</p>
                        <span>Community Members</span>
                    </div>
                    <div class="number">
                        <p>96%</p>
                        <span>Satisfaction Rate</span>
                    </div>
                    <div class="number">
                        <p>$480K+</p>
                        <span>Secure Payments</span>
                    </div>
                    <div class="number">
                        <p>3,200+</p>
                        <span>Projects Delivered</span>
                    </div>
                </div>
            </div>
            <div class="sec-div">
                <img src="../../assets/about.jpg" alt="person">
            </div>
        </div>
    </section>
</template>
<style scoped>
section{
    padding: 25px 0;
}
.container{
    display:flex;
    gap:100px;
}
.first-div , .sec-div{
    width:50%;
}
.first-div .content h1{
    font-size: 32px;
}
.first-div .content p{
    margin:40px 0;
}
.first-div .content p span:first-child{
    font-weight:bold;
    line-height:26px;
}
.first-div .content p span:last-child{
    font-size:14px;
    line-height:28px;
}
.first-div .numbers{
    display:flex;
    justify-content:space-between;
    gap:20px;
}
.first-div .numbers .number{
    text-align:center;
}
.first-div .numbers .number p{
    font-size:24px;
    font-weight:bold;
    margin-bottom:20px;
}
.first-div .numbers .number span{
    color:var(--text-color);
    font-size:14px;
}
.sec-div img{
    width:100%;
    height:100%;
    border-radius:8px;
}
@media screen and (max-width:991px){
    .container{
        gap:20px;
    }
}
@media screen and (max-width:767px){
    .container{
        flex-direction:column;
    }
    .first-div , .sec-div{
        width:100%;
    }
    .first-div .numbers{
        flex-wrap:wrap;
        gap:0;
    }
    .first-div .numbers .number{
        width: 50%;
        margin-bottom: 30px;
    }
}
</style>