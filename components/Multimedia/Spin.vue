<template>
  <div class="wrapComponent">
    <div class="link left" @click="prev">
      <button>
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve">
          <g>
            <path fill="#fff" id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179
          l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261
          C187.881,124.315,187.881,116.495,183.189,111.816z"/>
          </g>
        </svg>
      </button>
    </div>
    <transition-group name="fade" tag="div">
      <div class="item-file" v-for="i in [currentIndex]" :key="i">

        <bigImage
          :path="currentImg.path">
        </bigImage>
      </div>
    </transition-group>
    <div class="link right" @click="next">
      <button>
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve">
          <g>
            <path fill="#fff" id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179
          l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261
          C187.881,124.315,187.881,116.495,183.189,111.816z"/>
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
import bigImage from '~/components/Multimedia/bigImage'
export default {
  data () {
    return {
      timer: null,
      currentIndex: 0
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