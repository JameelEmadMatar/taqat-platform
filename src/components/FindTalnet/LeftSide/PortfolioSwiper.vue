<template>
  <section class="showcase-section">
    <div class="carousel-wrapper">
      <swiper
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="15"
        :free-mode="true"
        :grab-cursor="true"
        :mousewheel="{ forceToAxis: true, sensitivity: 1 }"
        :touch-ratio="1"
        :resistance-ratio="0.5"
        navigation
        class="portfolio-swiper"
      >
        <swiper-slide v-for="port in portfolio" :key="port.id" class="mockup-slide">
          <div class="phone-frame">
            <img :src="port.image" alt="Template preview" />
          </div>
        </swiper-slide>

        <!-- أسهم Swiper (اختيارية) -->
        <div class="swiper-button-prev custom-prev"></div>
        <div class="swiper-button-next custom-next"></div>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, FreeMode, Mousewheel } from 'swiper/modules'

// استيراد الستايلات الأساسية لـ Swiper
import 'swiper/css'
import 'swiper/css/navigation'

const modules = [Navigation, FreeMode, Mousewheel]

const props = defineProps({
  portfolio: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.showcase-section {
  margin: 10px 0;
}

.carousel-wrapper {
  position: relative;
  padding: 0 10px;
}

/* Swiper container */
.portfolio-swiper {
  padding: 40px 0;
  overflow: hidden;
}

/* كل slide (mockup) */
.mockup-slide {
  width: 120px !important; /* عرض ثابت لكل عنصر */
  flex-shrink: 0;
}

.phone-frame img {
  width: 120px;
  height: 90px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.2);
  display: block;
}

/* تخصيص الأسهم (نفس التصميم اللي عندك) */
:deep(.custom-prev),
:deep(.custom-next) {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  z-index: 10;
}

:deep(.custom-prev) { left: 0; }
:deep(.custom-next) { right: 10px; }

:deep(.custom-prev:hover),
:deep(.custom-next:hover) {
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
}

:deep(.custom-prev::after),
:deep(.custom-next::after) {
  font-size: 28px;
  color: #333;
  font-weight: bold;
}

/* إخفاء الأسهم إذا كان العناصر أقل من 5 (اختياري) */
:deep(.swiper-button-disabled) {
  opacity: 0;
  pointer-events: none;
}

/* Responsive */
@media (max-width: 768px) {
  .mockup-slide {
    width: 140px !important; /* أكبر شوية على الموبايل لو بدك */
  }

  .phone-frame img {
    width: 140px;
    height: 105px;
  }

  :deep(.custom-prev),
  :deep(.custom-next) {
    width: 50px;
    height: 50px;
  }

  :deep(.custom-prev::after),
  :deep(.custom-next::after) {
    font-size: 24px;
  }
}
</style>