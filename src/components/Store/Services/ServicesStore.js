import { defineStore } from 'pinia'

export const useServicesStore  = defineStore('services',{
    state : () => ({
        addServicesRound : 0,
        privacyShow : false,
        show : false,
    }),
    getters : {
        getRound : (state) => state.addServicesRound,
        getShowStatus : (state) => state.show,
        getPrivacyShow : (state) => state.privacyShow
    },
    actions : {
        updateRound(round){
            this.addServicesRound  = round
        },
        updateShowStatus(status){
            this.show = status
        },
        updatePrivacyShow(status){
            this.privacyShow = status
        }
    }
})