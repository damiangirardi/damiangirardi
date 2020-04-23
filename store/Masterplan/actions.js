const listFiles = [
  {
    id: 0,
    type: 'image',
    visible: true,
    path: 'posterVideos/Fot_01_home.jpg'
  },
  {
    id: 1,
    type: 'image',
    visible: false,
    path: 'posterVideos/Fot_03_B.jpg'
  },
  {
    id: 2,
    type: 'image',
    visible: false,
    path: 'posterVideos/Fot_02_A.jpg'
  }
]
const actions = {
  getSpin(context) {
    context.commit('storeSpin', listFiles)
  }
}

export default actions