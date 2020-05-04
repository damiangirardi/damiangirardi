export default {
  getImages({commit}) {
    const deptoView = [
      {
        name: '1011',
        type: 'Edificio',
        number: '04',
        sold: false,
        image: '1011-B5',
        apto: [
         { text:  '0A' }, 
         { text: '0B'  }
        ]
      },{
        name: '1011',
        type: 'Edificio',
        number: '03',
        sold: true,
         image: '1011-B4',
         apto: [
           { text: '3A' },
           { text: '3B' }
          ]
      },{
        name: '1011',
        type: 'Edificio',
        number: '02',
        sold: false,
        image: '1011-B3',
        apto: [
         { text:  '02A'}, 
         { text: '02B' }
        ]
      },{
        name: '1011',
        type: 'Edificio',
        number: '01',
        sold: false,
        image: '1011-B2',
        apto: [
         { text:  '01A'}, 
         { text: '01B' }
        ]
      },{
        name: '1011',
        type: 'Edificio',
        number: '00',
        sold: false,
        image: '1011-B1',
        apto: [
         { text:  '00A' }, 
         { text: '00B' }
        ]
      }
    ] 

    commit('setImages', deptoView);
    return deptoView
  }
}