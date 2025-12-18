import { defineStore } from 'pinia'

export const useServicesStore  = defineStore('services',{
    state : () => ({
        addServicesRound : 0,
        show : true,
    }),
    getters : {
        getRound : (state) => state.addServicesRound,
        getShowStatus : (state) => state.show,
    },
    actions : {
        updateRound(round){
            this.addServicesRound  = round
        },
        updateShowStatus(status){
            this.show = status
        }
    }
})