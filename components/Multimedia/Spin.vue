<template>
  <div class="wrapComponent" >
    <div class="link left" @click="prev" :class="{'isClicked': transitionActive}">
      <button>
        <img src="~assets/images/icons/prev.svg" alt="">
      </button>
    </div>
    <transition name="fade" tag="div" mode="out-in">
      <!-- <div class="item-file" v-for="i in files" :key="i" > -->
      <div class="item-file" >
        <bigImage
          v-if="files[currentIndex].type === 'image'"
          :path="files[currentIndex].path">
        </bigImage>
        <CustomVideo
          v-if="files[currentIndex].type === 'video'"
          :isReverse="isReverse"
          :pathImageInit="files[currentIndex].pathImageInit"
          @finishVideo="finishVideo()"
          :playVideo="autoPlay"
          :pathVideo="files[currentIndex]">
        </CustomVideo>
      </div>
    </transition>
    <div class="link right" @click="next" :class="{'isClicked': transitionActive}">
      <button>
        <img src="~assets/images/icons/prev.svg" alt="">
      </button>
    </div>
  </div>
</template>
<script>
import bigImage from '~/components/Multimedia/bigImage'
import CustomVideo from '~/components/Multimedia/CustomVideo'
import router from '../../router';
export default {
  data () {
    return {
      timer: null,
      currentIndex: 0,
      isReverse: false,
      autoPlay: false,
      transitionActive: false
    }
  },
  components :{
    bigImage,
    CustomVideo
  },
  props: {
    files:Array
  },
  methods: {
    next: function() {
      if (!this.transitionActive) {
        this.isReverse = false
        if (this.currentIndex === this.files.length -1) {
          this.currentIndex = 0
        } else {
          this.currentIndex += 1;
        }
        this.transitionActive = true
        this.autoPlay = true
      }
    },
    prev: function() {
      if (!this.transitionActive) {
        this.isReverse = true
        if (this.currentIndex === 0) {
          this.currentIndex =  this.files.length -1
        } else {
          this.currentIndex -= 1;
        }
        this.transitionActive = true
        this.autoPlay = true
      }
    },
    finishVideo (){
      this.transitionActive = false
      this.autoPlay = false
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
      width: 15%;
      height: 100%;
      outline: none;
      color: white;
      border: none ;
      position: relative;
      z-index: 1;
      cursor: pointer;
      display: flex;
      align-items: center;
      button{
        border: none;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background-color: $orange-default;
        &:focus{
          outline: none;
        }
        img{
          height: 14px;
        }
      }
      &.left {
        justify-content: flex-start;
        button{
          margin-left: 50px;
          transform: rotate(180deg);
        }
      }
      &.right {
        margin-left: auto;
        justify-content: flex-end;
        button{
          margin-right: 50px;
        }
      }
      &.isClicked {
        opacity: 0.6;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .3s ease;
    overflow: hidden;
    visibility: visible;
    position: absolute;
    width:100%;
    opacity: 1;
  }
  .fade-enter, 
  .fade-leave-to {
    visibility: hidden;
    width:100%;
    opacity: 0;
  }
  .fade-leave-to{
    transition-delay: .3s;
  }
</style>