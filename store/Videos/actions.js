import axios from 'axios';
import { ENV, CURRENT_ENV } from './../environment'
const actions = {
  getVideo(context, element) {
    let pathVideo =  element.path
    return axios({
      url: `${ENV[CURRENT_ENV].BASE_URL}videos/${pathVideo}`,
      method: "GET",
      responseType: "blob"
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const obj = {
        id: element.id,
        path: url
      }
      if (element.origin === 'home') {
        context.commit('storeVideo', obj)
      } else {
        context.commit('Masterplan/updateVideo', obj, {root: true})
      }
      return url
    }).catch((error) => {
      console.log(error);
    })
  }
}
export default actions