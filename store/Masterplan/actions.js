import Videos from '../Videos/index'
const listFiles = [
  {
    id: 0,
    type: 'image',
    visible: true,
    pathImageInit: '',
    path: 'posterVideos/Fot_01_home.jpg',
    origin: 'spin',
  },
  {
    id: 1,
    type: 'video',
    visible: false,
    pathImageInit: 'posterVideos/Fot_01_home.jpg',
    path: 'Cam_02_A_1.mp4',
    origin: 'spin',
  },
  {
    id: 2,
    type: 'image',
    visible: false,
    pathImageInit: '',
    path: 'posterVideos/Fot_02_A.jpg',
    origin: 'spin',
  }
]
const actions = {
  getSpin(context) {
    context.commit('storeSpin', listFiles)
  }
}

export default actions