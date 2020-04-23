<template>
  <div class="wrapComponent">
    <button class="link left" @click="prev">
      {{ prevIcon }}
    </button>
    <transition-group name="fade" tag="div">
      <div class="item-file" v-for="i in [currentIndex]" :key="i">
        <bigImage
          :path="currentImg.path">
        </bigImage>
      </div>
    </transition-group>
    <button class="link right" @click="next">
      {{ nextIcon }}
    </button>
  </div>
</template>
<script>
import bigImage from '~/components/Multimedia/bigImage'
export default {
  data () {
    return {
      timer: null,
      currentIndex: 0,
      prevIcon: '<',
      nextIcon: '>'
    }
  },
  components :{
    bigImage
  },
  props: {
    files:Array,
    pathImage: String,
  },
  methods: {
    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },
  computed: {
    currentImg: function() {
      return this.files[Math.abs(this.currentIndex) % this.files.length];
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapComponent {
    display: flex;
    align-items: center;
    .item-file {
      position: absolute;
      left: 0px;
      top: 0px;
    }
    .link {
      margin-left: 30px;
      width: 50px;
      height: 50px;
      background-color: $orange-default;
      outline: none;
      color: white;
      border: none ;
      border-radius: 30px;
      margin-right: 30px;
      position: relative;
      z-index: 1;
      cursor: pointer;
      &.left {
        margin-right: auto;
      }
      &.right {
        margin-left: auto;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 0.9s ease;
    overflow: hidden;
    visibility: visible;
    position: absolute;
    width:100%;
    opacity: 1;
  }
  .fade-enter, .fade-leave-to {
    visibility: hidden;
    width:100%;
    opacity: 0;
  }
</style>