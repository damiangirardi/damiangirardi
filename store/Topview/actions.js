export default {
  getImages({commit}) {
    const dptos = []
    for (let index = 1; index < 5; index++) {
      dptos.push({
        name: `101${index}`,
        type: 'Edificio',
        number: `0${index}`,
        sold: false,
        image: `1011-B${index}`,
        apto: [
          { 
            text:  `0${index}A`,
            image: `1011-B${index}-A`
          },{ 
            text: `0${index}B`,
            image: `1011-B${index}-B`
          }
        ]
      })
    }
    commit('setImages', dptos);
    return dptos
  }
}