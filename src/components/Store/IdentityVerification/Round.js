import { defineStore } from 'pinia'

export const useRoundStore = defineStore('verify', {
    state: () => ({
        round: 0,
        show : false,
        discardShow:false,
    }),
    getters: {
        getRound: (state) => state.round,
        getShowStatus : (state) => state.show,
        getDiscradStatus : (state) => state.discardShow
    },
    actions: {
        updateRound(round) {
            this.round = round
        },
        updateShowStatus(show) {
            this.show = show
        },
        updateDiscardBoxStatus(show){
            this.discardShow = show
        }
    }
})