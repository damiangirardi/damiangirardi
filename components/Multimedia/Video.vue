<template>
  <div id="wrapComponent">
    <div class="loading bg-loading" v-if="pathImageInit"
      :style="{'background-image': 'url(' + require('assets/images/'+pathImageInit) + ')'}"
      :class="{'active': !videoLoaded }">
    </div>
    <video @ended="finishVideo()" autoplay muted :src="pathVideo.path">
    </video>
  </div>
</template>
<script>
import {ENV, CURRENT_ENV} from '~/store/environment'
export default {
  data() {
    return {
      videoLoaded: false,
      interval: null,
      timeInterval: 0
    };
  },
  props: {
    pathImageInit: String,
    isReverse: {
      type: Boolean,
      default: false
    },
    playVideo: Boolean,
    pathVideo: Object,
  },
  mounted() {
    let video = document.querySelector("video");
    this.timeInterval = this.isReverse === false ? 30 : 200;
    video.addEventListener("loadedmetadata", () => {
      this.interval = setInterval(() => {
        let startVideoTime = video.currentTime;
        if (!this.isReverse) {
          if (startVideoTime > 0.2) {
            this.videoLoaded = true
          }
          let timeVideo = video.duration - startVideoTime;
          if (timeVideo <= 0.2) {
            this.$emit('finishVideo')
            clearInterval(this.interval);
          }
        } else {
          let startSystemTime = new Date().getTime();
          video.playbackRate = 1.0;
          if(video.currentTime == 0){
              clearInterval(this.interval);
              video.pause();
          } else {
              let elapsed = new Date().getTime()-startSystemTime;
              log.textContent='Rewind Elapsed: '+elapsed.toFixed(3);
              video.currentTime = Math.max(startVideoTime - elapsed*rewindSpeed/1000.0, 0);
          }
        }
      }, this.timeInterval);
    });
  },
  methods: {
    finishVideo() {
      this.$emit('finishVideo')
    }
  }
};
</script>
<style lang="scss" scoped>
.bg-loading {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
  position: absolute;
  z-index: 3;
  opacity: 0;
  transition: opacity .5s;
  &.active {
    opacity: 1;
  }
}
#wrapComponent {
  position: relative;
  width: 100%;
  height: 100vh;
  video, .bg-loading{
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
}
</style>