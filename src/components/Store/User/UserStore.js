import { defineStore } from 'pinia'
import { encryptData, decryptData } from '../../Utils/encryption'
import { useCookies } from "vue3-cookies"

const { cookies } = useCookies()

const COOKIE_NAME = 'encrypted_user_data'

export const useUserStore = defineStore('userStore', {
    state: () =>({
        user : null,
        isLoading : false,
        isAuthenticated : false,
    }),
    getters : {
        getUserData : (state) => state.user
    },
    actions : {
        updateUserData(user){
            this.user = user
            this.isAuthenticated = !!user
            
            if(user){
                const encrypted = encryptData(user)
                if(encrypted){
                    cookies.set(COOKIE_NAME,encrypted,"30d", "/", "", true, "Lax")
                }
            }else{
                this.clearUserData()
            }
        },
        loadUserFromCookies(){
            if(cookies.isKey(COOKIE_NAME)){
                const encrypted = cookies.get(COOKIE_NAME)
                const decrypted = decryptData(encrypted)
                if(decrypted){
                    this.user = decrypted
                    this.isAuthenticated = true
                }else{
                    this.clearUserData()
                }
            }
        },
        clearUserData(){
            this.user = null
            this.isAuthenticated = false
            if(cookies.isKey(COOKIE_NAME)){
                cookies.remove(COOKIE_NAME)
            }
        }
    }
})