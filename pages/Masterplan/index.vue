<template>
  <div id="home">
    <Video width='100%' height="100%" 
      :pathVideo="videoInit.pathVideo"
      :pathImageInit="videoInit.pathImageInit"
      :pathImage="videoInit.pathImage">
    </Video>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Video from '~/components/Multimedia/Video'
  export  default {
    name: 'Masterplan',
    // layout: 'default-with-header-footer',
    components: {
      Video
    },
    computed: {
      ...mapGetters({
        videoHome: 'videos'
      })
    },
    data() {
      return {
        videoInit:  {
          pathImage: 'Fot_01_home.jpg',
          pathImageInit: 'home_green_park.jpg',
          pathVideo: 'videos/masterplan/Cam_01.mp4'
        },
        cardData: {
          image: 'assets/images/14@2x.png',
          titleImage: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facere iure ipsum vel laudantium ullam nam voluptates incidunt quo, dicta dolor esse id dolores?'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  
</style>