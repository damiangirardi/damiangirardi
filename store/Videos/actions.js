import axios from 'axios';
import { ENV, CURRENT_ENV } from './../environment'
const actions = {
  getVideo(context, nameVideo) {
    return axios({
      url: `${ENV[CURRENT_ENV].ASSETS_URL}videos/${nameVideo}`,
      method: "GET",
      responseType: "blob"
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      context.commit('storeVideo', url)
    }).catch((error) => {
      console.log(error);
    })
  }
}

export default actions