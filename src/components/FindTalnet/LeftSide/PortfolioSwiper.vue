<template>
  <section class="showcase-section">
      <!-- الـ Carousel -->
    <div class="carousel-wrapper" @wheel="handleWheel">
    <button class="nav-btn left-btn" @click="scrollLeft">
        <svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>
    </button>

    <div class="carousel" ref="carousel">
        <div class="mockup" v-for="n in 8" :key="n">
        <div class="phone-frame">
            <img :src="`src/assets/mockups/mockup-${n}.jpg`" alt="Template preview" />
        </div>
        </div>
    </div>

    <button class="nav-btn right-btn" @click="scrollRight">
        <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
    </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const carousel = ref(null)

const scrollLeft = () => {
  carousel.value.scrollBy({ left: -300, behavior: 'smooth' })
}

const scrollRight = () => {
  carousel.value.scrollBy({ left: 300, behavior: 'smooth' })
}

// سحب بالعجلة في الديسكتوب
const handleWheel = (e) => {
  if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return
  carousel.value.scrollBy({ left: e.deltaY * 0.8, behavior: 'smooth' })
}

onMounted(() => {
  // دعم السحب باللمس على الموبايل
  let startX = 0
  carousel.value.addEventListener('touchstart', e => startX = e.touches[0].clientX)
  carousel.value.addEventListener('touchmove', e => {
    const diff = startX - e.touches[0].clientX
    carousel.value.scrollBy({ left: diff, behavior: 'auto' })
    startX = e.touches[0].clientX
  })
})
</script>

<style scoped>
.showcase-section {
    margin:10px 0 ;
}

.title {
  font-size: 3.8rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 16px;
  line-height: 1.1;
}

.subtitle {
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 80px;
}

.carousel-wrapper {
    position:relative;
    overflow:hidden;
    padding:0 10px;
}

.carousel {
  display: flex;
  gap: 15px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 40px 0;
  scrollbar-width: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}


.phone-frame img {
  width:120px;
  height:90px;
  border-radius: 8px;
}

/* الأسهم */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  background: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.nav-btn:hover {
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
}

.left-btn { left: 0; }
.right-btn { right: 20px; }

.nav-btn svg {
  width: 28px;
  height: 28px;
  fill: #333;
}

/* Responsive */
@media (max-width: 768px) {
  .title { font-size: 2.8rem; }
  .subtitle { margin-bottom: 60px; }
  .mockup { width: 220px; }
  .carousel { gap: 24px; }
  .nav-btn { width: 50px; height: 50px; }
  .nav-btn svg { width: 24px; height: 24px; }
}
</style>