const mutations = {
    storeSpin (state, res) {
        state.spinFiles = res
    },
    updateVideo (state, obj) {
        state.spinFiles.forEach(element => {
            if (element.id === obj.id) {
                element.path = obj.path
            }
        });
    }
}
export default mutations;