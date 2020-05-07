<template>
  <div id="slider">
    <div class="spin">
      <button @click.prevent="prev()" class="btn btn-back"><img src="~assets/images/icons/prev.svg"></button>
      
        <transition-group name="slide-left-short" mode="in-out" key="carousel">
          <img :src="require(`@/assets/images/opciones/${images}`)" alt="" class="img-slide" :key="`carousel-`+imgIndex">
        </transition-group>

      <button @click.prevent="next()" class="btn btn-next"><img src="~assets/images/icons/prev.svg"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderImages',
  props: {
    sliderImg: {
      type: Array,
      default: []
    },
    sliderName: {
      type: String,
      default: 'galeria'
    }
  },
  data () {
    return {
      timer: null,
      imgIndex: 0
    }
  },
  computed: {
    images(){
      return this.sliderImg[Math.abs(this.imgIndex) % this.sliderImg.length];
    }
  },
  methods: {
    next() {
      this.imgIndex += 1;
    },
    prev() {
      this.imgIndex -= 1;
    }
  }

}
</script>

<style lang="scss" scoped>
#slider{
  position: relative;
  width: 100%;
  height: 100vh;
  .spin {
    width: 100%;
    height: 100%;
    z-index: 3;
    .btn {
      position: absolute;
      top: 50%;
      background: $orange-default;
      transition: transform .3s;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      padding: 0;
      z-index: 1;
      img{
        width: 13px;
      }
      &.btn-back {
        left: 8%;
        transform: translateY(-50%) rotate(180deg);
      }
      &.btn-next {
        right: 8%;
        transform: translateY(-50%);
      }
    }
    .img-slide {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}

</style>