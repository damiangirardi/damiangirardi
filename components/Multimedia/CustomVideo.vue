<template>
  <div id="wrapComponent">
    <div class="loading bg-loading" v-if="pathImageInit"
      :style="{'background-image': 'url(' + require('assets/images/'+pathImageInit) + ')'}"
      :class="{'active': !videoLoaded }">
    </div>
    <video 
      key="video"
      autoplay 
      muted 
      :src="pathVideo.path" />
  </div>
</template>
<script>

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
    playVideo: Boolean,
    pathVideo: Object,
  },
  created() {
    this.timeInterval = 200;
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
  mounted() {
    let video = document.querySelector("video");
    video.addEventListener("loadedmetadata", () => {
      this.interval = setInterval(() => {
        if (video.currentTime > 0.2) {
          this.videoLoaded = true
        }
        let timeVideo = video.duration - video.currentTime;
        console.log(timeVideo)
        if (timeVideo <= 0.2) {
          this.$emit('finishVideo')
          console.log('terminamos')
          clearInterval(this.interval);
        }
      }, this.timeInterval);
    });
  },
  methods: {
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