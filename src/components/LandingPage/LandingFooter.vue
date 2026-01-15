<template>
    <footer>
        <div class="container">
            <div class="lists">
                <ul>
                    <li>
                        <a href="#">{{currentLang == 'en' ? 'About' : 'من نحن'}}</a>
                    </li>
                    <li>
                        <a href="#">{{currentLang == 'en' ? 'How It Works' : 'كيف يعمل'}}</a>
                    </li>
                    <li>
                        <a href="#">{{currentLang == 'en' ? 'Help / FAQ' : 'المساعدة / الأسئلة الشائعة'}}</a>
                    </li>
                    <li>
                        <a href="#">{{currentLang == 'en' ? 'Terms of Service' : 'شروط الخدمة'}}</a>
                    </li>
                    <li>
                        <router-link to="/policies">{{currentLang == 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}}</router-link>
                    </li>
                    <li>
                        <a href="#">{{currentLang == 'en' ? 'Return Policy' : 'سياسة الإسترجاع'}}</a>
                    </li>
                </ul>
            </div>
            <div class="options">
                <ChangeLang/>
                <ChangeMode/>
            </div>
        </div>
        <div class="copy">
            <img src="../../assets/credit_logo.png" ali="credit_logo">
            <p>{{currentLang == 'en' ? '© BrightGaza, 2026.' : '© غزة المشرقة، 2026.'}}</p>
            <p>bright@taqatgaza.com</p>
            <p>{{currentLang == 'en' ? 'Gaza - Al Rimal - Al Rehab Mall' : 'غزة - الرمال - مول الرحاب'}}</p>
        </div>
    </footer>
</template>
<script setup>
import { computed } from 'vue'
import { useSettingsStore } from '../Store/Settings/SettingStore'
import ChangeLang from '../Change/Language/ChangeLang.vue'
import ChangeMode from '../Change/Mode/ChangeMode.vue'

const settingStore = useSettingsStore()
const currentLang = computed(() => settingStore.getLang)

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
    margin-right: 20px;
    text-align:center;
    font-weight: bold;
}
.copy img{
    width:100px;
}
.copy p{
    margin:15px 0;
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