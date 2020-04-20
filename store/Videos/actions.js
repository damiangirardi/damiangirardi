import axios from 'axios';
import {environment, CURRENT_ENV} from './../environment'
const actions = {
    getVideo  (context, url) {
        const rootEnv = CURRENT_ENV === 'development' ? `_nuxt/assets/` : `~assets/`
        return axios({
            url: `${rootEnv}videos/${url}`,
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