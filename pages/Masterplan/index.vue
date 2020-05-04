<template>
  <div id="home" v-if="!loading">

    <!-- CREAR LA CLASE PARA TRANSITION -->
    <transition name="fade">
      <div id="header" v-if="showHeader" key="header">
        <HeaderComp />
      </div>
    </transition>

    <!-- IMAGEN PREVIA -->
    <img :src="require('assets/images/' + initialStep.image)" v-if="showInitialImage" :class="{off: videoLoaded}" class="prev-image">
    <!-- IMAGEN PREVIA END -->

    <!-- IMAGEN FINAL -->
    <img :src="require('assets/images/' + getFinalImage())" :class="{on: showNextImage}" class="next-image">
    <!-- IMAGEN FINAL END -->

    <!-- SPIN -->
    <div class="spin" v-if="showSpin && !birdView" :class="{active: animateSpin}">
      <div>
        <button @click.prevent="goBack()" class="btn btn-back"><img src="~assets/images/icons/prev.svg"></button>
      </div>

      <div>
        <button @click.prevent="goNext()" class="btn btn-next"><img src="~assets/images/icons/prev.svg"></button>
      </div>

      <!-- <button @click.prevent="goTop()" class="btn btn-back" v-if="typeof guide[indice].birdView !== 'undefined'">Ir arriba</button> -->

     <!--  <button @click="goBot()" class="btn btn-back" v-if="birdView">Ir abajo</button> -->
    </div>
    <!-- SPIN END -->

    <!-- VIDEOS -->
    <video 
      id="myVideo"
      v-show="video.length"
      muted
      :src="video" 
      class="mainVideo"></video>
    <!-- VIDEOS END -->

    <!-- CREAR LA CLASE PARA TRANSITION -->
    <transition-group key="initialFooter" name="fade">
      <div id="fooder" v-if="showFooter" key="footer">
        <FooterComp 
        :proyectName="proyectName"
        :showButtons="isBirdView"
        :toggleBirdAction="birdView"
        :buttonFooter="getButtonFooter()"
        @clickButton="runBirdView($event)" />
      </div>
    </transition-group>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderComp from '~/components/LayoutElements/Header'
import FooterComp from '~/components/LayoutElements/Footer'

export  default {
  name: 'Masterplan',
  layout: 'main-layout',
  components: {
    HeaderComp,
    FooterComp
  },
  data() {
    return {
      loading: true,
      indice: 0,
      video: '',
      interval: null,
      videoLoaded: false,
      showInitialImage: false,
      showHeader: false,
      showFooter: false,
      showNextImage: false,
      showSpin: false,
      animateSpin: false,
      videosBlob: [],
      birdView: false,
      proyectName: 'GREEN PARK'
    }
  },

  watch: {
    video(value) {
      if (value) {
        setTimeout(() => {
          let video = document.querySelector("video");
          video.addEventListener("loadedmetadata", () => {
            video.play()
            this.animateSpin = false
            this.showHeader = false
            this.showFooter = false
            this.interval = setInterval(() => {
              if (video.currentTime > 0.2) {
                this.videoLoaded = true
                this.showNextImage = false
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
    }),
    isBirdView(){
      return typeof this.guide[this.indice].birdView !== 'undefined'
    }

  },

  created () {
    this.indice = 0 /// LUEGO REEMPLAZAR POR QUERY
    this.$store.dispatch('Proyect/getSpin')
      .then(() => {
        /// Download videos from spin
        _.forEach(this.guide, guide => {
          if (typeof guide.videoAfter != 'undefined') {
            this.videosBlob.push({
              path: guide.videoAfter.path,
              type: 'after'
            })
          } 
          if (typeof guide.videoBefore != 'undefined') {
            this.videosBlob.push({
              path: guide.videoBefore.path,
              type: 'before'
            })
          } 
          if (typeof guide.birdView != 'undefined') {
            this.videosBlob.push({
              path: guide.birdView.videoAfter.path,
              type: 'after'
            })
            this.videosBlob.push({
              path: guide.birdView.videoBefore.path,
              type: 'before'
            })
          } 
        })
        _.forEach(this.videosBlob, video => {
          this.$store.dispatch('Proyect/getSpinVideos', video.path)
            .then( res => {
              video.blob = res
            })
        })

        /// Start APP
        if (typeof this.initialStep.video != 'undefined') {
          this.video = this.initialStep.blob
          this.showInitialImage = true
          this.loading = false
        } else {
          this.showNextImage = true
          this.showSpin = true
          this.loading = false
          setTimeout(() => {
            this.animateSpin = true
            this.showHeader = true
            this.showFooter = true
          }, 500)
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
    getFinalImage() {
      if (!this.birdView){
        return this.guide[this.indice].image
      }else {
        return this.guide[this.indice].birdView.image    
      }
    },
    getButtonFooter () {
      return [{
        status: this.birdView,
        action: this.birdView ? 'before' : 'after',
        text: this.birdView ? this.proyectName + ' Abajo' : this.proyectName + ' Arriba'
      }]
    },
    goNext() {
      this.searchVideo('after')
      setTimeout(() => {
        if( this.indice < (this.guide.length - 1)) {
          this.indice ++
        } else {
          this.indice = 0
        }
      }, 800)
    },
    goBack() {
      this.searchVideo('before')
      setTimeout(() => {
        if (this.indice > 0) {
          this.indice --
        } else {
          this.indice = this.guide.length - 1
        }
      }, 800)
    },
    runBirdView (objBirdView) {
      this.searchVideo(objBirdView.action, true)
      setTimeout(() => {
        this.birdView = objBirdView.action === 'after'
      }, 800)
    },
    searchVideo(type, birdView = false) {
      let route = type === 'after' ? 'videoAfter' : 'videoBefore'
      let path
      if (birdView) {
        path = this.guide[Number(this.indice)].birdView[route].path
      } else {
        path = this.guide[Number(this.indice)][route].path
      }
      let res = _.find(this.videosBlob, video => {
        return video.path == path
      })
      this.video = res.blob
    },
    finishVideo() {
      this.showSpin = true
      this.showNextImage = true
      setTimeout(() => {
        this.video = ''
        this.showInitialImage = false
        this.animateSpin = true
        this.showHeader = true
        this.showFooter = true
      }, 300)
    }
  }
}
</script>

<style lang="scss" scoped>
.prev-image,
.next-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute; 
  top: 0;
  left: 0;
  transition: opacity .2s;
  z-index: 10;
  &.off {
    opacity: 0;
  }
  &.on {
    opacity: 1;
  }
}
.prev-image {
}
.next-image {
  opacity: 0;
}

.mainVideo {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.spin {
  width: 100%;
  height: 40px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  .btn {
    position: absolute;
    top: 0;
    background: $orange-default;
    transition: transform .3s;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 0;
    img{
      width: 13px;
    }
    &.btn-back {
      left: 20px;
      transform: translateX(-200px) rotate(180deg);
    }
    &.btn-next {
      right: 20px;
      transform: translateX(200px);
    }
  }
  &.active {
    .btn {
      &.btn-next{
        transform: translateX(0);
      }
      &.btn-back {
        transform: translateX(0) rotate(180deg);
      }
    }
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

.fade-enter-active,
.fade-leave-active {
  transition: all .3s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>