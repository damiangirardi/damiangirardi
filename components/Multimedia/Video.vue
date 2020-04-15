<template>
  <div class="container-fluid px-0">
    <transition name="fade">
        <video
          v-if="isEnabled"
          muted
          autoplay
          @ended="dispatchTransition('evet')" 
          width="100%" height="100%">
        </video>
    </transition>
    <transition name="fade">
      <div class="wrapImage" v-if="!isEnabled">
        <img :src="require('~/'+pathImage)" width="100%" height="100%" alt="">
      </div>
    </transition>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      isEnabled: true
    }
  },
  props: {
    pathVideo: String,
    pathImage: String
  },
  created () {
    axios({
      url: `/_nuxt/${this.pathVideo}`,
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      if (response.status === 200) {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        let video = document.querySelector('video');
        video.src = url
      }
    })
  },
  methods: {
    dispatchTransition (v) {
      this.isEnabled = false
    }
  }
};
</script>
<style lang="scss">
.wrapImage {
  position: absolute;
  top: 0px;
  z-index: 1;
  width: 100%;
  height: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>