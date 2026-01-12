import { defineStore } from 'pinia'

export const useSettingsStore  = defineStore('settings',{
    state : () => ({
        lang: localStorage.getItem('lang') || 'en',
        direction: localStorage.getItem('dir') || 'ltr',
        mode: localStorage.getItem('mode') || 'light',
    }),
    getters : {
        getLang : (state) => state.lang,
        getMode : (state) => state.mode,
        getDirection : (state) => state.direction,
        isRTL: (state) => state.direction === 'rtl',
        isLTR: (state) => state.direction === 'ltr',
        isDarkMode: (state) => state.mode === 'dark',
    },
    actions : {
        updateBodyAttributes() {
            const body = document.body
        
            body.setAttribute('lang', this.lang)
            body.setAttribute('dir', this.direction)
            
            body.classList.remove('ltr', 'rtl', 'light', 'dark', 'light-mode', 'dark-mode')
            body.classList.add(this.direction)
            body.classList.add(this.mode)
            body.classList.add(`${this.mode}-mode`)
            
            body.classList.add('app')
        },
        updateLang(lang){
            this.lang = lang
            this.direction = lang == 'en' ? 'ltr' : 'rtl'
            this.updateBodyAttributes()
            localStorage.setItem('lang', lang)
            localStorage.setItem('dir', this.direction)
        },
        updateMode(mode){
            this.mode = mode
        },
    }
})