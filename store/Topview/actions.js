export default {
  getImages({commit}) {
    const deptoView = [
      {name: '1011', type: 'Edificio', number: '04', sold: false, image: '1011-B5'},
      {name: '1011', type: 'Edificio', number: '03', sold: true,  image: '1011-B4'},
      {name: '1011', type: 'Edificio', number: '02', sold: false, image: '1011-B3'},
      {name: '1011', type: 'Edificio', number: '01', sold: false, image: '1011-B2'},
      {name: '1011', type: 'Edificio', number: '00', sold: false, image: '1011-B1'}
    ]
    commit('setImages', deptoView);
    return deptoView
  }
}