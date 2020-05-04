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
          :aptos="floor"
          :selected="florSelected.image"
          @bgImagenDepto="changeImage($event)"
          />
            <div class="backImage edificio-bg" :style="{ backgroundImage: 'url(' + require('@/assets/images/edificios/' + florSelected.image + '.jpg') + ')' }">
            </div>
        </div>
      </div>
    </div>
    <div id="fooder" v-if="showFooter" key="footer">
      <FooterComp
      :showButtons="true"
      :buttonFooter="buttonsList"
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
        florSelected: null,
        buttonsList: null,
        showFooter: true,
        proyectName: 'THE VILLAGE'
      }
     },
      computed: {
      ...mapGetters({
        floor: 'Topview/images',
      })
      },
     created() {
        this.$store.dispatch('Topview/getImages')
        this.florSelected = this.floor[0]
        this.buttonsList = this.floor[0].apto
     },
     methods: {
       changeImage (event) {
         this.florSelected = event;
         this.buttonsList = event.apto
       },
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