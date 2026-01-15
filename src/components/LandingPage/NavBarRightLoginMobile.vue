<template>
    <!-- User Loged List -->
    <div class="navbar-list loged" :style="{display : showStatus ? 'flex' : 'none'}">
      <!-- زرار الإغلاق (X) -->
      <svg 
        class="icon x-svg" 
        width="24" height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        @click="showStatus = false"
      >
        <path d="M8 15.5467L15.5467 8" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.5467 15.5467L8 8" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="user-info-loged">
        <img src="https://api.taqatgaza.com/storage/uploads/freelancers/225/4MTIgOmTZt6i6IqlsfY6.jpg">
        <div>
          <h3>Jameel Matar</h3>
          <p>jameelmatar1@gmail.com</p>
        </div>
      </div>
      <div class="user-links">
        <div @click="router.push('/my-profile')">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user text-gray-80 dark:text-black-200" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <p>My Profile</p>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" class="text-gray-80 dark:text-black-200"><path d="M7.9 20C9.80858 20.9791 12.0041 21.2443 14.0909 20.7478C16.1777 20.2514 18.0186 19.0259 19.2818 17.2922C20.545 15.5586 21.1474 13.4308 20.9806 11.2922C20.8137 9.15366 19.8886 7.14502 18.3718 5.62824C16.855 4.11146 14.8464 3.1863 12.7078 3.01946C10.5693 2.85263 8.44147 3.45509 6.70782 4.71829C4.97417 5.98149 3.74869 7.82236 3.25222 9.90916C2.75575 11.996 3.02094 14.1915 4 16.1L2 22L7.9 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 12H8.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 12H16.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <p>Message</p>
        </div>
        <div>
          <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray-80 dark:text-black-200"><path d="M14.017 1.666H5.983a3.224 3.224 0 0 0-3.216 3.217v11.741c0 1.5 1.075 2.134 2.391 1.409l4.067-2.259c.433-.241 1.133-.241 1.558 0l4.067 2.259c1.317.733 2.392.1 2.392-1.409V4.883a3.237 3.237 0 0 0-3.225-3.217" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.017 1.666H5.983a3.224 3.224 0 0 0-3.216 3.217v11.741c0 1.5 1.075 2.134 2.391 1.409l4.067-2.259c.433-.241 1.133-.241 1.558 0l4.067 2.259c1.317.733 2.392.1 2.392-1.409V4.883a3.237 3.237 0 0 0-3.225-3.217" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <p>Saved Items</p>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" class="text-gray-80 dark:text-black-200"><path d="M10.2681 21C10.4436 21.304 10.6961 21.5565 11.0001 21.732C11.3041 21.9075 11.649 21.9999 12.0001 21.9999C12.3511 21.9999 12.696 21.9075 13 21.732C13.3041 21.5565 13.5565 21.304 13.7321 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.26176 15.326C3.13112 15.4692 3.04491 15.6472 3.01361 15.8385C2.98231 16.0298 3.00728 16.226 3.08546 16.4034C3.16365 16.5807 3.29169 16.7316 3.45401 16.8375C3.61633 16.9434 3.80594 16.9999 3.99976 17H19.9998C20.1936 17.0001 20.3832 16.9438 20.5456 16.8381C20.708 16.7324 20.8363 16.5817 20.9146 16.4045C20.993 16.2273 21.0182 16.0311 20.9872 15.8398C20.9561 15.6485 20.8702 15.4703 20.7398 15.327C19.4098 13.956 17.9998 12.499 17.9998 8C17.9998 6.4087 17.3676 4.88258 16.2424 3.75736C15.1172 2.63214 13.5911 2 11.9998 2C10.4085 2 8.88234 2.63214 7.75712 3.75736C6.6319 4.88258 5.99976 6.4087 5.99976 8C5.99976 12.499 4.58876 13.956 3.26176 15.326Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <p>Notification</p>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" class="text-gray-80 dark:text-black-200"><path d="M10.2681 21C10.4436 21.304 10.6961 21.5565 11.0001 21.732C11.3041 21.9075 11.649 21.9999 12.0001 21.9999C12.3511 21.9999 12.696 21.9075 13 21.732C13.3041 21.5565 13.5565 21.304 13.7321 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.26176 15.326C3.13112 15.4692 3.04491 15.6472 3.01361 15.8385C2.98231 16.0298 3.00728 16.226 3.08546 16.4034C3.16365 16.5807 3.29169 16.7316 3.45401 16.8375C3.61633 16.9434 3.80594 16.9999 3.99976 17H19.9998C20.1936 17.0001 20.3832 16.9438 20.5456 16.8381C20.708 16.7324 20.8363 16.5817 20.9146 16.4045C20.993 16.2273 21.0182 16.0311 20.9872 15.8398C20.9561 15.6485 20.8702 15.4703 20.7398 15.327C19.4098 13.956 17.9998 12.499 17.9998 8C17.9998 6.4087 17.3676 4.88258 16.2424 3.75736C15.1172 2.63214 13.5911 2 11.9998 2C10.4085 2 8.88234 2.63214 7.75712 3.75736C6.6319 4.88258 5.99976 6.4087 5.99976 8C5.99976 12.499 4.58876 13.956 3.26176 15.326Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <p>Settings</p>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe text-gray-80 dark:text-black-200" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
          <p>Language</p>
        </div>
      </div>
      <ChangeMode/>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out text-gray-80 dark:text-black-200" aria-hidden="true"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
        <p>Logout</p>
      </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ChangeMode from '../Change/Mode/ChangeMode.vue'

const router = useRouter()
const showStatus = ref(true)
</script>

<style scoped>
.loged{
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  z-index : 1;
  padding: 0 20px;
  top: 0;
  right: 0;
  flex-direction:column;
}
.loged .x-svg{
  position: absolute;
  right: 20px;
  top: 20px;
}
.loged .x-svg:hover{
  background-color:#eee;
}
.loged img{
  width:45px;
  height:45px;
  border-radius:50%;
}
.user-info-loged{
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top:50px;
  margin-bottom:20px;
  font-size:12px;
  border-bottom: 1px solid #D9D9D9;
  height: fit-content;
  padding-bottom:20px;
}
.user-info p{
  color:var(--text-color);
  margin-top:5px;
}
.user-links{
  padding-bottom:10px;
  border-bottom:1px solid #D9D9D9;
}
.user-links div{
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 14px;
}
.user-links div svg{
  color:var(--text-color)
}
.loged button{
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
  border: 1px solid black;
  margin: 15px 0;
  cursor: pointer;
  font-size: 14px;
}
.loged button svg{
  color:var(--text-color);
}
.notification-main{
  display:flex;
  align-items:center;
}
:deep(.change-mode){
  margin:10px 0;
}
:deep(.change-mode svg){
  color:var(--text-color);
}
:deep(.mode){
  gap: 20px;
  padding: 0;
}
@media screen and (min-width:991px){
  ul{
    font-size:14px;
  }
  .left-side button{
    max-width:100px;
  }
  .btn2{
    max-width:130px !important;
  }
  .right-side-login{
    gap:20px;
  }
}
</style>