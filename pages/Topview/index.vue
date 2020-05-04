<template>
  <div>
    <section class="build-container">
      <div class="back-container">
        <img class="edificio-bg" :src="require('@/assets/images/edificios/' + backgroundUrl + '.jpg')" />
        <highlighted-unit src="images/edificios/1011-B4-A-highlighted.png" routeName="masterplan" />
      </div>

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
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import RightBar from '~/components/NavigationBar/RightBar'
  import LeftBar from '~/components/NavigationBar/LeftBar'
  import HeaderComp from '~/components/LayoutElements/Header'
  import FooterComp from '~/components/LayoutElements/Footer'
  import highlightedUnit from '~/components/Multimedia/highlightedUnit';

  export  default {
     name: 'Topview',
     layout: 'main-layout',
     components: {
       RightBar,
       LeftBar,
       HeaderComp,
       FooterComp,
       highlightedUnit
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
  .build-container {
    height: 99.9vh;
  }
  .back-container {
    position: relative;
    & > img {
      position: absolute;
      object-fit: cover;
      top: 0;
      left: 0;
      width: 100%;
      height: 99.9vh;
    }
  }

  .edificido-bg{
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
