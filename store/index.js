import axios from 'axios';

export const state = () => ({
    videos: []
})
export const getters = {
    videos:state => state.videos
}
export const mutations = {
    storeVideo (state, res) {
        state.videos = res
    }
}
export const actions = {
    getVideo  (context, url) {
        console.log(url);
        return axios({
            url: `~assets/videos/${url}`,
            method: "GET",
            responseType: "blob"
          }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            console.log(url);
            context.commit('storeVideo', url)
          }).catch((error) => {
              console.log(error);
          })
    }
}
export const strict = false