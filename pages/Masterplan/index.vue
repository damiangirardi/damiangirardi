<template>
  <div id="home" v-if="!loading">

    <!-- IMAGEN PREVIA -->
    <img :src="require('assets/images/' + initialStep.image)" v-if="showInitialImage" :class="{off: videoLoaded}" class="prev-image">
    <!-- IMAGEN PREVIA END -->

    <!-- VIDEOS -->
    <video 
      id="myVideo"
      v-if="video.length"
      muted
      :src="video" 
      class="mainVideo"></video>
    <!-- VIDEOS END -->



    <!-- <div class="wrapVideo" v-if="!loading">
      <CustomVideo width='100%' height="100%" class="mainVideo"
        :pathVideo="videoInit"
        :pathImageInit="videoInit.pathImageInit"
        :playVideo="playVideo"
        @finishVideo="finishVideo()" />
    </div> -->


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
// import CustomVideo from '~/components/Multimedia/CustomVideo'
// import Spin from '~/components/Multimedia/Spin'
export  default {
  name: 'Masterplan',
  layout: 'main-layout',
  components: {
    // CustomVideo,
    // Spin
  },
  data() {
    return {
      loading: true,
      indice: 0,
      video: '',
      interval: null,
      videoLoaded: false,
      showInitialImage: false,

    
      playSpin: false,
      playVideo: true
    }
  },
  watch: {
    video(value) {
      if (value.length) {
        setTimeout(() => {
          let video = document.querySelector("video");
          video.addEventListener("loadedmetadata", () => {
            video.play()
            this.interval = setInterval(() => {
              if (video.currentTime > 0.2) {
                this.videoLoaded = true
              }
              let timeVideo = video.duration - video.currentTime;
              if (timeVideo <= 0.2) {
                this.finishVideo()
                clearInterval(this.interval);
              }
            }, this.timeInterval);
          });
        }) 
      }
    }
  },
  computed: {
    ...mapGetters({
      initialStep: 'Proyect/initialStep',
      guide: 'Proyect/guide'
      // videoHome: 'Videos/videos',
      // spinFiles: 'Masterplan/spinFiles'
    })
  },
  created () {
    this.indice = 0 /// LUEGO REEMPLAZAR POR QUERY
    this.$store.dispatch('Proyect/getSpin')
      .then(() => {
        if (typeof this.initialStep.video != 'undefined') {
          this.video = this.initialStep.blob
          this.loading = false
        }
      })
  },
  mounted() {
    // Si vengo con un video inicial
    var video = document.getElementById('myVideo')
    if (video) {
      video.play()
    }
  },
  methods: {
    finishVideo() {
      this.$bus.$emit('toggleHeader', true)
      this.$bus.$emit('toggleFooter', true)
      this.video = ''
      console.log('terminamos el video')
    }
  }
}
</script>

<style lang="scss" scoped>
.prev-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
  position: absolute; 
  top: 0;
  left: 0;
  transition: opacity 3s;
  z-index: 10;
  &.off {
    opacity: 0;
  }
}
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