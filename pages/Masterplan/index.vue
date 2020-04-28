<template>
  <div id="home">
    <div class="wrapVideo" v-if="!loading">
      <CustomVideo width='100%' height="100%" class="mainVideo"
        :pathVideo="videoInit"
        :pathImageInit="videoInit.pathImageInit"
        :playVideo="playVideo"
        @finishVideo="finishVideo()" />
    </div>
    <div class="wrapSpin" :class="{'active': playSpin }">
      <!-- <Spin
        class="mainSpin"
        :files="spinFiles">
      </Spin> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CustomVideo from '~/components/Multimedia/CustomVideo'
import Spin from '~/components/Multimedia/Spin'
export  default {
  name: 'Masterplan',
  layout: 'main-layout',
  components: {
    CustomVideo,
    Spin
  },
  data() {
    return {
      loading: true,
      videoInit:  {
        pathImageInit: 'home_green_park.jpg',
        path: ''
      },
      playSpin: false,
      playVideo: true
    }
  },
  computed: {
    ...mapGetters({
      videoHome: 'Videos/videos',
      spinFiles: 'Masterplan/spinFiles'
    })
  },
  created () {
    if (this.videoHome) {
      this.videoInit.path = this.videoHome.path
      this.loading = false
    } else {
      this.$store
        .dispatch('Videos/getVideo', {
          path: 'masterplan/Cam_01.mp4', 
          origin: 'home' }
        )
        .then( res => {
          this.videoInit.path = res.path
          this.loading = false
        })
    }

    this.$store.dispatch('Masterplan/getSpin')
      .then(res => {
        res.forEach( element => {
          if (element.type === 'video' && element.converted === false) {
            this.$store.dispatch('Videos/getVideo', element)
          }
        })
      })
  },
  methods: {
    finishVideo() {
      this.$bus.$emit('toggleHeader', true)
      this.$bus.$emit('toggleFooter', true)
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