<template>
  <div class="container">
    <transition name="fade">
    <video @ended="dispatchTransition('evet')" width="100%" height="100%">
      <source :src="data.pathVideo" type="video/mp4">
    </video>
    </transition>
    <transition name="fade">
      <div class="wrapImage" v-if="!isEnabled">
        <img :src="data.pathImage" width="100%" height="100%" alt="">
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isEnabled: true,
    }
  },
  props: {
    data: Object
  },
  mounted () {
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