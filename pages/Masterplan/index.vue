<template>
  <div id="home">
    <Video width='100%' height="100%" 
      :pathVideo="videoHome"
      :pathImage="videoInit.pathImage">> 
    </Video>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Video from '~/components/Multimedia/Video'
  export  default {
    name: 'Test',
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
          pathVideo: 'assets/videos/Cam_01.mp4',
          pathImage: 'assets/images/14@2x.png'
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