import {deptoView} from '@/proyecto/topview'

export default {
  getImages({commit}) {
    commit('setImages', deptoView);
    return deptoView
  }
}