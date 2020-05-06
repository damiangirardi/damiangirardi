import _ from 'lodash'

export default {
    storeInitialStep(state, initialStep) {
        state.initialStep = initialStep
    },
    storeSpin(state, guide) {
        state.guide = guide
    },
    storeBlob(state, blob) {
        if (state.initialStep.video === blob.path) {
            state.initialStep.blob = blob.url
        } else {
            let element = _.find(state.guide, g => {
                return g.video === blob.path
            })
            element.blob = blob.url
        }
    },
    storeFloor (state, objValue){
        state.floor = objValue
    }
}