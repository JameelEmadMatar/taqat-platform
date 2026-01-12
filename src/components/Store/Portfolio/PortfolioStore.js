import { defineStore } from 'pinia'

export const portfolioStore = defineStore('Portfolio' , {
    state : () => ({
        round : 0,
        show : false,
        filesImages : [],
        form : {
            projectName : null,
            texts : [],
        },
        projectCover : null
    }),
    getters : {
        getRound : (state) => state.round,
        getShowStatus : (state) => state.show,
        getFiles : (state) => state.filesImages,
        getFormValues : (state) => state.form,
        getProjectCover : (state) => state.projectCover
    },
    actions : {
        updateRound(round){
            this.round = round
        },
        updateShowStatus(status){
            this.show = status
        },
        updateFiles(files){
            this.filesImages = files
            this.projectCover = files[0]
        },
        updateFormValues(values){
            this.form.projectName = values.projectName
            this.form.texts = values.texts
            console.log(this.form)
        },
        updateProjectName(projectName){
            this.form.projectName = projectName
        },
        updateProjectCover(file){
            this.projectCover = file
            this.filesImages.unshift(file)
        }
    }
})