<template>
  <nav class="navbar">
    <div class="container navbar-content">
      <div class="logo">
        <div class="logo-inside">
          <!-- اللوجو الأصلي -->
            <svg class="taqat-logo" width="142" height="22" viewBox="0 0 142 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M141.644 0H121.676V5.19702H141.644V0Z" fill="#007BD1"/>
                <path d="M134.213 8.47988V21.55H129.109V6.01562L134.213 8.47988Z" fill="#007BD1"/>
                <path d="M41.3761 15.9578L37.2817 16.4878L37.2631 16.5345L35.9195 20.0012L35.688 20.5949L35.3746 21.4034L34.0407 21.4273L29.8516 21.5028L30.3076 20.3244L30.4238 20.0241L33.4382 12.2703L33.4958 12.1212L36.4399 4.89844L37.89 5.67411L37.3237 7.16579L35.2262 12.68L41.3761 15.9578Z" fill="#007BD1"/>
                <path d="M50.956 21.5508L48.4142 21.5031L45.43 21.4484L40.6569 9.46322L38.3319 3.62777L37.5546 1.68162L36.8848 0H42.6158L50.665 20.797L50.956 21.5508Z" fill="#007BD1"/>
                <path d="M102.215 15.9578L98.1196 16.4878L98.102 16.5345L96.7574 20.0012L96.5269 20.5949L96.2135 21.4034L94.8786 21.4273L90.6895 21.5028L91.1455 20.3244L91.2627 20.0241L94.2761 12.2703L94.3347 12.1212L97.2778 4.89844L98.7289 5.67411L98.1625 7.16579L96.0641 12.68L102.215 15.9578Z" fill="#007BD1"/>
                <path d="M111.795 21.5508L109.254 21.5031L106.27 21.4484L101.496 9.46322L99.1718 3.62777L98.3935 1.68162L97.7246 0H103.455L111.504 20.797L111.795 21.5508Z" fill="#007BD1"/>
                <path d="M73.2946 10.7737V10.7747C73.2946 12.162 72.1892 13.2867 70.827 13.2867C69.4648 13.2867 68.3594 12.162 68.3594 10.7747V10.7737C68.3594 10.0935 68.625 9.47794 69.0566 9.02645C69.5048 8.55409 70.1337 8.26172 70.8279 8.26172C71.5222 8.26172 72.1501 8.55409 72.5993 9.02645C73.029 9.47893 73.2946 10.0935 73.2946 10.7737Z" fill="#007BD1"/>
                <path d="M79.44 4.55965L76.6424 7.40876C76.3524 6.88966 75.9901 6.40238 75.5556 5.95984C75.121 5.51731 74.6425 5.14837 74.1328 4.85302L76.9305 2.00391C77.408 2.34799 77.862 2.73881 78.2907 3.17438C78.7184 3.61094 79.1022 4.07336 79.44 4.55965Z" fill="#FFB400"/>
                <path d="M72.6003 4.20512C71.9861 4.03507 71.3533 3.95352 70.7216 3.96446C70.1581 3.97341 69.5966 4.05296 69.0508 4.20611V0.175589C69.6279 0.0741547 70.2196 0.0234375 70.8251 0.0234375C71.4305 0.0234375 72.0232 0.0751492 72.6003 0.174595V4.20512Z" fill="#FFB400"/>
                <path d="M81.2312 12.5797H77.2793C77.4277 12.0248 77.5058 11.453 77.5146 10.8802C77.5254 10.2368 77.4463 9.59036 77.2773 8.96484L81.2312 8.96584C81.3298 9.55257 81.3796 10.1562 81.3796 10.7728C81.3796 11.3893 81.3288 11.992 81.2312 12.5797Z" fill="#FFB400"/>
                <path d="M67.5182 4.84911C66.9655 5.17032 66.4626 5.56909 66.0232 6.03152C65.6306 6.44421 65.2898 6.90465 65.0096 7.40486L62.2109 4.55575C62.5488 4.06846 62.9316 3.60604 63.3593 3.17047C63.787 2.7349 64.243 2.34408 64.7195 2L67.5182 4.84911Z" fill="#FFB400"/>
                <path d="M64.3737 8.96875C64.2058 9.59426 64.1267 10.2387 64.1374 10.8821C64.1462 11.4559 64.2243 12.0277 64.3747 12.5836H60.417C60.3174 11.9959 60.2676 11.3932 60.2676 10.7767C60.2676 10.1601 60.3184 9.55647 60.416 8.96875H64.3737Z" fill="#FFB400"/>
                <path d="M80.9478 21.0313L80.4088 20.9994L74.4688 20.8304L73.4181 21.2013C72.5812 21.4191 71.7287 21.5275 70.8255 21.5275C70.0931 21.5275 69.3773 21.4509 68.687 21.3067C66.8394 20.9189 65.1687 20.0418 63.8104 18.8106C63.7996 18.7997 63.7879 18.7898 63.7772 18.7788C63.3504 18.391 62.953 17.9654 62.5849 17.497C62.206 17.0137 61.875 16.5115 61.5908 15.9904L61.5947 15.9864C61.5264 15.8591 61.46 15.7298 61.3945 15.6005L64.5818 13.2129C64.8103 13.8165 65.1228 14.3843 65.5056 14.8955C65.8463 15.3529 66.2399 15.7646 66.6832 16.1246C66.7535 16.1823 66.8228 16.237 66.8971 16.2917C67.9995 17.1071 69.3588 17.5904 70.8255 17.5904C72.4113 17.5904 73.8672 17.0286 75.0136 16.0908L75.0117 16.0888C75.5068 15.6821 75.9442 15.2097 76.3036 14.6797C76.6258 14.2093 76.8924 13.7011 77.0926 13.1602L77.0965 13.1641L80.2984 15.522C80.0406 16.056 79.735 16.5751 79.3786 17.0753C79.2497 17.2573 79.1169 17.4353 78.9772 17.6074C78.9684 17.6183 78.9606 17.6282 78.9518 17.6392C78.9147 17.6859 78.8747 17.7327 78.8356 17.7794C78.6384 18.0141 78.4323 18.2368 78.2175 18.4507C78.2087 18.4596 78.2009 18.4695 78.1902 18.4785L80.9478 21.0313Z" fill="#007BD1"/>
                <path d="M19.9683 0H0V5.19702H19.9683V0Z" fill="#007BD1"/>
                <path d="M12.5367 8.47988V21.55H7.43359V6.01562L12.5367 8.47988Z" fill="#007BD1"/>
            </svg> 

          <!-- زرار الإغلاق (X) -->
          <svg 
            class="icon x-svg" 
            :class="{ 'open': isMenuOpen }"
            width="24" height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            @click="isMenuOpen = false"
          >
            <path d="M8 15.5467L15.5467 8" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.5467 15.5467L8 8" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <!-- زرار الهامبرجر -->
          <svg 
            class="icon hamburger-svg" 
            :class="{ 'close': isMenuOpen }"
            width="24" height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            @click="isMenuOpen = true"
          >
            <path d="M3 7H21" stroke="#191919" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M3 12H21" stroke="#191919" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M3 17H21" stroke="#191919" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>

        <!-- القايمة -->
        <div class="navbar-list" :class="{ 'open': isMenuOpen }">
          <ul>
            <li><a href="#">Find a Talent</a></li>
            <li><a href="#">Find a Service</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      </div>

      <!-- الجانب الأيمن -->
      <div class="left-side" :class="{ 'open': isMenuOpen }">
        <router-link to="/login">
            <button>Sign in</button>
        </router-link>
        <div class="btn2">
          <p>Get Started</p>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M10.8223 4.44531L15.3748 8.99781L10.8223 13.5503" stroke="white" stroke-width="1.5"/>
            <path d="M2.625 9H15.2475" stroke="white" stroke-width="1.5"/>
          </svg>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)

// دالة تشتغل كل ما حجم الشاشة يتغير
const handleResize = () => {
  if (window.innerWidth > 576) {
    isMenuOpen.value = false   // ← هنا بالضبط الحل السحري
  }
}

// نراقب تغيير حجم الشاشة
onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize() // نفحص أول مرة
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

// computed بس عشان نعرف نعرض الهامبرجر ولا لأ
const shouldShowHamburger = ref(window.innerWidth <= 576)
window.addEventListener('resize', () => {
  shouldShowHamburger.value = window.innerWidth <= 576
})
</script>

<style scoped>
.navbar-content{
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navbar-content .logo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:30px;
}
.navbar-content .logo .navbar-list ul{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:30px;
}
.navbar-content .logo .navbar-list ul li{
    list-style:none
}
.navbar-content .logo .navbar-list ul li a{
    text-decoration:none;
    color:#191919
}
.navbar-content .logo .logo-inside .x-svg , .navbar-content .logo .logo-inside .hamburger-svg{
    display:none
}
.navbar-content .left-side{
    display: flex;
    align-items: center;
    gap: 10px;
}
.navbar-content .left-side button{
    background-color: transparent;
    border: none;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    padding: 10px;
    height: 46px;
    width: 150px;
}
.navbar-content .left-side .btn2{
    display: flex;
    align-items: center;
    width: 180px;
    height: 46px;
    justify-content: center;
    cursor: pointer;
    gap: 10px;
    color:#fff;
    background-color: var(--main-color);
    border-radius:8px;
}
.open{
    display:flex !important
}
.close{
    display:none !important
}
@media screen and (min-width:991px) and (max-width:1050px){
    .left-side button{
        max-width:100px;
    }
    .btn2{
        max-width:130px !important;
    }
}
@media screen and (min-width:767px) and (max-width:991px){
    .taqat-logo{
        width:115px;
    }
    .left-side button{
        max-width:100px;
    }
    .btn2{
        max-width:130px !important;
    }
    ul{
        gap:10px !important
    }
    ul li{
        font-size:12px;
    }
}
@media screen and (max-width:767px){
    .navbar-content{
        display: flex;
        flex-direction: column;
    }
    .navbar-content .logo{
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
        margin-left: 20px;
    }
    .navbar-content .logo-inside{
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
    }
    .navbar-content .logo .logo-inside .hamburger-svg{
        display:flex;
    }
    .navbar-content .navbar-list{
        padding-bottom: 15px;
        border-bottom: 2px solid #D9D9D9;
        width: 95%;
        display:none
    }
    .navbar-content .navbar-list ul{
        flex-direction: column;
        align-items: flex-start !important;
    }
    .navbar-content .left-side{
        gap: 20px;
        margin-top: 20px;
        display:none
    }
}
</style>