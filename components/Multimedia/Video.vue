<template>
  <div id="wrapVideo">
    <div class="loading bg-loading"
      :style="{'background-image': 'url(' + require('assets/images/'+pathImageInit) + ')'}"
      :class="{'active': !videoLoaded }">
    </div>
    <video muted  autoplay :src="pathVideo">
    </video>
  </div>
</template>
<script>
import axios from "axios";
import {ENV, CURRENT_ENV} from '~/store/environment'
export default {
  data() {
    return {
      videoLoaded: false,
      interval: null
    };
  },
  props: {
    pathImageInit: String,
    pathVideo: String,
  },
  mounted() {
    let video = document.querySelector("video");
    video.addEventListener("loadedmetadata", () => {
      this.interval = setInterval(() => {
        if (video.currentTime > 0.2) {
          this.videoLoaded = true
        }
        let timeVideo = video.duration - video.currentTime;
        if (timeVideo <= 0.2) {
          this.$emit('finishVideo')
          clearInterval(this.interval);
        }
      }, 200);
    });
  },
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
#wrapVideo {
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