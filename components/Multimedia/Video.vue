<template>
  <div id="wrapVideo">
    <video muted ref="myvideo" autoplay></video>
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
      interval: null
    };
  },
  props: {
    pathVideo: String,
    pathImage: String
  },
  created() {
    axios({
      url: `/_nuxt/${this.pathVideo}`,
      method: "GET",
      responseType: "blob"
    }).then(response => {
      if (response.status === 200) {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        let video = document.querySelector("video");
        video.src = url;
        video.addEventListener("loadedmetadata", () => {
          this.interval = setInterval(() => {
            let timeVideo = video.duration - video.currentTime;
            if (timeVideo <= 0.5) {
              this.isEnabled = true
              clearInterval(this.interval);
            }
          }, 200);
        });
      }
    });
  },
};
</script>
<style lang="scss" scoped>
#wrapVideo {
  position: relative;
  width: 100%;
  height: 100vh;
  video {
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