import {initialStep} from '@/proyecto/videos'
import {guide} from '@/proyecto/videos'

export default {
    startApp({commit}) {
        return commit('storeInitialStep', initialStep)
    },
    getSpin({commit}) {
        return commit('storeSpin', guide)
    },
    getVideo({ commit }, obj) {
        return this.$axios({
          url: `videos/${obj.path}`,
          method: 'GET',
          responseType: "blob"
        }).then( response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          let blob = {
              url: url,
              path: obj.path
          }
          commit('storeBlob', blob)
          return obj
        }).catch((error) => {
          console.log(error);
        })
    },
    getSpinVideos({commit}, video) {
        return this.$axios({
            url: `videos/${video}`,
            method: 'GET',
            responseType: "blob"
        }).then( response => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            return url
        }).catch((error) => {
            console.log(error);
        })
    },
    setFloor ({commit}, data) {
        commit('storeFloor', data)
        return data;
    } 
}