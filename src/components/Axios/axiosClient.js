import axios from 'axios'
import {useSettingsStore} from '../Store/Settings/SettingStore'

const settingsStore = useSettingsStore()

const axiosClient = axios.create({
    baseURL: 'https://staging.taqatportal.com/api/v1',
    timeout: 5000, // 5 ثواني
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Accept-Language" : settingsStore.getLang
    }
})
console.log(settingsStore.getLang)
axios.defaults.withCredentials = true
export default axiosClient