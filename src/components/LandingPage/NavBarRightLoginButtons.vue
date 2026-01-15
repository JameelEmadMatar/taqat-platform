<template>
    <div class="right-side-login" v-if="user">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark" aria-hidden="true"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
        <div class="notification-main">
          <svg @click="getNotification" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M10.2681 21C10.4436 21.304 10.6961 21.5565 11.0001 21.732C11.3041 21.9075 11.649 21.9999 12.0001 21.9999C12.3511 21.9999 12.696 21.9075 13 21.732C13.3041 21.5565 13.5565 21.304 13.7321 21" stroke="#696A70" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.26176 15.326C3.13112 15.4692 3.04491 15.6472 3.01361 15.8385C2.98231 16.0298 3.00728 16.226 3.08546 16.4034C3.16365 16.5807 3.29169 16.7316 3.45401 16.8375C3.61633 16.9434 3.80594 16.9999 3.99976 17H19.9998C20.1936 17.0001 20.3832 16.9438 20.5456 16.8381C20.708 16.7324 20.8363 16.5817 20.9146 16.4045C20.993 16.2273 21.0182 16.0311 20.9872 15.8398C20.9561 15.6485 20.8702 15.4703 20.7398 15.327C19.4098 13.956 17.9998 12.499 17.9998 8C17.9998 6.4087 17.3676 4.88258 16.2424 3.75736C15.1172 2.63214 13.5911 2 11.9998 2C10.4085 2 8.88234 2.63214 7.75712 3.75736C6.6319 4.88258 5.99976 6.4087 5.99976 8C5.99976 12.499 4.58876 13.956 3.26176 15.326Z" stroke="#696A70" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <!-- Notificatio Box -->
          <div class="notification-box" v-if="notificationBoxShow" :class="{ar : currentLang == 'ar' ? 'ar' : ''}">
            <h3>{{currentLang == 'en' ? 'Notification' : 'الإشعارات'}}</h3>
            <div class="notification" v-for="noti of notification" :key="noti.id" :style="{backgroundColor : noti.is_read ? '' : '#ddd'}">
              <img :src="noti.data.user_image" :alt="noti.data.type">
              <div class="details">
                <p>{{noti.data.type}}</p>
                <span>{{noti.message}}</span>
                <button>View Details</button>
              </div>
              <p class="date">{{noti.date}}</p>
            </div>
            <div class="no-notification" v-if="notification.length == 0">
              <p>{{currentLang == 'en' ? "Don't Have Any Notification" : 'لا يوجد إشعارات'}}</p>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-more" aria-hidden="true"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path><path d="M8 12h.01"></path><path d="M12 12h.01"></path><path d="M16 12h.01"></path></svg>
        <div class="user-info">
          <img @click="userBoxShow == true ? userBoxShow = false : userBoxShow = true " src="https://api.taqatgaza.com/storage/uploads/freelancers/225/4MTIgOmTZt6i6IqlsfY6.jpg">
          <!-- User Box -->
          <div class="user-box" v-if="userBoxShow" :class="{ar : currentLang == 'ar' ? 'ar' : ''}">
            <div class="user-data">
              <img src="https://api.taqatgaza.com/storage/uploads/freelancers/225/4MTIgOmTZt6i6IqlsfY6.jpg">
              <div>
                <p>Jameel Matar</p>
                <span>jameelmatar1@gmail.com</span>
              </div>
            </div>
            <div class="buttons">
              <div @click="router.push('/my-profile')">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user text-gray-80 dark:text-black-200" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <p>{{currentLang == 'en' ? 'My Profile' : 'ملفي الشخصي'}}</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings text-gray-80 dark:text-black-200" aria-hidden="true"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
                <p>{{currentLang == 'en' ? 'Settings' : 'الإعدادات'}}</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                <ChangeLang/>
              </div>
            </div>
            <ChangeMode/>
            <button class="logout" @click="logout">Logout</button>
          </div>
        </div>
    </div>
</template>

<script setup>
import { ref , computed } from 'vue'
import { useSettingsStore } from '../Store/Settings/SettingStore'
import { useUserStore } from '../Store/User/UserStore'
import { useRouter } from 'vue-router'
import ChangeLang from '../Change/Language/ChangeLang.vue'
import ChangeMode from '../Change/Mode/ChangeMode.vue'
import axiosClient from '../Axios/axiosClient'

const settingStore = useSettingsStore()
const currentLang = computed(() => settingStore.getLang)
const userStore = useUserStore()
const user = computed(() => userStore.getUserData)
const userToken = computed(() => userStore.getUserData.token)
const router = useRouter()
const notification = ref([])
const notificationBoxShow = ref(false)
const userBoxShow = ref(false)

const logout = async() => {
  console.log(userToken.value)
  try{
    const response = await axiosClient.post('/logout',{},{
      headers : {
        'Authorization': `Bearer ${userToken.value}`
      }
    })
    console.log(response)
  }
  catch(error){
    console.log(error)
  }
}

const getNotification = async() => {
  if(!notificationBoxShow.value){
    try{
      const response = await axiosClient.get('/notifications?sort_by=newest&page=1&per_page=5',{
        email : 'jameelmatar1@gmail.com',
        password : '12345678'
      })
      notification.value = response.data.data.notifications
    }
    catch(error){
      console.log(error.response.data)
    }
  }
  notificationBoxShow.value = !notificationBoxShow.value
}
</script>

<style scoped>
.right-side-login{
  display:flex;
  justify-content:space-between;
  gap:40px;
  align-items:center;
}
.right-side-login img{
  width:38px;
  height:38px;
  border-radius:50%;
}
.right-side-login svg{
  cursor:pointer;
  color:var(--text-color);
}
.right-side-login img{
    cursor:pointer;
}
.right-side-login svg:hover{
    color:var(--main-color)
}
.notification-main{
    display:flex;
    align-items:center;
    position:relative;
}
.notification-box{
  z-index:1;
  min-width: 400px;
  border-radius:4px;
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 0px 1px 0px;
  top: 35px;
  right: 0;
  padding:15px;
}
.notification-box h3{
  font-size:14px;
  margin:15px 0;
}
.notification-box .no-notification{
  font-size: 20px;
  color: var(--main-color);
}
.notification{
  display: flex;
  gap:10px;
  font-size:12px;
  margin:20px 0;
}
.notification img{
  width:60px;
  height:60px;
}
.details{
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.details p{
  font-weight:bold;
}
.details span{
  color:var(--text-color)
}
.details button{
  border: none;
  background-color: var(--main-color);
  padding: 10px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  width:fit-content;
}
.date{
  color:var(--text-color)
}
.user-info{
  position:relative;
}
.user-box{
  z-index:1;
  border-radius: 4px;
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 0px 1px 0px;
  top: 50px;
  right: 0;
  padding: 15px;
  position:absolute;
  font-size:14px;
}
.ar{
  right:auto;
  left:0;
}
.user-data{
  display:flex;
  align-items:center;
  gap:15px;
  border-bottom:1px solid #D9D9D9;
  padding-bottom:10px;
}
.user-data div p{
  font-weight:bold;
  margin:10px 0;
}
.user-data div span{
  color:var(--text-color);
}
.user-box .buttons{
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin:15px 0;
  padding:8px 12px;
  border-bottom:1px solid #D9D9D9;
}
.user-box .buttons div{
  display:flex;
  align-items:center;
  gap:15px;
  cursor:pointer;
}
.logout{
  width: 100%;
  margin: 15px 0;
  border: 1px solid black;
  background-color: transparent;
  padding: 10px 0;
  border-radius: 4px;
  cursor: pointer;
}
:deep(.lang){
  width:100%;
}
:deep(.lang svg){
  display:none;
}
:deep(.lang select){
  width:100%;
}
:deep(.mode svg){
  color:var(--text-color)
}
@media screen and (min-width:992px) and (max-width:1150px){
  .right-side-login{
    gap:20px;
  }
}
@media screen and (max-width:991px){
    .right-side-login{
      display:none;
    }
}
</style>