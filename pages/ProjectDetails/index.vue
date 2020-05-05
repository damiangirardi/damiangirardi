<template>
  <div>
    <div id="header">
      <HeaderComp />
    </div>
    <LeftBar
      :options="options"
      @bgImagenDepto="changeImage($event)"
    ></LeftBar>
    <div class="backImage edificio-bg" 
      :style="{ backgroundImage: 'url(' + require('@/assets/images/opciones/' + imgSelected ) + ')' }">
    </div>
    <div id="fooder" v-if="showFooter" key="footer">
      <FooterComp
      :option="options"
      :showButtons="true"
      :proyectName="proyectName" />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import LeftBar from '~/components/NavigationBar/LeftBar'
  import HeaderComp from '~/components/LayoutElements/Header'
  import FooterComp from '~/components/LayoutElements/Footer'

  export  default {
     name: 'ProyectDetails',
     layout: 'main-layout',
     components: {
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
        options: 'Options/images',
      })
      },
     created() {
        console.log(this.$route);
        this.$store.dispatch('Options/getImages')
        this.imgSelected = this.options.planta ? this.options.planta : this.options.dimensiones
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