import axios from 'axios';
import { ENV, CURRENT_ENV } from './../environment'
const actions = {
  getVideo(context, pathVideo) {
    console.log(pathVideo);
    
    return axios({
      url: `${ENV[CURRENT_ENV].BASE_URL}videos/${pathVideo}`,
      method: "GET",
      resºonseType: "blob"
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      context.commit('storeVideo', url)
    }).catch((error) => {
      console.log(error);
    })
  }
}

export default actions