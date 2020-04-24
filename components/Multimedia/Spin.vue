<template>
  <div class="wrapComponent">
    <div class="link left" @click="prev">
      <button>
        <img src="~assets/images/icons/prev.svg" alt="">
      </button>
    </div>
    <transition-group name="fade" tag="div">
      <div class="item-file" v-for="i in [currentIndex]" :key="i">
        <bigImage
          v-if="currentFile.type === 'image'"
          :path="currentFile.path">
        </bigImage>
        <Video
          v-if="currentFile.type === 'video'"
          :pathVideo="currentFile">
        </Video>
      </div>
    </transition-group>
    <div class="link right" @click="next">
      <button>
        <img src="~assets/images/icons/prev.svg" alt="">
      </button>
    </div>
  </div>
</template>
<script>
import bigImage from '~/components/Multimedia/bigImage'
import Video from '~/components/Multimedia/Video'
import router from '../../router';
export default {
  data () {
    return {
      timer: null,
      currentIndex: 0
    }
  },
  components :{
    bigImage,
    Video
  },
  props: {
    files:Array
  },
  methods: {
    next: function() {
      this.currentIndex += 1;
      localStorage.setItem('files', this.files)
      this.$router.push({path: this.$route.path, query: { id: this.currentIndex }})
    },
    prev: function() {
      this.currentIndex -= 1;
      this.$router.push({path: this.$route.path, query: { id: this.currentIndex }})
    },
  },
  computed: {
    currentFile: function() {
      if (this.files) {
        return this.files[Math.abs(this.currentIndex) % this.files.length];
      }
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
        svg{
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