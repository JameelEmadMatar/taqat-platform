<template>
    <div class="main change-mode">
        <button
            class="theme-toggle mode"
            @click="toggleTheme"
            :aria-label="isDark ? 'تبديل إلى الوضع الفاتح' : 'تبديل إلى الوضع الداكن'"
            :title="isDark ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن'"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon" aria-hidden="true"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
            <span class="theme-toggle__label">
                {{ isDark ? currentLang == 'en' ? 'Light Mode' : 'فاتح' : currentLang == 'en' ? 'Dark Mode' : 'داكن'}}
            </span>
        </button>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSettingsStore } from '../../Store/Settings/SettingStore'
import { useDark, useToggle, useStorage } from '@vueuse/core'


const settingStore = useSettingsStore()
const currentLang = computed(() => settingStore.getLang)
// استخدام storage لحفظ التفضيل
const themeStorage = useStorage('theme', 'auto')

const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: '',
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  themeStorage.value = isDark.value ? 'dark' : 'light'
}

</script>

<style scoped>
.mode{
    display: flex;
    align-items: center;
    gap: 5px;
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0 10px;
    cursor: pointer;
}
.mode:hover{
    opacity:0.7;
    transition: opacity 0.3s ease;
}
</style>