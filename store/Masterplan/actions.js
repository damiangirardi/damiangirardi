const listFiles = [
  {
    id: 0,
    type: 'image',
    path: 'ocen_home.jpg'
  },
  {
    id: 0,
    type: 'image',
    path: 'posterVideos/Fot_03_B.jpg'
  },
  {
    id: 0,
    type: 'image',
    path: 'posterVideos/Fot_03_B.jpg'
  }
]
const actions = {
  getSpin(context) {
    context.commit('storeSpin', listFiles)
  }
}

export default actions