<template>
  <div id="wrapVideo">
    <div class="loading" :class="{'active': !videoLoaded }">
      <img src="~assets/images/logo_green_park.png" width="160px" alt="green park logo" class="logo mb-4">
      <b-spinner variant="success" label="Loading..."></b-spinner>
    </div>
    <video muted :src="pathVideo"></video>
    <div class="wrapImage" :class="{'active': isEnabled }">
      <img :src="require('~/'+pathImage)" width="100%" height="100%" alt />
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      isEnabled: false,
      videoLoaded: false,
      interval: null
    };
  },
  props: {
    pathVideo: String,
    pathImage: String
  },
  mounted() {
    let video = document.querySelector("video");
    video.play()
    video.addEventListener("loadedmetadata", () => {
      this.interval = setInterval(() => {
        if (video.currentTime > 0.2) {
          this.videoLoaded = true
        }
        let timeVideo = video.duration - video.currentTime;
        if (timeVideo <= 0.2) {
          this.isEnabled = true
          clearInterval(this.interval);
        }
      }, 200);
    });
  },
};
</script>
<style lang="scss" scoped>
.loading {
    position: absolute;
    z-index: 3;
    height: 100%;
    width: 100%;
    background-color: white;
    opacity: 0;
    transition: opacity .5s;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  &.active {
    opacity: 1;
  }
}
#wrapVideo {
  position: relative;
  width: 100%;
  height: 100vh;
  video, .loading {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .wrapImage {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      transition: opacity .5s;
    }
    &.active {
      img {
        opacity: 1;
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>