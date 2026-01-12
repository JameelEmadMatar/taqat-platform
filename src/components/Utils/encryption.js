import CryptoJS from 'crypto-js'

const SECRET_KEY = 'vue-project-secret-2024'

// تشفير الداتا
export const encryptData = (data) => {
    try{
        return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString()
    }
    catch(error) {
        console.error('خطأ في التشفير:', error)
        return null
    }
}

// فك تشفير الداتا
export const decryptData = (encryptedData) => {
    try{
        const bytes = CryptoJS.AES.decrypt(encryptedData , SECRET_KEY)
        const decrypted = bytes.toString(CryptoJS.enc.Utf8)
        return decrypted ? JSON.parse(decrypted) : null
    }
    catch(error) {
        console.error('خطأ في فك التشفير (ربما مفتاح مختلف أو بيانات تالفة):', error)
        return null
    }
}