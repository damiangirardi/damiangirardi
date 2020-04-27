<template>
  <section class="edificio-bg" :style="{ backgroundImage: 'url(' + require('@/assets/images/edificios/' + backgroundUrl + '.jpg') + ')' }">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <LeftBar/>
          <RightBar
          :aptos="aptos"
          @bgImagenDepto="backgroundUrl = $event"
          />
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
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;
    background-image: url(~assets/images/edificios/1011-B5.jpg);
    height: 100vh;
    width: 100%;
    position: relative;
    transition: background-image .3s ease-in-out .1s;
  }
</style>