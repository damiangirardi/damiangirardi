<template>
  <bigImage :path="require('assets/images/posterVideos/'+pathImage)"></bigImage>
</template>
<script>
import bigImage from '~/components/Multimedia/bigImage'
export default {
  data () {
    return {

    }
  },
  components :{
    bigImage
  },
  props: {
    files:Array,
    pathImage: String,
  }
}
</script>

<style lang="scss">
  .wrapSpin {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .button {
      position: absolute;
      height: 100vh;
      width: 20%;
      cursor: pointer;
    }
  }
</style>