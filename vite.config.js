// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // فصل مكتبات الـ vendor (كبيرة جدًا)
          if (id.includes('node_modules')) {
            // مثال: فصل كل مكتبة كبيرة لوحدها
            if (id.includes('pinia')) return 'pinia'
            if (id.includes('vue-router')) return 'vue-router'
            if (id.includes('axios')) return 'axios'
            if (id.includes('@heroicons')) return 'heroicons'
            if (id.includes('swiper')) return 'swiper'
            if (id.includes('chart.js')) return 'chartjs'
            
            // باقي المكتبات في vendor عام
            return 'vendor'
          }

          // فصل صفحات أو كومبوننتس كبيرة (اختياري)
          if (id.includes('src/views/admin')) return 'admin-chunk'
          if (id.includes('src/views/dashboard')) return 'dashboard-chunk'
        }
      }
    },
    chunkSizeWarningLimit: 600  // ارفع الحد عشان ما يزعجك التحذير بعد التعديل
  }
})