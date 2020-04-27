<template>
  <div id="home">
    <div class="wrapVideo">
      <Video width='100%' height="100%" class="mainVideo"
        :pathVideo="videoHome"
        :pathImageInit="videoInit.pathImageInit"
        :playVideo="playVideo"
        :isReverse="false"
        @finishVideo="finishVideo()">
      </Video>
    </div>
    <div class="wrapSpin" :class="{'active': playSpin }">
      <Spin
        class="mainSpin"
        :files="spinFiles">
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
    data() {
      return {
        videoInit:  {
          pathImageInit: 'home_green_park.jpg',
          pathVideo: 'videos/masterplan/Cam_01.mp4'
        },
        playSpin: false,
        playVideo: true,
        cardData: {
          image: 'assets/images/14@2x.png',
          titleImage: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facere iure ipsum vel laudantium ullam nam voluptates incidunt quo, dicta dolor esse id dolores?'
        }
      }
    },
    computed: {
      ...mapGetters({
        videoHome: 'Videos/videos',
        spinFiles: 'Masterplan/spinFiles'
      })
    },
    created () {
      this.$store.dispatch('Masterplan/getSpin').then(() => {
        this.spinFiles.forEach((element, index) => {
          if (element.type === 'video' && element.converted === false) {
            this.$store.dispatch('Videos/getVideo', element)
          }
        })
      })
    },
    methods: {
      finishVideo() {
        this.playSpin = true
        this.playVideo = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapSpin {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 3;
    width: 100%;
    height: 100%;
    .mainSpin {
      opacity: 0;
      transition: opacity .3s ease-in-out;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.active {
      .mainSpin {
        opacity: 1;
      }
    }
  }
  .wrapVideo {
    width: 100%;
    height: 100%;
  }
</style>