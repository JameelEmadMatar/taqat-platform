import { defineStore } from 'pinia'

export const useBadgesStore = defineStore('badges', {
    state: () => ({
        show : false,
        nestedShowStatus : [
            {
                id : 0,
                name : "Summary",
                status : false,
            },
            {
                id : 1,
                name : "Skills",
                status : false,
            },
            {
                id : 2,
                name : "Employment History",
                status : false,
            },
            {
                id : 3,
                name : "Languages",
                status : false,
            },
            {
                id : 4 ,
                name : "Portfolio",
                status : false,
            },
            {
                id : 5 ,
                name : "Social",
                status : false,
            },
            {
                id : 6 ,
                name : "Video Introduction",
                status : false,
            },
            {
                id : 7,
                name : "Add a professional profile picture",
                status : false,
            }
            
        ],
    }),
    getters: {
        getShowStatus : (state) => state.show,
        getNestedShow : (state) => state.nestedShowStatus,
    },
    actions: {
        updateShowStatus(show) {
            this.show = show
        },
        updateNestedStatus(index, newStatus) {
            if (index >= 0 && index < this.nestedShowStatus.length) {
                this.nestedShowStatus[index].status = newStatus
            }
        }
        
    }
})