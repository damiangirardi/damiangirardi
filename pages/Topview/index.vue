<template>
  <section class="edificio-bg">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 px-0">
          <LeftBar></LeftBar>
          <RightBar
          :aptos="aptos"
          @bgImagenDepto="changeImage($event)"
          />
            <div class="backImage edificio-bg" :style="{ backgroundImage: 'url(' + require('@/assets/images/edificios/' + backgroundUrl + '.jpg') + ')' }">
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  
  import RightBar from '~/components/NavigationBar/RightBar'
  import LeftBar from '~/components/NavigationBar/LeftBar'

  export  default {
     name: 'Topview',
     layout: 'default-with-header-footer',
     components: {
      RightBar,
      LeftBar
     },
     data() {
      return {
        backgroundUrl: '1011-B5'
      }
     },
     methods: {
       changeImage ($event) {
         this.backgroundUrl = $event;
       }
     },
     computed: {
      ...mapGetters({
        aptos: 'Topview/deptoView',
      })
     },
  }
</script>

<style lang="scss" scoped>
  .container-fluid,
  .row{
    height: 100%;
  }
  .edificio-bg{
    height: 99.9vh;
    width: 100%;
    position: relative;
    transition: background-image .3s ease-in-out .1s;
  }
  .backImage {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 0;
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