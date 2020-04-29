<template>
  <section class="edificio-bg" :style="{ backgroundImage: 'url(' + require('@/assets/images/edificios/' + backgroundUrl + '.jpg') + ')' }">

    <div id="header" v-if="showHeader" key="header">
      <HeaderComp />
    </div>

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

    <div id="fooder" v-if="showFooter" key="footer">
      <FooterComp 
      :proyectName="proyectName" />
    </div>

  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  
  import RightBar from '~/components/NavigationBar/RightBar'
  import LeftBar from '~/components/NavigationBar/LeftBar'
  import HeaderComp from '~/components/LayoutElements/Header'
  import FooterComp from '~/components/LayoutElements/Footer'

  export  default {
     name: 'Topview',
     layout: 'main-layout',
     components: {
      RightBar,
      LeftBar,
      HeaderComp,
      FooterComp
     },
     data() {
      return {
        backgroundUrl: '1011-B5',
        showHeader: true,
        showFooter: true,
        proyectName: 'THE VILLAGE'
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
    height: 99.9vh;
    width: 100%;
    position: relative;
    transition: background-image .3s ease-in-out .1s;
  }
</style>