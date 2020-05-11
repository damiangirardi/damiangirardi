import {options} from '@/proyecto/options'

export default {
  getImages({commit}) {
    commit('setImages', options);
    return options
  }
}