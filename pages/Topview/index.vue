<template>
  <div>
    <div id="header">
      <HeaderComp />
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 px-0">
          <LeftBar></LeftBar>
          <RightBar
          :aptos="aptos"
          :selected="imgSelected"
          @bgImagenDepto="changeImage($event)"
          />
            <div class="backImage edificio-bg" :style="{ backgroundImage: 'url(' + require('@/assets/images/edificios/' + imgSelected + '.jpg') + ')' }">
            </div>
        </div>
      </div>
    </div>
    <div id="fooder" v-if="showFooter" key="footer">
      <FooterComp 
      :proyectName="proyectName" />
    </div>
  </div>
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
        showHeader: true,
        imgSelected: '',
        showFooter: true,
        proyectName: 'THE VILLAGE'
      }
     },
      computed: {
      ...mapGetters({
        aptos: 'Topview/images',
      })
      },
     created() {
        this.$store.dispatch('Topview/getImages')
        this.imgSelected = this.aptos[0].image
     },
     methods: {
       changeImage ($event) {
         this.imgSelected = $event;
       }
     },
  }
</script>

<style lang="scss" scoped>
  .container-fluid,
  .row{
    height: 100%;
  }
  .edificio-bg {
    height: 99.9vh;
    width: 100%;
    position: relative;
    transition: background-image .3s ease-in-out .1s;
  }
  .backImage {
    position: absolute;
    background-size: cover;
    top: 0px;
    left: 0px;
    z-index: 0;
  }
</style>