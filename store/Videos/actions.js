const actions = {
  getVideo({ commit }, element) {
    // Nombre del video
    let pathVideo =  element.path
    return this.$axios({
      url: `videos/${pathVideo}`,
      method: "GET",
      responseType: "blob"
    }).then( response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const obj = {
        id: typeof element.id != 'undefined' ? element.id : null,
        path: url
      }
      if (element.origin === 'home') {
        commit('storeVideo', obj)
      } else {
        commit('Masterplan/updateVideo', obj, {root: true})
      }
      return obj
    }).catch((error) => {
      console.log(error);
    })
  }
}
export default actions