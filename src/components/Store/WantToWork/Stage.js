import { defineStore } from 'pinia'

export const useStageStore = defineStore('stage', {
    state: () => ({
        round: 0,
    }),
    getters: {
        getRound: (state) => state.round,
        // أو أبسط: getRound() { return this.round }  // بفضل setup syntax
    },
    actions: {
        updateRound(round) {
            this.round = round
        }
    }
})