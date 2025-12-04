<template>
    <footer>
        <div class="container">
            <div class="lists">
                <ul>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">How It Works</a>
                    </li>
                    <li>
                        <a href="#">Help / FAQ </a>
                    </li>
                    <li>
                        <a href="#">Terms of Service</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                </ul>
                <div class="copy">
                    © Taqat Gaza, 2025.
                </div>
            </div>
            <div class="options">
                <ChangeLang/>
                <ChangeMode/>
            </div>
        </div>
    </footer>
</template>
<script setup>
import ChangeLang from '../Change/Language/ChangeLang.vue'
import ChangeMode from '../Change/Mode/ChangeMode.vue'
</script>
<style scoped>
footer{
    background-color:#F7F7F7;
}
.container{
    display: flex;
    padding: 25px 0;
    justify-content: space-between;
}
.lists{
    display:flex;
}
.lists ul{
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:30px;
    font-size:14px;
}
.lists ul li{
    list-style:none
}
.lists ul li a{
    text-decoration:none;
    color:#191919
}
.copy {
    margin-top: 80px;
    margin-left: 60px;
    font-weight: bold;
}
.options{
    display:flex;
    align-items:center;
    gap:20px;
}
@media screen and (max-width:991px){
    .container{
        flex-direction:column;
        align-items:center;
    }
    .lists{
        flex-direction:column;
    }
    .lists ul{
        flex-direction: column;
        text-align: center;
    }
    .copy{
        margin:30px 0;
    }
    .options{
        font-size:14px;
    }

}
</style>