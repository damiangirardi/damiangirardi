<template>
  <div id="home">
    <Video width='100%' height="100%" 
      :pathVideo="videoHome"
      :pathImageInit="videoInit.pathImageInit"
      @finishVideo="finishVideo()"
      :pathImage="videoInit.pathImage">
    </Video>
    <div class="wrapSpin" :class="{'active': showSpin }">
      <Spin 
        :files="spinFiles"
        :pathImage="videoInit.pathImage">
      </Spin>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Video from '~/components/Multimedia/Video'
import Spin from '~/components/Multimedia/Spin'
  export  default {
    name: 'Masterplan',
    components: {
      Video,
      Spin
    },
    computed: {
      ...mapGetters({
        videoHome: 'Videos/videos',
        spinFiles: 'Masterplan/spinFiles'
      })
    },
    data() {
      return {
        videoInit:  {
          pathImage: 'Fot_01_home.jpg',
          pathImageInit: 'home_green_park.jpg',
          pathVideo: 'videos/masterplan/Cam_01.mp4'
        },
        showSpin: false,
        cardData: {
          image: 'assets/images/14@2x.png',
          titleImage: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facere iure ipsum vel laudantium ullam nam voluptates incidunt quo, dicta dolor esse id dolores?'
        }
      }
    },
    methods: {
      finishVideo() {
        this.showSpin = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapSpin {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity .5s;
    &.active {
      opacity: 1;
    }
  }
</style>